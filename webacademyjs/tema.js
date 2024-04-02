const _0xa45cdf = _0x552d;
(function (_0x1f1576, _0x3a18e4) {
  const _0x141b8a = _0x552d,
    _0x579219 = _0x1f1576();
  while (!![]) {
    try {
      const _0x450404 =
        parseInt(_0x141b8a(0x133)) / 0x1 +
        (parseInt(_0x141b8a(0x15f)) / 0x2) *
          (-parseInt(_0x141b8a(0x164)) / 0x3) +
        parseInt(_0x141b8a(0x13f)) / 0x4 +
        (parseInt(_0x141b8a(0x166)) / 0x5) *
          (parseInt(_0x141b8a(0x13a)) / 0x6) +
        -parseInt(_0x141b8a(0x165)) / 0x7 +
        (-parseInt(_0x141b8a(0x136)) / 0x8) *
          (parseInt(_0x141b8a(0x128)) / 0x9) +
        (-parseInt(_0x141b8a(0x15e)) / 0xa) *
          (parseInt(_0x141b8a(0x134)) / 0xb);
      if (_0x450404 === _0x3a18e4) break;
      else _0x579219["push"](_0x579219["shift"]());
    } catch (_0x192067) {
      _0x579219["push"](_0x579219["shift"]());
    }
  }
})(_0xefd9, 0x19560);
const apiUrl =
    "https://script.google.com/macros/s/AKfycbzRVx81o8JWhV40Ev0q1pF0khweIvCO-suO_ja0FBhzc5WacjDiLOGsvK3RQATsExt9/exec",
  alumnoSelect = document[_0xa45cdf(0x125)](_0xa45cdf(0x155)),
  temasCompletados = document[_0xa45cdf(0x125)]("temasCompletados"),
  temasFaltantes = document[_0xa45cdf(0x125)](_0xa45cdf(0x123)),
  numeroEstudiosCompletados = document["getElementById"](_0xa45cdf(0x169)),
  numeroEstudiosFaltantes = document[_0xa45cdf(0x125)](_0xa45cdf(0x12d));
let alumnosActivos = [];
fetch(_0xa45cdf(0x11e))
  [_0xa45cdf(0x144)]((_0x1dc4e0) => _0x1dc4e0[_0xa45cdf(0x127)]())
  [_0xa45cdf(0x144)]((_0x4e3a56) => {
    const _0x42a06a = _0xa45cdf;
    alumnosActivos = _0x4e3a56["map"](
      (_0x19f762) => _0x19f762[_0x42a06a(0x137)]
    );
    const _0x6b5009 = [_0x42a06a(0x122)];
    (alumnosActivos = alumnosActivos[_0x42a06a(0x14b)](
      (_0x7cff97) => !_0x6b5009[_0x42a06a(0x15d)](_0x7cff97)
    )),
      !Array[_0x42a06a(0x138)](alumnosActivos) && (alumnosActivos = []),
      console[_0x42a06a(0x153)](alumnosActivos),
      cargarAlumnos();
  })
  [_0xa45cdf(0x121)]((_0x25aec6) =>
    console[_0xa45cdf(0x160)](_0xa45cdf(0x14e), _0x25aec6)
  );
