export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface Material {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  content: string;
  instructions: string;
  categoryId: string;
  category: string;
  type: 'script' | 'prompt' | 'copy' | 'template' | 'checklist';
  planRequired: 'free' | 'premium';
  tags: string[];
  featured: boolean;
  createdAt: string;
}

export interface Kit {
  id: string;
  title: string;
  slug: string;
  description: string;
  materialIds: string[];
  planRequired: 'free' | 'premium';
  icon: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Scripts', slug: 'scripts', icon: 'MessageSquare', count: 12 },
  { id: '2', name: 'Prompts', slug: 'prompts', icon: 'Sparkles', count: 8 },
  { id: '3', name: 'Copies', slug: 'copies', icon: 'PenTool', count: 10 },
  { id: '4', name: 'Templates', slug: 'templates', icon: 'FileText', count: 6 },
  { id: '5', name: 'Checklists', slug: 'checklists', icon: 'CheckSquare', count: 5 },
  { id: '6', name: 'Kits', slug: 'kits', icon: 'Package', count: 4 },
];

export const materials: Material[] = [
  {
    id: '1',
    title: 'Abordagem Direta para Leads Frios',
    slug: 'abordagem-direta-leads-frios',
    shortDescription: 'Script de WhatsApp para iniciar conversa com leads frios sem parecer spam.',
    fullDescription: 'Um script completo para abordar leads frios pelo WhatsApp de forma profissional e eficaz. Inclui variações para diferentes nichos e dicas de personalização.',
    content: 'Olá [Nome], vi que você atua no mercado de [Setor]. Notei um detalhe no seu [Ponto de Contato] e acredito que tenho algo que pode acelerar seu resultado em [Benefício]. Podemos falar 2 min?\n\n---\n\nVariação 2:\nOi [Nome]! Acompanho seu trabalho em [Área] e percebi uma oportunidade que pode [Resultado Específico]. Preparei algo rápido pra te mostrar. Posso enviar?',
    instructions: '1. Substitua os campos entre colchetes com dados reais do lead.\n2. Pesquise o perfil do lead antes de abordar.\n3. Envie entre 9h-11h ou 14h-16h para maior taxa de resposta.\n4. Se não responder em 24h, envie o follow-up.',
    categoryId: '1',
    category: 'Scripts',
    type: 'script',
    planRequired: 'free',
    tags: ['whatsapp', 'vendas', 'prospecção'],
    featured: true,
    createdAt: '2026-03-15',
  },
  {
    id: '2',
    title: 'Follow-up Estratégico em 5 Etapas',
    slug: 'follow-up-estrategico-5-etapas',
    shortDescription: 'Sequência de follow-up com 5 mensagens progressivas para converter leads.',
    fullDescription: 'Sistema completo de follow-up com 5 mensagens estratégicas, cada uma com um ângulo diferente de persuasão. Testado e validado em mais de 50 nichos.',
    content: 'ETAPA 1 (24h após primeiro contato):\n"[Nome], enviei uma mensagem ontem sobre [Tema]. Sei que a rotina é corrida, mas acredito que vale 2 minutos do seu tempo. Posso te explicar rapidamente?"\n\nETAPA 2 (48h):\n"Oi [Nome]! Sem pressão, mas queria compartilhar um caso rápido: [Cliente Similar] conseguiu [Resultado] em [Tempo]. Achei que podia te interessar."\n\nETAPA 3 (5 dias):\n"[Nome], última tentativa por aqui. Preparei um [Material/Diagnóstico] gratuito sobre [Tema]. Quer que eu envie?"\n\nETAPA 4 (10 dias):\n"Oi [Nome], tudo bem? Percebi que agora pode não ser o melhor momento. Vou deixar meu contato salvo e, quando fizer sentido, é só chamar. Enquanto isso, segue um conteúdo que pode te ajudar: [Link]"\n\nETAPA 5 (30 dias):\n"[Nome]! Voltei com novidades. Lançamos [Novidade] e lembrei de você. Quer dar uma olhada?"',
    instructions: 'Siga a sequência exatamente como está. Respeite os intervalos entre cada etapa. Personalize cada mensagem com dados reais do lead.',
    categoryId: '1',
    category: 'Scripts',
    type: 'script',
    planRequired: 'premium',
    tags: ['follow-up', 'vendas', 'conversão'],
    featured: true,
    createdAt: '2026-03-14',
  },
  {
    id: '3',
    title: 'Gerador de Headlines Ultra-Específicas',
    slug: 'gerador-headlines-ultra-especificas',
    shortDescription: 'Prompt para criar 10 headlines usando a metodologia 4Us.',
    fullDescription: 'Prompt avançado que gera headlines de alto impacto usando a metodologia dos 4Us: Urgência, Utilidade, Ultra-especificidade e Unicidade.',
    content: 'Atue como um copywriter sênior com 15 anos de experiência em marketing direto. Crie 10 headlines para [Produto/Serviço] focando nos 4Us:\n\n- Urgência: Por que agir agora?\n- Utilidade: Qual o benefício prático?\n- Ultra-especificidade: Números e detalhes concretos\n- Unicidade: O que torna isso diferente?\n\nPúblico-alvo: [Descreva seu público]\nPrincipal dor: [Descreva a dor]\nPrincipal transformação: [Descreva o resultado]\n\nRegras:\n- Máximo 12 palavras por headline\n- Use números quando possível\n- Evite clichês como "revolucionário" ou "incrível"\n- Cada headline deve provocar curiosidade',
    instructions: 'Cole este prompt no ChatGPT ou Claude. Preencha os campos entre colchetes. Teste as headlines em anúncios com orçamento baixo e escale as vencedoras.',
    categoryId: '2',
    category: 'Prompts',
    type: 'prompt',
    planRequired: 'free',
    tags: ['copywriting', 'headlines', 'IA'],
    featured: true,
    createdAt: '2026-03-13',
  },
  {
    id: '4',
    title: 'Quebra de Objeção: "Está Caro"',
    slug: 'quebra-objecao-esta-caro',
    shortDescription: 'Script para contornar a objeção de preço com elegância e lógica.',
    fullDescription: 'Roteiro completo com 4 abordagens diferentes para quando o lead diz que está caro. Cada abordagem usa um ângulo psicológico diferente.',
    content: 'ABORDAGEM 1 - Reancoragem:\n"Entendo sua preocupação com o valor. Me deixa te fazer uma pergunta: quanto você está perdendo POR MÊS sem resolver [Problema]? Se for mais que [Valor do Produto], o investimento se paga sozinho."\n\nABORDAGEM 2 - Comparação:\n"Pra colocar em perspectiva: [Valor] dividido por 30 dias dá menos que [Valor/30]. É menos do que um cafezinho por dia, mas com potencial de [Resultado]."\n\nABORDAGEM 3 - Risco Reverso:\n"E se eu te dissesse que você pode testar por [Período] e, se não funcionar, devolvemos 100% do valor? O risco é todo nosso."\n\nABORDAGEM 4 - Social Proof:\n"[Nome de Cliente] pensou a mesma coisa. Depois de [Período], o resultado dele foi [Resultado Específico]. Posso te mostrar o depoimento?"',
    instructions: 'Escolha a abordagem que mais combina com o perfil do lead. Use social proof sempre que tiver cases reais.',
    categoryId: '1',
    category: 'Scripts',
    type: 'script',
    planRequired: 'premium',
    tags: ['objeções', 'vendas', 'negociação'],
    featured: false,
    createdAt: '2026-03-12',
  },
  {
    id: '5',
    title: 'Template de CTA para Landing Pages',
    slug: 'template-cta-landing-pages',
    shortDescription: '15 CTAs testados e validados para diferentes tipos de landing page.',
    fullDescription: 'Coleção de 15 CTAs de alta conversão, organizados por tipo de página e objetivo. Inclui variações para testes A/B.',
    content: 'PARA PÁGINAS DE VENDAS:\n1. "Quero Começar Agora →"\n2. "Garantir Minha Vaga"\n3. "Sim, Quero [Resultado Principal]"\n4. "Acessar por [Preço] (antes que suba)"\n\nPARA PÁGINAS DE CAPTURA:\n5. "Baixar Gratuitamente"\n6. "Receber Meu [Material]"\n7. "Enviar para Meu Email"\n\nPARA PÁGINAS DE TRIAL:\n8. "Testar Grátis por [X] Dias"\n9. "Começar Sem Cartão de Crédito"\n\nPARA UPSELL:\n10. "Adicionar ao Meu Pedido"\n11. "Quero essa Oferta Exclusiva"\n\nPARA WEBINAR/EVENTO:\n12. "Reservar Meu Lugar"\n13. "Assistir Agora (Vagas Limitadas)"\n\nPARA CONSULTORIA:\n14. "Agendar Conversa Gratuita"\n15. "Falar com Especialista"',
    instructions: 'Escolha 2-3 CTAs para testar. Use cores contrastantes no botão. O CTA deve ser visível sem scroll.',
    categoryId: '3',
    category: 'Copies',
    type: 'copy',
    planRequired: 'free',
    tags: ['CTA', 'conversão', 'landing-page'],
    featured: false,
    createdAt: '2026-03-11',
  },
  {
    id: '6',
    title: 'Checklist de Lançamento de Campanha',
    slug: 'checklist-lancamento-campanha',
    shortDescription: 'Lista completa com 25 itens para não esquecer nada antes de lançar.',
    fullDescription: 'Checklist detalhado com 25 itens essenciais divididos em 5 categorias: Estratégia, Criativo, Técnico, Pós-lançamento e Métricas.',
    content: '✅ ESTRATÉGIA\n□ Objetivo da campanha definido\n□ Público-alvo segmentado\n□ Orçamento diário calculado\n□ KPIs definidos\n□ Período de veiculação determinado\n\n✅ CRIATIVO\n□ Headlines testadas (mín. 3 variações)\n□ Imagens/vídeos aprovados\n□ Copy revisada por segunda pessoa\n□ CTA claro e visível\n□ Proposta de valor em destaque\n\n✅ TÉCNICO\n□ Pixel instalado e testando\n□ UTMs configuradas\n□ Landing page responsiva\n□ Formulário testado\n□ Página de obrigado configurada\n\n✅ PÓS-LANÇAMENTO\n□ Automação de email ativa\n□ Equipe de vendas avisada\n□ Script de atendimento pronto\n□ FAQ preparado\n□ Plano de contingência definido\n\n✅ MÉTRICAS\n□ Dashboard configurado\n□ Alertas de orçamento ativos\n□ Check diário agendado\n□ Relatório semanal programado\n□ Critérios de escala definidos',
    instructions: 'Imprima ou copie para um doc. Marque cada item antes de apertar "publicar" na campanha.',
    categoryId: '5',
    category: 'Checklists',
    type: 'checklist',
    planRequired: 'premium',
    tags: ['campanha', 'lançamento', 'organização'],
    featured: true,
    createdAt: '2026-03-10',
  },
  {
    id: '7',
    title: 'Prompt para Análise de Concorrentes',
    slug: 'prompt-analise-concorrentes',
    shortDescription: 'Prompt estruturado para mapear concorrentes com IA em minutos.',
    fullDescription: 'Use este prompt para fazer uma análise competitiva completa usando ChatGPT. Gera insights acionáveis sobre posicionamento, preços e diferenciais.',
    content: 'Atue como um analista de mercado sênior. Faça uma análise competitiva detalhada para o nicho de [SEU NICHO].\n\nAnalise os seguintes aspectos dos 5 principais concorrentes:\n\n1. POSICIONAMENTO: Como se apresentam? Qual a promessa principal?\n2. PREÇO: Faixa de preço e modelo de cobrança\n3. PÚBLICO: Para quem vendem? Qual o nível do público?\n4. CANAIS: Onde estão presentes? (Instagram, YouTube, etc.)\n5. PONTOS FORTES: O que fazem bem?\n6. PONTOS FRACOS: Onde deixam a desejar?\n7. OPORTUNIDADES: Lacunas que eu poderia preencher\n\nApresente em formato de tabela comparativa.\nAo final, sugira 3 diferenciais que eu poderia adotar.',
    instructions: 'Use no ChatGPT-4 ou Claude para melhores resultados. Complemente com pesquisa manual nos perfis dos concorrentes.',
    categoryId: '2',
    category: 'Prompts',
    type: 'prompt',
    planRequired: 'free',
    tags: ['análise', 'concorrência', 'estratégia'],
    featured: false,
    createdAt: '2026-03-09',
  },
  {
    id: '8',
    title: 'Template de Bio para Instagram',
    slug: 'template-bio-instagram',
    shortDescription: '10 templates de bio para Instagram otimizados para conversão.',
    fullDescription: 'Modelos de bio para Instagram com foco em clareza, autoridade e conversão. Testados em perfis com 1k a 500k seguidores.',
    content: 'MODELO 1 - Direto:\n🎯 Ajudo [Público] a [Resultado]\n📈 +[Número] [Prova Social]\n👇 [CTA + Link]\n\nMODELO 2 - Autoridade:\n[Cargo/Título] | [Empresa]\n🏆 [Conquista Relevante]\n💡 [Tema Principal] · [Subtema]\n🔗 [CTA]\n\nMODELO 3 - Storytelling:\nDe [Situação Antes] → [Situação Depois]\nAgora ensino [Público] a [Transformação]\n📩 [CTA]\n\nMODELO 4 - Lista:\n✦ [Benefício 1]\n✦ [Benefício 2]\n✦ [Benefício 3]\n👇 [CTA]\n\nMODELO 5 - Minimalista:\n[O que faz] para [Quem].\n[Link]',
    instructions: 'Escolha o modelo que combina com seu posicionamento. Teste diferentes emojis. Troque o CTA a cada 30 dias.',
    categoryId: '4',
    category: 'Templates',
    type: 'template',
    planRequired: 'free',
    tags: ['instagram', 'bio', 'social-media'],
    featured: false,
    createdAt: '2026-03-08',
  },
  {
    id: '9',
    title: 'Script de Fechamento por Urgência',
    slug: 'script-fechamento-urgencia',
    shortDescription: 'Técnica de fechamento usando gatilho de urgência com ética.',
    fullDescription: 'Script de fechamento que usa urgência real (não fabricada) para acelerar a decisão do lead. Inclui 3 variações para diferentes contextos.',
    content: 'VARIAÇÃO 1 - Urgência de Preço:\n"[Nome], esse valor é válido até [Data Real]. Depois disso, o investimento sobe para [Novo Valor]. Não quero que você perca essa condição. Faz sentido a gente fechar agora?"\n\nVARIAÇÃO 2 - Urgência de Vaga:\n"Trabalhamos com no máximo [X] clientes simultâneos para garantir qualidade. Hoje restam [Y] vagas. Posso reservar a sua?"\n\nVARIAÇÃO 3 - Urgência de Resultado:\n"Cada dia sem [Solução] é um dia perdendo [Resultado]. Se começarmos hoje, em [Prazo] você já estará [Benefício]. Quando quer começar?"',
    instructions: 'IMPORTANTE: Use apenas urgência REAL. Nunca invente escassez. A confiança é seu maior ativo.',
    categoryId: '1',
    category: 'Scripts',
    type: 'script',
    planRequired: 'premium',
    tags: ['fechamento', 'urgência', 'vendas'],
    featured: false,
    createdAt: '2026-03-07',
  },
  {
    id: '10',
    title: 'Checklist de Criação de Oferta Irresistível',
    slug: 'checklist-oferta-irresistivel',
    shortDescription: 'Passo a passo para montar uma oferta que o lead não consegue recusar.',
    fullDescription: 'Framework completo para construir ofertas de alto valor percebido. Baseado na metodologia de Alex Hormozi adaptada para o mercado brasileiro.',
    content: '✅ FUNDAÇÃO DA OFERTA\n□ Resultado principal claro e específico\n□ Prazo de entrega do resultado definido\n□ Esforço necessário do cliente mapeado\n□ Risco percebido identificado\n\n✅ STACK DE VALOR\n□ Produto/serviço core definido\n□ Mín. 3 bônus complementares\n□ Valor individual de cada item calculado\n□ Valor total do stack > 10x o preço\n\n✅ GARANTIA\n□ Tipo de garantia escolhido\n□ Prazo da garantia definido\n□ Condições claras e justas\n□ Garantia reduz risco percebido?\n\n✅ ESCASSEZ E URGÊNCIA\n□ Elemento de escassez REAL\n□ Deadline definido\n□ Consequência de não agir clara\n\n✅ APRESENTAÇÃO\n□ Nome da oferta memorável\n□ Headline de impacto\n□ Página de vendas revisada\n□ Preço ancorado corretamente',
    instructions: 'Preencha cada item na ordem. Não pule etapas. Uma oferta forte resolve 80% dos problemas de vendas.',
    categoryId: '5',
    category: 'Checklists',
    type: 'checklist',
    planRequired: 'premium',
    tags: ['oferta', 'vendas', 'estratégia'],
    featured: false,
    createdAt: '2026-03-06',
  },
  {
    id: '11',
    title: 'Copy de Email de Boas-Vindas',
    slug: 'copy-email-boas-vindas',
    shortDescription: 'Template de email de boas-vindas que engaja e cria expectativa.',
    fullDescription: 'Email de onboarding otimizado para engajamento. Inclui estrutura, copy e dicas de personalização.',
    content: 'ASSUNTO: Bem-vindo(a)! Aqui está seu acesso 🎉\n\nOlá [Nome],\n\nQue bom ter você aqui! 🙌\n\nVocê acabou de dar o primeiro passo para [Resultado Principal]. E eu vou garantir que você aproveite ao máximo.\n\nAqui está o que preparamos para você:\n\n🔹 [Benefício 1] - [Breve descrição]\n🔹 [Benefício 2] - [Breve descrição]\n🔹 [Benefício 3] - [Breve descrição]\n\n👉 Seu próximo passo: [Ação específica]\n[BOTÃO: Acessar Agora]\n\nSe tiver qualquer dúvida, é só responder este email.\n\nForte abraço,\n[Seu Nome]\n[Empresa]',
    instructions: 'Envie imediatamente após o cadastro. Taxa de abertura esperada: 60-80%. Personalize ao máximo.',
    categoryId: '3',
    category: 'Copies',
    type: 'copy',
    planRequired: 'free',
    tags: ['email', 'onboarding', 'boas-vindas'],
    featured: false,
    createdAt: '2026-03-05',
  },
  {
    id: '12',
    title: 'Prompt para Criar Persona Detalhada',
    slug: 'prompt-criar-persona-detalhada',
    shortDescription: 'Gere uma persona completa do seu cliente ideal com IA.',
    fullDescription: 'Prompt avançado que cria uma persona detalhada incluindo dados demográficos, psicográficos, dores, desejos e comportamento de compra.',
    content: 'Atue como um estrategista de marketing com especialização em comportamento do consumidor.\n\nCrie uma persona ultra-detalhada para o seguinte negócio:\n\nNicho: [Seu Nicho]\nProduto/Serviço: [O que vende]\nFaixa de Preço: [Quanto custa]\nCanal Principal: [Onde vende]\n\nInclua:\n1. DADOS BÁSICOS: Nome fictício, idade, profissão, renda, localização\n2. ROTINA: Como é o dia típico dessa pessoa\n3. DORES: Top 5 problemas que enfrenta\n4. DESEJOS: Top 5 resultados que busca\n5. OBJEÇÕES: Top 5 razões para NÃO comprar\n6. GATILHOS: O que faria ela comprar HOJE\n7. LINGUAGEM: 10 frases que essa pessoa diria\n8. MÍDIA: Onde consome conteúdo e quem segue\n9. JORNADA: Como ela descobre e decide comprar\n\nApresente de forma organizada com emojis para facilitar leitura.',
    instructions: 'Use no GPT-4 ou Claude. Valide as informações com pesquisa real. Atualize a persona a cada 3 meses.',
    categoryId: '2',
    category: 'Prompts',
    type: 'prompt',
    planRequired: 'premium',
    tags: ['persona', 'estratégia', 'público-alvo'],
    featured: false,
    createdAt: '2026-03-04',
  },
];

