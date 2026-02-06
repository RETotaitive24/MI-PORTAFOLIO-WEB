document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll(".topnav .nav-link"));

  // mapea #hash -> sección
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) return;

  // Observa qué sección está "activa" en pantalla
  const observer = new IntersectionObserver((entries) => {
    // Entradas visibles
    const visible = entries.filter(e => e.isIntersecting);

    // si no hay nada visible, no hagas nada
    if (!visible.length) return;

    // Escoge la más visible (mayor intersectionRatio)
    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    const activeSection = visible[0].target;

    // Activa el link correspondiente
    navLinks.forEach(link => link.classList.remove("active"));
    const activeLink = navLinks.find(link => link.getAttribute("href") === `#${activeSection.id}`);
    if (activeLink) activeLink.classList.add("active");

  }, {
    // Ajusta esto si quieres que cambie antes/después
    root: null,
    threshold: [0.25, 0.4, 0.6],
  });

  sections.forEach(sec => observer.observe(sec));
});
