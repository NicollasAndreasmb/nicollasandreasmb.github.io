/* ============================================================================
 * modules/neural-background.js
 * ----------------------------------------------------------------------------
 * Renderiza o fundo animado característico do site: uma rede de pontos que se
 * movem lentamente, conectam-se quando próximos e reagem ao cursor do usuário.
 * Adapta-se ao tamanho da janela e ao tema atual, e respeita a preferência de
 * movimento reduzido do sistema, desativando a animação quando solicitado.
 * ============================================================================ */

const POINT_COUNT = 64;
const MAX_DISTANCE = 140;
const LINE_COLOR = "123, 108, 246";

export function initNeuralBackground() {
  const canvas = document.getElementById("neural-bg");
  if (!canvas) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const ctx = canvas.getContext("2d");
  const mouse = { x: null, y: null };
  let width = 0;
  let height = 0;
  let points = [];

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  };

  const seed = () => {
    points = Array.from({ length: POINT_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  };

  const backgroundColor = () =>
    document.documentElement.classList.contains("theme-light")
      ? "#f4f4f8"
      : "#0a0a0f";

  const drawLinks = () => {
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DISTANCE) {
          const alpha = (1 - dist / MAX_DISTANCE) * 0.4;
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const drawPoints = () => {
    points.forEach((p) => {
      ctx.fillStyle = `rgba(${LINE_COLOR}, 0.7)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();

      if (mouse.x !== null) {
        const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dist < MAX_DISTANCE) {
          const alpha = (1 - dist / MAX_DISTANCE) * 0.6;
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    });
  };

  const update = () => {
    points.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });
  };

  const frame = () => {
    ctx.fillStyle = backgroundColor();
    ctx.fillRect(0, 0, width, height);
    ctx.lineWidth = 1;
    update();
    drawLinks();
    drawPoints();
    requestAnimationFrame(frame);
  };

  const renderStatic = () => {
    ctx.fillStyle = backgroundColor();
    ctx.fillRect(0, 0, width, height);
    drawLinks();
    drawPoints();
  };

  resize();
  seed();
  window.addEventListener("resize", () => {
    resize();
    seed();
    if (reduceMotion) renderStatic();
  });
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  if (reduceMotion) {
    renderStatic();
  } else {
    frame();
  }
}
