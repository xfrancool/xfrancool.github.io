// Obtén una referencia al elemento input del alias
const aliasInput = document.querySelector(".copy input.text");

// Obtén una referencia al elemento de WhatsApp
const whatsappLink = document.querySelector(".social-button.whatsapp");

// Obtén una referencia al elemento de web
const webLink = document.querySelector("#web");

// Obtén una referencia al elemento de facebook
const facebookLink = document.querySelector("#facebook");

// Obtén una referencia al elemento de Instagram
const instagramLink = document.querySelector("#instagram");

// Obtén una referencia al elemento de Chess-Results
var chess = document.getElementById("chessResults");

// Obtén una referencia al elemento de Chess-Results
/* var gwhatssap = document.getElementById("gwhat"); */

// Resto de tu código
// ...

let copyText = document.querySelector(".copy");
let button = copyText.querySelector("button");
let input = copyText.querySelector("input.text");

button.addEventListener("click", function () {
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard
    .writeText(input.value)
    .then(function () {
      copyText.classList.add("active");
      window.getSelection().removeAllRanges();
      setTimeout(function () {
        copyText.classList.remove("active");
      }, 2500);
    })
    .catch(function (err) {
      console.error("No se pudo copiar al portapapeles: ", err);
    });
});

// Obtén una referencia al elemento <p> donde deseas mostrar el aviso.
const avisoElement = document.getElementById("aviso");

// URL del JSON externo

//https://api.npoint.io/9e0851ac36cbcc210919 Estandar UNC

const url = "https://xfrancool.github.io/basejson/event1.json";

// Realiza la solicitud fetch al JSON externo
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parsea la respuesta JSON
  })
  .then((data) => {
    // Accede a los datos que deseas mostrar en el mensaje
    const primerAviso = data[0];
    const {
      cierre,
      hora,
      alias,
      precio,
      fecha,
      transferencias,
      maps,
      lugar,
      wpplink,
      facebook,
      web,
      instagram,
      ritmo,
      catego,
      premios,
      adjuntar,
      trofeos,
      chessresults,
      details,
    } = primerAviso;

    // Cambia el href del enlace de WhatsApp
    whatsappLink.href = wpplink + fecha + "!";

    // Cambia el href del enlace de Instagram
    instagramLink.href = instagram;

    // Cambia el href del enlace de Facebook
    facebookLink.href = facebook;

    // Cambia el href del enlace de la web
    webLink.href = web;

    // Cambia el valor del input
    aliasInput.value = alias;

    // Cambia el atributo href Chess-Results
    chess.href = chessresults; // Reemplaza "nuevo_enlace.html" con la URL deseada

    // Cambia el atributo href Chess-Results
    /*   gwhatssap.href = gwhat; // Reemplaza "nuevo_enlace.html" con la URL deseada */

    // Crea un mensaje utilizando etiquetas HTML

    const nametr = "Sub 20";

    const mensaje = `
    <h1 id="title">Información sobre el Torneo 📌</h1>
    <br />
    <p>	&#10022; El ${details} se llevará a cabo el día ${fecha} en la<a href="${maps}" Target="_blank" id="lugar"> ${lugar} </a> a las ${hora}</p>
    <br />
   
    <p>	&#10022; ${cierre}📋</p>
 
   
    <br />
    <p>	&#10022; Si abonas desde otros medios puedes adjuntar el comprobante de pago. Si no logras adjuntarlo envianos el mismo a nuestro WhatsApp (Haciendo click en el logo).✔️</p>
    <br />
  
    <p>	&#10022; Si prefieres pagar en efectivo, no es necesario enviar ningún comprobante.✔️</p>

    
  
    <br />
    <p>	&#10022;  Las transferencias destino es a ${transferencias}. El precio de la inscripción es de ${precio}.✔️</p>
    <br />
  
    
      
    `;

    // Actualiza el contenido del elemento con el mensaje que contiene etiquetas HTML
    avisoElement.innerHTML = mensaje;
  })
  .catch((error) => {
    console.error("Error al obtener datos:", error);
  });

// Función para mostrar el modal y el overlay
function mostrarModal() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}

// Función para cerrar el modal y el overlay
function cerrarModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}

const finish = "2024-04-06T09:00:00";

// Función para calcular y mostrar la cuenta regresiva
function cuentaRegresiva(fechaLimite) {
  // Obtener la fecha actual
  var ahora = new Date().getTime();

  // Calcular la diferencia en milisegundos entre la fecha límite y la fecha actual
  var diferencia = fechaLimite - ahora;

  // Mostrar el contador o el mensaje final según la diferencia de tiempo
  if (diferencia > 0) {
    // Calcular días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en el modal
    var contador = document.getElementById("contador");
    contador.innerHTML =
      dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    // Actualizar el contador cada segundo
    setTimeout(function () {
      cuentaRegresiva(fechaLimite);
    }, 1000);
  } else {
    // Cuando la cuenta regresiva llega a cero o es negativa, mostrar el mensaje final
    var mensajeFinal = document.getElementById("mensajeFinal");
    mensajeFinal.style.display = "block";
    var contador = document.getElementById("contador");
    contador.style.display = "none";
  }
}

// Evento click para el botón de cerrar modal
document
  .getElementById("btnCerrarModal")
  .addEventListener("click", cerrarModal);

// Evento click para el botón de mostrar contador
document
  .getElementById("btnMostrarContador")
  .addEventListener("click", function () {
    mostrarModal();
    // var fechaLimite = new Date().getTime() + 3000; // Aquí debes poner la fecha límite adecuada
    var fechaLimite = new Date(finish); // Definir la nueva fecha límite aquí
    cuentaRegresiva(fechaLimite);
  });
