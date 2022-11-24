function login() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("password").value;
  btn = document.getElementById("loading");

  if (user == "xfrancool" && pass == "230596") {
    window.location = "assets/inicio.html";
  } else if (user == "Invitado" && pass == "capa2022") {
    window.location = "assets/user/invitado/invitado.html";
  } else {
    alert("Por favor, ingrese usuario y contraseña corectos");

    btn.classList.remove("class1");
    btn.classList.add("class2");
  }
}
