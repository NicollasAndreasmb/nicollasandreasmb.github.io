# NicollasDev — Portfólio

Portfólio pessoal de **Nicollas Andreas**, desenvolvedor full stack e suporte
técnico. Site estático, sem etapa de build, publicado via **GitHub Pages** no
domínio [nicollasdev.com.br](https://nicollasdev.com.br).

## Tecnologias

- **HTML5** semântico, **CSS3** com design tokens (tema claro/escuro)
- **JavaScript (ES Modules)** — sem dependências nem bundler
- **Canvas API** (fundo animado), **FormSubmit** (contato)
- **GitHub Actions** (validação + deploy), **Plausible** (analytics)

## Estrutura

```
.
├── index.html              Página inicial
├── projetos.html           Listagem de projetos
├── projeto.html            Estudo de caso individual (?p=slug)
├── 404.html                Página de erro
├── CNAME / .nojekyll
├── robots.txt / sitemap.xml
├── .htmlhintrc             Regras de validação de HTML
├── .github/workflows/ci.yml  Pipeline de CI/CD
├── assets/
│   ├── img/                Imagens otimizadas
│   ├── og-image.png        Imagem de compartilhamento (1200×630)
│   └── curriculo-nicollas-andreas.pdf
├── css/styles.css
└── js/
    ├── main.js / projetos.js / projeto.js / error.js
    ├── data/  projects.js · testimonials.js
    └── modules/  theme · preloader · navigation · neural-background ·
        contact-form · scroll-reveal · whatsapp-tooltip · projects-carousel ·
        projects-grid · project-detail · testimonials · copy-email · footer-year
```

## Convenções de código

- Cabeçalho de comentário em todo arquivo; **sem comentários no meio das funções**.
- Um módulo, uma responsabilidade (cada um expõe uma função `init…`).
- Conteúdo separado da lógica: projetos e depoimentos vivem em `js/data/`.

## Rodar localmente

```bash
python3 -m http.server 8000   # ES Modules exigem servidor HTTP
```

## Publicar no GitHub Pages

1. Push para a branch `main`.
2. **Settings → Pages.** Para usar o pipeline com validação, escolha origem
   **GitHub Actions**. Para deploy simples, escolha **Deploy from a branch** (`main`/`root`).
3. `CNAME` aplica o domínio; `.nojekyll` serve as pastas como estão.

## Como manter o conteúdo

| O que mudar | Onde |
| --- | --- |
| Projetos / estudos de caso | `js/data/projects.js` |
| Depoimentos de clientes | `js/data/testimonials.js` (mude `approved` para `true`) |
| Textos das seções | `index.html` |
| Cores e fontes | `:root` em `css/styles.css` |
| Currículo | regenerar `assets/curriculo-nicollas-andreas.pdf` |

### Publicar um depoimento real
Em `js/data/testimonials.js`, preencha `quote`, `author` e `role` com o texto
fornecido pelo cliente e troque `approved: false` por `true`. Enquanto não
houver nenhum aprovado, a seção some do site automaticamente — nada fictício
é exibido.

### Ativar o analytics
O site já inclui o script do **Plausible** (privado, sem cookies). Crie uma
conta gratuita/paga em plausible.io para o domínio `nicollasdev.com.br` e os
dados começam a aparecer. Sem conta, o script é inócuo.

## Contato
- **E-mail:** contatonicdev@gmail.com
- **GitHub:** [NicollasAndreasmb](https://github.com/NicollasAndreasmb)
- **LinkedIn:** [Nicollas Andreas](https://www.linkedin.com/in/nicollas-andreas-marques-barros-131034263/)