export const kits: Kit[] = [
  {
    id: '1',
    title: 'Kit WhatsApp Vendas',
    slug: 'kit-whatsapp-vendas',
    description: 'Todos os scripts que você precisa para vender pelo WhatsApp: abordagem, follow-up, objeções e fechamento.',
    materialIds: ['1', '2', '4', '9'],
    planRequired: 'premium',
    icon: 'MessageCircle',
  },
  {
    id: '2',
    title: 'Kit Copywriting Essencial',
    slug: 'kit-copywriting-essencial',
    description: 'Headlines, CTAs, emails e templates para nunca mais olhar para uma folha em branco.',
    materialIds: ['3', '5', '8', '11'],
    planRequired: 'free',
    icon: 'PenTool',
  },
  {
    id: '3',
    title: 'Kit Lançamento Completo',
    slug: 'kit-lancamento-completo',
    description: 'Checklists e templates para planejar e executar um lançamento do início ao fim.',
    materialIds: ['6', '10'],
    planRequired: 'premium',
    icon: 'Rocket',
  },
  {
    id: '4',
    title: 'Kit Inteligência Artificial',
    slug: 'kit-inteligencia-artificial',
    description: 'Os melhores prompts para usar IA no seu marketing e vendas.',
    materialIds: ['3', '7', '12'],
    planRequired: 'premium',
    icon: 'Sparkles',
  },
];

