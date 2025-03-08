document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.add("show-left");
          entry.target.classList.add("show-right");
          entry.target.classList.add("show-scale");
        }
      });
    },
    { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
  );

  document
    .querySelectorAll(".hidden, .hidden-left, .hidden-right, .hidden-scale")
    .forEach((el) => observer.observe(el));
});
