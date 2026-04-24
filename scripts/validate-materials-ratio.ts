/**
 * Rotina de validação da regra 25% free / 75% premium na tabela `materials`.
 *
 * Uso:
 *   bun run scripts/validate-materials-ratio.ts            # apenas valida + relatório
 *   bun run scripts/validate-materials-ratio.ts --fix      # rebalanceia para atingir 25/75
 *
 * Tolerância: ±2 pontos percentuais.
 */
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const TARGET_FREE_RATIO = 0.25;
const TOLERANCE = 0.02;

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

type Row = {
  id: string;
  category: string;
  type: string;
  plan_required: "free" | "premium";
  featured: boolean | null;
  created_at: string;
};

const pct = (n: number, d: number) => (d ? (n / d) * 100 : 0).toFixed(1) + "%";
const pad = (s: string, n: number) => s.padEnd(n).slice(0, n);

async function fetchAll(): Promise<Row[]> {
  const all: Row[] = [];
  let from = 0;
  const size = 1000;
  while (true) {
    const { data, error } = await supabase
      .from("materials")
      .select("id, category, type, plan_required, featured, created_at")
      .range(from, from + size - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    all.push(...(data as Row[]));
    if (data.length < size) break;
    from += size;
  }
  return all;
}

function summarize(rows: Row[], key: (r: Row) => string) {
  const map = new Map<string, { free: number; premium: number; total: number }>();
  for (const r of rows) {
    const k = key(r);
    const cur = map.get(k) ?? { free: 0, premium: 0, total: 0 };
    cur.total++;
    cur[r.plan_required]++;
    map.set(k, cur);
  }
  return [...map.entries()].sort((a, b) => b[1].total - a[1].total);
}

function printTable(title: string, rows: [string, { free: number; premium: number; total: number }][]) {
  console.log(`\n📊 ${title}`);
  console.log("─".repeat(78));
  console.log(`${pad("Grupo", 28)} ${pad("Total", 7)} ${pad("Free", 12)} ${pad("Premium", 14)} Status`);
  console.log("─".repeat(78));
  for (const [k, v] of rows) {
    const freeRatio = v.free / v.total;
    const drift = Math.abs(freeRatio - TARGET_FREE_RATIO);
    const status = drift <= TOLERANCE ? "✅" : freeRatio > TARGET_FREE_RATIO ? "⚠️ free↑" : "⚠️ free↓";
    console.log(
      `${pad(k, 28)} ${pad(String(v.total), 7)} ${pad(`${v.free} (${pct(v.free, v.total)})`, 12)} ${pad(
        `${v.premium} (${pct(v.premium, v.total)})`,
        14,
      )} ${status}`,
    );
  }
}

async function rebalance(rows: Row[]) {
  const targetFree = Math.round(rows.length * TARGET_FREE_RATIO);
  const currentFree = rows.filter((r) => r.plan_required === "free").length;
  const diff = currentFree - targetFree;

  if (diff === 0) {
    console.log("\n✅ Já está exatamente em 25/75. Nada a ajustar.");
    return;
  }

  if (diff > 0) {
    // Excesso de free → promover os mais recentes e não-featured a premium
    const candidates = rows
      .filter((r) => r.plan_required === "free" && !r.featured)
      .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at))
      .slice(0, diff);
    console.log(`\n🔧 Promovendo ${candidates.length} materiais free → premium...`);
    const ids = candidates.map((c) => c.id);
    const { error } = await supabase.from("materials").update({ plan_required: "premium" }).in("id", ids);
    if (error) throw error;
  } else {
    // Falta free → liberar premium mais antigos
    const need = -diff;
    const candidates = rows
      .filter((r) => r.plan_required === "premium" && !r.featured)
      .sort((a, b) => +new Date(a.created_at) - +new Date(b.created_at))
      .slice(0, need);
    console.log(`\n🔧 Liberando ${candidates.length} materiais premium → free...`);
    const ids = candidates.map((c) => c.id);
    const { error } = await supabase.from("materials").update({ plan_required: "free" }).in("id", ids);
    if (error) throw error;
  }
  console.log("✅ Rebalanceamento aplicado.");
}

async function main() {
  const fix = process.argv.includes("--fix");
  const rows = await fetchAll();
  const total = rows.length;
  const free = rows.filter((r) => r.plan_required === "free").length;
  const premium = total - free;
  const freeRatio = free / total;

  console.log("\n╔══════════════════════════════════════════════════════════════════════════╗");
  console.log("║   Validação da regra 25% free / 75% premium — Arsenal de Materiais       ║");
  console.log("╚══════════════════════════════════════════════════════════════════════════╝");
  console.log(`\nTotal de materiais: ${total}`);
  console.log(`Free:    ${free} (${pct(free, total)})  — alvo 25%`);
  console.log(`Premium: ${premium} (${pct(premium, total)})  — alvo 75%`);
  console.log(`Desvio absoluto: ${(Math.abs(freeRatio - TARGET_FREE_RATIO) * 100).toFixed(1)} p.p.  (tolerância ±${TOLERANCE * 100}p.p.)`);

  const ok = Math.abs(freeRatio - TARGET_FREE_RATIO) <= TOLERANCE;
  console.log(ok ? "\n✅ REGRA OK" : "\n⚠️  FORA DA REGRA");

  printTable("Distribuição por CATEGORIA", summarize(rows, (r) => r.category));
  printTable("Distribuição por TIPO", summarize(rows, (r) => r.type));

  if (fix && !ok) await rebalance(rows);
  else if (!ok) console.log("\nℹ️  Rode com --fix para ajustar automaticamente.");
}

main().catch((e) => {
  console.error("❌ Erro:", e);
  process.exit(1);
});
