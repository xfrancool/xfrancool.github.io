function _0x1931(_0xbda3c3, _0x529147) {
  const _0x1575f0 = _0x1575();
  return (
    (_0x1931 = function (_0x193176, _0x37da42) {
      _0x193176 = _0x193176 - 0x199;
      let _0x3637f6 = _0x1575f0[_0x193176];
      return _0x3637f6;
    }),
    _0x1931(_0xbda3c3, _0x529147)
  );
}
const _0x3f48c9 = _0x1931;
(function (_0x525164, _0x535488) {
  const _0x2d5834 = _0x1931,
    _0x1d7b8e = _0x525164();
  while (!![]) {
    try {
      const _0x2366af =
        (-parseInt(_0x2d5834(0x1a8)) / 0x1) *
          (-parseInt(_0x2d5834(0x19d)) / 0x2) +
        (-parseInt(_0x2d5834(0x19a)) / 0x3) *
          (parseInt(_0x2d5834(0x19c)) / 0x4) +
        (parseInt(_0x2d5834(0x1a6)) / 0x5) *
          (parseInt(_0x2d5834(0x1b9)) / 0x6) +
        -parseInt(_0x2d5834(0x1b6)) / 0x7 +
        (-parseInt(_0x2d5834(0x1b2)) / 0x8) *
          (parseInt(_0x2d5834(0x1a0)) / 0x9) +
        (-parseInt(_0x2d5834(0x1aa)) / 0xa) *
          (parseInt(_0x2d5834(0x1ac)) / 0xb) +
        parseInt(_0x2d5834(0x1af)) / 0xc;
      if (_0x2366af === _0x535488) break;
      else _0x1d7b8e["push"](_0x1d7b8e["shift"]());
    } catch (_0x2f67eb) {
      _0x1d7b8e["push"](_0x1d7b8e["shift"]());
    }
  }
})(_0x1575, 0xd1a24);
const formulario = document["getElementById"]("formulario"),
  registro = document[_0x3f48c9(0x199)](_0x3f48c9(0x1a4)),
  exito = document["getElementById"](_0x3f48c9(0x1a3));
formulario[_0x3f48c9(0x1a9)](_0x3f48c9(0x19f), async (_0x194519) => {
  const _0x116769 = _0x3f48c9;
  _0x194519[_0x116769(0x1a7)]();
  const _0xa2c9ac = _0x116769(0x1b0),
    _0x4de215 = {
      Nombre: formulario[_0x116769(0x1b8)][_0x116769(0x1b7)],
      Correo: formulario[_0x116769(0x1a2)][_0x116769(0x1b7)],
      Telefono: formulario[_0x116769(0x19b)][_0x116769(0x1b7)],
      Usuario: formulario[_0x116769(0x1a5)][_0x116769(0x1b7)],
      Password: formulario[_0x116769(0x1ad)]["value"],
    };
  try {
    const _0x242110 = await fetch(_0x116769(0x1ae), {
      method: _0x116769(0x1b3),
      mode: "cors",
      headers: { "Content-Type": "application/json", "X-Api-Key": _0xa2c9ac },
      body: JSON["stringify"](_0x4de215),
    });
    _0x242110["ok"]
      ? (registro[_0x116769(0x1ab)][_0x116769(0x1b1)](_0x116769(0x1b4)),
        exito["classList"]["add"](_0x116769(0x1b4)))
      : console[_0x116769(0x1a1)](
          _0x116769(0x1b5),
          _0x242110[_0x116769(0x19e)],
          _0x242110["statusText"]
        );
  } catch (_0x353a34) {
    console["error"]("Error\x20en\x20la\x20solicitud:", _0x353a34);
  }
});
function _0x1575() {
  const _0x2b2fad = [
    "82865bjbpLN",
    "preventDefault",
    "147464NrOHxR",
    "addEventListener",
    "2410Nblqyo",
    "classList",
    "70807ohNzOJ",
    "password",
    "https://sheet.best/api/sheets/4aa30fca-a8c5-4cde-a04d-592e91766c93",
    "42042516XVywXM",
    "BCc411DnzM!-tlo3M#@uF0ffUMdMnfV!3ic3HTzKoSqwtjvurz52JRJ2kkKb!Iz$",
    "remove",
    "1264aVOzSP",
    "POST",
    "activo",
    "Error\x20en\x20la\x20solicitud:",
    "1004430xDxtfn",
    "value",
    "nombre",
    "318XdmQGj",
    "getElementById",
    "3550617YiQmtr",
    "telefono",
    "4JqzsrR",
    "2Ckuynl",
    "status",
    "submit",
    "45135snYnOA",
    "error",
    "correo",
    "exito",
    "registro",
    "usuario",
  ];
  _0x1575 = function () {
    return _0x2b2fad;
  };
  return _0x1575();
}
