document.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".heart");
  const ecgLine = document.querySelector(".line");
  const body = document.querySelector("body");

  heart.addEventListener("click", () => {
    if (heart.style.animationDuration === "0.4s") {
      heart.style.animationDuration = "0.8s";
    } else {
      heart.style.animationDuration = "0.4s";
    }
  });

  body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      ecgLine.style.animationDuration = "1s";
    } else if (event.key === "ArrowDown") {
      ecgLine.style.animationDuration = "2s";
    }
  });

  heart.style.animationDuration = "0.6s";
  ecgLine.style.animationDuration = "1.5s";
});
