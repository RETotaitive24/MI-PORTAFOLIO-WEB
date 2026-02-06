document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langToggle");
  if (!btn) {
    console.error("No encontré el botón con id='langToggle'.");
    return;
  }

  const translations = {
    es: {
      headerName: "Raúl Esteban Totaitive Beltran",
      headerSubtitle: "Servicios digitales - portafolio personal",

      nav: {
        about: "Sobre mí",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
        cv: "Mi CV"
      },

      sobreMiTitle: "Sobre mí",
      aboutH3: [
        "Perfil profesional",
        "Experiencia e intereses técnicos",
        "Habilidades y enfoque personal"
      ],

      serviciosTitle: "Servicios",
      serviciosItems: [
        "Diseño de presentaciones",
        "Digitación de datos",
        "Edición básica de texto",
        "Automatización básica de procesos en Excel"
      ],

      portafolioTitle: "Mi Portafolio",
      portafolioIntro: "Aquí puedes ver algunos proyectos:",
      projects: [
        {
          title: "Control de gastos personales con registro automatizado (Excel)",
          desc: "Herramienta para registrar y analizar gastos personales, mejorando el seguimiento financiero mensual."
        },
        {
          title: "Sistema automatizado de gestión de órdenes de servicio (Excel + VBA)",
          desc: "Automatización para crear, registrar y consultar órdenes de servicio, reduciendo tiempo operativo y errores."
        },
        {
          title: "Help Coin – Aplicación colaborativa para división de gastos (Proyecto académico en equipo)",
          desc: "Proyecto académico desarrollado en equipo para facilitar el control y la división de gastos entre varias personas."
        }
      ],

      contactoTitle: "Contacto",
      contactoIntro: "¿Te interesa trabajar conmigo? Escríbeme:",

      cvTitle: "Mi CV (Hoja de vida)",
      cvView: "Ver mi CV",
      cvDownload: "Descargar CV",

      footer: "© 2026 Raúl Esteban Totaitive Beltran"
    },

    en: {
      headerName: "Raul Esteban Totaitive Beltran",
      headerSubtitle: "Digital services - personal portfolio",

      nav: {
        about: "About Me",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        cv: "My CV"
      },

      sobreMiTitle: "About Me",
      aboutH3: [
        "Professional Profile",
        "Experience and Technical Interests",
        "Skills and Personal Approach"
      ],

      serviciosTitle: "Services",
      serviciosItems: [
        "Presentation design",
        "Data entry",
        "Basic text editing",
        "Basic Excel process automation"
      ],

      portafolioTitle: "My Portfolio",
      portafolioIntro: "Here are some projects:",
      projects: [
        {
          title: "Personal expense tracker with automated logging (Excel)",
          desc: "A tool to record and analyze personal expenses, improving monthly financial tracking."
        },
        {
          title: "Automated service order management system (Excel + VBA)",
          desc: "Automation to create, log, and search service orders, reducing time and mistakes."
        },
        {
          title: "Help Coin – Collaborative expense splitting app (Academic team project)",
          desc: "A team academic project to help manage and split expenses among multiple people."
        }
      ],

      contactoTitle: "Contact",
      contactoIntro: "Interested in working with me? Message me:",

      cvTitle: "My CV (Resume)",
      cvView: "View my CV",
      cvDownload: "Download CV",

      footer: "© 2026 Raul Esteban Totaitive Beltran"
    }
  };

  let lang = "es";

  function setLang(newLang) {
    lang = newLang;
    const t = translations[lang];

    // Header
    const headerH1 = document.querySelector("header h1");
    const headerP = document.querySelector("header p");
    if (headerH1) headerH1.textContent = t.headerName;
    if (headerP) headerP.textContent = t.headerSubtitle;

    // Navbar usando data-i18n
    document.querySelectorAll(".topnav .nav-link").forEach(link => {
      const key = link.dataset.i18n;
      if (key && t.nav[key]) link.textContent = t.nav[key];
    });

    // Sobre mí: título + h3
    const aboutTitle = document.querySelector("#sobre-mi h2");
    if (aboutTitle) aboutTitle.textContent = t.sobreMiTitle;

    const aboutH3 = document.querySelectorAll("#sobre-mi .about-text h3");
    aboutH3.forEach((el, i) => {
      if (t.aboutH3[i]) el.textContent = t.aboutH3[i];
    });

    // Servicios
    const sTitle = document.querySelector("#servicios h2");
    if (sTitle) sTitle.textContent = t.serviciosTitle;

    const sLis = document.querySelectorAll("#servicios ul li");
    sLis.forEach((li, i) => {
      if (t.serviciosItems[i]) li.textContent = t.serviciosItems[i];
    });

    // Portafolio
    const pTitle = document.querySelector("#portafolio h2");
    if (pTitle) pTitle.textContent = t.portafolioTitle;

    const pIntro = document.querySelector("#portafolio p");
    if (pIntro) pIntro.textContent = t.portafolioIntro;

    const projectTitles = document.querySelectorAll("#portafolio ul li h3");
    const projectDescs = document.querySelectorAll("#portafolio ul li p");
    projectTitles.forEach((el, i) => {
      if (t.projects[i]) el.textContent = t.projects[i].title;
    });
    projectDescs.forEach((el, i) => {
      if (t.projects[i]) el.textContent = t.projects[i].desc;
    });

    // Contacto
    const cTitle = document.querySelector("#contacto h2");
    if (cTitle) cTitle.textContent = t.contactoTitle;

    const cIntro = document.querySelector("#contacto p");
    if (cIntro) cIntro.textContent = t.contactoIntro;

    // CV
    const cvTitle = document.querySelector("#cv h2");
    if (cvTitle) cvTitle.textContent = t.cvTitle;

    const cvLinks = document.querySelectorAll("#cv a.button");
    if (cvLinks[0]) cvLinks[0].textContent = t.cvView;
    if (cvLinks[1]) cvLinks[1].textContent = t.cvDownload;

    // Footer
    const f = document.querySelector("footer p");
    if (f) f.textContent = t.footer;

    // Botón ES/EN
    btn.innerHTML = `${lang.toUpperCase()} <span class="chev">▾</span>`;
  }

  btn.addEventListener("click", () => {
    setLang(lang === "es" ? "en" : "es");
  });

  setLang("es");
});
