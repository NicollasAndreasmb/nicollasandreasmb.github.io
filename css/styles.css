/* ============================================================================
 * styles.css
 * ----------------------------------------------------------------------------
 * Folha de estilos única do portfólio NicollasDev.
 * Define os tokens de design (cores, tipografia, espaçamento), o reset base,
 * os dois temas (escuro e claro), o layout responsivo e todos os componentes
 * visuais: cabeçalho fixo, hero, seções de conteúdo, cartões, barras de
 * habilidade, carrossel de projetos, formulário, rodapé e botões flutuantes.
 * É consumida por index.html e projetos.html.
 * ============================================================================ */

/* === Tokens de design === */
:root {
  --accent: #7b6cf6;
  --accent-soft: #a6a1e1;
  --accent-deep: #5a4fb0;
  --accent-glow: rgba(123, 108, 246, 0.35);

  --bg: #0a0a0f;
  --surface: #14141c;
  --surface-2: #1c1c28;
  --line: rgba(123, 108, 246, 0.18);

  --text: #ececf2;
  --text-dim: #b6b6c6;
  --muted: #82829a;

  --font-display: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --radius: 14px;
  --radius-sm: 8px;
  --maxw: 880px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);

  color-scheme: dark;
}

.theme-light {
  --bg: #f4f4f8;
  --surface: #ffffff;
  --surface-2: #f0f0f6;
  --line: rgba(90, 79, 176, 0.16);
  --text: #15151f;
  --text-dim: #3a3a4a;
  --muted: #6a6a82;
  --accent-glow: rgba(123, 108, 246, 0.18);
  color-scheme: light;
}

/* === Reset === */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 84px;
}

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  transition: background 0.4s var(--ease), color 0.4s var(--ease);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--accent-soft);
  text-decoration: none;
  transition: color 0.2s var(--ease);
}

a:hover {
  color: var(--accent);
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 4px;
}

/* === Fundo neural === */
#neural-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: block;
}

/* === Tipografia utilitária === */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  display: inline-block;
  margin-bottom: 0.9rem;
}

.eyebrow::before {
  content: "// ";
  color: var(--muted);
}

h1,
h2,
h3 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text);
}

.section-title {
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  margin-bottom: 1.4rem;
}

.lead {
  color: var(--text-dim);
  font-size: 1.02rem;
  max-width: 56ch;
}

/* === Cabeçalho fixo === */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem clamp(1rem, 5vw, 3rem);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.brand {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
  color: var(--text);
}

.brand span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 1.6rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-dim);
  font-size: 0.92rem;
  font-weight: 500;
  position: relative;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.25s var(--ease);
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.icon-btn {
  background: var(--surface-2);
  border: 1px solid var(--line);
  color: var(--text);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: border-color 0.2s var(--ease), transform 0.2s var(--ease);
}

.icon-btn svg {
  width: 20px;
  height: 20px;
}

.icon-btn:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

#menu-toggle {
  display: none;
}

/* === Estrutura de página === */
main {
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 7.5rem clamp(1.1rem, 5vw, 2rem) 4rem;
}

.section {
  padding: 3.4rem 0;
  border-top: 1px solid var(--line);
}

.section:first-of-type {
  border-top: none;
}

/* === Hero === */
.hero {
  padding: 1rem 0 2.6rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: center;
}

.hero-photo {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid var(--accent);
  box-shadow: 0 0 40px var(--accent-glow);
  flex-shrink: 0;
}

.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-text h1 {
  font-size: clamp(2rem, 6vw, 3.1rem);
  margin-bottom: 0.6rem;
}

.hero-text .role {
  font-family: var(--font-mono);
  color: var(--accent-soft);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.hero-text .role .cursor {
  color: var(--accent);
  animation: blink 1.1s steps(2) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.hero-cta {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 0.4rem;
}

/* === Botões === */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.92rem;
  padding: 0.7rem 1.3rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.2s var(--ease), background 0.2s var(--ease),
    border-color 0.2s var(--ease);
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  background: var(--accent-deep);
  color: #fff;
  transform: translateY(-2px);
}

.btn-ghost {
  background: transparent;
  border-color: var(--line);
  color: var(--text);
}

.btn-ghost:hover {
  border-color: var(--accent);
  color: var(--text);
  transform: translateY(-2px);
}

/* === Cartões de serviço === */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.1rem;
}