function cargarAlumnos() {
  const _0x443c9a = _0xa45cdf;
  fetch(apiUrl)
    [_0x443c9a(0x144)]((_0x4a2db8) => _0x4a2db8["json"]())
    [_0x443c9a(0x144)]((_0x24da0c) => {
      const _0x3c4fec = _0x443c9a,
        _0x1ba330 = [
          ...new Set(
            _0x24da0c[_0x3c4fec(0x130)]((_0x3e802a) => _0x3e802a["alumno"])
          ),
        ],
        _0x33625b = _0x1ba330[_0x3c4fec(0x14b)]((_0x26560d) =>
          alumnosActivos[_0x3c4fec(0x15d)](_0x26560d)
        );
      alumnoSelect[_0x3c4fec(0x163)] = "";
      const _0x98f852 = document[_0x3c4fec(0x148)]("option");
      (_0x98f852["value"] = ""),
        (_0x98f852[_0x3c4fec(0x11d)] = _0x3c4fec(0x14f)),
        alumnoSelect[_0x3c4fec(0x131)](_0x98f852),
        _0x33625b["forEach"]((_0x790f19) => {
          const _0xed7bd3 = _0x3c4fec,
            _0x5d859e = document[_0xed7bd3(0x148)]("option");
          (_0x5d859e[_0xed7bd3(0x161)] = _0x790f19),
            (_0x5d859e[_0xed7bd3(0x11d)] = _0x790f19),
            alumnoSelect[_0xed7bd3(0x131)](_0x5d859e);
        });
    })
    [_0x443c9a(0x121)]((_0x20963e) =>
      console[_0x443c9a(0x160)](
        "Error\x20al\x20cargar\x20la\x20lista\x20de\x20alumnos",
        _0x20963e
      )
    );
}
function _0xefd9() {
  const _0x52d025 = [
    "209MpYdkH",
    "addEventListener",
    "40UYDgqo",
    "Nombre",
    "isArray",
    "type",
    "318PjPOFB",
    "POST",
    ".click",
    "display",
    "length",
    "703292BRhggb",
    "checkbox",
    "fechaEstudio",
    "alumno",
    "https://script.google.com/macros/s/AKfycbyDA9IFHCUx--MCwnkga60EP23m3qCFEXy151yp8TKdOYoihfTm0pnAesxcoKsahyq-pw/exec",
    "then",
    "getFullYear",
    "change",
    "url",
    "createElement",
    "submit",
    "getMonth",
    "filter",
    "forms",
    "querySelectorAll",
    "Error\x20al\x20cargar\x20los\x20datos",
    "Seleccionar\x20Alumno",
    "reload",
    "forEach",
    "createTextNode",
    "log",
    "getMinutes",
    "alumnoSelect",
    "toLowerCase",
    "querySelector",
    "options",
    "success",
    "firstChild",
    "flex",
    "blue",
    "includes",
    "14830wwKQTO",
    "11198Ytadth",
    "error",
    "value",
    "temas",
    "innerHTML",
    "111JZAodt",
    "33817BkfZMI",
    "18985hJjRMX",
    "input",
    "action",
    "numeroEstudiosCompletadosValor",
    "style",
    "tema",
    "append",
    "textContent",
    "https://script.googleusercontent.com/macros/echo?user_content_key=fY7gilxG5XJCGbns547P7jKy47Cu0BkotIwIehjM0_2deWga_06OjOidm7WNl3Z0DIN7VLVYSRb83WkPY1pQ-1g7XHDMEr4xm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFISOT6Fuz1rMLa2iS0A-0KL3jEPmuFWiERrP2f30QZvhMoij_TnZTDpGs0RfTEIwT-84VgORRoswH5-xw-sixILuHeW2Czjfdz9Jw9Md8uu&lib=MlKld03Jk9xk9m_iTqocjLsBqL84eR7w3",
    "new",
    "insertBefore",
    "catch",
    "Grupal\x20Presencial",
    "temasFaltantes",
    "backgroundColor",
    "getElementById",
    "label",
    "json",
    "297378TuTPdW",
    "Error!",
    "getDate",
    "¡El\x20estudio\x20de\x20",
    "temasCompletados",
    "numeroEstudiosFaltantesValor",
    "\x20se\x20registro\x20con\x20éxito\x20en\x20la\x20Base\x20de\x20Datos!",
    "getHours",
    "map",
    "appendChild",
    "getElementsByTagName",
    "132093wQyCWk",
  ];
  _0xefd9 = function () {
    return _0x52d025;
  };
  return _0xefd9();
}
cargarAlumnos();
function cargarTemas(_0x40bfb7) {
  const _0x2f5df1 = _0xa45cdf;
  fetch(apiUrl)
    [_0x2f5df1(0x144)]((_0x446888) => _0x446888[_0x2f5df1(0x127)]())
    [_0x2f5df1(0x144)]((_0x57deb8) => {
      const _0x33bf8c = _0x2f5df1,
        _0x2aa24d = _0x57deb8[_0x33bf8c(0x14b)](
          (_0x3dd0fc) => _0x3dd0fc[_0x33bf8c(0x142)] === _0x40bfb7
        )["map"]((_0x46c858) => _0x46c858[_0x33bf8c(0x16b)]),
        _0x5ee7cc = [
          ...new Set(
            _0x57deb8[_0x33bf8c(0x130)](
              (_0x2fef64) => _0x2fef64[_0x33bf8c(0x16b)]
            )
          ),
        ],
        _0x444fb5 = _0x5ee7cc["filter"](
          (_0x3f0f7e) => !_0x2aa24d[_0x33bf8c(0x15d)](_0x3f0f7e)
        );
      (numeroEstudiosCompletados[_0x33bf8c(0x11d)] =
        _0x2aa24d[_0x33bf8c(0x13e)]),
        (numeroEstudiosFaltantes[_0x33bf8c(0x11d)] =
          _0x444fb5[_0x33bf8c(0x13e)]),
        (temasCompletados[_0x33bf8c(0x163)] = ""),
        (temasFaltantes[_0x33bf8c(0x163)] = ""),
        _0x2aa24d[_0x33bf8c(0x151)]((_0x5b7975) => {
          const _0x363493 = _0x33bf8c,
            _0x32f4e7 = document[_0x363493(0x148)]("li");
          (_0x32f4e7[_0x363493(0x11d)] = "" + _0x5b7975),
            temasCompletados[_0x363493(0x120)](
              _0x32f4e7,
              temasCompletados[_0x363493(0x15a)]
            );
        }),
        _0x444fb5[_0x33bf8c(0x151)]((_0x3bd2cb) => {
          const _0x235e9b = _0x33bf8c,
            _0xc9fc24 = document["createElement"](_0x235e9b(0x126)),
            _0x5c40e7 = document[_0x235e9b(0x148)](_0x235e9b(0x167));
          (_0x5c40e7[_0x235e9b(0x139)] = _0x235e9b(0x140)),
            (_0x5c40e7["name"] = "tema"),
            (_0x5c40e7[_0x235e9b(0x161)] = _0x3bd2cb),
            _0xc9fc24[_0x235e9b(0x131)](_0x5c40e7),
            _0xc9fc24["appendChild"](
              document[_0x235e9b(0x152)]("" + _0x3bd2cb)
            ),
            temasFaltantes[_0x235e9b(0x131)](_0xc9fc24);
        });
    })
    [_0x2f5df1(0x121)]((_0x4a5927) =>
      console["error"](
        "Error\x20al\x20cargar\x20los\x20temas\x20del\x20alumno",
        _0x4a5927
      )
    );
}
alumnoSelect[_0xa45cdf(0x135)](_0xa45cdf(0x146), () => {
  const _0x3850e2 = _0xa45cdf,
    _0x2bd3c4 = alumnoSelect[_0x3850e2(0x161)];
  cargarTemas(_0x2bd3c4);
});
const inputBusqueda = document["getElementById"]("busqueda");
inputBusqueda[_0xa45cdf(0x135)](_0xa45cdf(0x167), () => {
  const _0x17ba5b = _0xa45cdf,
    _0x567109 = inputBusqueda[_0x17ba5b(0x161)][_0x17ba5b(0x156)](),
    _0x3b251f = document[_0x17ba5b(0x125)](_0x17ba5b(0x12c)),
    _0x1d1dfe = document[_0x17ba5b(0x125)]("temasFaltantes"),
    _0xe8c60c = _0x3b251f["getElementsByTagName"]("li");
  Array["from"](_0xe8c60c)["forEach"]((_0x593e7d) => {
    const _0x1b37d6 = _0x17ba5b,
      _0x242da9 = _0x593e7d[_0x1b37d6(0x11d)][_0x1b37d6(0x156)](),
      _0x3da6f0 = _0x242da9[_0x1b37d6(0x15d)](_0x567109);
    _0x593e7d["style"][_0x1b37d6(0x13d)] = _0x3da6f0
      ? _0x1b37d6(0x15b)
      : "none";
  });
  const _0x4ee0f3 = _0x1d1dfe[_0x17ba5b(0x132)]("label");
  Array["from"](_0x4ee0f3)[_0x17ba5b(0x151)]((_0x2336f4) => {
    const _0x534573 = _0x17ba5b,
      _0x24b8b7 = _0x2336f4[_0x534573(0x11d)][_0x534573(0x156)](),
      _0x4a17b8 = _0x24b8b7["includes"](_0x567109);
    _0x2336f4[_0x534573(0x16a)][_0x534573(0x13d)] = _0x4a17b8
      ? _0x534573(0x15b)
      : "none";
  });
});
const form = document[_0xa45cdf(0x14c)]["temas"],
  selectAviso = document[_0xa45cdf(0x125)]("alumnoSelect"),
  fechaEstudioInput = document[_0xa45cdf(0x125)](_0xa45cdf(0x141)),
  newInput = document[_0xa45cdf(0x125)](_0xa45cdf(0x11f)),
  link = document[_0xa45cdf(0x125)](_0xa45cdf(0x147));
