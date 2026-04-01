function toggleMenu() {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".hamburger-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
 }

const revealElements = document.querySelectorAll(
  "section, .details-container, article, .contact-info-upper-container"
);

revealElements.forEach((element) => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));
