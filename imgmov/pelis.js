const _0x460ad3 = _0x32ea;
(function (_0x1cdc4d, _0x8fdb92) {
  const _0x3b3964 = _0x32ea,
    _0x30f308 = _0x1cdc4d();
  while (!![]) {
    try {
      const _0x581242 =
        (parseInt(_0x3b3964(0x1c4)) / 0x1) *
          (parseInt(_0x3b3964(0x1c7)) / 0x2) +
        -parseInt(_0x3b3964(0x1c1)) / 0x3 +
        (-parseInt(_0x3b3964(0x1af)) / 0x4) *
          (-parseInt(_0x3b3964(0x1c0)) / 0x5) +
        (parseInt(_0x3b3964(0x1da)) / 0x6) *
          (parseInt(_0x3b3964(0x1e9)) / 0x7) +
        (parseInt(_0x3b3964(0x1cc)) / 0x8) *
          (-parseInt(_0x3b3964(0x1d1)) / 0x9) +
        parseInt(_0x3b3964(0x1b5)) / 0xa +
        -parseInt(_0x3b3964(0x1c5)) / 0xb;
      if (_0x581242 === _0x8fdb92) break;
      else _0x30f308["push"](_0x30f308["shift"]());
    } catch (_0x14ea26) {
      _0x30f308["push"](_0x30f308["shift"]());
    }
  }
})(_0x4492, 0x52819);
const cardsContainer = document["getElementById"]("cards-container"),
  paginationContainer = document[_0x460ad3(0x1ce)](_0x460ad3(0x1d4)),
  searchInput = document["getElementById"]("search-input");
