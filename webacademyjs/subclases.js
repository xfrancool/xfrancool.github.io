const _0x24a9f2 = _0x3cdb;
(function (_0x33505f, _0x1c06a7) {
  const _0x29bccf = _0x3cdb,
    _0x548c3c = _0x33505f();
  while (!![]) {
    try {
      const _0x529b42 =
        (-parseInt(_0x29bccf(0x12c)) / 0x1) *
          (-parseInt(_0x29bccf(0xdc)) / 0x2) +
        (-parseInt(_0x29bccf(0xf7)) / 0x3) * (parseInt(_0x29bccf(0xe8)) / 0x4) +
        (-parseInt(_0x29bccf(0x107)) / 0x5) *
          (parseInt(_0x29bccf(0xb2)) / 0x6) +
        -parseInt(_0x29bccf(0xe7)) / 0x7 +
        (parseInt(_0x29bccf(0x136)) / 0x8) *
          (-parseInt(_0x29bccf(0x88)) / 0x9) +
        -parseInt(_0x29bccf(0x106)) / 0xa +
        (-parseInt(_0x29bccf(0xe1)) / 0xb) *
          (-parseInt(_0x29bccf(0x10b)) / 0xc);
      if (_0x529b42 === _0x1c06a7) break;
      else _0x548c3c["push"](_0x548c3c["shift"]());
    } catch (_0x13df90) {
      _0x548c3c["push"](_0x548c3c["shift"]());
    }
  }
})(_0x7990, 0x21cc6),
  fetch(_0x24a9f2(0x148))
    [_0x24a9f2(0xcf)]((_0x2fc48f) => _0x2fc48f["json"]())
    ["then"]((_0x3e7042) => {
      const _0x36ddb3 = _0x24a9f2,
        _0x4ca63e = document["getElementById"](_0x36ddb3(0x78)),
        _0x3be341 = document["getElementById"]("email"),
        _0x4ae651 = document[_0x36ddb3(0xb7)]("usuario"),
        _0x313973 = document[_0x36ddb3(0xb7)](_0x36ddb3(0x17a)),
        _0x401a13 = new Set();
      _0x3e7042["forEach"]((_0x5d1d19) => {
        const _0x142742 = _0x36ddb3;
        _0x5d1d19[_0x142742(0x13a)] !== _0x142742(0x188) &&
          (_0x5d1d19[_0x142742(0xea)] === _0x142742(0x108) ||
            _0x5d1d19[_0x142742(0xea)] === _0x142742(0x162)) &&
          _0x401a13[_0x142742(0x132)](_0x5d1d19[_0x142742(0x13a)]);
      }),
        _0x401a13[_0x36ddb3(0x14d)]((_0x15353d) => {
          const _0xd1779b = _0x36ddb3,
            _0x29eddc = document[_0xd1779b(0x165)](_0xd1779b(0xc7));
          (_0x29eddc[_0xd1779b(0x141)] = _0x15353d),
            (_0x29eddc[_0xd1779b(0xbf)] = _0x15353d),
            _0x4ca63e["appendChild"](_0x29eddc);
        }),
        _0x4ca63e[_0x36ddb3(0x109)](_0x36ddb3(0x166), (_0x254dac) => {
          const _0x3b4ecd = _0x36ddb3,
            _0x5f1267 = _0x254dac[_0x3b4ecd(0x140)]["value"],
            _0x300509 = _0x3e7042["find"](
              (_0x524fb9) => _0x524fb9[_0x3b4ecd(0x13a)] === _0x5f1267
            );
          if (_0x300509 && _0x300509[_0x3b4ecd(0xcd)]) {
            (_0x3be341[_0x3b4ecd(0x141)] = _0x300509[_0x3b4ecd(0xcd)]),
              (_0x4ae651[_0x3b4ecd(0x141)] = _0x300509[_0x3b4ecd(0x82)] || ""),
              (_0x313973[_0x3b4ecd(0x141)] = _0x300509[_0x3b4ecd(0x17b)] || "");
            const _0x1fa36e = document[_0x3b4ecd(0xb7)](_0x3b4ecd(0xaf)),
              _0x6f08bd = document["getElementById"](_0x3b4ecd(0xdd)),
              _0x54d381 = document[_0x3b4ecd(0xb7)](_0x3b4ecd(0x94));
            (_0x1fa36e[_0x3b4ecd(0x141)] = _0x300509["Dias"] || ""),
              (_0x6f08bd[_0x3b4ecd(0x141)] = _0x300509[_0x3b4ecd(0x96)] || ""),
              (_0x54d381["value"] = _0x300509["Meet"] || "");
          } else {
            (_0x3be341[_0x3b4ecd(0x141)] = ""),
              (_0x4ae651[_0x3b4ecd(0x141)] = ""),
              (_0x313973["value"] = "");
            const _0x18f059 = document[_0x3b4ecd(0xb7)](_0x3b4ecd(0xaf)),
              _0x514e84 = document[_0x3b4ecd(0xb7)]("hour"),
              _0x441d83 = document[_0x3b4ecd(0xb7)](_0x3b4ecd(0x94));
            (_0x18f059[_0x3b4ecd(0x141)] = ""),
              (_0x514e84[_0x3b4ecd(0x141)] = ""),
              (_0x441d83["value"] = "");
          }
        });
    })
    [_0x24a9f2(0xbc)]((_0x205c3b) =>
      console[_0x24a9f2(0x7d)](_0x24a9f2(0x175), _0x205c3b)
    );
