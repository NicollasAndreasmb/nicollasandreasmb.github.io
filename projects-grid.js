/* ============================================================================
 * modules/contact-form.js
 * ----------------------------------------------------------------------------
 * Trata o envio do formulário de contato via FormSubmit sem recarregar a
 * página. Faz a requisição assíncrona, desabilita o botão durante o envio e
 * exibe uma mensagem de sucesso ou erro em uma região acessível (aria-live).
 * ============================================================================ */

export function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const button = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    status.className = "form-status";
    status.textContent = "Enviando…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error("Resposta inválida do servidor");

      status.textContent = "Mensagem enviada. Em breve entro em contato.";
      status.classList.add("ok");
      form.reset();
    } catch (error) {
      status.textContent =
        "Não foi possível enviar agora. Tente novamente em instantes.";
      status.classList.add("err");
    } finally {
      button.disabled = false;
    }
  });
}
