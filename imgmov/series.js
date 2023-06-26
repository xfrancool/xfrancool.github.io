const _0x14fab7 = _0x4185;
(function (_0x38e3f8, _0x267540) {
  const _0x41394b = _0x4185,
    _0x34e4b9 = _0x38e3f8();
  while (!![]) {
    try {
      const _0x1643ee =
        -parseInt(_0x41394b(0x1d6)) / 0x1 +
        -parseInt(_0x41394b(0x1ae)) / 0x2 +
        -parseInt(_0x41394b(0x1b5)) / 0x3 +
        (-parseInt(_0x41394b(0x1b9)) / 0x4) *
          (-parseInt(_0x41394b(0x1d5)) / 0x5) +
        parseInt(_0x41394b(0x1a7)) / 0x6 +
        parseInt(_0x41394b(0x1e4)) / 0x7 +
        (-parseInt(_0x41394b(0x1ec)) / 0x8) *
          (-parseInt(_0x41394b(0x1c5)) / 0x9);
      if (_0x1643ee === _0x267540) break;
      else _0x34e4b9["push"](_0x34e4b9["shift"]());
    } catch (_0x3beae4) {
      _0x34e4b9["push"](_0x34e4b9["shift"]());
    }
  }
})(_0x1030, 0xdf59d);
const cardsContainer = document["getElementById"](_0x14fab7(0x1b2)),
  paginationContainer = document[_0x14fab7(0x1da)](_0x14fab7(0x1cd)),
  searchInput = document["getElementById"](_0x14fab7(0x1bd));
