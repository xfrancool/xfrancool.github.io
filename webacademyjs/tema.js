const _0x47fa3e = _0x446c;
(function (_0x20f1f0, _0x34343c) {
  const _0x54b849 = _0x446c,
    _0x3ea08d = _0x20f1f0();
  while (!![]) {
    try {
      const _0x265ea0 =
        parseInt(_0x54b849(0xeb)) / 0x1 +
        parseInt(_0x54b849(0xec)) / 0x2 +
        (-parseInt(_0x54b849(0xb7)) / 0x3) * (parseInt(_0x54b849(0xfc)) / 0x4) +
        (parseInt(_0x54b849(0xba)) / 0x5) * (parseInt(_0x54b849(0xb9)) / 0x6) +
        -parseInt(_0x54b849(0xd8)) / 0x7 +
        (parseInt(_0x54b849(0xde)) / 0x8) * (-parseInt(_0x54b849(0xcb)) / 0x9) +
        (-parseInt(_0x54b849(0xdc)) / 0xa) * (-parseInt(_0x54b849(0xcf)) / 0xb);
      if (_0x265ea0 === _0x34343c) break;
      else _0x3ea08d["push"](_0x3ea08d["shift"]());
    } catch (_0x1c9798) {
      _0x3ea08d["push"](_0x3ea08d["shift"]());
    }
  }
})(_0x5855, 0x2a146);
function _0x5855() {
  const _0x1d62ea = [
    "20ruMiWM",
    "blue",
    "appendChild",
    "https://script.google.com/macros/s/AKfycbzRVx81o8JWhV40Ev0q1pF0khweIvCO-suO_ja0FBhzc5WacjDiLOGsvK3RQATsExt9/exec",
    "flex",
    "input",
    "innerHTML",
    "Error\x20al\x20cargar\x20los\x20datos",
    "includes",
    "getFullYear",
    "backgroundColor",
    "querySelectorAll",
    "createElement",
    "getElementById",
    "174009caBWRJ",
    "append",
    "60NXxVSi",
    "83465VKqJUd",
    "isArray",
    "message",
    ".click",
    "change",
    "firstChild",
    "Error!",
    "https://script.google.com/macros/s/AKfycbyDA9IFHCUx--MCwnkga60EP23m3qCFEXy151yp8TKdOYoihfTm0pnAesxcoKsahyq-pw/exec",
    "tema",
    "fechaEstudio",
    "forms",
    "json",
    "success",
    "createTextNode",
    "map",
    "getDate",
    "getMinutes",
    "7281jgWezQ",
    "preventDefault",
    "getHours",
    "label",
    "484arbODq",
    "display",
    "filter",
    "alumnoSelect",
    "option",
    "textContent",
    "insertBefore",
    "Error\x20al\x20cargar\x20la\x20lista\x20de\x20alumnos",
    "temasCompletados",
    "1382276EBVuFB",
    "querySelector",
    "new",
    "length",
    "126890QyFZbf",
    "stringify",
    "2328dwUYlf",
    "value",
    "alumno",
    "temas",
    "type",
    "from",
    "then",
    "¡El\x20estudio\x20de\x20",
    "Error\x20al\x20cargar\x20los\x20temas\x20del\x20alumno",
    "forEach",
    "https://script.googleusercontent.com/macros/echo?user_content_key=fY7gilxG5XJCGbns547P7jKy47Cu0BkotIwIehjM0_2deWga_06OjOidm7WNl3Z0DIN7VLVYSRb83WkPY1pQ-1g7XHDMEr4xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFISOT6Fuz1rMLa2iS0A-0KL3jEPmuFWiERrP2f30QZvhMoij_TnZTDpGs0RfTEIwT-84VgORRoswH5-xw-sixILuHeW2Czjfdz9Jw9Md8uu&lib=MlKld03Jk9xk9m_iTqocjLsBqL84eR7w3",
    "checkbox",
    "toLowerCase",
    "121757NIdmDO",
    "96514sXTAwO",
    "fire",
    "style",
    "error",
    "disabled",
    "temasFaltantes",
    "getMonth",
    "none",
    "catch",
    "selectedIndex",
    "text",
    "\x20se\x20registro\x20con\x20éxito\x20en\x20la\x20Base\x20de\x20Datos!",
    "numeroEstudiosCompletadosValor",
    "url",
    "getElementsByTagName",
    "addEventListener",
  ];
  _0x5855 = function () {
    return _0x1d62ea;
  };
  return _0x5855();
}
const apiUrl = _0x47fa3e(0xff),
  alumnoSelect = document[_0x47fa3e(0xb6)]("alumnoSelect"),
  temasCompletados = document[_0x47fa3e(0xb6)](_0x47fa3e(0xd7)),
  temasFaltantes = document[_0x47fa3e(0xb6)](_0x47fa3e(0xf1)),
  numeroEstudiosCompletados = document["getElementById"](_0x47fa3e(0xf8)),
  numeroEstudiosFaltantes = document[_0x47fa3e(0xb6)](
    "numeroEstudiosFaltantesValor"
  );