let selectMeses = document["getElementById"](_0x24a9f2(0x99)),
  meses = [
    { nombre: _0x24a9f2(0x170), valor: _0x24a9f2(0x102) },
    { nombre: _0x24a9f2(0x11f), valor: "F2023" },
    { nombre: _0x24a9f2(0x125), valor: _0x24a9f2(0xd8) },
    { nombre: _0x24a9f2(0x15f), valor: _0x24a9f2(0xba) },
    { nombre: _0x24a9f2(0x187), valor: _0x24a9f2(0xd8) },
    { nombre: "Junio", valor: _0x24a9f2(0x10c) },
    { nombre: _0x24a9f2(0x177), valor: _0x24a9f2(0x83) },
    { nombre: "Agosto", valor: _0x24a9f2(0xc2) },
    { nombre: _0x24a9f2(0xa8), valor: "S2023" },
    { nombre: _0x24a9f2(0x13b), valor: "O2023" },
    { nombre: _0x24a9f2(0xf0), valor: "N2023" },
    { nombre: _0x24a9f2(0x142), valor: _0x24a9f2(0x8c) },
  ],
  mesActual = new Date()["getMonth"]();
function _0x7990() {
  const _0x28ea0f = [
    "usuario",
    "Si\x20no\x20se\x20que\x20hacer\x20no\x20mover\x20peón",
    "Cuál\x20es\x20su\x20debilidad",
    "Torre\x20suicida",
    "Pág.\x2057/58\x2011",
    "Estrategia",
    "Fancesa",
    "Tablero",
    "Alfil\x20vs\x20Caballo\x20con\x202\x20peones",
    "Storm\x2011",
    "Factores\x20positivos\x20directos\x20(Grau)",
    "Peón\x20de\x20Damiano",
    "Mate\x20de\x20Torre",
    "Peones\x20reales",
    "India\x20de\x20Rey",
    "Jugadas\x20directas\x20e\x20indirectas",
    "Partida\x204\x20(Usted\x20juega)",
    "Base\x20Tarrasch",
    "Febrero",
    "Alfil\x20bueno\x20vs\x20malo",
    "Pensar\x20la\x20apertura",
    "Puntos\x20estratégicos",
    "getMonth",
    "getElementsByTagName",
    "Marzo",
    "Momentos\x20de\x20ajedrez",
    "Tarea:\x20De\x20análisis",
    "keyCode",
    "Explotación\x20de\x20la\x20pareja\x20de\x20alfiles\x20en\x20el\x20final",
    "Efectividad",
    "Diagrama\x20331\x20(Pág.\x20209)",
    "1352RxhBtO",
    "Mate\x20con\x20una\x20torre",
    "https://script.google.com/macros/s/AKfycbxxzHjHEZ3c2dSR82_XzdQA0GtzuXT3JtspCzPJQ4Mm-eoP-Lh6AAsdK_KDigf2oidqTw/exec",
    "Iniciativa",
    "Tema\x20real\x20puro\x20contra\x20tema\x20real\x20coronación",
    "classList",
    "add",
    "Peones\x202\x20vs\x202",
    "Tema\x20real\x20de\x20coronación",
    "Zugzwang",
    "130744eZEgOT",
    "selected",
    "getHours",
    "innerHTML",
    "Nombre",
    "Octubre",
    "Desarrollo\x20Kasparov",
    "La\x20residencia\x20del\x20rey",
    "Combinación\x20de\x20piezas",
    "Desde\x20el\x20317",
    "target",
    "value",
    "Diciembre",
    "Peón\x20Torre",
    "Estudio\x20de\x20aperturas",
    "Final\x20de\x20peones\x202\x20vs\x202",
    "3\x20Peones\x20vs\x203\x20-\x202\x20vs\x202",
    "Inglesa\x20hasta\x20sistema\x20Botvinnik",
    "https://script.googleusercontent.com/macros/echo?user_content_key=Lqt_ueKQIlcxcsI6BbZpIUmQfOkTuhxvkj4PGtOW_P1rzFZvRA6rcs4IhSzgzwW5ylJjhBrxHN6Im9GAI7drV850m9HRyxVtm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFISOT6Fuz1rMLa2iS0A-0KL3jEPmuFWiERrP2f30QZvhMoij_TnZTDpGs0RfTEIwT-84VgORRoswH5-xw-sixILuHeW2Czjfdz9Jw9Md8uu&lib=MlKld03Jk9xk9m_iTqocjLsBqL84eR7w3",
    "Defensa\x20y\x20ataque\x20de\x20piezas\x20(Básico)",
    "substr",
    "Ejercicios\x201904",
    "Análisis\x20de\x20partida",
    "forEach",
    "getElementsByClassName",
    "Partida\x2046\x20(Usted\x20juega)",
    "submit",
    "</strong>",
    "Principios\x20generales\x20Sponton\x20(Pág.\x2055-62)",
    "Estática\x20y\x20dinámica",
    "Principioes\x20generales",
    "El\x20tiempo",
    "Partida",
    "Estructura\x20de\x20peones",
    "Estudiar\x20mis\x20propias\x20partidas",
    "Hipermodernismo",
    "Streak\x2018",
    "Final\x20de\x20peones",
    "Ataque\x20sobre\x20el\x20rey\x20enrocado",
    "Mate\x20de\x20Dama",
    "autocomplete-items",
    "Abril",
    "parentNode",
    "querySelector",
    "Niños\x20Premium",
    "3\x20Preguntas\x20de\x20estrategia",
    "Tarea:\x20Ejercicios",
    "createElement",
    "change",
    "Partida\x20109\x20(Grau\x20I)",
    "Partida\x2018\x20(Usted\x20juega)",
    "Transfornación\x20de\x20ventaja:\x20Peón\x20de\x20más\x20-\x202da.\x20debilidad",
    "Como\x20salir\x20en\x20la\x20apertura",
    "preventDefault",
    "Factores\x20negativos\x20del\x20ataque",
    "Peón\x20libre",
    "Alfil\x20bueno\x20contra\x20alfil\x20malo",
    "Defensa\x20Francesa",
    "Enero",
    "autocomplete-active",
    "disabled",
    "El\x20dominio\x20de\x20una\x20horizontal",
    "Storm\x2014",
    "Error:",
    "Final\x20de\x20peones\x203\x20vs\x203",
    "Julio",
    "Caballos\x20a\x20la\x20defensa",
    "Ubicación\x20de\x20todas\x20las\x20piezas",
    "password",
    "pass",
    "S2023",
    "appendChild",
    "Mate\x20de\x20torre",
    "Clase\x20",
    "Partida\x2049\x20(Usted\x20juega)",
    "Streek\x207",
    "Mate\x20con\x20dos\x20torres",
    "push",
    "Partida\x2054\x20(Gau\x20I)",
    "<strong>",
    "Valor\x20de\x20las\x20piezas",
    "Mayo",
    "Grupal\x20Presencial",
    "Que\x20pieza\x20puedo\x20mejorar",
    "Que\x20hacer\x20cuando\x20no\x20se\x20que\x20hacer",
    "class",
    "Pág.\x2056\x20Sponton",
    "alumnos",
    "Tarea:\x20Streak\x20y\x20Partidas",
    "Partida\x2033",
    "POST",
    "Peones\x20colgantes",
    "error",
    "success",
    "Mate\x20en\x201",
    "Jaula\x20del\x20Rey",
    "div",
    "user",
    "JN2023",
    "Apertura\x20Francesa",
    "Cap.\x2041",
    "toUpperCase",
    "El\x20alfil\x20del\x20fianchetto",
    "45aTUewq",
    "input",
    "length",
    "Partida\x203\x20(Usted\x20juega)",
    "D2023",
    "Torre\x20contra\x202\x20piezas\x20menores",
    "Partida\x208\x20(Usted\x20juega)",
    "Partida\x2015\x20(Usted\x20juega)",
    "Juegas\x20negras\x20y\x20ganan\x2041",
    "Ajedrez\x20a\x20ciegas",
    "Circuito\x20cerrado",
    "Registrar",
    "meet",
    "El\x20jaque",
    "Horario",
    "getDate",
    "Apertura\x20Española",
    "mesesSelect",
    "setAttribute",
    "Partida\x2017\x20(Usted\x20juega)",
    "click",
    "Sistema\x20Londres",
    "Tarea:\x20Coordenadas,\x20Puzzle\x20Storm\x20y\x20Puzzle\x20Streak",
    "Visualización",
    "Mate\x20del\x20tonto",
    "DIV",
    "Caballo\x20como\x20mejor\x20bloqueador\x20de\x20un\x20peón",
    "Tarea:\x20De\x20desarrollo",
    "Posición\x20de\x20Vancura",
    "Pág.\x2051\x20(Usted\x20juega)",
    "Partida\x20a\x20ciegas\x20y\x20anotando",
    "Árbol\x20de\x20análisis",
    "Septiembre",
    "Agosto",
    "fire",
    "Ubicación\x20de\x20las\x20piezas\x20menores",
    "<input\x20type=\x27hidden\x27\x20value=\x27",
    "Ataque\x20con\x20piezas\x20rectilineas",
    "Streak\x2015",
    "day",
    "Posición\x20de\x20Lucena",
    "Fundamentos\x20de\x20ajedrez",
    "474924cOtSDc",
    "La\x20debilidad",
    "fecha-hora",
    "Centralizar\x20piezas",
    "Cargando...",
    "getElementById",
    "Tarea:\x20Crear\x20estudio\x20de\x20partidas",
    "Inglesa",
    "A2023",
    "Torre\x20suicida\x201\x20y\x202",
    "catch",
    "form",
    "El\x20tablero:\x20Material\x20,\x20espacio\x20y\x20tiempo",
    "text",
    "Debilidad\x20de\x20color",
    "email",
    "AG2023",
    "Mate\x20del\x20loco",
    "Partida\x2030\x20(Usted\x20juega)",
    "Piezas\x20Reales",
    "Mate\x20en\x205",
    "option",
    "Mate\x20Pastor",
    "Defensa\x20pasiva",
    "Posiciónes",
    "Junio",
    "Triangulación",
    "Email",
    "Ejercicios\x20de\x20Lichess",
    "then",
    "Streek\x2010",
    "tema",
    "Partida\x20108\x20y\x20109\x20(Grau\x20I)",
    "Que\x20ataca\x20mi\x20rival",
    "Abanico\x20del\x20alfil\x20y\x20caballo",
    "Jugadas\x20de\x20ataque\x20y\x20consolidación",
    "Tarea:\x20Ver\x20que\x20jugar\x20contra\x20e4\x20y\x20d4.\x20Estudio\x20Librito",
    "getFullYear",
    "M2023",
    "Puente\x20Lucena",
    "Alfiles\x20de\x20Horwitz",
    "Peón\x20al\x20paso",
    "42IDjzQm",
    "hour",
    "Partida\x2010\x20(Usted\x20juega)",
    "Regla\x20del\x20cuadrado",
    "Mate\x20de\x20la\x20coz",
    "6843353YyqYYy",
    "Ubicación\x20de\x20piezas",
    "Partida\x2056\x20(Grau\x20I)",
    "valor",
    "Ley\x20de\x20petrosian",
    "Peones\x20Colgantes",
    "1603749LurIKP",
    "140888lMScHU",
    "autocomplete-list",
    "Categoria",
    "Los\x20datos\x20han\x20sido\x20cargados\x20con\x20éxito...",
    "3\x20Peón\x20vs\x203",
    "profe",
    "DOMContentLoaded",
    "Amenzar\x20piezas",
    "Noviembre",
    "removeChild",
    "reset",
    "Ventaja\x20estática\x20y\x20dinámica",
    "Peón\x20aislado",
    "Clase\x20subida",
    "Que\x20amenaza\x20mi\x20rival",
    "3CetbXx",
    "Usted\x20juega",
    "Cálculo",
    "Con\x20que\x20pieza\x20salir\x20en\x20la\x20apertura",
    "Todo\x20peón\x20que\x20se\x20mueve\x20debilita\x20una\x20diagonal",
    "#sub",
    "Partida\x2034",
    "padStart",
    "Protección",
    "Simples\x20B\x20y\x20N",
    "Streek\x209",
    "E2023",
    "Desarrollo\x20de\x20caballos",
    "Defensa\x20Eslava",
    "Ubicación\x20de\x20las\x20piezas",
    "868790dynllP",
    "5ynVmza",
    "Adultos\x20Premium",
    "addEventListener",
    "Ilegales",
    "12qyvnFb",
    "JL2023",
  ];
  _0x7990 = function () {
    return _0x28ea0f;
  };
  return _0x7990();
}
for (let i = 0x0; i < meses[_0x24a9f2(0x8a)]; i++) {
  let option = document["createElement"](_0x24a9f2(0xc7));
  (option[_0x24a9f2(0x141)] = meses[i][_0x24a9f2(0xe4)]),
    (option[_0x24a9f2(0xbf)] = meses[i]["nombre"]),
    i === mesActual && (option[_0x24a9f2(0x137)] = !![]),
    selectMeses["appendChild"](option);
}
let selectMesesid = document[_0x24a9f2(0xb7)]("mesesInverso"),
  mesesid = [
    { nombre: "E2023", valor: _0x24a9f2(0x170) },
    { nombre: "F2023", valor: _0x24a9f2(0x11f) },
    { nombre: _0x24a9f2(0xd8), valor: "Marzo" },
    { nombre: "A2023", valor: _0x24a9f2(0x15f) },
    { nombre: _0x24a9f2(0xd8), valor: _0x24a9f2(0x187) },
    { nombre: "JL2023", valor: _0x24a9f2(0xcb) },
    { nombre: _0x24a9f2(0x83), valor: "Julio" },
    { nombre: _0x24a9f2(0xc2), valor: _0x24a9f2(0xa9) },
    { nombre: _0x24a9f2(0x17c), valor: "Septiembre" },
    { nombre: "O2023", valor: _0x24a9f2(0x13b) },
    { nombre: "N2023", valor: "Noviembre" },
    { nombre: _0x24a9f2(0x8c), valor: _0x24a9f2(0x142) },
  ],
  mesActualSegundoBloque = new Date()[_0x24a9f2(0x123)]();