#services .card-grid {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 560px) {
  #services .card-grid {
    grid-template-columns: 1fr;
  }
}

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.card .card-icon {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.card p {
  color: var(--text-dim);
  font-size: 0.92rem;
}

/* === Experiências === */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.job {
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  padding: 1.4rem 1.6rem;
}

.job-title {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.job-date {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  display: block;
  margin-bottom: 0.7rem;
}

.job-desc {
  color: var(--text-dim);
  font-size: 0.94rem;
}

.tech-row {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.tech-row img {
  width: 26px;
  height: 26px;
}

.theme-light .tech-row img[data-invert],
.theme-light .skill img[data-invert] {
  filter: invert(1) brightness(0.4);
}

.tech-row img[data-dark-invert],
.skill img[data-dark-invert] {
  filter: invert(1);
}

.theme-light .tech-row img[data-dark-invert],
.theme-light .skill img[data-dark-invert] {
  filter: none;
}

/* === Habilidades === */
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem 1.8rem;
  margin-top: 0.4rem;
}

.skill {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.skill img {
  width: 24px;
  height: 24px;
}

.skill .skill-name {
  min-width: 84px;
  font-size: 0.88rem;
  font-weight: 500;
}

.skill-bar {
  flex: 1;
  height: 7px;
  background: var(--surface-2);
  border-radius: 6px;
  overflow: hidden;
}

.skill-bar > span {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--accent-deep), var(--accent));
  border-radius: 6px;
  transition: width 1s var(--ease);
}

/* === Sobre === */
.about p {
  color: var(--text-dim);
  margin-bottom: 1rem;
}

.about strong {
  color: var(--accent-soft);
}

.socials {
  display: flex;
  gap: 0.9rem;
  margin-top: 0.4rem;
}

.socials a {
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 10px;
  display: grid;
  place-items: center;
  transition: border-color 0.2s var(--ease), transform 0.2s var(--ease);
}

.socials a:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}

.socials img {
  width: 20px;
  height: 20px;
}

.theme-light .socials img {
  filter: none;
}

.socials img {
  filter: invert(1) brightness(0.85);
}

.theme-light .socials img {
  filter: invert(0) brightness(0.3);
}

/* === Carrossel de projetos === */
.carousel {
  display: flex;
  align-items: stretch;
  gap: 0.8rem;
}

.carousel-track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
  flex: 1;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s var(--ease), border-color 0.3s var(--ease);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
}

.project-thumb {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-bottom: 1px solid var(--line);
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s var(--ease);
}

.project-card:hover .project-thumb img {
  transform: scale(1.05);
}

.project-body {
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-body h3 {
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.project-body p {
  font-size: 0.86rem;
  color: var(--text-dim);
  flex: 1;
}

.project-stack {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-soft);
  margin-top: 0.7rem;
}

.project-link {
  margin-top: 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
}

.carousel-btn {
  background: var(--surface-2);
  border: 1px solid var(--line);
  color: var(--text);
  width: 44px;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.2s var(--ease), background 0.2s var(--ease);
}

.carousel-btn:hover {
  border-color: var(--accent);
  background: var(--accent);
  color: #fff;
}

.section-foot {
  margin-top: 1.6rem;
  text-align: center;
}

/* === Certificações === */
.cert-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.cert-list li {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 0.9rem 1.1rem;
  color: var(--text-dim);
  font-size: 0.94rem;
}

.cert-list strong {
  color: var(--text);
  display: block;
}

.cert-list .cert-year {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent);
}

/* === Formulário === */
.contact-grid {
  display: grid;
  gap: 1.6rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  max-width: 540px;
}

.contact-form input,
.contact-form textarea {
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text);
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  resize: vertical;
  transition: border-color 0.2s var(--ease);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-status {
  font-size: 0.88rem;
  min-height: 1.2em;
}

.form-status.ok {
  color: #4ad295;
}

.form-status.err {
  color: #f0667d;
}

/* === Rodapé === */
.site-footer {
  border-top: 1px solid var(--line);
  text-align: center;
  padding: 2rem 1rem;
  color: var(--muted);
  font-size: 0.85rem;
}

.site-footer a {
  color: var(--accent-soft);
}

/* === Botões flutuantes === */
.float-stack {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 1400;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-end;
}

.float-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--surface-2);
  border: 1px solid var(--line);
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s var(--ease), opacity 0.3s var(--ease);
}

.float-btn:hover {
  transform: scale(1.08);
}

.float-btn img {
  width: 26px;
  height: 26px;
}

.whatsapp-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

#whatsapp-float {
  background: #25d366;
  border-color: #25d366;
}

#whatsapp-tooltip {
  position: absolute;
  right: 62px;
  white-space: nowrap;
  background: var(--accent);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 16px;
  box-shadow: 0 4px 12px var(--accent-glow);
  opacity: 0;
  pointer-events: none;
  transform: translateX(10px);
  transition: opacity 0.4s var(--ease), transform 0.4s var(--ease);
}

#whatsapp-tooltip.show {
  opacity: 1;
  transform: translateX(0);
}

#to-top {
  opacity: 0;
  pointer-events: none;
  font-size: 1.3rem;
  color: var(--text);
}

#to-top.show {
  opacity: 1;
  pointer-events: auto;
}

/* === Preloader === */
#preloader {
  position: fixed;
  inset: 0;
  z-index: 3000;
  background: var(--bg);
  display: grid;
  place-items: center;
  transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease);
}