let alumnosActivos = [];
fetch(_0x47fa3e(0xe8))
  [_0x47fa3e(0xe4)]((_0x514f72) => _0x514f72[_0x47fa3e(0xc5)]())
  [_0x47fa3e(0xe4)]((_0x43a136) => {
    const _0x575a16 = _0x47fa3e;
    alumnosActivos = _0x43a136["map"]((_0x33aae7) => _0x33aae7["Nombre"]);
    const _0x69679a = ["Grupal\x20Presencial"];
    (alumnosActivos = alumnosActivos[_0x575a16(0xd1)](
      (_0x50fcc5) => !_0x69679a["includes"](_0x50fcc5)
    )),
      !Array[_0x575a16(0xbb)](alumnosActivos) && (alumnosActivos = []);
  })
  [_0x47fa3e(0xf4)]((_0x42f4c7) =>
    console[_0x47fa3e(0xef)](_0x47fa3e(0x103), _0x42f4c7)
  );
function cargarAlumnos() {
  const _0x81509b = _0x47fa3e;
  fetch(apiUrl)
    [_0x81509b(0xe4)]((_0x507a01) => _0x507a01[_0x81509b(0xc5)]())
    [_0x81509b(0xe4)]((_0x46779c) => {
      const _0x4f6256 = _0x81509b,
        _0x4b106d = [
          ...new Set(
            _0x46779c[_0x4f6256(0xc8)]((_0x3ce44b) => _0x3ce44b["alumno"])
          ),
        ],
        _0x344739 = _0x4b106d[_0x4f6256(0xd1)]((_0x1a3ffc) =>
          alumnosActivos["includes"](_0x1a3ffc)
        );
      (alumnoSelect[_0x4f6256(0x102)] = ""),
        _0x344739["forEach"]((_0x31db7b) => {
          const _0x83065d = _0x4f6256,
            _0x3d8353 = document[_0x83065d(0xb5)](_0x83065d(0xd3));
          (_0x3d8353[_0x83065d(0xdf)] = _0x31db7b),
            (_0x3d8353[_0x83065d(0xd4)] = _0x31db7b),
            alumnoSelect[_0x83065d(0xfe)](_0x3d8353);
        });
    })
    [_0x81509b(0xf4)]((_0x7aa09d) =>
      console[_0x81509b(0xef)](_0x81509b(0xd6), _0x7aa09d)
    );
}
cargarAlumnos();
function cargarTemas(_0x391774) {
  const _0x5c0ef6 = _0x47fa3e;
  fetch(apiUrl)
    [_0x5c0ef6(0xe4)]((_0x41f069) => _0x41f069[_0x5c0ef6(0xc5)]())
    [_0x5c0ef6(0xe4)]((_0x34e924) => {
      const _0xda946 = _0x5c0ef6,
        _0x1fa1d3 = _0x34e924[_0xda946(0xd1)](
          (_0x46186e) => _0x46186e[_0xda946(0xe0)] === _0x391774
        )[_0xda946(0xc8)]((_0x4a3672) => _0x4a3672[_0xda946(0xc2)]),
        _0x3f9f0d = [
          ...new Set(
            _0x34e924[_0xda946(0xc8)]((_0x262dff) => _0x262dff[_0xda946(0xc2)])
          ),
        ],
        _0x5a6b8a = _0x3f9f0d[_0xda946(0xd1)](
          (_0x51fe61) => !_0x1fa1d3[_0xda946(0x104)](_0x51fe61)
        );
      (numeroEstudiosCompletados["textContent"] = _0x1fa1d3[_0xda946(0xdb)]),
        (numeroEstudiosFaltantes["textContent"] = _0x5a6b8a[_0xda946(0xdb)]),
        (temasCompletados["innerHTML"] = ""),
        (temasFaltantes[_0xda946(0x102)] = ""),
        _0x1fa1d3[_0xda946(0xe7)]((_0x5163b5) => {
          const _0x428ce0 = _0xda946,
            _0x3d86c0 = document[_0x428ce0(0xb5)]("li");
          (_0x3d86c0[_0x428ce0(0xd4)] = "" + _0x5163b5),
            temasCompletados[_0x428ce0(0xd5)](
              _0x3d86c0,
              temasCompletados[_0x428ce0(0xbf)]
            );
        }),
        _0x5a6b8a[_0xda946(0xe7)]((_0x2ac24b) => {
          const _0x5d5b14 = _0xda946,
            _0x4fcf10 = document[_0x5d5b14(0xb5)](_0x5d5b14(0xce)),
            _0x483d6a = document[_0x5d5b14(0xb5)]("input");
          (_0x483d6a[_0x5d5b14(0xe2)] = _0x5d5b14(0xe9)),
            (_0x483d6a["name"] = _0x5d5b14(0xc2)),
            (_0x483d6a[_0x5d5b14(0xdf)] = _0x2ac24b),
            _0x4fcf10[_0x5d5b14(0xfe)](_0x483d6a),
            _0x4fcf10[_0x5d5b14(0xfe)](
              document[_0x5d5b14(0xc7)]("" + _0x2ac24b)
            ),
            temasFaltantes[_0x5d5b14(0xfe)](_0x4fcf10);
        });
    })
    ["catch"]((_0xf49f60) =>
      console[_0x5c0ef6(0xef)](_0x5c0ef6(0xe6), _0xf49f60)
    );
}
alumnoSelect["addEventListener"](_0x47fa3e(0xbe), () => {
  const _0x4498a5 = _0x47fa3e,
    _0x4aea6f = alumnoSelect[_0x4498a5(0xdf)];
  cargarTemas(_0x4aea6f);
});
const inputBusqueda = document[_0x47fa3e(0xb6)]("busqueda");
inputBusqueda[_0x47fa3e(0xfb)](_0x47fa3e(0x101), () => {
  const _0x4c40e4 = _0x47fa3e,
    _0x496a42 = inputBusqueda[_0x4c40e4(0xdf)][_0x4c40e4(0xea)](),
    _0x4fe7c5 = document[_0x4c40e4(0xb6)](_0x4c40e4(0xd7)),
    _0x5a4b05 = document[_0x4c40e4(0xb6)]("temasFaltantes"),
    _0x56addf = _0x4fe7c5[_0x4c40e4(0xfa)]("li");
  Array[_0x4c40e4(0xe3)](_0x56addf)[_0x4c40e4(0xe7)]((_0x19752a) => {
    const _0x543117 = _0x4c40e4,
      _0x50345c = _0x19752a[_0x543117(0xd4)][_0x543117(0xea)](),
      _0x28eee6 = _0x50345c[_0x543117(0x104)](_0x496a42);
    _0x19752a[_0x543117(0xee)][_0x543117(0xd0)] = _0x28eee6
      ? _0x543117(0x100)
      : _0x543117(0xf3);
  });
  const _0xa88323 = _0x5a4b05["getElementsByTagName"](_0x4c40e4(0xce));
  Array["from"](_0xa88323)[_0x4c40e4(0xe7)]((_0x567fff) => {
    const _0x226fe9 = _0x4c40e4,
      _0x40f937 = _0x567fff[_0x226fe9(0xd4)]["toLowerCase"](),
      _0xec10ba = _0x40f937[_0x226fe9(0x104)](_0x496a42);
    _0x567fff[_0x226fe9(0xee)][_0x226fe9(0xd0)] = _0xec10ba
      ? "flex"
      : _0x226fe9(0xf3);
  });
});
const form = document[_0x47fa3e(0xc4)]["temas"],
  selectAviso = document[_0x47fa3e(0xb6)](_0x47fa3e(0xd2)),
  fechaEstudioInput = document[_0x47fa3e(0xb6)](_0x47fa3e(0xc3)),
  newInput = document[_0x47fa3e(0xb6)](_0x47fa3e(0xda)),
  link = document[_0x47fa3e(0xb6)](_0x47fa3e(0xf9));
