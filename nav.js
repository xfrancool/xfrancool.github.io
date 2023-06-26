const navT = [
  {
    id: 1,
  },
];

function Template(navT) {
  /*   const name = ""; */
  return `
 
  <nav id="menu">
  <input
    type="checkbox"
    id="responsive-menu"
    onclick="updatemenu()"
  /><label></label>
  <ul>
    <li><a href="https://mov-house.netlify.app/inicio.html">Inicio</a></li>
    <li>
      <a class="dropdown-arrow" href="#">Más contenidos</a>
      <ul class="sub-menus">
        <li><a href="https://mov-house.netlify.app/galeria/marvel/index.html">Marvel</a></li>
        <li><a href="https://mov-house.netlify.app/galeria/dc/index.html">DC</a></li>
        <li><a href="https://mov-house.netlify.app/galeria/cartoon/index.html">Cartoon</a></li>
        <li><a href="https://mov-house.netlify.app/galeria/canales/index.html">Emisión en vivo</a></li>
        <li><a href="https://mov-house.netlify.app/galeria/series/index.html">Series</a></li>
        <li><a href="https://mov-house.netlify.app/galeria/peliculas/index.html">Peliculas</a></li>
      </ul>
    </li>
    <!--        <li><a href="#">About</a></li> -->
    <li><a href="#">Contacto</a></li>
    <li><a href="https://mov-house.netlify.app/">Cerrar Sesión 🔐</a></li>
  </ul>
</nav>
  `;
}

document.getElementById("navT").innerHTML = `
          
          ${navT.map(Template).join("")}
          
        `;

/////////////////////////////Menu///////////////////////////////////
function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "0px";
  }
}

// Agrega un evento click al documento
document.addEventListener("click", function (event) {
  // Obtiene el elemento que se hizo clic
  var target = event.target;

  // Verifica si el elemento es un submenú o no
  var isSubmenu = false;
  while (target != null && !isSubmenu) {
    if (target.classList.contains("sub-menus")) {
      isSubmenu = true;
    }
    target = target.parentNode;
  }

  // Si el elemento no es un submenú, cierra todos los submenús
  if (!isSubmenu) {
    var submenus = document.getElementsByClassName("sub-menus");
    for (var i = 0; i < submenus.length; i++) {
      submenus[i].style.display = "none";
    }
  }
});

// Agrega un evento click a cada elemento "dropdown-arrow"
var dropdowns = document.getElementsByClassName("dropdown-arrow");
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("click", function () {
    // Obtiene el submenú correspondiente
    var submenu = this.nextElementSibling;

    // Muestra o esconde el submenú
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });
}
