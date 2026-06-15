/* ============================================================================
 * modules/navigation.js
 * ----------------------------------------------------------------------------
 * Cuida da navegação do cabeçalho: abre e fecha o menu móvel, alterna o ícone
 * do botão e fecha o menu ao clicar em um link. Também controla a visibilidade
 * do botão "voltar ao topo" conforme a rolagem da página.
 * ============================================================================ */

export function initNavigation() {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  const toTop = document.getElementById("to-top");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.textContent = open ? "✕" : "☰";
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.textContent = "☰";
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("show", window.scrollY > 500);
    });

    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
