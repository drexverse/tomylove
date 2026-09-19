document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".answer-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("selected");
      document.body.classList.add("page-transition");

      const nextPage = card.dataset.next || "question3.html";

      window.setTimeout(() => {
        window.location.href = nextPage;
      }, 480);
    });
  });
});
