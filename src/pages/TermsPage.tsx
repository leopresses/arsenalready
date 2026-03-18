export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Termos de Uso</h1>
        <div className="prose prose-sm text-foreground/80 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">Ao acessar e usar o Arsenal de Materiais Prontos, você concorda com estes termos de uso. Se não concordar, não utilize a plataforma.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground">O Arsenal é uma plataforma de biblioteca digital que oferece materiais prontos como scripts, prompts, copies, templates e checklists para uso profissional em marketing e vendas.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Uso dos Materiais</h2>
            <p className="text-muted-foreground">Os materiais disponibilizados são para uso pessoal e profissional do assinante. É proibida a revenda, distribuição ou compartilhamento dos materiais sem autorização prévia.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Assinaturas e Pagamentos</h2>
            <p className="text-muted-foreground">As assinaturas são cobradas de forma recorrente conforme o plano escolhido. O cancelamento pode ser feito a qualquer momento e terá efeito ao final do período vigente.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">Todos os materiais, conteúdos e a plataforma em si são protegidos por direitos autorais. O uso autorizado é limitado ao escopo descrito nestes termos.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
