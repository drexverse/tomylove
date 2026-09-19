document.addEventListener("DOMContentLoaded", () => {
  const birthdayMusic = document.querySelector("#birthday-music");
  const heartsContainer = document.querySelector(".floating-hearts");
  const confettiContainer = document.querySelector(".confetti-layer");
  const balloonContainer = document.querySelector(".balloon-cluster");
  const sparkleRing = document.querySelector(".sparkle-ring");

  if (!birthdayMusic || !heartsContainer || !confettiContainer || !balloonContainer || !sparkleRing) return;

  startBirthdayMusic();

  createHearts();
  createConfetti();
  createBalloons();
  createSparkles();

  function startBirthdayMusic() {
    birthdayMusic.volume = 0.55;

    const playMusic = () => {
      birthdayMusic.play().catch(() => {
        document.addEventListener("pointerdown", playMusic, { once: true });
        document.addEventListener("keydown", playMusic, { once: true });
      });
    };

    playMusic();
  }

  function createHearts() {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = "heart";
      const size = 14 + Math.random() * 28;
      heart.style.setProperty("--size", `${size}px`);
      heart.style.setProperty("--x", `${(Math.random() - 0.5) * 180}px`);
      heart.style.setProperty("--x2", `${(Math.random() - 0.5) * 200}px`);
      heart.style.setProperty("--tilt", `${(Math.random() - 0.5) * 50}deg`);
      heart.style.setProperty("--dur", `${6 + Math.random() * 5}s`);
      heart.style.setProperty("--delay", `${0.5 + Math.random() * 2.4}s`);
      heart.style.left = `${Math.random() * 100}%`;
      heartsContainer.appendChild(heart);
    }
  }

  function createBalloons() {
    const colors = [
      "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.12)), linear-gradient(180deg, #f7c8d9, #dd8aa8)",
      "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.12)), linear-gradient(180deg, #fcd7b5, #f1b39f)",
      "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.12)), linear-gradient(180deg, #eddaf8, #d9b8f0)",
      "linear-gradient(180deg, rgba(255,255,255,0.5), rgba(255,255,255,0.12)), linear-gradient(180deg, #f4d2df, #dc8db0)"
    ];

    for (let i = 0; i < 7; i++) {
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = `${8 + Math.random() * 82}%`;
      balloon.style.setProperty("--balloon-gradient", colors[i % colors.length]);
      balloon.style.setProperty("--dur", `${8 + Math.random() * 7}s`);
      balloon.style.setProperty("--delay", `${Math.random() * 1.5}s`);
      balloon.style.setProperty("--drift", `${(Math.random() - 0.5) * 110}px`);
      balloon.style.setProperty("--tilt", `${(Math.random() - 0.5) * 18}deg`);
      balloonContainer.appendChild(balloon);
    }
  }

  function createConfetti() {
    const colors = ["#f3b9ca", "#f7d8a9", "#f4d2f5", "#d8c4ff", "#bfead8", "#f9f5d9"];
    const count = 90;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.style.setProperty("--x", `${Math.random() * 100}%`);
      piece.style.setProperty("--size", `${4 + Math.random() * 8}px`);
      piece.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
      piece.style.setProperty("--dur", `${4 + Math.random() * 4}s`);
      piece.style.setProperty("--delay", `${Math.random() * 1.5}s`);
      piece.style.setProperty("--dx", `${(Math.random() - 0.5) * 200}px`);
      confettiContainer.appendChild(piece);
    }
  }

  function createSparkles() {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      const angle = (Math.PI * 2 * i) / count;
      const distance = 120 + Math.random() * 140;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      sparkle.style.left = `calc(50% + ${x}px)`;
      sparkle.style.top = `calc(50% + ${y}px)`;
      sparkle.style.setProperty("--delay", `${Math.random() * 3}s`);
      sparkleRing.appendChild(sparkle);
    }
  }
});
