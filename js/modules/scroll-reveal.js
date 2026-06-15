/* ============================================================================
 * modules/scroll-reveal.js
 * ----------------------------------------------------------------------------
 * Anima elementos quando entram na viewport. Aplica a classe de revelação aos
 * elementos marcados com a classe "reveal" e preenche as barras de habilidade
 * a partir do valor definido em data-level no momento em que ficam visíveis.
 * ============================================================================ */

export function initScrollReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const skillBars = document.querySelectorAll(".skill-bar > span");

  if ("IntersectionObserver" in window === false) {
    revealItems.forEach((el) => el.classList.add("visible"));
    skillBars.forEach((bar) => {
      bar.style.width = bar.dataset.level || "0%";
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((el) => revealObserver.observe(el));

  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level || "0%";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  skillBars.forEach((bar) => skillObserver.observe(bar));
}
