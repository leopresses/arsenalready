-- Remove kits antigos
DELETE FROM kit_items WHERE kit_id IN (
  SELECT id FROM kits WHERE slug IN ('kit-copywriting-essencial','kit-inteligencia-artificial','kit-lancamento-completo','kit-whatsapp-vendas')
);
DELETE FROM kits WHERE slug IN ('kit-copywriting-essencial','kit-inteligencia-artificial','kit-lancamento-completo','kit-whatsapp-vendas');

-- Remove os 30 materiais legados (do primeiro seed)
DELETE FROM kit_items WHERE material_id IN (
  SELECT id FROM materials WHERE slug IN (
    'checklist-auditoria-marketing','checklist-oferta-irresistivel','checklist-lancamento-campanha',
    'checklist-onboarding-cliente','checklist-setup-funil','copy-email-boas-vindas','copy-pagina-vendas',
    'copy-anuncios-meta-ads','copy-stories-vendem','template-cta-landing-pages','template-email-carrinho-abandonado',
    'gerador-headlines-ultra-especificas','prompt-analise-concorrentes','prompt-analise-swot',
    'prompt-criar-lead-magnet','prompt-criar-persona-detalhada','prompt-sequencia-emails',
    'prompt-roteiro-video-vendas','abordagem-direta-leads-frios','follow-up-estrategico-5-etapas',
    'quebra-objecao-esta-caro','script-apresentacao-proposta','script-fechamento-urgencia',
    'script-qualificacao-bant','script-reativacao-clientes','script-vendas-whatsapp',
    'template-bio-instagram','template-briefing-cliente','template-planejamento-conteudo','template-proposta-comercial'
  )
);
DELETE FROM favorites WHERE material_id IN (
  SELECT id FROM materials WHERE slug IN (
    'checklist-auditoria-marketing','checklist-oferta-irresistivel','checklist-lancamento-campanha',
    'checklist-onboarding-cliente','checklist-setup-funil','copy-email-boas-vindas','copy-pagina-vendas',
    'copy-anuncios-meta-ads','copy-stories-vendem','template-cta-landing-pages','template-email-carrinho-abandonado',
    'gerador-headlines-ultra-especificas','prompt-analise-concorrentes','prompt-analise-swot',
    'prompt-criar-lead-magnet','prompt-criar-persona-detalhada','prompt-sequencia-emails',
    'prompt-roteiro-video-vendas','abordagem-direta-leads-frios','follow-up-estrategico-5-etapas',
    'quebra-objecao-esta-caro','script-apresentacao-proposta','script-fechamento-urgencia',
    'script-qualificacao-bant','script-reativacao-clientes','script-vendas-whatsapp',
    'template-bio-instagram','template-briefing-cliente','template-planejamento-conteudo','template-proposta-comercial'
  )
);
DELETE FROM materials WHERE slug IN (
  'checklist-auditoria-marketing','checklist-oferta-irresistivel','checklist-lancamento-campanha',
  'checklist-onboarding-cliente','checklist-setup-funil','copy-email-boas-vindas','copy-pagina-vendas',
  'copy-anuncios-meta-ads','copy-stories-vendem','template-cta-landing-pages','template-email-carrinho-abandonado',
  'gerador-headlines-ultra-especificas','prompt-analise-concorrentes','prompt-analise-swot',
  'prompt-criar-lead-magnet','prompt-criar-persona-detalhada','prompt-sequencia-emails',
  'prompt-roteiro-video-vendas','abordagem-direta-leads-frios','follow-up-estrategico-5-etapas',
  'quebra-objecao-esta-caro','script-apresentacao-proposta','script-fechamento-urgencia',
  'script-qualificacao-bant','script-reativacao-clientes','script-vendas-whatsapp',
  'template-bio-instagram','template-briefing-cliente','template-planejamento-conteudo','template-proposta-comercial'
);

-- Recalcula contagem de materiais por categoria
UPDATE categories c
SET material_count = COALESCE(sub.cnt, 0)
FROM (SELECT category_id, COUNT(*) cnt FROM materials WHERE category_id IS NOT NULL GROUP BY category_id) sub
WHERE c.id = sub.category_id;

UPDATE categories SET material_count = (SELECT COUNT(*) FROM kits) WHERE slug = 'kits';