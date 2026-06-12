/* ============================================================================
 * modules/project-detail.js
 * ----------------------------------------------------------------------------
 * Renderiza a página de estudo de caso de um projeto. Lê o slug do projeto a
 * partir do parâmetro "p" da URL, busca os dados correspondentes e monta a
 * página com contexto, desafio, solução e resultado. Quando o projeto não é
 * encontrado, exibe uma mensagem e um caminho de volta para a listagem.
 * ============================================================================ */

import { findProject } from "../data/projects.js";

function block(title, text) {
  if (!text) return "";
  return `
    <div class="case-block">
      <h2>${title}</h2>
      <p>${text}</p>
    </div>`;
}

function resultBlock(result) {
  const text = result || "Resultado em documentação.";
  return `
    <div class="case-block">
      <h2>Resultado</h2>
      <p>${text}</p>
    </div>`;
}

export function initProjectDetail() {
  const root = document.getElementById("project-detail");
  if (!root) return;

  const slug = new URLSearchParams(window.location.search).get("p");
  const project = findProject(slug);

  if (!project) {
    root.innerHTML = `
      <a class="back-link" href="projetos.html">← Voltar para os projetos</a>
      <span class="eyebrow">Projeto</span>
      <h1>Projeto não encontrado</h1>
      <p class="lead">O projeto que você procurou não existe ou foi movido.</p>`;
    return;
  }

  document.title = `${project.title} | Nicollas Andreas`;

  const linkButton = project.link
    ? `<a class="btn btn-primary" href="${project.link}" target="_blank" rel="noopener noreferrer">Ver projeto ao vivo →</a>`
    : `<span class="btn btn-ghost" aria-disabled="true">Protótipo (sem link público)</span>`;

  root.innerHTML = `
    <a class="back-link" href="projetos.html">← Voltar para os projetos</a>
    <span class="eyebrow">Estudo de caso</span>
    <h1>${project.title}</h1>
    <p class="case-meta">${project.role} · ${project.year} · ${project.stack.join(" · ")}</p>
    <div class="case-cover">
      <img src="${project.image}" alt="${project.alt}" />
    </div>
    ${block("Contexto", project.context)}
    ${block("Desafio", project.challenge)}
    ${block("Solução", project.solution)}
    ${resultBlock(project.result)}
    <div class="case-foot">${linkButton}</div>`;
}
