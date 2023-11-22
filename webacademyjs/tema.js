function _0x5db4() {
  const _0x1168ee = [
    "141115XAEruE",
    "toLowerCase",
    "then",
    "querySelectorAll",
    "getElementById",
    "getElementsByTagName",
    "createTextNode",
    "innerHTML",
    "temasCompletados",
    "url",
    "3085016cwlbEn",
    "reload",
    "5830XDpZoJ",
    "style",
    "getHours",
    "change",
    "Seleccionar\x20Alumno",
    "getDate",
    ".click",
    "\x20se\x20registro\x20con\x20éxito\x20en\x20la\x20Base\x20de\x20Datos!",
    "POST",
    "append",
    "405824pGzhnc",
    "Error\x20al\x20cargar\x20los\x20temas\x20del\x20alumno",
    "numeroEstudiosCompletadosValor",
    "action",
    "map",
    "type",
    "input",
    "stringify",
    "preventDefault",
    "¡El\x20estudio\x20de\x20",
    "querySelector",
    "value",
    "tema",
    "numeroEstudiosFaltantesValor",
    "https://script.googleusercontent.com/macros/echo?user_content_key=fY7gilxG5XJCGbns547P7jKy47Cu0BkotIwIehjM0_2deWga_06OjOidm7WNl3Z0DIN7VLVYSRb83WkPY1pQ-1g7XHDMEr4xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFISOT6Fuz1rMLa2iS0A-0KL3jEPmuFWiERrP2f30QZvhMoij_TnZTDpGs0RfTEIwT-84VgORRoswH5-xw-sixILuHeW2Czjfdz9Jw9Md8uu&lib=MlKld03Jk9xk9m_iTqocjLsBqL84eR7w3",
    "color",
    "label",
    "508218AJUgsh",
    "appendChild",
    "https://script.google.com/macros/s/AKfycbyDA9IFHCUx--MCwnkga60EP23m3qCFEXy151yp8TKdOYoihfTm0pnAesxcoKsahyq-pw/exec",
    "Error!",
    "includes",
    "message",
    "json",
    "29944tqyXJR",
    "none",
    "new",
    "error",
    "catch",
    "Error\x20al\x20cargar\x20la\x20lista\x20de\x20alumnos",
    "options",
    "flex",
    "forms",
    "getMinutes",
    "fechaEstudio",
    "option",
    "filter",
    "temasFaltantes",
    "66JGOmtj",
    "length",
    "Error\x20al\x20cargar\x20los\x20datos",
    "621628pmzdcn",
    "from",
    "display",
    "createElement",
    "forEach",
    "success",
    "textContent",
    "fire",
    "La\x20primera\x20solicitud\x20no\x20tuvo\x20éxito",
    "name",
    "firstChild",
    "addEventListener",
    "alumnoSelect",
    "temas",
    "getMonth",
    "blue",
    "getFullYear",
    "checkbox",
    "https://script.google.com/macros/s/AKfycbzRVx81o8JWhV40Ev0q1pF0khweIvCO-suO_ja0FBhzc5WacjDiLOGsvK3RQATsExt9/exec",
  ];
  _0x5db4 = function () {
    return _0x1168ee;
  };
  return _0x5db4();
}
const _0x48370c = _0x1f46;
(function (_0x274114, _0x3b9dc4) {
  const _0x8c334e = _0x1f46,
    _0x1750f2 = _0x274114();
  while (!![]) {
    try {
      const _0x3eea23 =
        -parseInt(_0x8c334e(0xf7)) / 0x1 +
        -parseInt(_0x8c334e(0xbb)) / 0x2 +
        parseInt(_0x8c334e(0xcc)) / 0x3 +
        -parseInt(_0x8c334e(0xd3)) / 0x4 +
        (parseInt(_0x8c334e(0x103)) / 0x5) *
          (-parseInt(_0x8c334e(0xe1)) / 0x6) +
        -parseInt(_0x8c334e(0xe4)) / 0x7 +
        parseInt(_0x8c334e(0x101)) / 0x8;
      if (_0x3eea23 === _0x3b9dc4) break;
      else _0x1750f2["push"](_0x1750f2["shift"]());
    } catch (_0x5b0507) {
      _0x1750f2["push"](_0x1750f2["shift"]());
    }
  }
})(_0x5db4, 0x18e02);
const apiUrl = _0x48370c(0xf6),
  alumnoSelect = document[_0x48370c(0xfb)](_0x48370c(0xf0)),
  temasCompletados = document[_0x48370c(0xfb)](_0x48370c(0xff)),
  temasFaltantes = document["getElementById"]("temasFaltantes"),
  numeroEstudiosCompletados = document["getElementById"](_0x48370c(0xbd)),
  numeroEstudiosFaltantes = document["getElementById"](_0x48370c(0xc8));