function _0x552d(_0x1cd539, _0x5e8237) {
  const _0xefd99b = _0xefd9();
  return (
    (_0x552d = function (_0x552dd8, _0x2299f5) {
      _0x552dd8 = _0x552dd8 - 0x11d;
      let _0xce2762 = _0xefd99b[_0x552dd8];
      return _0xce2762;
    }),
    _0x552d(_0x1cd539, _0x5e8237)
  );
}
form["addEventListener"](_0xa45cdf(0x149), (_0x339d16) => {
  const _0x27a3b8 = _0xa45cdf;
  _0x339d16["preventDefault"]();
  const _0x25f653 =
      selectAviso[_0x27a3b8(0x158)][selectAviso["selectedIndex"]]["text"],
    _0x53339a = new Date(),
    _0x1857f7 = _0x53339a[_0x27a3b8(0x12a)](),
    _0x2066d0 = _0x53339a[_0x27a3b8(0x14a)]() + 0x1,
    _0x565304 = _0x53339a[_0x27a3b8(0x145)](),
    _0x461be0 = _0x53339a[_0x27a3b8(0x12f)](),
    _0x4bdadd = _0x53339a[_0x27a3b8(0x154)](),
    _0x928b5d =
      _0x1857f7 +
      "/" +
      _0x2066d0 +
      "/" +
      _0x565304 +
      "\x20" +
      _0x461be0 +
      ":" +
      _0x4bdadd;
  fechaEstudioInput[_0x27a3b8(0x161)] = _0x928b5d;
  const _0x231fdb = new FormData(form);
  _0x231fdb["append"](_0x27a3b8(0x142), _0x25f653);
  const _0x5b08a1 = Array["from"](
    form[_0x27a3b8(0x14d)]("input[type=\x22checkbox\x22]:checked")
  )[_0x27a3b8(0x130)]((_0x31c471) => _0x31c471[_0x27a3b8(0x161)]);
  _0x231fdb[_0x27a3b8(0x16c)](_0x27a3b8(0x162), JSON["stringify"](_0x5b08a1)),
    _0x231fdb[_0x27a3b8(0x16c)](_0x27a3b8(0x11f), newInput[_0x27a3b8(0x161)]),
    _0x231fdb[_0x27a3b8(0x16c)](_0x27a3b8(0x147), link[_0x27a3b8(0x161)]),
    (document[_0x27a3b8(0x157)](_0x27a3b8(0x13c))["disabled"] = !![]),
    (document[_0x27a3b8(0x157)](_0x27a3b8(0x13c))[_0x27a3b8(0x16a)][
      _0x27a3b8(0x124)
    ] = _0x27a3b8(0x15c)),
    (document[_0x27a3b8(0x157)](_0x27a3b8(0x13c))[_0x27a3b8(0x16a)]["color"] =
      "white"),
    fetch(form[_0x27a3b8(0x168)], { method: _0x27a3b8(0x13b), body: _0x231fdb })
      [_0x27a3b8(0x144)]((_0x4da0a1) => {
        const _0x5bb47a = _0x27a3b8;
        if (_0x4da0a1["ok"])
          return fetch(_0x5bb47a(0x143), {
            method: _0x5bb47a(0x13b),
            body: _0x231fdb,
          });
        else
          throw new Error("La\x20primera\x20solicitud\x20no\x20tuvo\x20éxito");
      })
      [_0x27a3b8(0x144)]((_0x425c0e) => {
        const _0x1fc4ab = _0x27a3b8;
        Swal["fire"](
          "Notificado",
          _0x1fc4ab(0x12b) + _0x25f653 + _0x1fc4ab(0x12e),
          _0x1fc4ab(0x159)
        ),
          setTimeout(() => {
            const _0x524081 = _0x1fc4ab;
            location[_0x524081(0x150)]();
          }, 0x5dc);
      })
      [_0x27a3b8(0x121)]((_0x262d00) =>
        console["error"](_0x27a3b8(0x129), _0x262d00["message"])
      );
});
