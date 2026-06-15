/* ============================================================================
 * modules/preloader.js
 * ----------------------------------------------------------------------------
 * Controla a tela de carregamento exibida na abertura da página. Após o
 * carregamento completo dos recursos, oculta o preloader com uma transição
 * suave e o remove do fluxo do documento.
 * ============================================================================ */

export function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  const hide = () => {
    preloader.classList.add("hide");
    preloader.addEventListener(
      "transitionend",
      () => preloader.remove(),
      { once: true }
    );
  };

  if (document.readyState === "complete") {
    setTimeout(hide, 600);
  } else {
    window.addEventListener("load", () => setTimeout(hide, 600));
  }
}
