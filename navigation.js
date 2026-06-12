/* ============================================================================
 * data/projects.js
 * ----------------------------------------------------------------------------
 * Fonte única de dados dos projetos do portfólio. Cada entrada descreve um
 * trabalho em formato de estudo de caso: identificação, resumo, imagem, pilha
 * de tecnologias, link público e os blocos de contexto, desafio, solução e
 * resultado. É consumida pelo carrossel da home, pela listagem de projetos e
 * pela página de detalhe de cada projeto.
 *
 * Campos cujo valor é null representam informação a ser preenchida pelo autor
 * (ex.: métricas de resultado), sinalizando que não há dado fabricado.
 * ============================================================================ */

export const projects = [
  {
    slug: "kiosk-firma",
    title: "Kiosk by F.I.R.M.A.",
    summary:
      "Sistema de atendimento e gestão para restaurantes, com módulos separados de atendimento e administração, desenvolvido para um cenário real de mercado.",
    image: "assets/img/kiosk.jpg",
    alt: "Capa do projeto Kiosk by F.I.R.M.A.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    link: null,
    year: "2025",
    role: "Desenvolvedor full stack",
    context:
      "Projeto criado durante a graduação em Ciência da Computação, a partir de uma necessidade identificada no restaurante Riomar Oriental: modernizar o fluxo de atendimento, otimizar processos internos e melhorar a experiência dos clientes.",
    challenge:
      "Digitalizar o processo de pedidos, dar mais controle operacional e reduzir erros, mantendo a operação simples para a equipe do restaurante.",
    solution:
      "Solução composta por módulos distintos de atendimento e administração, aplicando engenharia de software, arquitetura de sistemas, desenvolvimento full stack, banco de dados, experiência do usuário e análise de requisitos.",
    result: null,
  },
  {
    slug: "barganha",
    title: "BARGANHA",
    summary:
      "Plataforma inteligente que conecta restaurantes a fornecedores, aumentando o poder de negociação e reduzindo custos. 2º lugar no Hack Barão 2026.",
    image: "assets/img/barganha.jpg",
    alt: "Capa do projeto BARGANHA",
    stack: ["React", "JavaScript", "IA aplicada"],
    link: null,
    year: "2026",
    role: "Desenvolvedor — equipe F.I.R.M.A.",
    context:
      "Projeto desenvolvido no Hack Barão 2026 para resolver um problema comum de pequenos e médios restaurantes: o alto custo e a dificuldade na aquisição de insumos.",
    challenge:
      "Sob pressão de tempo do hackathon, criar uma plataforma capaz de aumentar o poder de negociação dos restaurantes e reduzir custos operacionais, validando a ideia e o modelo de negócio.",
    solution:
      "Plataforma com inteligência artificial aplicada à tomada de decisão, consolidação de demandas entre estabelecimentos, otimização da cadeia de suprimentos e uso de dados para apoiar negociações, com forte alinhamento a inovação e sustentabilidade.",
    result:
      "2º lugar geral no Hack Barão 2026, com validação do modelo de negócio e apresentação para a banca avaliadora pela equipe F.I.R.M.A.",
  },
  {
    slug: "combinador-cartas-credito",
    title: "Combinador de Cartas de Crédito",
    summary:
      "Ferramenta que gera combinações de cotas contempladas com cálculo de valores e filtros interativos, integrada ao site da empresa.",
    image: "assets/img/maxcon-combinador.jpg",
    alt: "Tela do combinador de cartas de crédito",
    stack: ["HTML", "CSS", "JavaScript", "Python", "SQL", "WordPress"],
    link: "https://www.maxconconsorcios.com.br/busque-cotas-imoveis/",
    year: "2025",
    role: "Desenvolvedor full stack",
    context:
      "A Maxcon trabalha com cartas de crédito de consórcio contempladas e precisava ajudar o cliente a encontrar combinações de cotas que somassem o valor desejado.",
    challenge:
      "Calcular combinações de cotas e permitir filtrar por valor de forma interativa, tudo integrado ao site WordPress já existente da empresa.",
    solution:
      "Desenvolvi uma ferramenta que gera as combinações possíveis com cálculo de valores e filtros, conectada ao catálogo de cotas disponível.",
    result: null,
  },
  {
    slug: "estoque-financeiro",
    title: "Sistema de Estoque Financeiro",
    summary:
      "Controle de estoque com soma automática de valores e cálculo de custo final, voltado à gestão de cartas contempladas.",
    image: "assets/img/maxcon-estoque.jpg",
    alt: "Painel do sistema de estoque financeiro",
    stack: ["PHP", "SQL", "WordPress"],
    link: "https://www.maxconconsorcios.com.br/cartas-contempladas/",
    year: "2025",
    role: "Desenvolvedor full stack",
    context:
      "A gestão das cartas contempladas exigia controlar valores e custos de forma centralizada, sem planilhas manuais.",
    challenge:
      "Somar valores automaticamente e calcular o custo final do estoque, mantendo os dados consistentes e fáceis de atualizar.",
    solution:
      "Construí um sistema de controle de estoque com cálculo automático de totais e custo final, integrado ao ambiente da empresa.",
    result: null,
  },
  {
    slug: "site-certificacao-digital",
    title: "Site de Certificação Digital",
    summary:
      "Website informativo de quatro páginas com formulário integrado para captação de interessados em certificação digital.",
    image: "assets/img/vll-certificacao.jpg",
    alt: "Página do site de certificação digital",
    stack: ["HTML", "CSS", "JavaScript", "Figma"],
    link: "https://vllnet.com.br/",
    year: "2024",
    role: "Desenvolvedor front-end e design",
    context:
      "O cliente precisava explicar o que é certificação digital e captar contatos de potenciais interessados.",
    challenge:
      "Organizar a informação em poucas páginas claras e incluir um formulário que gerasse leads.",
    solution:
      "Desenhei o layout no Figma e implementei um site informativo de quatro páginas com formulário de contato integrado.",
    result: null,
  },
  {
    slug: "site-floricultura",
    title: "Site Institucional de Floricultura",
    summary:
      "Website de quatro páginas com informações institucionais e catálogo para uma floricultura local.",
    image: "assets/img/floricultura.jpg",
    alt: "Página inicial do site da floricultura",
    stack: ["WordPress"],
    link: "https://bothanicafloricultura.com/",
    year: "2024",
    role: "Desenvolvedor WordPress",
    context:
      "A floricultura precisava de presença online própria para apresentar a marca e os produtos.",
    challenge:
      "Entregar um site institucional simples de manter, com identidade alinhada à marca.",
    solution:
      "Montei um site de quatro páginas em WordPress com as informações institucionais e o catálogo.",
    result: null,
  },
  {
    slug: "app-educacional-infantil",
    title: "Aplicativo Educacional Infantil",
    summary:
      "Protótipo no Figma de um aplicativo voltado a crianças, cobrindo as matérias gerais do ensino fundamental.",
    image: "assets/img/projeto-educacional.jpg",
    alt: "Telas do protótipo do aplicativo educacional",
    stack: ["Figma"],
    link: null,
    year: "2024",
    role: "UX/UI Designer",
    context:
      "Projeto de conceito para tornar o estudo das matérias do ensino fundamental mais atrativo para crianças.",
    challenge:
      "Criar uma interface intuitiva e lúdica, adequada ao público infantil.",
    solution:
      "Desenvolvi no Figma um protótipo navegável cobrindo as matérias gerais, com foco em usabilidade infantil.",
    result: null,
  },
];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug) || null;
}
