const _0x16bbcf = _0x79a1;
(function (_0x3380a1, _0x539c7a) {
  const _0x1de223 = _0x79a1,
    _0x11b011 = _0x3380a1();
  while (!![]) {
    try {
      const _0x543b6d =
        (parseInt(_0x1de223(0x199)) / 0x1) *
          (-parseInt(_0x1de223(0x1a3)) / 0x2) +
        (parseInt(_0x1de223(0x19c)) / 0x3) *
          (-parseInt(_0x1de223(0x19f)) / 0x4) +
        (-parseInt(_0x1de223(0x1a6)) / 0x5) *
          (-parseInt(_0x1de223(0x1a2)) / 0x6) +
        (-parseInt(_0x1de223(0x1a4)) / 0x7) *
          (parseInt(_0x1de223(0x191)) / 0x8) +
        parseInt(_0x1de223(0x193)) / 0x9 +
        parseInt(_0x1de223(0x197)) / 0xa +
        (-parseInt(_0x1de223(0x1a5)) / 0xb) *
          (-parseInt(_0x1de223(0x18e)) / 0xc);
      if (_0x543b6d === _0x539c7a) break;
      else _0x11b011["push"](_0x11b011["shift"]());
    } catch (_0x5c74c5) {
      _0x11b011["push"](_0x11b011["shift"]());
    }
  }
})(_0xb7af, 0xcc790);
function _0xb7af() {
  const _0x14e1f4 = [
    "addEventListener",
    "99380GTYPcQ",
    "status",
    "11setGzb",
    "correo",
    "POST",
    "1302qdTGAh",
    "formulario",
    "password",
    "8488dwhkAa",
    "error",
    "registro",
    "533406mAuXGy",
    "80834fVxvWs",
    "42HaJQQT",
    "55tTKapz",
    "10qsZmUB",
    "add",
    "value",
    "submit",
    "getElementById",
    "BCc411DnzM!-tlo3M#@uF0ffUMdMnfV!3ic3HTzKoSqwtjvurz52JRJ2kkKb!Iz$",
    "Error\x20en\x20la\x20solicitud:",
    "https://sheet.best/api/sheets/4aa30fca-a8c5-4cde-a04d-592e91766c93",
    "6924972cAeLlR",
    "application/json",
    "cors",
    "1305296QYnHQN",
    "telefono",
    "979938JhpaLw",
    "nombre",
    "stringify",
  ];
  _0xb7af = function () {
    return _0x14e1f4;
  };
  return _0xb7af();
}
function _0x79a1(_0x3b0dee, _0x447521) {
  const _0xb7af9f = _0xb7af();
  return (
    (_0x79a1 = function (_0x79a141, _0x41da91) {
      _0x79a141 = _0x79a141 - 0x18b;
      let _0xf20e91 = _0xb7af9f[_0x79a141];
      return _0xf20e91;
    }),
    _0x79a1(_0x3b0dee, _0x447521)
  );
}
const formulario = document[_0x16bbcf(0x1aa)](_0x16bbcf(0x19d)),
  registro = document[_0x16bbcf(0x1aa)](_0x16bbcf(0x1a1)),
  exito = document["getElementById"]("exito");
formulario[_0x16bbcf(0x196)](_0x16bbcf(0x1a9), async (_0x4981e4) => {
  const _0x212ead = _0x16bbcf;
  _0x4981e4["preventDefault"]();
  const _0x5d2518 = _0x212ead(0x18b),
    _0x3ed655 = {
      Nombre: formulario[_0x212ead(0x194)][_0x212ead(0x1a8)],
      Correo: formulario[_0x212ead(0x19a)][_0x212ead(0x1a8)],
      Telefono: formulario[_0x212ead(0x192)]["value"],
      Password: formulario[_0x212ead(0x19e)][_0x212ead(0x1a8)],
    };
  try {
    const _0x361809 = await fetch(_0x212ead(0x18d), {
      method: _0x212ead(0x19b),
      mode: _0x212ead(0x190),
      headers: { "Content-Type": _0x212ead(0x18f), "X-Api-Key": _0x5d2518 },
      body: JSON[_0x212ead(0x195)](_0x3ed655),
    });
    _0x361809["ok"]
      ? (registro["classList"]["remove"]("activo"),
        exito["classList"][_0x212ead(0x1a7)]("activo"))
      : console[_0x212ead(0x1a0)](
          _0x212ead(0x18c),
          _0x361809[_0x212ead(0x198)],
          _0x361809["statusText"]
        );
  } catch (_0x1f424e) {
    console[_0x212ead(0x1a0)]("Error\x20en\x20la\x20solicitud:", _0x1f424e);
  }
});