let alumnosActivos = [];
fetch(_0x48370c(0xc9))
  [_0x48370c(0xf9)]((_0x4d86a3) => _0x4d86a3[_0x48370c(0xd2)]())
  [_0x48370c(0xf9)]((_0x269d8f) => {
    const _0x5d117e = _0x48370c;
    alumnosActivos = _0x269d8f[_0x5d117e(0xbf)](
      (_0x55ee75) => _0x55ee75["Nombre"]
    );
    const _0x3adea5 = ["Grupal\x20Presencial"];
    (alumnosActivos = alumnosActivos[_0x5d117e(0xdf)](
      (_0x1d0865) => !_0x3adea5[_0x5d117e(0xd0)](_0x1d0865)
    )),
      !Array["isArray"](alumnosActivos) && (alumnosActivos = []);
  })
  [_0x48370c(0xd7)]((_0x12f53c) =>
    console[_0x48370c(0xd6)](_0x48370c(0xe3), _0x12f53c)
  );
function cargarAlumnos() {
  const _0x530707 = _0x48370c;
  fetch(apiUrl)
    ["then"]((_0x47462d) => _0x47462d["json"]())
    [_0x530707(0xf9)]((_0x1b73f8) => {
      const _0x285924 = _0x530707,
        _0x537c01 = [
          ...new Set(
            _0x1b73f8[_0x285924(0xbf)]((_0x11e090) => _0x11e090["alumno"])
          ),
        ],
        _0x374ac1 = _0x537c01["filter"]((_0x457c22) =>
          alumnosActivos["includes"](_0x457c22)
        );
      alumnoSelect[_0x285924(0xfe)] = "";
      const _0x1fd62a = document[_0x285924(0xe7)](_0x285924(0xde));
      (_0x1fd62a[_0x285924(0xc6)] = ""),
        (_0x1fd62a[_0x285924(0xea)] = _0x285924(0x107)),
        alumnoSelect[_0x285924(0xcd)](_0x1fd62a),
        _0x374ac1[_0x285924(0xe8)]((_0x5b806d) => {
          const _0x567f0b = _0x285924,
            _0x15fcd8 = document[_0x567f0b(0xe7)]("option");
          (_0x15fcd8[_0x567f0b(0xc6)] = _0x5b806d),
            (_0x15fcd8["textContent"] = _0x5b806d),
            alumnoSelect[_0x567f0b(0xcd)](_0x15fcd8);
        });
    })
    ["catch"]((_0x589296) =>
      console[_0x530707(0xd6)](_0x530707(0xd8), _0x589296)
    );
}
function _0x1f46(_0x51f8da, _0x25a85c) {
  const _0x5db414 = _0x5db4();
  return (
    (_0x1f46 = function (_0x1f4677, _0x2fa84e) {
      _0x1f4677 = _0x1f4677 - 0xbb;
      let _0x5b6082 = _0x5db414[_0x1f4677];
      return _0x5b6082;
    }),
    _0x1f46(_0x51f8da, _0x25a85c)
  );
}
cargarAlumnos();
function cargarTemas(_0xd93c) {
  const _0x4e40f9 = _0x48370c;
  fetch(apiUrl)
    [_0x4e40f9(0xf9)]((_0x3f402c) => _0x3f402c[_0x4e40f9(0xd2)]())
    [_0x4e40f9(0xf9)]((_0x16f80c) => {
      const _0x1fbe3b = _0x4e40f9,
        _0x2e12a7 = _0x16f80c[_0x1fbe3b(0xdf)](
          (_0x4bcd00) => _0x4bcd00["alumno"] === _0xd93c
        )[_0x1fbe3b(0xbf)]((_0x5e01f8) => _0x5e01f8[_0x1fbe3b(0xc7)]),
        _0x2c3671 = [
          ...new Set(
            _0x16f80c[_0x1fbe3b(0xbf)](
              (_0x1aebe4) => _0x1aebe4[_0x1fbe3b(0xc7)]
            )
          ),
        ],
        _0xe0c602 = _0x2c3671[_0x1fbe3b(0xdf)](
          (_0x4e90c3) => !_0x2e12a7[_0x1fbe3b(0xd0)](_0x4e90c3)
        );
      (numeroEstudiosCompletados[_0x1fbe3b(0xea)] = _0x2e12a7["length"]),
        (numeroEstudiosFaltantes[_0x1fbe3b(0xea)] = _0xe0c602[_0x1fbe3b(0xe2)]),
        (temasCompletados[_0x1fbe3b(0xfe)] = ""),
        (temasFaltantes[_0x1fbe3b(0xfe)] = ""),
        _0x2e12a7[_0x1fbe3b(0xe8)]((_0x5ba60f) => {
          const _0x5c2102 = _0x1fbe3b,
            _0x599f30 = document[_0x5c2102(0xe7)]("li");
          (_0x599f30[_0x5c2102(0xea)] = "" + _0x5ba60f),
            temasCompletados["insertBefore"](
              _0x599f30,
              temasCompletados[_0x5c2102(0xee)]
            );
        }),
        _0xe0c602["forEach"]((_0x2b956d) => {
          const _0x5f5a8a = _0x1fbe3b,
            _0x46d64f = document["createElement"](_0x5f5a8a(0xcb)),
            _0x234a99 = document[_0x5f5a8a(0xe7)](_0x5f5a8a(0xc1));
          (_0x234a99[_0x5f5a8a(0xc0)] = _0x5f5a8a(0xf5)),
            (_0x234a99[_0x5f5a8a(0xed)] = _0x5f5a8a(0xc7)),
            (_0x234a99[_0x5f5a8a(0xc6)] = _0x2b956d),
            _0x46d64f["appendChild"](_0x234a99),
            _0x46d64f[_0x5f5a8a(0xcd)](
              document[_0x5f5a8a(0xfd)]("" + _0x2b956d)
            ),
            temasFaltantes["appendChild"](_0x46d64f);
        });
    })
    [_0x4e40f9(0xd7)]((_0x4d71ed) =>
      console["error"](_0x4e40f9(0xbc), _0x4d71ed)
    );
}
alumnoSelect[_0x48370c(0xef)](_0x48370c(0x106), () => {
  const _0x10554f = _0x48370c,
    _0x5a5ade = alumnoSelect[_0x10554f(0xc6)];
  cargarTemas(_0x5a5ade);
});
const inputBusqueda = document[_0x48370c(0xfb)]("busqueda");
inputBusqueda[_0x48370c(0xef)](_0x48370c(0xc1), () => {
  const _0x24d5fd = _0x48370c,
    _0x697d38 = inputBusqueda["value"][_0x24d5fd(0xf8)](),
    _0x371bbf = document[_0x24d5fd(0xfb)](_0x24d5fd(0xff)),
    _0x5439e4 = document[_0x24d5fd(0xfb)](_0x24d5fd(0xe0)),
    _0x49d570 = _0x371bbf[_0x24d5fd(0xfc)]("li");
  Array["from"](_0x49d570)["forEach"]((_0x2d73fd) => {
    const _0x5095ff = _0x24d5fd,
      _0x13a335 = _0x2d73fd[_0x5095ff(0xea)]["toLowerCase"](),
      _0xc269fc = _0x13a335[_0x5095ff(0xd0)](_0x697d38);
    _0x2d73fd[_0x5095ff(0x104)][_0x5095ff(0xe6)] = _0xc269fc
      ? _0x5095ff(0xda)
      : _0x5095ff(0xd4);
  });
  const _0x4f4a01 = _0x5439e4[_0x24d5fd(0xfc)](_0x24d5fd(0xcb));
  Array["from"](_0x4f4a01)["forEach"]((_0x1661a4) => {
    const _0xbd3772 = _0x24d5fd,
      _0x2367e9 = _0x1661a4[_0xbd3772(0xea)]["toLowerCase"](),
      _0x4d40c8 = _0x2367e9[_0xbd3772(0xd0)](_0x697d38);
    _0x1661a4[_0xbd3772(0x104)][_0xbd3772(0xe6)] = _0x4d40c8 ? "flex" : "none";
  });
});
const form = document[_0x48370c(0xdb)][_0x48370c(0xf1)],
  selectAviso = document[_0x48370c(0xfb)]("alumnoSelect"),
  fechaEstudioInput = document[_0x48370c(0xfb)](_0x48370c(0xdd)),
  newInput = document[_0x48370c(0xfb)](_0x48370c(0xd5)),
  link = document[_0x48370c(0xfb)](_0x48370c(0x100));