export const pricingPlans = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 0,
    period: '',
    description: 'Acesso limitado para começar',
    features: [
      'Acesso a materiais gratuitos',
      'Visualização de 5 materiais/mês',
      'Categorias básicas',
    ],
    limitations: [
      'Sem acesso a materiais premium',
      'Sem kits completos',
      'Sem novos materiais semanais',
    ],
    cta: 'Começar Grátis',
    highlighted: false,
  },
  {
    id: 'monthly',
    name: 'Premium Mensal',
    price: 24.90,
    period: '/mês',
    description: 'Acesso total à biblioteca',
    features: [
      'Acesso ilimitado a todos os materiais',
      'Novos materiais toda semana',
      'Kits completos',
      'Materiais exclusivos',
      'Suporte prioritário',
    ],
    limitations: [],
    cta: 'Assinar Agora',
    highlighted: false,
  },
  {
    id: 'yearly',
    name: 'Premium Anual',
    price: 197,
    period: '/ano',
    description: 'Melhor custo-benefício',
    features: [
      'Tudo do plano mensal',
      'Economia de R$101,80 por ano',
      'Acesso antecipado a novidades',
      'Materiais bônus exclusivos',
      'Suporte VIP',
    ],
    limitations: [],
    cta: 'Garantir Melhor Preço',
    highlighted: true,
    badge: 'Mais Popular',
  },
];