for (let i = 0x0; i < mesesid["length"]; i++) {
  let option = document[_0x24a9f2(0x165)](_0x24a9f2(0xc7));
  (option[_0x24a9f2(0x141)] = mesesid[i][_0x24a9f2(0xe4)]),
    (option["text"] = mesesid[i]["nombre"]),
    i === mesActualSegundoBloque && (option[_0x24a9f2(0x137)] = !![]),
    selectMesesid[_0x24a9f2(0x17d)](option);
}
document[_0x24a9f2(0x109)](_0x24a9f2(0xee), function () {
  const _0x5686c1 = _0x24a9f2;
  let _0x432ca3 = document[_0x5686c1(0x161)](_0x5686c1(0xbd));
  _0x432ca3["addEventListener"](_0x5686c1(0x150), (_0x322bb2) => {
    const _0x16679d = _0x5686c1;
    _0x322bb2[_0x16679d(0x16b)](),
      (document[_0x16679d(0xb7)](_0x16679d(0xed))["disabled"] = ![]),
      (document[_0x16679d(0xb7)](_0x16679d(0xc1))[_0x16679d(0x172)] = ![]),
      (document[_0x16679d(0xb7)](_0x16679d(0x10d))[_0x16679d(0x172)] = ![]),
      (document[_0x16679d(0xb7)]("password")["disabled"] = ![]),
      (document[_0x16679d(0xb7)](_0x16679d(0xaf))["disabled"] = ![]),
      (document[_0x16679d(0xb7)](_0x16679d(0xdd))["disabled"] = ![]),
      (document[_0x16679d(0xb7)](_0x16679d(0x94))[_0x16679d(0x172)] = ![]),
      (document[_0x16679d(0x161)](_0x16679d(0xfc))[_0x16679d(0x141)] =
        _0x16679d(0xb6));
    let _0x45e893 = new FormData(_0x432ca3);
    fetch(_0x16679d(0x12e), { method: _0x16679d(0x7b), body: _0x45e893 })
      [_0x16679d(0xcf)]((_0x3d9a88) => _0x3d9a88["text"]())
      [_0x16679d(0xcf)]((_0x193349) => {
        const _0x28356f = _0x16679d;
        (document[_0x28356f(0xb7)]("profe")[_0x28356f(0x172)] = !![]),
          (document[_0x28356f(0xb7)](_0x28356f(0xc1))[_0x28356f(0x172)] = !![]),
          (document["getElementById"]("usuario")[_0x28356f(0x172)] = !![]),
          (document[_0x28356f(0xb7)](_0x28356f(0x17a))[_0x28356f(0x172)] =
            !![]),
          (document["getElementById"](_0x28356f(0xdd))[_0x28356f(0x172)] =
            !![]),
          (document[_0x28356f(0xb7)](_0x28356f(0xaf))[_0x28356f(0x172)] = !![]),
          (document["getElementById"]("meet")[_0x28356f(0x172)] = !![]),
          (document[_0x28356f(0x161)](_0x28356f(0xfc))[_0x28356f(0x141)] =
            _0x28356f(0x93)),
          Swal[_0x28356f(0xaa)](
            _0x28356f(0xf5),
            _0x28356f(0xeb),
            _0x28356f(0x7e)
          ),
          _0x432ca3[_0x28356f(0xf2)]();
      });
  });
});
function autocomplete(_0x5092d2, _0x458977) {
  const _0x114a50 = _0x24a9f2;
  var _0x1a7d2e;
  _0x5092d2[_0x114a50(0x109)]("input", function (_0xf91306) {
    const _0x488052 = _0x114a50;
    var _0x485f81,
      _0x20a238,
      _0x64c169,
      _0x340af2 = this[_0x488052(0x141)];
    _0x1dca51();
    if (!_0x340af2) return ![];
    (_0x1a7d2e = -0x1),
      (_0x485f81 = document[_0x488052(0x165)]("DIV")),
      _0x485f81[_0x488052(0x9a)]("id", this["id"] + _0x488052(0xe9)),
      _0x485f81[_0x488052(0x9a)](_0x488052(0x76), _0x488052(0x15e)),
      this["parentNode"][_0x488052(0x17d)](_0x485f81);
    for (_0x64c169 = 0x0; _0x64c169 < _0x458977[_0x488052(0x8a)]; _0x64c169++) {
      _0x458977[_0x64c169][_0x488052(0x14a)](0x0, _0x340af2[_0x488052(0x8a)])[
        _0x488052(0x86)
      ]() == _0x340af2[_0x488052(0x86)]() &&
        ((_0x20a238 = document[_0x488052(0x165)](_0x488052(0xa1))),
        (_0x20a238[_0x488052(0x139)] =
          _0x488052(0x185) +
          _0x458977[_0x64c169][_0x488052(0x14a)](0x0, _0x340af2["length"]) +
          _0x488052(0x151)),
        (_0x20a238[_0x488052(0x139)] += _0x458977[_0x64c169][_0x488052(0x14a)](
          _0x340af2[_0x488052(0x8a)]
        )),
        (_0x20a238["innerHTML"] +=
          _0x488052(0xac) + _0x458977[_0x64c169] + "\x27>"),
        _0x20a238[_0x488052(0x109)]("click", function (_0x2b72d3) {
          const _0x5e9246 = _0x488052;
          (_0x5092d2[_0x5e9246(0x141)] = this[_0x5e9246(0x124)](
            _0x5e9246(0x89)
          )[0x0][_0x5e9246(0x141)]),
            _0x1dca51();
        }),
        _0x485f81["appendChild"](_0x20a238));
    }
  }),
    _0x5092d2[_0x114a50(0x109)]("keydown", function (_0x11cae5) {
      const _0x578c5b = _0x114a50;
      var _0x1c56b8 = document[_0x578c5b(0xb7)](
        this["id"] + "autocomplete-list"
      );
      if (_0x1c56b8) _0x1c56b8 = _0x1c56b8["getElementsByTagName"]("div");
      if (_0x11cae5[_0x578c5b(0x128)] == 0x28)
        _0x1a7d2e++, _0x5dfc20(_0x1c56b8);
      else {
        if (_0x11cae5[_0x578c5b(0x128)] == 0x26)
          _0x1a7d2e--, _0x5dfc20(_0x1c56b8);
        else {
          if (_0x11cae5[_0x578c5b(0x128)] == 0xd) {
            _0x11cae5[_0x578c5b(0x16b)]();
            if (_0x1a7d2e > -0x1) {
              if (_0x1c56b8) _0x1c56b8[_0x1a7d2e][_0x578c5b(0x9c)]();
            }
          }
        }
      }
    });
  function _0x5dfc20(_0x3a9c83) {
    const _0x56f1b3 = _0x114a50;
    if (!_0x3a9c83) return ![];
    _0x5927e7(_0x3a9c83);
    if (_0x1a7d2e >= _0x3a9c83["length"]) _0x1a7d2e = 0x0;
    if (_0x1a7d2e < 0x0) _0x1a7d2e = _0x3a9c83[_0x56f1b3(0x8a)] - 0x1;
    _0x3a9c83[_0x1a7d2e][_0x56f1b3(0x131)][_0x56f1b3(0x132)](_0x56f1b3(0x171));
  }
  function _0x5927e7(_0x52a6f4) {
    const _0x2df892 = _0x114a50;
    for (
      var _0x31ed77 = 0x0;
      _0x31ed77 < _0x52a6f4[_0x2df892(0x8a)];
      _0x31ed77++
    ) {
      _0x52a6f4[_0x31ed77][_0x2df892(0x131)]["remove"](_0x2df892(0x171));
    }
  }
  function _0x1dca51(_0x36241b) {
    const _0x503a79 = _0x114a50;
    var _0x4635d2 = document[_0x503a79(0x14e)](_0x503a79(0x15e));
    for (var _0x3b409e = 0x0; _0x3b409e < _0x4635d2["length"]; _0x3b409e++) {
      _0x36241b != _0x4635d2[_0x3b409e] &&
        _0x36241b != _0x5092d2 &&
        _0x4635d2[_0x3b409e][_0x503a79(0x160)][_0x503a79(0xf1)](
          _0x4635d2[_0x3b409e]
        );
    }
  }
  document[_0x114a50(0x109)](_0x114a50(0x9c), function (_0x1b0a24) {
    _0x1dca51(_0x1b0a24["target"]);
  });
}
let clases = [];
for (let i = 0x1; i <= 0x64; i++) {
  clases[_0x24a9f2(0x183)](_0x24a9f2(0x17f) + i);
}
var sugerencias = clases;
autocomplete(document[_0x24a9f2(0xb7)]("clase"), sugerencias);
function _0x3cdb(_0x2101ad, _0x395d60) {
  const _0x799036 = _0x7990();
  return (
    (_0x3cdb = function (_0x3cdb83, _0x3fbcaa) {
      _0x3cdb83 = _0x3cdb83 - 0x74;
      let _0x5e8aa5 = _0x799036[_0x3cdb83];
      return _0x5e8aa5;
    }),
    _0x3cdb(_0x2101ad, _0x395d60)
  );
}
function autocomplete(_0x78d92c, _0x263adf) {
  const _0x14d5e1 = _0x24a9f2;
  var _0x38e0aa;
  _0x78d92c[_0x14d5e1(0x109)](_0x14d5e1(0x89), function (_0x34a2ae) {
    const _0x15066e = _0x14d5e1;
    var _0x20a2e7,
      _0x117861,
      _0x50ad3a,
      _0x67cca8 = this[_0x15066e(0x141)];
    _0x1cb9d7();
    if (!_0x67cca8) return ![];
    (_0x38e0aa = -0x1),
      (_0x20a2e7 = document[_0x15066e(0x165)]("DIV")),
      _0x20a2e7[_0x15066e(0x9a)]("id", this["id"] + "autocomplete-list"),
      _0x20a2e7[_0x15066e(0x9a)]("class", _0x15066e(0x15e)),
      this[_0x15066e(0x160)][_0x15066e(0x17d)](_0x20a2e7);
    for (_0x50ad3a = 0x0; _0x50ad3a < _0x263adf[_0x15066e(0x8a)]; _0x50ad3a++) {
      _0x263adf[_0x50ad3a][_0x15066e(0x14a)](0x0, _0x67cca8[_0x15066e(0x8a)])[
        _0x15066e(0x86)
      ]() == _0x67cca8[_0x15066e(0x86)]() &&
        ((_0x117861 = document["createElement"](_0x15066e(0xa1))),
        (_0x117861[_0x15066e(0x139)] =
          _0x15066e(0x185) +
          _0x263adf[_0x50ad3a]["substr"](0x0, _0x67cca8[_0x15066e(0x8a)]) +
          "</strong>"),
        (_0x117861["innerHTML"] += _0x263adf[_0x50ad3a][_0x15066e(0x14a)](
          _0x67cca8[_0x15066e(0x8a)]
        )),
        (_0x117861[_0x15066e(0x139)] +=
          _0x15066e(0xac) + _0x263adf[_0x50ad3a] + "\x27>"),
        _0x117861["addEventListener"](_0x15066e(0x9c), function (_0x194884) {
          const _0x1815f2 = _0x15066e;
          (_0x78d92c["value"] = this[_0x1815f2(0x124)](_0x1815f2(0x89))[0x0][
            _0x1815f2(0x141)
          ]),
            _0x1cb9d7();
        }),
        _0x20a2e7[_0x15066e(0x17d)](_0x117861));
    }
  }),
    _0x78d92c[_0x14d5e1(0x109)]("keydown", function (_0x297628) {
      const _0x403efd = _0x14d5e1;
      var _0x40d90d = document[_0x403efd(0xb7)](this["id"] + _0x403efd(0xe9));
      if (_0x40d90d) _0x40d90d = _0x40d90d[_0x403efd(0x124)](_0x403efd(0x81));
      if (_0x297628[_0x403efd(0x128)] == 0x28)
        _0x38e0aa++, _0x196c23(_0x40d90d);
      else {
        if (_0x297628[_0x403efd(0x128)] == 0x26)
          _0x38e0aa--, _0x196c23(_0x40d90d);
        else {
          if (_0x297628[_0x403efd(0x128)] == 0xd) {
            _0x297628["preventDefault"]();
            if (_0x38e0aa > -0x1) {
              if (_0x40d90d) _0x40d90d[_0x38e0aa][_0x403efd(0x9c)]();
            }
          }
        }
      }
    });
  function _0x196c23(_0x2029bc) {
    const _0x41c285 = _0x14d5e1;
    if (!_0x2029bc) return ![];
    _0x3ccf59(_0x2029bc);
    if (_0x38e0aa >= _0x2029bc[_0x41c285(0x8a)]) _0x38e0aa = 0x0;
    if (_0x38e0aa < 0x0) _0x38e0aa = _0x2029bc[_0x41c285(0x8a)] - 0x1;
    _0x2029bc[_0x38e0aa]["classList"][_0x41c285(0x132)](_0x41c285(0x171));
  }
  function _0x3ccf59(_0x554b94) {
    const _0x1e956c = _0x14d5e1;
    for (
      var _0x435c38 = 0x0;
      _0x435c38 < _0x554b94[_0x1e956c(0x8a)];
      _0x435c38++
    ) {
      _0x554b94[_0x435c38]["classList"]["remove"](_0x1e956c(0x171));
    }
  }
  function _0x1cb9d7(_0xbc413) {
    const _0x107bd8 = _0x14d5e1;
    var _0x2e3e6a = document[_0x107bd8(0x14e)](_0x107bd8(0x15e));
    for (
      var _0x32968d = 0x0;
      _0x32968d < _0x2e3e6a[_0x107bd8(0x8a)];
      _0x32968d++
    ) {
      _0xbc413 != _0x2e3e6a[_0x32968d] &&
        _0xbc413 != _0x78d92c &&
        _0x2e3e6a[_0x32968d][_0x107bd8(0x160)][_0x107bd8(0xf1)](
          _0x2e3e6a[_0x32968d]
        );
    }
  }
  document[_0x14d5e1(0x109)](_0x14d5e1(0x9c), function (_0x2e7106) {
    const _0x5162c9 = _0x14d5e1;
    _0x1cb9d7(_0x2e7106[_0x5162c9(0x140)]);
  });
}
var sugerencias = [
  _0x24a9f2(0x105),
  "Táctica",
  "Casillas\x20Reales",
  _0x24a9f2(0x80),
  _0x24a9f2(0xc5),
  _0x24a9f2(0x186),
  "Oposición",
  "Casillas\x20Claves",
  _0x24a9f2(0x143),
  _0x24a9f2(0x135),
  _0x24a9f2(0xdf),
  _0x24a9f2(0xd4),
  _0x24a9f2(0x155),
  _0x24a9f2(0x75),
  _0x24a9f2(0xf9),
  _0x24a9f2(0x112),
  _0x24a9f2(0x120),
  _0x24a9f2(0x11c),
  "La\x20Teoría\x20de\x20las\x20Casillas\x20Reales\x20y\x20las\x20aperturas",
  "Casillas\x20de\x20paso\x20y\x20piezas\x20reales",
  _0x24a9f2(0x134),
  _0x24a9f2(0x130),
  _0x24a9f2(0xec),
  _0x24a9f2(0xcc),
  _0x24a9f2(0xd9),
  _0x24a9f2(0xc9),
  "Posición\x20de\x20Philidor",
  "Defensa\x20Kling\x20y\x20Horwitz",
  _0x24a9f2(0x13d),
  "Peones\x20Reales",
  _0x24a9f2(0x121),
  _0x24a9f2(0xd5),
  _0x24a9f2(0x153),
  _0x24a9f2(0x12a),
  _0x24a9f2(0xb9),
  "Partida\x2032\x20(Usted\x20juega)",
  _0x24a9f2(0x11b),
  _0x24a9f2(0x147),
  _0x24a9f2(0xa7),
  _0x24a9f2(0x110),
  _0x24a9f2(0xe3),
  _0x24a9f2(0xd2),
  _0x24a9f2(0x9b),
  _0x24a9f2(0x92),
  _0x24a9f2(0xdb),
  "Restricción\x20de\x20piezas",
  _0x24a9f2(0x13e),
  _0x24a9f2(0xbe),
  "Desarrollo",
  _0x24a9f2(0x13c),
  _0x24a9f2(0xc0),
  _0x24a9f2(0x159),
  _0x24a9f2(0x87),
  "Pág.\x2048\x20(Usted\x20juega)",
  _0x24a9f2(0x9f),
  _0x24a9f2(0xfb),
  _0x24a9f2(0xb3),
  "La\x20simetria\x201\x20y\x202",
  _0x24a9f2(0x90),
  _0x24a9f2(0x7c),
  _0x24a9f2(0x173),
  _0x24a9f2(0x169),
  _0x24a9f2(0x16d),
  _0x24a9f2(0x8d),
  _0x24a9f2(0xda),
  _0x24a9f2(0x11e),
  "Final:\x20Mejor\x20rey",
  _0x24a9f2(0x91),
  _0x24a9f2(0x15d),
  _0x24a9f2(0x119),
  "Ilegal",
  _0x24a9f2(0x10e),
  _0x24a9f2(0x7f),
  "Tarea\x20sobre\x20aperturas",
  _0x24a9f2(0xe5),
  _0x24a9f2(0x16f),
  _0x24a9f2(0xde),
  "Partida\x2023\x20(Usted\x20juega)",
  _0x24a9f2(0x118),
  "Partida\x2043\x20(Usted\x20juega)",
  _0x24a9f2(0x11d),
  "Tiempo\x20reloj",
  _0x24a9f2(0xb0),
  _0x24a9f2(0xad),
  _0x24a9f2(0x178),
  _0x24a9f2(0xa3),
  _0x24a9f2(0x9e),
  _0x24a9f2(0xb8),
  _0x24a9f2(0xe6),
  _0x24a9f2(0xd6),
  _0x24a9f2(0x181),
  _0x24a9f2(0x85),
  _0x24a9f2(0x116),
  "La\x20técnica\x20de\x20Karpov",
  _0x24a9f2(0x129),
  _0x24a9f2(0xf4),
  _0x24a9f2(0xa2),
  _0x24a9f2(0x14b),
  _0x24a9f2(0x15a),
  "Ubicación\x20de\x20las\x20piezas\x20y\x20valores",
  _0x24a9f2(0x154),
  _0x24a9f2(0x127),
  "Puzzle\x20Storm\x2014",
  _0x24a9f2(0x101),
  "Estudio\x2054\x20-\x2055",
  _0x24a9f2(0xd0),
  _0x24a9f2(0x174),
  "Defensa\x20Pasiva",
  _0x24a9f2(0xae),
  "Evaluación",
  _0x24a9f2(0x16e),
  "Francesa\x20Tarrasch",
  "Semieslava",
  _0x24a9f2(0xf6),
  _0x24a9f2(0x10f),
  _0x24a9f2(0x74),
  _0x24a9f2(0x167),
  _0x24a9f2(0xc4),
  _0x24a9f2(0x115),
  _0x24a9f2(0x77),
  "Espacio",
  _0x24a9f2(0x156),
  _0x24a9f2(0x111),
  "Péon\x20libre",
  "Jugada\x20crítica",
  _0x24a9f2(0xa4),
  _0x24a9f2(0x157),
  "Apertura\x20Inglesa",
  _0x24a9f2(0x15c),
  _0x24a9f2(0x117),
  _0x24a9f2(0x16c),
  "Mate\x20en\x20dos\x20(105)",
  _0x24a9f2(0x8b),
  _0x24a9f2(0x8f),
  _0x24a9f2(0xfd),
  "Pág.\x20222\x20(Grau\x20I)",
  _0x24a9f2(0x180),
  _0x24a9f2(0x98),
  _0x24a9f2(0xd3),
  _0x24a9f2(0x114),
  "Efectividad\x20de\x20las\x20piezas",
  "Balance",
  "Cuestionario\x20de\x20Dovititiis",
  "Jugar\x20contra\x20las\x20piezas",
  _0x24a9f2(0x14f),
  _0x24a9f2(0x168),
  _0x24a9f2(0x8e),
  _0x24a9f2(0x146),
  _0x24a9f2(0x182),
  _0x24a9f2(0xfa),
  _0x24a9f2(0x163),
  _0x24a9f2(0xc8),
  _0x24a9f2(0xc3),
  _0x24a9f2(0x152),
  _0x24a9f2(0x12f),
  _0x24a9f2(0x122),
  _0x24a9f2(0x7a),
  "Explotación\x20de\x20la\x20pareja\x20de\x20alfiles\x20en\x20la\x20diagonal",
  "Ubicación",
  _0x24a9f2(0xbb),
  _0x24a9f2(0x79),
  _0x24a9f2(0x16a),
  _0x24a9f2(0x149),
  _0x24a9f2(0x100),
  _0x24a9f2(0x10a),
  "Libro\x20de\x20Tal\x20tomo\x201\x20y\x202",
  _0x24a9f2(0xf8),
  _0x24a9f2(0x15b),
  _0x24a9f2(0xca),
  _0x24a9f2(0x184),
  _0x24a9f2(0x12b),
  _0x24a9f2(0x13f),
  _0x24a9f2(0x14c),
  _0x24a9f2(0xce),
  _0x24a9f2(0xa0),
  _0x24a9f2(0x12d),
  "Clavadas",
  _0x24a9f2(0xb5),
  _0x24a9f2(0x103),
  _0x24a9f2(0xab),
  _0x24a9f2(0x179),
  _0x24a9f2(0x144),
  _0x24a9f2(0x104),
  _0x24a9f2(0x9d),
  "Mate\x20Philidor\x20o\x20de\x20la\x20coz",
  "3\x20Formas\x20de\x20pensar\x20la\x20estratégia",
  _0x24a9f2(0xa6),
  _0x24a9f2(0x113),
  _0x24a9f2(0x176),
  _0x24a9f2(0x133),
  _0x24a9f2(0xf3),
  "Torre\x20siucida",
  "Dama\x20caballo",
  _0x24a9f2(0x17e),
  "Peón\x20vs\x20Dama",
  _0x24a9f2(0x126),
  _0x24a9f2(0x164),
  _0x24a9f2(0xb1),
  "Mate\x20de\x20pasillo",
  "Comer\x20piezas",
  _0x24a9f2(0xc6),
  _0x24a9f2(0xe0),
  _0x24a9f2(0x95),
  _0x24a9f2(0xff),
  _0x24a9f2(0xef),
  "No\x20mover\x202\x20veces\x20la\x20misma\x20pieza",
  _0x24a9f2(0x158),
  _0x24a9f2(0xe2),
  _0x24a9f2(0x145),
  _0x24a9f2(0x11a),
  _0x24a9f2(0x84),
  "Partida\x2050\x20(Grau\x20I)",
  _0x24a9f2(0xa5),
  _0x24a9f2(0xa5),
];
autocomplete(document[_0x24a9f2(0xb7)](_0x24a9f2(0xd1)), sugerencias);
function formatearFechaHora(_0x80e112) {
  const _0x49fef4 = _0x24a9f2,
    _0x164bf8 = String(_0x80e112[_0x49fef4(0x97)]())[_0x49fef4(0xfe)](0x2, "0"),
    _0x31160c = String(_0x80e112[_0x49fef4(0x123)]() + 0x1)[_0x49fef4(0xfe)](
      0x2,
      "0"
    ),
    _0xe92ecd = _0x80e112[_0x49fef4(0xd7)](),
    _0x487682 = String(_0x80e112[_0x49fef4(0x138)]())[_0x49fef4(0xfe)](
      0x2,
      "0"
    ),
    _0x58aeeb = String(_0x80e112["getMinutes"]())[_0x49fef4(0xfe)](0x2, "0");
  return _0x164bf8 + "/" + _0x31160c + "/" + _0xe92ecd + "\x20";
}
function actualizarHora() {
  const _0x2b74d3 = _0x24a9f2,
    _0x180544 = new Date(),
    _0x1c0d1d = formatearFechaHora(_0x180544);
  document[_0x2b74d3(0xb7)](_0x2b74d3(0xb4))["innerHTML"] =
    _0x2b74d3(0x185) + _0x1c0d1d + _0x2b74d3(0x151);
}
document[_0x24a9f2(0x109)]("DOMContentLoaded", function () {
  actualizarHora(), setInterval(actualizarHora, 0x3e8);
});