form[_0x48370c(0xef)]("submit", (_0x1a7030) => {
  const _0x13ffb5 = _0x48370c;
  _0x1a7030[_0x13ffb5(0xc3)]();
  const _0x232e36 =
      selectAviso[_0x13ffb5(0xd9)][selectAviso["selectedIndex"]]["text"],
    _0x14d1d0 = new Date(),
    _0x40e5d6 = _0x14d1d0[_0x13ffb5(0x108)](),
    _0x59d2a5 = _0x14d1d0[_0x13ffb5(0xf2)]() + 0x1,
    _0x2497cb = _0x14d1d0[_0x13ffb5(0xf4)](),
    _0x395149 = _0x14d1d0[_0x13ffb5(0x105)](),
    _0x33f40c = _0x14d1d0[_0x13ffb5(0xdc)](),
    _0x219665 =
      _0x40e5d6 +
      "/" +
      _0x59d2a5 +
      "/" +
      _0x2497cb +
      "\x20" +
      _0x395149 +
      ":" +
      _0x33f40c;
  fechaEstudioInput["value"] = _0x219665;
  const _0x486fd7 = new FormData(form);
  _0x486fd7[_0x13ffb5(0x10c)]("alumno", _0x232e36);
  const _0x1244eb = Array[_0x13ffb5(0xe5)](
    form[_0x13ffb5(0xfa)]("input[type=\x22checkbox\x22]:checked")
  )[_0x13ffb5(0xbf)]((_0x17f478) => _0x17f478[_0x13ffb5(0xc6)]);
  _0x486fd7[_0x13ffb5(0x10c)](
    _0x13ffb5(0xf1),
    JSON[_0x13ffb5(0xc2)](_0x1244eb)
  ),
    _0x486fd7[_0x13ffb5(0x10c)](_0x13ffb5(0xd5), newInput[_0x13ffb5(0xc6)]),
    _0x486fd7[_0x13ffb5(0x10c)]("url", link[_0x13ffb5(0xc6)]),
    (document[_0x13ffb5(0xc5)](_0x13ffb5(0x109))["disabled"] = !![]),
    (document[_0x13ffb5(0xc5)](_0x13ffb5(0x109))["style"]["backgroundColor"] =
      _0x13ffb5(0xf3)),
    (document[_0x13ffb5(0xc5)](_0x13ffb5(0x109))[_0x13ffb5(0x104)][
      _0x13ffb5(0xca)
    ] = "white"),
    fetch(form[_0x13ffb5(0xbe)], { method: _0x13ffb5(0x10b), body: _0x486fd7 })
      [_0x13ffb5(0xf9)]((_0x33f1c0) => {
        const _0x30e36f = _0x13ffb5;
        if (_0x33f1c0["ok"])
          return fetch(_0x30e36f(0xce), { method: "POST", body: _0x486fd7 });
        else throw new Error(_0x30e36f(0xec));
      })
      ["then"]((_0x829ad) => {
        const _0x2eb8aa = _0x13ffb5;
        Swal[_0x2eb8aa(0xeb)](
          "Notificado",
          _0x2eb8aa(0xc4) + _0x232e36 + _0x2eb8aa(0x10a),
          _0x2eb8aa(0xe9)
        ),
          setTimeout(() => {
            const _0x553ed1 = _0x2eb8aa;
            location[_0x553ed1(0x102)]();
          }, 0x5dc);
      })
      [_0x13ffb5(0xd7)]((_0x3e7b14) =>
        console["error"](_0x13ffb5(0xcf), _0x3e7b14[_0x13ffb5(0xd1)])
      );
});
