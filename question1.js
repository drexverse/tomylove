document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".answer-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("selected");
      document.body.classList.add("page-transition");

      const nextPage = card.dataset.next || "question2.html";

      window.setTimeout(() => {
        window.location.href = nextPage;
      }, 480);
    });
  });

  const cursorGlow = document.querySelector(".cursor-glow");
  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("pointermove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
    });
  }
});