function _0x4185(_0xc14b74, _0x1bc2a8) {
  const _0x1030d8 = _0x1030();
  return (
    (_0x4185 = function (_0x4185cf, _0x1cc7fc) {
      _0x4185cf = _0x4185cf - 0x1a2;
      let _0x7f7a1d = _0x1030d8[_0x4185cf];
      return _0x7f7a1d;
    }),
    _0x4185(_0xc14b74, _0x1bc2a8)
  );
}
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch("https://api.npoint.io/9e11ea10ce7a4312e013")
  [_0x14fab7(0x1e6)]((_0x24e0f2) => _0x24e0f2["json"]())
  [_0x14fab7(0x1e6)]((_0xf5d68a) => {
    const _0x250cb0 = _0x14fab7;
    (currentCards = _0xf5d68a),
      (filteredCards = currentCards),
      _0xf5d68a["sort"](
        (_0x5939e6, _0x5176d5) => _0x5176d5["id"] - _0x5939e6["id"]
      ),
      _0xf5d68a[_0x250cb0(0x1a6)](),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x4db600 = _0x14fab7;
  cardsContainer[_0x4db600(0x1c7)] = "";
  const _0x5649d6 = (currentPage - 0x1) * cardsPerPage,
    _0x22939 = _0x5649d6 + cardsPerPage,
    _0x463050 = filteredCards[_0x4db600(0x1d8)](_0x5649d6, _0x22939);
  _0x463050[_0x4db600(0x1a5)]((_0x3b8b44) => {
    const _0x34a578 = _0x4db600,
      _0x27ec79 = document[_0x34a578(0x1c2)](_0x34a578(0x1cf));
    _0x27ec79["classList"][_0x34a578(0x1df)]("card"),
      (_0x27ec79["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22" +
        _0x3b8b44["img"] +
        _0x34a578(0x1ed) +
        _0x3b8b44[_0x34a578(0x1c9)] +
        _0x34a578(0x1e9) +
        _0x3b8b44[_0x34a578(0x1e8)] +
        "\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer[_0x34a578(0x1c1)](_0x27ec79);
  });
}
function renderPagination() {
  const _0xcc695c = _0x14fab7;
  paginationContainer[_0xcc695c(0x1c7)] = "";
  const _0x297377 = Math[_0xcc695c(0x1a8)](
      filteredCards[_0xcc695c(0x1e2)] / cardsPerPage
    ),
    _0x57274c = 0x4;
  let _0x32b52c = Math[_0xcc695c(0x1e5)](
      0x1,
      currentPage - Math[_0xcc695c(0x1be)](_0x57274c / 0x2)
    ),
    _0xd6cc56 = Math[_0xcc695c(0x1bc)](_0x297377, _0x32b52c + _0x57274c - 0x1);
  _0xd6cc56 - _0x32b52c + 0x1 < _0x57274c &&
    (_0x32b52c = Math[_0xcc695c(0x1e5)](0x1, _0xd6cc56 - _0x57274c + 0x1));
  for (let _0x4fc950 = _0x32b52c; _0x4fc950 <= _0xd6cc56; _0x4fc950++) {
    const _0x21b4a9 = document[_0xcc695c(0x1c2)](_0xcc695c(0x1b7));
    (_0x21b4a9[_0xcc695c(0x1b4)] = _0x4fc950),
      _0x21b4a9[_0xcc695c(0x1bb)]("click", () => {
        const _0x1a8c7d = _0xcc695c;
        (currentPage = _0x4fc950),
          renderCards(),
          renderPagination(),
          window["matchMedia"]("(max-width:\x20767px)")["matches"] &&
            window[_0x1a8c7d(0x1ab)](0x0, 0x0);
      }),
      _0x4fc950 === currentPage &&
        _0x21b4a9[_0xcc695c(0x1d9)][_0xcc695c(0x1df)](_0xcc695c(0x1a9)),
      paginationContainer[_0xcc695c(0x1c1)](_0x21b4a9);
  }
  const _0x47152f = document[_0xcc695c(0x1c2)](_0xcc695c(0x1b7));
  (_0x47152f[_0xcc695c(0x1c7)] = _0xcc695c(0x1bf)),
    (_0x47152f[_0xcc695c(0x1ba)][_0xcc695c(0x1a2)] = _0xcc695c(0x1b8)),
    _0x47152f[_0xcc695c(0x1bb)]("click", () => {
      const _0x17a5ff = _0xcc695c;
      currentPage < _0x297377 &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window["matchMedia"](_0x17a5ff(0x1c8))[_0x17a5ff(0x1ee)] &&
          window[_0x17a5ff(0x1ab)](0x0, 0x0));
    });
  const _0x2cd5b3 = document["createElement"](_0xcc695c(0x1b7));
  (_0x2cd5b3[_0xcc695c(0x1c7)] = _0xcc695c(0x1b1)),
    (_0x2cd5b3[_0xcc695c(0x1ba)][_0xcc695c(0x1a2)] = _0xcc695c(0x1b8)),
    _0x2cd5b3[_0xcc695c(0x1bb)](_0xcc695c(0x1af), () => {
      const _0x28d74b = _0xcc695c;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window[_0x28d74b(0x1b3)](_0x28d74b(0x1c8))[_0x28d74b(0x1ee)] &&
          window[_0x28d74b(0x1ab)](0x0, 0x0));
    }),
    paginationContainer[_0xcc695c(0x1c3)](
      _0x2cd5b3,
      paginationContainer[_0xcc695c(0x1ea)]
    ),
    paginationContainer[_0xcc695c(0x1c1)](_0x47152f);
}
searchInput[_0x14fab7(0x1bb)](_0x14fab7(0x1e0), () => {
  const _0x3be755 = _0x14fab7,
    _0x3483ca = searchInput[_0x3be755(0x1a3)]
      [_0x3be755(0x1ad)]()
      [_0x3be755(0x1ac)]();
  (filteredCards = currentCards["filter"]((_0x1ba685) =>
    _0x1ba685[_0x3be755(0x1c9)][_0x3be755(0x1ac)]()[_0x3be755(0x1cc)](_0x3483ca)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document[_0x14fab7(0x1d7)](_0x14fab7(0x1d1)),
  categoryButtons = document[_0x14fab7(0x1d7)](_0x14fab7(0x1a4));
aniosButtons["forEach"]((_0x40132a) => {
  const _0x4c3696 = _0x14fab7;
  _0x40132a[_0x4c3696(0x1bb)]("click", () => {
    const _0x4696af = _0x4c3696,
      _0x41a193 = _0x40132a[_0x4696af(0x1b6)][_0x4696af(0x1d4)];
    _0x41a193 === _0x4696af(0x1ce)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards["filter"]((_0x289239) => {
          const _0x477a32 = _0x4696af;
          return _0x289239[_0x477a32(0x1b0)] === _0x41a193;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x4696af(0x1a5)]((_0x1b13df) => {
        const _0x3a01f1 = _0x4696af;
        _0x1b13df[_0x3a01f1(0x1d9)][_0x3a01f1(0x1cb)]("active");
      }),
      _0x40132a["classList"][_0x4696af(0x1df)](_0x4696af(0x1a9)),
      categoryButtons[_0x4696af(0x1a5)]((_0x470ef7) => {
        const _0x4a1d45 = _0x4696af;
        _0x470ef7["classList"]["remove"](_0x4a1d45(0x1a9));
      });
  });
}),
  categoryButtons[_0x14fab7(0x1a5)]((_0x331825) => {
    const _0x3dfe09 = _0x14fab7;
    _0x331825[_0x3dfe09(0x1bb)]("click", () => {
      const _0x14a948 = _0x3dfe09,
        _0x38ed35 = _0x331825[_0x14a948(0x1b6)]["category"];
      _0x38ed35 === _0x14a948(0x1ce)
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0x14a948(0x1eb)]((_0x604fee) => {
            const _0x29dc39 = _0x14a948;
            return _0x604fee[_0x29dc39(0x1c6)][_0x29dc39(0x1cc)](_0x38ed35);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0x14a948(0x1a5)]((_0x470f3e) => {
          const _0x147d91 = _0x14a948;
          _0x470f3e[_0x147d91(0x1d9)]["remove"](_0x147d91(0x1a9));
        }),
        _0x331825["classList"][_0x14a948(0x1df)]("active"),
        aniosButtons[_0x14a948(0x1a5)]((_0x3f9e55) => {
          const _0x27cb69 = _0x14a948;
          _0x3f9e55[_0x27cb69(0x1d9)][_0x27cb69(0x1cb)](_0x27cb69(0x1a9));
        });
    });
  });
function _0x1030() {
  const _0x2aa233 = [
    "myBtn",
    "appendChild",
    "createElement",
    "insertBefore",
    "scrollTop",
    "9JUpMVu",
    "catego",
    "innerHTML",
    "(max-width:\x20767px)",
    "name",
    "setAttribute",
    "remove",
    "includes",
    "pagination-container",
    "all",
    "div",
    "none",
    ".anios-button",
    "body",
    "trailer-video",
    "category",
    "4334370kfIVBH",
    "1826737dkFlAu",
    "querySelectorAll",
    "slice",
    "classList",
    "getElementById",
    "trailer-modal",
    "block",
    "href",
    "display",
    "add",
    "input",
    "src",
    "length",
    "currentTarget",
    "7963984dIxdBb",
    "max",
    "then",
    "preventDefault",
    "link",
    "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22",
    "firstChild",
    "filter",
    "7287088HsqJBQ",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "matches",
    "backgroundColor",
    "value",
    ".category-button",
    "forEach",
    "reverse",
    "8202270fYAJET",
    "ceil",
    "active",
    "getAttribute",
    "scrollTo",
    "toLowerCase",
    "trim",
    "1059584JzUJSP",
    "click",
    "anio",
    "&lt;",
    "cards-container",
    "matchMedia",
    "innerText",
    "3033429LsyiZe",
    "dataset",
    "button",
    "#008cba",
    "4wKkMsl",
    "style",
    "addEventListener",
    "min",
    "search-input",
    "floor",
    "&gt;",
  ];
  _0x1030 = function () {
    return _0x2aa233;
  };
  return _0x1030();
}
function showTrailer(_0x1c7165) {
  const _0x5217a8 = _0x14fab7;
  _0x1c7165[_0x5217a8(0x1e7)]();
  var _0x3a3a98 = document[_0x5217a8(0x1da)](_0x5217a8(0x1db)),
    _0x1ea3b4 = document[_0x5217a8(0x1da)](_0x5217a8(0x1d3)),
    _0x407e3d = _0x1c7165[_0x5217a8(0x1e3)],
    _0x2aca9d = _0x407e3d[_0x5217a8(0x1aa)](_0x5217a8(0x1dd));
  _0x1ea3b4[_0x5217a8(0x1ca)](_0x5217a8(0x1e1), _0x2aca9d),
    (_0x3a3a98[_0x5217a8(0x1ba)][_0x5217a8(0x1de)] = _0x5217a8(0x1dc));
}
function closeTrailer() {
  const _0x33900b = _0x14fab7;
  var _0x1daa71 = document[_0x33900b(0x1da)]("trailer-modal"),
    _0x598263 = document[_0x33900b(0x1da)](_0x33900b(0x1d3));
  _0x598263[_0x33900b(0x1ca)](_0x33900b(0x1e1), ""),
    (_0x1daa71[_0x33900b(0x1ba)][_0x33900b(0x1de)] = _0x33900b(0x1d0));
}
(mybutton = document[_0x14fab7(0x1da)](_0x14fab7(0x1c0))),
  (window["onscroll"] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0xf87c6e = _0x14fab7;
  document[_0xf87c6e(0x1d2)][_0xf87c6e(0x1c4)] > 0x14 ||
  document["documentElement"][_0xf87c6e(0x1c4)] > 0x14
    ? (mybutton[_0xf87c6e(0x1ba)][_0xf87c6e(0x1de)] = _0xf87c6e(0x1dc))
    : (mybutton["style"][_0xf87c6e(0x1de)] = _0xf87c6e(0x1d0));
}
function topFunction() {
  const _0x108f75 = _0x14fab7;
  (document[_0x108f75(0x1d2)][_0x108f75(0x1c4)] = 0x0),
    (document["documentElement"][_0x108f75(0x1c4)] = 0x0);
}
