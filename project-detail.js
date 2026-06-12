/* ============================================================================
 * main.js
 * ----------------------------------------------------------------------------
 * Ponto de entrada da página inicial. Importa cada módulo de funcionalidade e
 * os inicializa quando o DOM está pronto, mantendo a ordem de boot do site em
 * um único lugar.
 * ============================================================================ */

import { initTheme } from "./modules/theme.js";
import { initPreloader } from "./modules/preloader.js";
import { initNavigation } from "./modules/navigation.js";
import { initNeuralBackground } from "./modules/neural-background.js";
import { initContactForm } from "./modules/contact-form.js";
import { initScrollReveal } from "./modules/scroll-reveal.js";
import { initWhatsappTooltip } from "./modules/whatsapp-tooltip.js";
import { initProjectsCarousel } from "./modules/projects-carousel.js";
import { initTestimonials } from "./modules/testimonials.js";
import { initCopyEmail } from "./modules/copy-email.js";
import { initFooterYear } from "./modules/footer-year.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  initNavigation();
  initNeuralBackground();
  initContactForm();
  initScrollReveal();
  initWhatsappTooltip();
  initProjectsCarousel();
  initTestimonials();
  initCopyEmail();
  initFooterYear();
});
