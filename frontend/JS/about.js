document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature-card");
  const aboutImage = document.querySelector(".about-img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  features.forEach(card => observer.observe(card));
  observer.observe(aboutImage);
});

