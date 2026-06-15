/* ============================================================================
 * projetos.js
 * ----------------------------------------------------------------------------
 * Ponto de entrada da página de projetos. Reaproveita os módulos compartilhados
 * (tema, navegação, fundo, revelação) e renderiza a grade completa de projetos.
 * ============================================================================ */

import { initTheme } from "./modules/theme.js";
import { initPreloader } from "./modules/preloader.js";
import { initNavigation } from "./modules/navigation.js";
import { initNeuralBackground } from "./modules/neural-background.js";
import { initScrollReveal } from "./modules/scroll-reveal.js";
import { initWhatsappTooltip } from "./modules/whatsapp-tooltip.js";
import { initProjectsGrid } from "./modules/projects-grid.js";
import { initFooterYear } from "./modules/footer-year.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  initNavigation();
  initNeuralBackground();
  initProjectsGrid();
  initScrollReveal();
  initWhatsappTooltip();
  initFooterYear();
});
