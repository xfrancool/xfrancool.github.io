function _0x5203(_0x5870c8, _0x1929f7) {
  const _0x51f05e = _0x51f0();
  return (
    (_0x5203 = function (_0x520374, _0x13b21a) {
      _0x520374 = _0x520374 - 0x193;
      let _0x235bcd = _0x51f05e[_0x520374];
      return _0x235bcd;
    }),
    _0x5203(_0x5870c8, _0x1929f7)
  );
}
const _0x3a004f = _0x5203;
(function (_0x4bff9d, _0x5c7bf6) {
  const _0x36ae5c = _0x5203,
    _0x752b89 = _0x4bff9d();
  while (!![]) {
    try {
      const _0x304c74 =
        (parseInt(_0x36ae5c(0x1aa)) / 0x1) *
          (-parseInt(_0x36ae5c(0x1ca)) / 0x2) +
        parseInt(_0x36ae5c(0x1c0)) / 0x3 +
        (parseInt(_0x36ae5c(0x1d1)) / 0x4) *
          (parseInt(_0x36ae5c(0x1c6)) / 0x5) +
        -parseInt(_0x36ae5c(0x19f)) / 0x6 +
        (parseInt(_0x36ae5c(0x19a)) / 0x7) *
          (parseInt(_0x36ae5c(0x1e1)) / 0x8) +
        (-parseInt(_0x36ae5c(0x1a4)) / 0x9) *
          (parseInt(_0x36ae5c(0x1a3)) / 0xa) +
        -parseInt(_0x36ae5c(0x195)) / 0xb;
      if (_0x304c74 === _0x5c7bf6) break;
      else _0x752b89["push"](_0x752b89["shift"]());
    } catch (_0x1a4769) {
      _0x752b89["push"](_0x752b89["shift"]());
    }
  }
})(_0x51f0, 0x3b080);
function _0x51f0() {
  const _0x2c011e = [
    "getElementsByTagName",
    "catch",
    "addEventListener",
    "forEach",
    "forms",
    "innerHTML",
    "display",
    "La\x20primera\x20solicitud\x20no\x20tuvo\x20éxito",
    "message",
    "none",
    "Error\x20al\x20cargar\x20los\x20datos",
    "disabled",
    "json",
    "Notificado",
    "997992fZOiNi",
    "appendChild",
    "from",
    ".click",
    "getFullYear",
    "preventDefault",
    "265GqwBMM",
    "flex",
    "length",
    "https://script.googleusercontent.com/macros/echo?user_content_key=fY7gilxG5XJCGbns547P7jKy47Cu0BkotIwIehjM0_2deWga_06OjOidm7WNl3Z0DIN7VLVYSRb83WkPY1pQ-1g7XHDMEr4xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFISOT6Fuz1rMLa2iS0A-0KL3jEPmuFWiERrP2f30QZvhMoij_TnZTDpGs0RfTEIwT-84VgORRoswH5-xw-sixILuHeW2Czjfdz9Jw9Md8uu&lib=MlKld03Jk9xk9m_iTqocjLsBqL84eR7w3",
    "19736IEgqOM",
    "checkbox",
    "createTextNode",
    "map",
    "then",
    "tema",
    "url",
    "17924pxdzsP",
    "label",
    "temasCompletados",
    "temasFaltantes",
    "textContent",
    "numeroEstudiosFaltantesValor",
    "reload",
    "Error\x20al\x20cargar\x20los\x20temas\x20del\x20alumno",
    "log",
    "new",
    "getHours",
    "blue",
    "getElementById",
    "firstChild",
    "filter",
    "insertBefore",
    "92440jsheel",
    "includes",
    "fechaEstudio",
    "POST",
    "input[type=\x22checkbox\x22]:checked",
    "busqueda",
    "value",
    "¡El\x20estudio\x20de\x20",
    "style",
    "toLowerCase",
    "createElement",
    "1189903XJbAaE",
    "backgroundColor",
    "isArray",
    "Error\x20al\x20cargar\x20la\x20lista\x20de\x20alumnos",
    "getDate",
    "259sJZPRe",
    "\x20se\x20registro\x20con\x20éxito\x20en\x20la\x20Base\x20de\x20Datos!",
    "submit",
    "querySelectorAll",
    "temas",
    "1464378trPhOC",
    "error",
    "alumno",
    "https://script.google.com/macros/s/AKfycbyDA9IFHCUx--MCwnkga60EP23m3qCFEXy151yp8TKdOYoihfTm0pnAesxcoKsahyq-pw/exec",
    "30WiwXoI",
    "1151784YNtipg",
    "text",
    "Nombre",
    "getMonth",
    "https://script.google.com/macros/s/AKfycbzRVx81o8JWhV40Ev0q1pF0khweIvCO-suO_ja0FBhzc5WacjDiLOGsvK3RQATsExt9/exec",
    "action",
    "2rTdEkH",
    "name",
    "alumnoSelect",
    "color",
    "success",
    "append",
    "querySelector",
    "numeroEstudiosCompletadosValor",
  ];
  _0x51f0 = function () {
    return _0x2c011e;
  };
  return _0x51f0();
}
const apiUrl = _0x3a004f(0x1a8),
  alumnoSelect = document[_0x3a004f(0x1dd)](_0x3a004f(0x1ac)),
  temasCompletados = document[_0x3a004f(0x1dd)](_0x3a004f(0x1d3)),
  temasFaltantes = document[_0x3a004f(0x1dd)](_0x3a004f(0x1d4)),
  numeroEstudiosCompletados = document[_0x3a004f(0x1dd)](_0x3a004f(0x1b1)),
  numeroEstudiosFaltantes = document[_0x3a004f(0x1dd)](_0x3a004f(0x1d6));
