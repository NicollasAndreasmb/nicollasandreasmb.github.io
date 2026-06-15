/* ============================================================================
 * modules/projects-grid.js
 * ----------------------------------------------------------------------------
 * Renderiza a listagem completa de projetos na página projetos.html, exibindo
 * todos os trabalhos de data/projects.js em uma grade responsiva, sem rotação
 * automática.
 * ============================================================================ */

import { projects } from "../data/projects.js";

function cardMarkup(project) {
  return `
    <article class="project-card reveal" role="listitem">
      <a class="project-thumb" href="projeto.html?p=${project.slug}" aria-label="Ver estudo de caso: ${project.title}">
        <img src="${project.image}" alt="${project.alt}" loading="lazy" />
      </a>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <p class="project-stack">${project.stack.join(" · ")}</p>
        <a class="project-link" href="projeto.html?p=${project.slug}">Ver estudo de caso →</a>
      </div>
    </article>`;
}

export function initProjectsGrid() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(cardMarkup).join("");
}
