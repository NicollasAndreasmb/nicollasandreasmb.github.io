/* ============================================================================
 * modules/theme.js
 * ----------------------------------------------------------------------------
 * Gerencia o tema visual (claro/escuro). Lê a preferência salva ou a do
 * sistema operacional na primeira visita, aplica a classe correspondente ao
 * documento, persiste a escolha do usuário e atualiza o ícone do botão.
 * ============================================================================ */

const STORAGE_KEY = "nicollasdev-theme";

const ICON_SUN =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

const ICON_MOON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg>';

function apply(theme, toggleButton) {
  const isLight = theme === "light";
  document.documentElement.classList.toggle("theme-light", isLight);
  if (toggleButton) {
    toggleButton.innerHTML = isLight ? ICON_SUN : ICON_MOON;
    toggleButton.setAttribute(
      "aria-label",
      isLight ? "Ativar tema escuro" : "Ativar tema claro"
    );
  }
}

export function initTheme() {
  const toggleButton = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved || (prefersDark.matches ? "dark" : "light");

  apply(initial, toggleButton);

  prefersDark.addEventListener("change", (event) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      apply(event.matches ? "dark" : "light", toggleButton);
    }
  });

  if (!toggleButton) return;

  toggleButton.addEventListener("click", () => {
    const next = document.documentElement.classList.contains("theme-light")
      ? "dark"
      : "light";
    apply(next, toggleButton);
    localStorage.setItem(STORAGE_KEY, next);
  });
}