function _0x446c(_0x20ca92, _0x3f931c) {
  const _0x5855bc = _0x5855();
  return (
    (_0x446c = function (_0x446c9f, _0x5dd78d) {
      _0x446c9f = _0x446c9f - 0xb2;
      let _0x49286d = _0x5855bc[_0x446c9f];
      return _0x49286d;
    }),
    _0x446c(_0x20ca92, _0x3f931c)
  );
}
form[_0x47fa3e(0xfb)]("submit", (_0x399f30) => {
  const _0x1887e8 = _0x47fa3e;
  _0x399f30[_0x1887e8(0xcc)]();
  const _0x40af59 =
      selectAviso["options"][selectAviso[_0x1887e8(0xf5)]][_0x1887e8(0xf6)],
    _0x1544f8 = new Date(),
    _0x5be550 = _0x1544f8[_0x1887e8(0xc9)](),
    _0x23cf8e = _0x1544f8[_0x1887e8(0xf2)]() + 0x1,
    _0x330fe7 = _0x1544f8[_0x1887e8(0xb2)](),
    _0x492176 = _0x1544f8[_0x1887e8(0xcd)](),
    _0x5d033e = _0x1544f8[_0x1887e8(0xca)](),
    _0x17a011 =
      _0x5be550 +
      "/" +
      _0x23cf8e +
      "/" +
      _0x330fe7 +
      "\x20" +
      _0x492176 +
      ":" +
      _0x5d033e;
  fechaEstudioInput["value"] = _0x17a011;
  const _0xa1a0ed = new FormData(form);
  _0xa1a0ed[_0x1887e8(0xb8)](_0x1887e8(0xe0), _0x40af59);
  const _0x41b957 = Array[_0x1887e8(0xe3)](
    form[_0x1887e8(0xb4)]("input[type=\x22checkbox\x22]:checked")
  )[_0x1887e8(0xc8)]((_0x42ac35) => _0x42ac35[_0x1887e8(0xdf)]);
  _0xa1a0ed[_0x1887e8(0xb8)](_0x1887e8(0xe1), JSON[_0x1887e8(0xdd)](_0x41b957)),
    _0xa1a0ed[_0x1887e8(0xb8)](_0x1887e8(0xda), newInput[_0x1887e8(0xdf)]),
    _0xa1a0ed["append"]("url", link["value"]),
    (document[_0x1887e8(0xd9)](_0x1887e8(0xbd))[_0x1887e8(0xf0)] = !![]),
    (document[_0x1887e8(0xd9)](_0x1887e8(0xbd))["style"][_0x1887e8(0xb3)] =
      _0x1887e8(0xfd)),
    (document["querySelector"](_0x1887e8(0xbd))[_0x1887e8(0xee)]["color"] =
      "white"),
    fetch(form["action"], { method: "POST", body: _0xa1a0ed })
      [_0x1887e8(0xe4)]((_0x3b1f18) => {
        const _0x56db93 = _0x1887e8;
        if (_0x3b1f18["ok"])
          return fetch(_0x56db93(0xc1), { method: "POST", body: _0xa1a0ed });
        else
          throw new Error("La\x20primera\x20solicitud\x20no\x20tuvo\x20éxito");
      })
      [_0x1887e8(0xe4)]((_0x22a271) => {
        const _0x1cfe0d = _0x1887e8;
        Swal[_0x1cfe0d(0xed)](
          "Notificado",
          _0x1cfe0d(0xe5) + _0x40af59 + _0x1cfe0d(0xf7),
          _0x1cfe0d(0xc6)
        ),
          setTimeout(() => {
            location["reload"]();
          }, 0x5dc);
      })
      ["catch"]((_0x58ef8c) =>
        console[_0x1887e8(0xef)](_0x1887e8(0xc0), _0x58ef8c[_0x1887e8(0xbc)])
      );
});
