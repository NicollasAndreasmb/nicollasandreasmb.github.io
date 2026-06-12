/* ============================================================================
 * modules/projects-carousel.js
 * ----------------------------------------------------------------------------
 * Monta o carrossel de projetos da home a partir dos dados de data/projects.js.
 * Renderiza uma janela de cartões, avança e retrocede pelos botões de controle
 * e troca automaticamente em intervalos regulares, pausando quando o cursor
 * está sobre a área para não interromper a leitura.
 * ============================================================================ */

import { projects } from "../data/projects.js";

const VISIBLE = 3;
const INTERVAL = 5000;

function cardMarkup(project) {
  return `
    <article class="project-card" role="listitem">
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

export function initProjectsCarousel() {
  const track = document.getElementById("carousel-track");
  const prev = document.getElementById("carousel-prev");
  const next = document.getElementById("carousel-next");
  if (!track) return;

  let start = 0;
  let timer = null;

  const render = () => {
    const slice = [];
    for (let i = 0; i < VISIBLE; i++) {
      slice.push(projects[(start + i) % projects.length]);
    }
    track.innerHTML = slice.map(cardMarkup).join("");
  };

  const move = (step) => {
    start = (start + step + projects.length) % projects.length;
    render();
  };

  const startAuto = () => {
    timer = setInterval(() => move(1), INTERVAL);
  };

  const stopAuto = () => clearInterval(timer);

  if (prev) prev.addEventListener("click", () => move(-1));
  if (next) next.addEventListener("click", () => move(1));

  track.addEventListener("mouseenter", stopAuto);
  track.addEventListener("mouseleave", startAuto);

  render();
  startAuto();
}
