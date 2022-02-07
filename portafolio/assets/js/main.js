/* Menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* Activo y remuevo el menu */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Activo el link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remuevo desde el movil el menu*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Usamos el framework de JavasCript para darle efectos*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*Scroll Inicio*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*Scroll acerca de mi*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*Scroll herramientas*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*Scroll trabajo*/
sr.reveal(".work__img", { interval: 200 });

/*Scroll contacto*/
sr.reveal(".contact__input", { interval: 200 });

/* Darkmode */

const btnSwitch = document.getElementById("switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});

/* efecto maquina*/

const type = new Typed(".typing-text", {
  strings: ["1", "Responsive Design", "Maquetación", "SEO", "Design Frontend"],
  startDelay: 2900,
  backDelay: 2300,
  backSpeed: 75,
  typeSpeed: 200,
  loop: true,
});
