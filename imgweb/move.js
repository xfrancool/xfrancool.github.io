function login() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("password").value;
  btn = document.getElementById("loading");

  if (user == "xfrancool" && pass == "230596") {
    window.location = "inicio/inicio.html";
  } else if (user == "elimaryarg" && pass == "hola12") {
    window.location = "inicio/inicio.html";
  } else {
    Swal.fire({
      title: "Oops...",
      text: "Por favor, ingrese usuario y contraseña correctos.",
    });

    btn.classList.remove("class1");
    btn.classList.add("class2");
  }
}
