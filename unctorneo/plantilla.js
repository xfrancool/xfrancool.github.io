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

// Resto de tu código
// ...

let copyText = document.querySelector(".copy");
let button = copyText.querySelector("button");
button.addEventListener("click", function () {
  let input = copyText.querySelector("input.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2500); // Corrija la sintaxis aquí
});

// Obtén una referencia al elemento <p> donde deseas mostrar el aviso.
const avisoElement = document.getElementById("aviso");

// URL del JSON externo
const url = "https://api.npoint.io/9e0851ac36cbcc210919";

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

    // Crea un mensaje utilizando etiquetas HTML
    const mensaje = `
    <h1>🔹 Información sobre el Torneo</h1>
    <br />
    <p>⋄ El Torneo se llevará a cabo el día ${fecha} en la<a href="${maps}" Target="_blank"> ${lugar} </a> a las ${hora}</p>
    <br />
   
    <p>⋄ Las inscripciones se cerrarán el ${cierre} la noche antes del evento para que podamos enviar el pareo a todos los participantes.📋</p>
    <br />
  
    <p>⋄ En el formulario, puedes adjuntar el comprobante de pago. Si no puedes enviarlo a través del formulario, también puedes hacerlo haciendo clic en el logo de WhatsApp.</p>
    <br />
  

    <p>⋄ El precio de la inscripción es de ${precio}. Las transferencias destino es a ${transferencias}.✔️</p>
      
    `;

    // Actualiza el contenido del elemento con el mensaje que contiene etiquetas HTML
    avisoElement.innerHTML = mensaje;
  })
  .catch((error) => {
    console.error("Error al obtener datos:", error);
  });