function _0x32ea(_0x56e880, _0x23929e) {
  const _0x4492cd = _0x4492();
  return (
    (_0x32ea = function (_0x32eacc, _0x3bf12d) {
      _0x32eacc = _0x32eacc - 0x1a3;
      let _0x42b8c1 = _0x4492cd[_0x32eacc];
      return _0x42b8c1;
    }),
    _0x32ea(_0x56e880, _0x23929e)
  );
}
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch("https://xfrancool.github.io/imgmov/cuevanafull.json")
  [_0x460ad3(0x1a6)]((_0xc4d4a3) => _0xc4d4a3[_0x460ad3(0x1a4)]())
  ["then"]((_0xd0beea) => {
    const _0x80cef3 = _0x460ad3;
    _0xd0beea[_0x80cef3(0x1e1)](
      (_0x439a2a, _0x329085) => _0x329085["id"] - _0x439a2a["id"]
    ),
      (currentCards = _0xd0beea),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x2367b0 = _0x460ad3;
  cardsContainer[_0x2367b0(0x1a5)] = "";
  const _0x5e7a34 = (currentPage - 0x1) * cardsPerPage,
    _0x12e7ad = _0x5e7a34 + cardsPerPage,
    _0x264069 = filteredCards[_0x2367b0(0x1e6)](_0x5e7a34, _0x12e7ad);
  _0x264069[_0x2367b0(0x1ab)]((_0x2c0bfe) => {
    const _0x1898a2 = _0x2367b0,
      _0x574d36 = document[_0x1898a2(0x1b2)](_0x1898a2(0x1db));
    _0x574d36[_0x1898a2(0x1e3)][_0x1898a2(0x1df)](_0x1898a2(0x1c8)),
      (_0x574d36[_0x1898a2(0x1a5)] =
        _0x1898a2(0x1e0) +
        _0x2c0bfe[_0x1898a2(0x1bf)] +
        _0x1898a2(0x1eb) +
        _0x2c0bfe["name"] +
        _0x1898a2(0x1b6) +
        _0x2c0bfe[_0x1898a2(0x1ed)] +
        _0x1898a2(0x1cf) +
        _0x2c0bfe[_0x1898a2(0x1ba)] +
        "</p>\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>" +
        _0x2c0bfe[_0x1898a2(0x1ae)] +
        _0x1898a2(0x1ac)),
      cardsContainer[_0x1898a2(0x1c2)](_0x574d36);
  });
}
function renderPagination() {
  const _0x2900a0 = _0x460ad3;
  paginationContainer[_0x2900a0(0x1a5)] = "";
  const _0x47a05a = Math[_0x2900a0(0x1d5)](
      filteredCards["length"] / cardsPerPage
    ),
    _0x33ac63 = 0x4;
  let _0x42b49b = Math[_0x2900a0(0x1e8)](
      0x1,
      currentPage - Math[_0x2900a0(0x1b3)](_0x33ac63 / 0x2)
    ),
    _0xadd967 = Math[_0x2900a0(0x1a7)](_0x47a05a, _0x42b49b + _0x33ac63 - 0x1);
  _0xadd967 - _0x42b49b + 0x1 < _0x33ac63 &&
    (_0x42b49b = Math[_0x2900a0(0x1e8)](0x1, _0xadd967 - _0x33ac63 + 0x1));
  for (let _0x2dfcfc = _0x42b49b; _0x2dfcfc <= _0xadd967; _0x2dfcfc++) {
    const _0x2b78e3 = document[_0x2900a0(0x1b2)](_0x2900a0(0x1cd));
    (_0x2b78e3["innerText"] = _0x2dfcfc),
      _0x2b78e3[_0x2900a0(0x1b9)](_0x2900a0(0x1b4), () => {
        const _0x4a32a7 = _0x2900a0;
        (currentPage = _0x2dfcfc),
          renderCards(),
          renderPagination(),
          window[_0x4a32a7(0x1bc)](_0x4a32a7(0x1bb))[_0x4a32a7(0x1e7)] &&
            window[_0x4a32a7(0x1be)](0x0, 0x0);
      }),
      _0x2dfcfc === currentPage &&
        _0x2b78e3["classList"][_0x2900a0(0x1df)]("active"),
      paginationContainer[_0x2900a0(0x1c2)](_0x2b78e3);
  }
  const _0x349142 = document[_0x2900a0(0x1b2)](_0x2900a0(0x1cd));
  (_0x349142[_0x2900a0(0x1a5)] = _0x2900a0(0x1b1)),
    (_0x349142[_0x2900a0(0x1ad)]["backgroundColor"] = "#008cba"),
    _0x349142[_0x2900a0(0x1b9)]("click", () => {
      const _0xe97132 = _0x2900a0;
      currentPage < _0x47a05a &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0xe97132(0x1bc)](_0xe97132(0x1bb))["matches"] &&
          window[_0xe97132(0x1be)](0x0, 0x0));
    });
  const _0x393b01 = document[_0x2900a0(0x1b2)](_0x2900a0(0x1cd));
  (_0x393b01[_0x2900a0(0x1a5)] = _0x2900a0(0x1e2)),
    (_0x393b01[_0x2900a0(0x1ad)][_0x2900a0(0x1ea)] = _0x2900a0(0x1d3)),
    _0x393b01[_0x2900a0(0x1b9)](_0x2900a0(0x1b4), () => {
      const _0x40348f = _0x2900a0;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window[_0x40348f(0x1bc)](_0x40348f(0x1bb))[_0x40348f(0x1e7)] &&
          window[_0x40348f(0x1be)](0x0, 0x0));
    }),
    paginationContainer["insertBefore"](
      _0x393b01,
      paginationContainer[_0x2900a0(0x1b0)]
    ),
    paginationContainer[_0x2900a0(0x1c2)](_0x349142);
}
searchInput[_0x460ad3(0x1b9)]("input", () => {
  const _0x166d22 = _0x460ad3,
    _0x2503db = searchInput[_0x166d22(0x1a8)]["trim"]()[_0x166d22(0x1aa)]();
  (filteredCards = currentCards[_0x166d22(0x1d8)]((_0x451122) =>
    _0x451122["name"][_0x166d22(0x1aa)]()[_0x166d22(0x1b7)](_0x2503db)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document[_0x460ad3(0x1b8)](_0x460ad3(0x1a9)),
  categoryButtons = document[_0x460ad3(0x1b8)](_0x460ad3(0x1dc));
aniosButtons[_0x460ad3(0x1ab)]((_0x3a8d1c) => {
  const _0x3f9979 = _0x460ad3;
  _0x3a8d1c[_0x3f9979(0x1b9)](_0x3f9979(0x1b4), () => {
    const _0x2a0041 = _0x3f9979,
      _0x20b52e = _0x3a8d1c[_0x2a0041(0x1d2)][_0x2a0041(0x1d9)];
    _0x20b52e === _0x2a0041(0x1e4)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x2a0041(0x1d8)]((_0x2acb16) => {
          const _0x8463b4 = _0x2a0041;
          return _0x2acb16[_0x8463b4(0x1ae)] === _0x20b52e;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x2a0041(0x1ab)]((_0x361227) => {
        const _0x464995 = _0x2a0041;
        _0x361227[_0x464995(0x1e3)][_0x464995(0x1c3)](_0x464995(0x1dd));
      }),
      _0x3a8d1c["classList"][_0x2a0041(0x1df)](_0x2a0041(0x1dd)),
      categoryButtons[_0x2a0041(0x1ab)]((_0x104e63) => {
        const _0x2c643e = _0x2a0041;
        _0x104e63[_0x2c643e(0x1e3)][_0x2c643e(0x1c3)](_0x2c643e(0x1dd));
      });
  });
}),
  categoryButtons[_0x460ad3(0x1ab)]((_0x65e152) => {
    const _0x1fb1df = _0x460ad3;
    _0x65e152[_0x1fb1df(0x1b9)](_0x1fb1df(0x1b4), () => {
      const _0x12e23e = _0x1fb1df,
        _0x2bc434 = _0x65e152[_0x12e23e(0x1d2)][_0x12e23e(0x1d9)];
      _0x2bc434 === _0x12e23e(0x1e4)
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0x12e23e(0x1d8)]((_0x55be77) => {
            const _0x4470c4 = _0x12e23e;
            return _0x55be77[_0x4470c4(0x1ba)]["includes"](_0x2bc434);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0x12e23e(0x1ab)]((_0x4c0729) => {
          const _0x253c75 = _0x12e23e;
          _0x4c0729["classList"]["remove"](_0x253c75(0x1dd));
        }),
        _0x65e152[_0x12e23e(0x1e3)][_0x12e23e(0x1df)](_0x12e23e(0x1dd)),
        aniosButtons[_0x12e23e(0x1ab)]((_0x1dd0ac) => {
          const _0x4e9637 = _0x12e23e;
          _0x1dd0ac[_0x4e9637(0x1e3)]["remove"](_0x4e9637(0x1dd));
        });
    });
  });
function showTrailer(_0xf3b7c6) {
  const _0x5475cd = _0x460ad3;
  _0xf3b7c6["preventDefault"]();
  var _0x1f3061 = document[_0x5475cd(0x1ce)](_0x5475cd(0x1e5)),
    _0x382aeb = document["getElementById"](_0x5475cd(0x1c9)),
    _0x308edb = _0xf3b7c6[_0x5475cd(0x1a3)],
    _0x34edcf = _0x308edb[_0x5475cd(0x1d0)]("href");
  _0x382aeb["setAttribute"](_0x5475cd(0x1ec), _0x34edcf),
    (_0x1f3061[_0x5475cd(0x1ad)][_0x5475cd(0x1cb)] = _0x5475cd(0x1ca));
}
function closeTrailer() {
  const _0x21284c = _0x460ad3;
  var _0x390088 = document[_0x21284c(0x1ce)](_0x21284c(0x1e5)),
    _0x1d8c19 = document["getElementById"](_0x21284c(0x1c9));
  _0x1d8c19[_0x21284c(0x1d6)]("src", ""),
    (_0x390088["style"][_0x21284c(0x1cb)] = "none");
}
(mybutton = document[_0x460ad3(0x1ce)](_0x460ad3(0x1d7))),
  (window["onscroll"] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x110a00 = _0x460ad3;
  document[_0x110a00(0x1c6)][_0x110a00(0x1bd)] > 0x14 ||
  document[_0x110a00(0x1de)][_0x110a00(0x1bd)] > 0x14
    ? (mybutton[_0x110a00(0x1ad)][_0x110a00(0x1cb)] = _0x110a00(0x1ca))
    : (mybutton["style"][_0x110a00(0x1cb)] = "none");
}
function topFunction() {
  const _0x319e5b = _0x460ad3;
  (document[_0x319e5b(0x1c6)][_0x319e5b(0x1bd)] = 0x0),
    (document[_0x319e5b(0x1de)][_0x319e5b(0x1bd)] = 0x0);
}
function _0x4492() {
  const _0xceaf21 = [
    "display",
    "24CpWJdE",
    "button",
    "getElementById",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>👀\x20</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p\x20id=\x22title-card\x22>",
    "getAttribute",
    "576819eRRUbU",
    "dataset",
    "#008cba",
    "pagination-container",
    "ceil",
    "setAttribute",
    "myBtn",
    "filter",
    "category",
    "66KzSpJq",
    "div",
    ".category-button",
    "active",
    "documentElement",
    "add",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "sort",
    "&lt;",
    "classList",
    "all",
    "trailer-modal",
    "slice",
    "matches",
    "max",
    "186137gZAdCm",
    "backgroundColor",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>",
    "src",
    "link",
    "currentTarget",
    "json",
    "innerHTML",
    "then",
    "min",
    "value",
    ".anios-button",
    "toLowerCase",
    "forEach",
    "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "style",
    "anio",
    "12SqzyWg",
    "firstChild",
    "&gt;",
    "createElement",
    "floor",
    "click",
    "5860190TyzYpe",
    "</p>\x20\x20\x20\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22",
    "includes",
    "querySelectorAll",
    "addEventListener",
    "catego",
    "(max-width:\x20767px)",
    "matchMedia",
    "scrollTop",
    "scrollTo",
    "img",
    "736695iunhhU",
    "390210hRfpDm",
    "appendChild",
    "remove",
    "1589RdFlfy",
    "12681229rKCBie",
    "body",
    "620OGuSOd",
    "card",
    "trailer-video",
    "block",
  ];
  _0x4492 = function () {
    return _0xceaf21;
  };
  return _0x4492();
}
