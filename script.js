const overlay = document.getElementById("overlay");
const newyear = document.getElementById("newyear");
const cards = document.getElementById("cards");
const letter = document.getElementById("letter");
const final = document.getElementById("final");
const text = document.getElementById("text");
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function startNewYear() {
  overlay.style.display = "none";
  newyear.classList.remove("hidden");
}

function showCards() {
  newyear.style.display = "none";
  cards.classList.remove("hidden");
}

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

function showLetter() {
  cards.style.display = "none";
  letter.classList.remove("hidden");
  typeLetter();
}

const lines = [
  "Hey love, thank you…",
  "Even after being blamed, misunderstood, we stayed.",
  "We loved and we will keep loving — forever.",
  "One year to a whole lifetime.",
  "Thank you for listening to me.",
  "For being my therapist, my everything.",
  "For not judging my bakchodis and kand.",
  "Especially on my father things — I’m sorry.",
  "I was selfish sometimes.",
  "If I made you insecure, I never meant that — I swear.",
  "You made me come out of my insecurities.",
  "You loved me unconditionally.",
  "You made me feel beautiful.",
  "Nahi toh main khud ko aadha jaadu aur thoda mogli samajhti thi.",
  "I am not letting you go.",
  "Not in 2026.",
  "Not ever.",
  "Living with you is my dream come true 💙"
];

let i = 0;
function typeLetter() {
  if (i < lines.length) {
    text.innerHTML += lines[i] + "<br><br>";
    i++;
    setTimeout(typeLetter, 1200);
  }
}

let particles = [];

function finalSlide() {
  letter.style.display = "none";
  final.classList.remove("hidden");

  canvas.style.display = "block";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  setInterval(createFirework, 700);
  animate();
}

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.5;

  for (let i = 0; i < 60; i++) {
    particles.push({
      x,
      y,
      radius: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 6,
      dy: (Math.random() - 0.5) * 6,
      alpha: 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.015;

    ctx.fillStyle = `rgba(255,182,193,${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    if (p.alpha <= 0) particles.splice(index, 1);
  });
  requestAnimationFrame(animate);
}
