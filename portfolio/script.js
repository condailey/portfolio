document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // optional: fade out when leaving
        }
      });
    },
    {
      threshold: 0.2, // trigger when 20% of the section is visible
    }
  );

  sections.forEach((section) => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open"); // animate bars
    navLinks.classList.toggle("active"); // show/hide menu
  });
});

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const para = btn.previousElementSibling;
    para.classList.toggle('expanded');
    btn.textContent = para.classList.contains('expanded') ? 'Show less' : 'Read more';
  });
});