#preloader.hide {
  opacity: 0;
  visibility: hidden;
}

.preloader-mark {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
  color: var(--text);
  animation: pulse 1.2s ease-in-out infinite;
}

.preloader-mark span {
  color: var(--accent);
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.55; transform: scale(1.04); }
}

/* === Revelação ao rolar === */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

/* === Página de projetos === */
.page-hero {
  padding: 1rem 0 2rem;
}

.page-hero h1 {
  font-size: clamp(2.2rem, 6vw, 3.4rem);
  margin-bottom: 0.6rem;
}

.projects-full {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.4rem;
}

.projects-full .project-card {
  height: 100%;
}

.back-link {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 1.4rem;
}

/* === Selo de disponibilidade === */
.availability {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-dim);
  background: var(--surface);
  border: 1px solid var(--line);
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

.availability .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #4ad295;
  box-shadow: 0 0 0 0 rgba(74, 210, 149, 0.6);
  animation: ping 1.8s var(--ease) infinite;
}

@keyframes ping {
  0% { box-shadow: 0 0 0 0 rgba(74, 210, 149, 0.5); }
  70%, 100% { box-shadow: 0 0 0 8px rgba(74, 210, 149, 0); }
}

/* === Depoimentos === */
.testimonials-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.1rem;
  margin-top: 0.4rem;
}

.testimonial {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.4rem 1.5rem;
  margin: 0;
}

.testimonial blockquote {
  margin: 0 0 1rem;
  color: var(--text-dim);
  font-size: 0.95rem;
  line-height: 1.6;
}

.testimonial blockquote::before {
  content: "“";
  color: var(--accent);
  font-family: var(--font-display);
  font-size: 1.6rem;
  line-height: 0;
  margin-right: 0.15rem;
}

.testimonial figcaption strong {
  display: block;
  color: var(--text);
  font-size: 0.9rem;
}

.testimonial figcaption span {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--muted);
}

/* === Contato alternativo === */
.contact-alt {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

/* === Página de estudo de caso === */
.case-meta {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--accent-soft);
  margin-bottom: 1.4rem;
}

.case-cover {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 2rem;
}

.case-cover img {
  width: 100%;
}

.case-block {
  margin-bottom: 1.6rem;
}

.case-block h2 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--accent-soft);
}

.case-block p {
  color: var(--text-dim);
  max-width: 62ch;
}

.case-foot {
  margin-top: 2rem;
}

/* === Serviços (detalhado) === */
.services {
  display: grid;
  gap: 1.1rem;
  margin-top: 1.8rem;
}

.service {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem 1.6rem;
  transition: border-color 0.3s var(--ease);
}

.service:hover {
  border-color: var(--accent);
}

.service-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
}

.service-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 14%, transparent);
  border: 1px solid var(--line);
}

.service-icon svg {
  width: 24px;
  height: 24px;
}

.service-head h3 {
  font-size: 1.2rem;
}

.service-desc {
  color: var(--text-dim);
  font-size: 0.95rem;
  margin-bottom: 1.1rem;
  max-width: 64ch;
}

.service-cols {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.4rem;
}

.service-col h4 {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.6rem;
}

/* === Listas com marcador SVG === */
.ticks {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.ticks li {
  position: relative;
  padding-left: 1.6rem;
  color: var(--text-dim);
  font-size: 0.92rem;
}

.ticks li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.18em;
  width: 15px;
  height: 15px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237b6cf6' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") no-repeat center / contain;
}

.ticks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.6rem 1.4rem;
}

/* === Diferenciais === */
.diferenciais {
  margin-top: 1.8rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  padding: 1.5rem 1.6rem;
}

.diferenciais h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.diferenciais .ticks li {
  font-size: 0.95rem;
}

/* === Conquista em destaque === */
.cert-highlight {
  border-color: var(--accent) !important;
  background: color-mix(in srgb, var(--accent) 8%, var(--surface)) !important;
}

.cert-icon {
  display: inline-grid;
  place-items: center;
  color: var(--accent);
  vertical-align: -0.2em;
  margin-right: 0.2rem;
}

.cert-icon svg {
  width: 17px;
  height: 17px;
}

/* === Responsivo === */
@media (max-width: 720px) {
  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s var(--ease);
  }

  .nav-links.open {
    max-height: 320px;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  .nav-links a {
    display: block;
    padding: 0.9rem;
  }

  #menu-toggle {
    display: grid;
  }

  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    justify-items: center;
  }

  .service-cols {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .carousel-track {
    grid-template-columns: 1fr;
  }

  .carousel-track .project-card:nth-child(n + 2) {
    display: none;
  }
}

@media (max-width: 980px) and (min-width: 721px) {
  .carousel-track {
    grid-template-columns: repeat(2, 1fr);
  }

  .carousel-track .project-card:nth-child(3) {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