let alumnosActivos = [];
fetch(_0x3a004f(0x1c9))
  [_0x3a004f(0x1ce)]((_0x57c121) => _0x57c121[_0x3a004f(0x1be)]())
  [_0x3a004f(0x1ce)]((_0x1356f2) => {
    const _0x1d2953 = _0x3a004f;
    alumnosActivos = _0x1356f2[_0x1d2953(0x1cd)](
      (_0x137357) => _0x137357[_0x1d2953(0x1a6)]
    );
    const _0x21e44e = ["Grupal\x20Presencial"];
    (alumnosActivos = alumnosActivos[_0x1d2953(0x1df)](
      (_0x29e476) => !_0x21e44e[_0x1d2953(0x1e2)](_0x29e476)
    )),
      !Array[_0x1d2953(0x197)](alumnosActivos) && (alumnosActivos = []),
      console[_0x1d2953(0x1d9)](alumnosActivos);
  })
  [_0x3a004f(0x1b3)]((_0x5e57cb) =>
    console[_0x3a004f(0x1a0)](_0x3a004f(0x1bc), _0x5e57cb)
  );
function cargarAlumnos() {
  const _0x34aa53 = _0x3a004f;
  fetch(apiUrl)
    [_0x34aa53(0x1ce)]((_0x155fa6) => _0x155fa6["json"]())
    [_0x34aa53(0x1ce)]((_0x1be32a) => {
      const _0x13e3cd = _0x34aa53,
        _0x35f04c = [
          ...new Set(
            _0x1be32a[_0x13e3cd(0x1cd)](
              (_0x326b72) => _0x326b72[_0x13e3cd(0x1a1)]
            )
          ),
        ],
        _0x13369e = _0x35f04c[_0x13e3cd(0x1df)]((_0x1f6294) =>
          alumnosActivos[_0x13e3cd(0x1e2)](_0x1f6294)
        );
      (alumnoSelect[_0x13e3cd(0x1b7)] = ""),
        _0x13369e[_0x13e3cd(0x1b5)]((_0x1e25fa) => {
          const _0x361039 = _0x13e3cd,
            _0x5043b3 = document["createElement"]("option");
          (_0x5043b3["value"] = _0x1e25fa),
            (_0x5043b3[_0x361039(0x1d5)] = _0x1e25fa),
            alumnoSelect[_0x361039(0x1c1)](_0x5043b3);
        });
    })
    ["catch"]((_0x543e57) =>
      console[_0x34aa53(0x1a0)](_0x34aa53(0x198), _0x543e57)
    );
}
cargarAlumnos();
function cargarTemas(_0x16be94) {
  const _0x1767b7 = _0x3a004f;
  fetch(apiUrl)
    [_0x1767b7(0x1ce)]((_0x446bd5) => _0x446bd5[_0x1767b7(0x1be)]())
    [_0x1767b7(0x1ce)]((_0x28e272) => {
      const _0x32a8db = _0x1767b7,
        _0x5555de = _0x28e272[_0x32a8db(0x1df)](
          (_0x1358ef) => _0x1358ef[_0x32a8db(0x1a1)] === _0x16be94
        )[_0x32a8db(0x1cd)]((_0x177d65) => _0x177d65[_0x32a8db(0x1cf)]),
        _0x372c41 = [
          ...new Set(
            _0x28e272[_0x32a8db(0x1cd)]((_0x45a149) => _0x45a149["tema"])
          ),
        ],
        _0x53ae63 = _0x372c41["filter"](
          (_0x5150be) => !_0x5555de[_0x32a8db(0x1e2)](_0x5150be)
        );
      (numeroEstudiosCompletados["textContent"] = _0x5555de[_0x32a8db(0x1c8)]),
        (numeroEstudiosFaltantes[_0x32a8db(0x1d5)] = _0x53ae63["length"]),
        (temasCompletados[_0x32a8db(0x1b7)] = ""),
        (temasFaltantes[_0x32a8db(0x1b7)] = ""),
        _0x5555de[_0x32a8db(0x1b5)]((_0x2c5d25) => {
          const _0x181e72 = _0x32a8db,
            _0x41dfd4 = document[_0x181e72(0x194)]("li");
          (_0x41dfd4[_0x181e72(0x1d5)] = "" + _0x2c5d25),
            temasCompletados[_0x181e72(0x1e0)](
              _0x41dfd4,
              temasCompletados[_0x181e72(0x1de)]
            );
        }),
        _0x53ae63[_0x32a8db(0x1b5)]((_0x238c81) => {
          const _0x1d911e = _0x32a8db,
            _0x1784c9 = document[_0x1d911e(0x194)](_0x1d911e(0x1d2)),
            _0x554748 = document[_0x1d911e(0x194)]("input");
          (_0x554748["type"] = _0x1d911e(0x1cb)),
            (_0x554748[_0x1d911e(0x1ab)] = _0x1d911e(0x1cf)),
            (_0x554748[_0x1d911e(0x1e7)] = _0x238c81),
            _0x1784c9[_0x1d911e(0x1c1)](_0x554748),
            _0x1784c9[_0x1d911e(0x1c1)](
              document[_0x1d911e(0x1cc)]("" + _0x238c81)
            ),
            temasFaltantes[_0x1d911e(0x1c1)](_0x1784c9);
        });
    })
    [_0x1767b7(0x1b3)]((_0x1dcc72) =>
      console[_0x1767b7(0x1a0)](_0x1767b7(0x1d8), _0x1dcc72)
    );
}
alumnoSelect[_0x3a004f(0x1b4)]("change", () => {
  const _0x3f1ceb = _0x3a004f,
    _0x25d522 = alumnoSelect[_0x3f1ceb(0x1e7)];
  cargarTemas(_0x25d522);
});
const inputBusqueda = document[_0x3a004f(0x1dd)](_0x3a004f(0x1e6));
inputBusqueda["addEventListener"]("input", () => {
  const _0x4aa52e = _0x3a004f,
    _0x48145c = inputBusqueda["value"][_0x4aa52e(0x193)](),
    _0x45fd7a = document["getElementById"](_0x4aa52e(0x1d3)),
    _0x198ad7 = document[_0x4aa52e(0x1dd)]("temasFaltantes"),
    _0x9d9775 = _0x45fd7a["getElementsByTagName"]("li");
  Array[_0x4aa52e(0x1c2)](_0x9d9775)[_0x4aa52e(0x1b5)]((_0x1d2127) => {
    const _0x269aa1 = _0x4aa52e,
      _0x597468 = _0x1d2127[_0x269aa1(0x1d5)][_0x269aa1(0x193)](),
      _0x160ce7 = _0x597468[_0x269aa1(0x1e2)](_0x48145c);
    _0x1d2127[_0x269aa1(0x1e9)][_0x269aa1(0x1b8)] = _0x160ce7
      ? _0x269aa1(0x1c7)
      : _0x269aa1(0x1bb);
  });
  const _0x1833b5 = _0x198ad7[_0x4aa52e(0x1b2)]("label");
  Array["from"](_0x1833b5)[_0x4aa52e(0x1b5)]((_0x1187c4) => {
    const _0x3ec7a8 = _0x4aa52e,
      _0x5a16ab = _0x1187c4["textContent"][_0x3ec7a8(0x193)](),
      _0x2bdb1e = _0x5a16ab["includes"](_0x48145c);
    _0x1187c4[_0x3ec7a8(0x1e9)][_0x3ec7a8(0x1b8)] = _0x2bdb1e
      ? _0x3ec7a8(0x1c7)
      : _0x3ec7a8(0x1bb);
  });
});
const form = document[_0x3a004f(0x1b6)][_0x3a004f(0x19e)],
  selectAviso = document[_0x3a004f(0x1dd)]("alumnoSelect"),
  fechaEstudioInput = document[_0x3a004f(0x1dd)](_0x3a004f(0x1e3)),
  newInput = document["getElementById"](_0x3a004f(0x1da)),
  link = document[_0x3a004f(0x1dd)](_0x3a004f(0x1d0));
