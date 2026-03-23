// Animación de parallax en el hero con el mouse (fondo a pantalla completa)
(function () {
  const hero = document.getElementById("hero");
  if (!hero) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  function onMouseMove(e) {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 a 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX = x * 2; // -1 a 1
    mouseY = y * 2;
  }

  function animate() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    const maxOffset = 7; // más grande = se mueve más
    const posX = 50 + currentX * maxOffset;
    const posY = 50 + currentY * maxOffset;

    hero.style.backgroundPosition = `${posX}% ${posY}%, center`;

    requestAnimationFrame(animate);
  }

  hero.addEventListener("mousemove", onMouseMove);
  hero.addEventListener("mouseleave", () => {
    mouseX = 0;
    mouseY = 0;
  });

  animate();
})();

// Animación de aparición y tilt para las tarjetas de proyectos
(function () {
  const cards = Array.from(document.querySelectorAll("[data-tilt-card]"));
  if (!cards.length) return;

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  cards.forEach((card) => observer.observe(card));

  // Tilt al mover el mouse
  cards.forEach((card) => {
    let cx = 0;
    let cy = 0;

    function handleMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateX = y * -6;
      const rotateY = x * 6;
      const translateY = -4;

      card.style.transform = `
        translateY(${translateY}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    }

    function resetTilt() {
      card.style.transform = "";
    }

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTilt);
  });
})();

