document.addEventListener("DOMContentLoaded", () => {
  if (!window.ScrollReveal) return;

  ScrollReveal().reveal(".reveal", {
    distance: "18px",
    origin: "bottom",
    duration: 650,
    interval: 90,
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    cleanup: true
  });
});
