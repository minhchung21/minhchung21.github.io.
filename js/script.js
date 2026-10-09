const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) topBtn.classList.add("show");
  else topBtn.classList.remove("show");
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealItems = document.querySelectorAll(".skill-card, .project, .timeline-item");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(item);
});