form[_0x3a004f(0x1b4)](_0x3a004f(0x19c), (_0x523694) => {
  const _0x2929e7 = _0x3a004f;
  _0x523694[_0x2929e7(0x1c5)]();
  const _0x372b37 =
      selectAviso["options"][selectAviso["selectedIndex"]][_0x2929e7(0x1a5)],
    _0x4fa364 = new Date(),
    _0x4c0f41 = _0x4fa364[_0x2929e7(0x199)](),
    _0x40d29b = _0x4fa364[_0x2929e7(0x1a7)]() + 0x1,
    _0x3599a0 = _0x4fa364[_0x2929e7(0x1c4)](),
    _0x400158 = _0x4fa364[_0x2929e7(0x1db)](),
    _0x1021a2 = _0x4fa364["getMinutes"](),
    _0x5b4dc8 =
      _0x4c0f41 +
      "/" +
      _0x40d29b +
      "/" +
      _0x3599a0 +
      "\x20" +
      _0x400158 +
      ":" +
      _0x1021a2;
  fechaEstudioInput["value"] = _0x5b4dc8;
  const _0x351476 = new FormData(form);
  _0x351476[_0x2929e7(0x1af)]("alumno", _0x372b37);
  const _0x4f58aa = Array[_0x2929e7(0x1c2)](
    form[_0x2929e7(0x19d)](_0x2929e7(0x1e5))
  )[_0x2929e7(0x1cd)]((_0x26195f) => _0x26195f[_0x2929e7(0x1e7)]);
  _0x351476[_0x2929e7(0x1af)](_0x2929e7(0x19e), JSON["stringify"](_0x4f58aa)),
    _0x351476[_0x2929e7(0x1af)](_0x2929e7(0x1da), newInput["value"]),
    _0x351476["append"](_0x2929e7(0x1d0), link[_0x2929e7(0x1e7)]),
    (document[_0x2929e7(0x1b0)](_0x2929e7(0x1c3))[_0x2929e7(0x1bd)] = !![]),
    (document["querySelector"](_0x2929e7(0x1c3))[_0x2929e7(0x1e9)][
      _0x2929e7(0x196)
    ] = _0x2929e7(0x1dc)),
    (document[_0x2929e7(0x1b0)](_0x2929e7(0x1c3))[_0x2929e7(0x1e9)][
      _0x2929e7(0x1ad)
    ] = "white"),
    fetch(form[_0x2929e7(0x1a9)], { method: "POST", body: _0x351476 })
      [_0x2929e7(0x1ce)]((_0x45aa4e) => {
        const _0x2ce095 = _0x2929e7;
        if (_0x45aa4e["ok"])
          return fetch(_0x2ce095(0x1a2), {
            method: _0x2ce095(0x1e4),
            body: _0x351476,
          });
        else throw new Error(_0x2ce095(0x1b9));
      })
      [_0x2929e7(0x1ce)]((_0x3d5968) => {
        const _0x5eb4aa = _0x2929e7;
        Swal["fire"](
          _0x5eb4aa(0x1bf),
          _0x5eb4aa(0x1e8) + _0x372b37 + _0x5eb4aa(0x19b),
          _0x5eb4aa(0x1ae)
        ),
          setTimeout(() => {
            const _0x5bd015 = _0x5eb4aa;
            location[_0x5bd015(0x1d7)]();
          }, 0x5dc);
      })
      ["catch"]((_0x51292d) =>
        console[_0x2929e7(0x1a0)]("Error!", _0x51292d[_0x2929e7(0x1ba)])
      );
});
