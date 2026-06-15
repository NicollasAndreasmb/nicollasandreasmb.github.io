/* ============================================================================
 * modules/testimonials.js
 * ----------------------------------------------------------------------------
 * Renderiza os depoimentos de clientes aprovados. Se nenhum depoimento estiver
 * aprovado, remove a seção inteira do documento para não exibir espaços vazios
 * nem conteúdo fictício no site publicado.
 * ============================================================================ */

import { testimonials } from "../data/testimonials.js";

function cardMarkup(item) {
  return `
    <figure class="testimonial">
      <blockquote>${item.quote}</blockquote>
      <figcaption>
        <strong>${item.author}</strong>
        <span>${item.role}</span>
      </figcaption>
    </figure>`;
}

export function initTestimonials() {
  const section = document.getElementById("testimonials");
  const list = document.getElementById("testimonials-list");
  if (!section || !list) return;

  const approved = testimonials.filter((item) => item.approved && item.quote);

  if (approved.length === 0) {
    section.remove();
    return;
  }

  list.innerHTML = approved.map(cardMarkup).join("");
}
