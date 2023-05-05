const _0x4d84f7 = _0x58d0;
(function (_0x57580e, _0x415644) {
  const _0x4a2f58 = _0x58d0,
    _0x4011ff = _0x57580e();
  while (!![]) {
    try {
      const _0x2759cd =
        -parseInt(_0x4a2f58(0x135)) / 0x1 +
        -parseInt(_0x4a2f58(0x147)) / 0x2 +
        (parseInt(_0x4a2f58(0x134)) / 0x3) *
          (parseInt(_0x4a2f58(0x13b)) / 0x4) +
        parseInt(_0x4a2f58(0x128)) / 0x5 +
        -parseInt(_0x4a2f58(0x14d)) / 0x6 +
        parseInt(_0x4a2f58(0x14a)) / 0x7 +
        parseInt(_0x4a2f58(0x148)) / 0x8;
      if (_0x2759cd === _0x415644) break;
      else _0x4011ff["push"](_0x4011ff["shift"]());
    } catch (_0x506410) {
      _0x4011ff["push"](_0x4011ff["shift"]());
    }
  }
})(_0x4352, 0x7a498);
const cardsContainer = document[_0x4d84f7(0x139)](_0x4d84f7(0x143)),
  paginationContainer = document[_0x4d84f7(0x139)]("pagination-container"),
  searchInput = document[_0x4d84f7(0x139)]("search-input");
function _0x4352() {
  const _0x47b4a7 = [
    "body",
    "none",
    "includes",
    "length",
    "appendChild",
    "click",
    "documentElement",
    "all",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "categoria",
    "getAttribute",
    "createElement",
    ".category-button",
    "175300gyDeEg",
    "toLowerCase",
    "https://api.npoint.io/9e11ea10ce7a4312e013",
    "querySelectorAll",
    "sort",
    "button",
    "dataset",
    "myBtn",
    "preventDefault",
    "block",
    "scrollTop",
    "classList",
    "160554vrbgco",
    "119846eldhpL",
    "value",
    "trailer-video",
    "style",
    "getElementById",
    "setAttribute",
    "8TMlpql",
    "add",
    "filter",
    "active",
    "categoria_1",
    "then",
    "json",
    "\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "cards-container",
    "href",
    "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22",
    "currentTarget",
    "560842AqaPHq",
    "1391200HPhiaE",
    "category",
    "6884101NMGkeK",
    "img",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "2389704vlQSvi",
    "forEach",
    "categoria_2",
    "src",
    "addEventListener",
    "name",
    "innerHTML",
    "remove",
    "div",
    "display",
    "card",
  ];
  _0x4352 = function () {
    return _0x47b4a7;
  };
  return _0x4352();
}
let currentPage = 0x1,
  cardsPerPage = 0xa,
  currentCards = [],
  filteredCards = [];
fetch(_0x4d84f7(0x12a))
  [_0x4d84f7(0x140)]((_0x15ad93) => _0x15ad93[_0x4d84f7(0x141)]())
  [_0x4d84f7(0x140)]((_0x423339) => {
    const _0x53b819 = _0x4d84f7;
    _0x423339[_0x53b819(0x12c)](
      (_0x23673e, _0x4903f6) => _0x4903f6["id"] - _0x23673e["id"]
    ),
      (currentCards = _0x423339),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function _0x58d0(_0x12d948, _0x255c4c) {
  const _0x4352ce = _0x4352();
  return (
    (_0x58d0 = function (_0x58d0fe, _0x425695) {
      _0x58d0fe = _0x58d0fe - 0x120;
      let _0x12fc86 = _0x4352ce[_0x58d0fe];
      return _0x12fc86;
    }),
    _0x58d0(_0x12d948, _0x255c4c)
  );
}
function renderCards() {
  const _0x5b391c = _0x4d84f7;
  cardsContainer["innerHTML"] = "";
  const _0x4409a1 = (currentPage - 0x1) * cardsPerPage,
    _0xb2cc27 = _0x4409a1 + cardsPerPage,
    _0x1d123b = filteredCards["slice"](_0x4409a1, _0xb2cc27);
  _0x1d123b[_0x5b391c(0x14e)]((_0x5f5583) => {
    const _0x44fe47 = _0x5b391c,
      _0x5323d7 = document[_0x44fe47(0x126)](_0x44fe47(0x155));
    _0x5323d7[_0x44fe47(0x133)]["add"](_0x44fe47(0x157)),
      (_0x5323d7[_0x44fe47(0x153)] =
        _0x44fe47(0x14c) +
        _0x5f5583[_0x44fe47(0x14b)] +
        _0x44fe47(0x123) +
        _0x5f5583[_0x44fe47(0x152)] +
        _0x44fe47(0x145) +
        _0x5f5583["link"] +
        _0x44fe47(0x142)),
      cardsContainer[_0x44fe47(0x15c)](_0x5323d7);
  });
}
function renderPagination() {
  const _0x9e9e98 = _0x4d84f7;
  paginationContainer[_0x9e9e98(0x153)] = "";
  const _0x18b69b = Math["ceil"](
    filteredCards[_0x9e9e98(0x15b)] / cardsPerPage
  );
  for (let _0x11b6f4 = 0x1; _0x11b6f4 <= _0x18b69b; _0x11b6f4++) {
    const _0x389133 = document[_0x9e9e98(0x126)](_0x9e9e98(0x12d));
    (_0x389133["innerText"] = _0x11b6f4),
      _0x389133["addEventListener"](_0x9e9e98(0x120), () => {
        (currentPage = _0x11b6f4), renderCards();
      }),
      paginationContainer[_0x9e9e98(0x15c)](_0x389133);
  }
}
searchInput[_0x4d84f7(0x151)]("input", () => {
  const _0x5089cf = _0x4d84f7,
    _0x5107a5 = searchInput[_0x5089cf(0x136)]["trim"]()[_0x5089cf(0x129)]();
  (filteredCards = currentCards["filter"]((_0x5e29c8) =>
    _0x5e29c8["name"][_0x5089cf(0x129)]()[_0x5089cf(0x15a)](_0x5107a5)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document[_0x4d84f7(0x12b)](_0x4d84f7(0x127));
categoryButtons["forEach"]((_0x5722e1) => {
  const _0x3ad590 = _0x4d84f7;
  _0x5722e1[_0x3ad590(0x151)](_0x3ad590(0x120), () => {
    const _0x3b8537 = _0x3ad590,
      _0x5648f4 = _0x5722e1[_0x3b8537(0x12e)][_0x3b8537(0x149)];
    _0x5648f4 === _0x3b8537(0x122)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x3b8537(0x13d)]((_0x21eef6) => {
          const _0x53c961 = _0x3b8537;
          return (
            _0x21eef6[_0x53c961(0x124)] === _0x5648f4 ||
            _0x21eef6[_0x53c961(0x13f)] === _0x5648f4 ||
            _0x21eef6[_0x53c961(0x14f)] === _0x5648f4
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0x3b8537(0x14e)]((_0x183e21) => {
        const _0x138d60 = _0x3b8537;
        _0x183e21[_0x138d60(0x133)][_0x138d60(0x154)](_0x138d60(0x13e));
      }),
      _0x5722e1[_0x3b8537(0x133)][_0x3b8537(0x13c)](_0x3b8537(0x13e));
  });
});
function showTrailer(_0x10e946) {
  const _0x5bfb3d = _0x4d84f7;
  _0x10e946[_0x5bfb3d(0x130)]();
  var _0xfb9957 = document[_0x5bfb3d(0x139)]("trailer-modal"),
    _0x55a943 = document[_0x5bfb3d(0x139)](_0x5bfb3d(0x137)),
    _0x334733 = _0x10e946[_0x5bfb3d(0x146)],
    _0x422510 = _0x334733[_0x5bfb3d(0x125)](_0x5bfb3d(0x144));
  _0x55a943[_0x5bfb3d(0x13a)](_0x5bfb3d(0x150), _0x422510),
    (_0xfb9957[_0x5bfb3d(0x138)][_0x5bfb3d(0x156)] = _0x5bfb3d(0x131));
}
function closeTrailer() {
  const _0x5e017d = _0x4d84f7;
  var _0x44d7f7 = document["getElementById"]("trailer-modal"),
    _0x237603 = document["getElementById"]("trailer-video");
  _0x237603["setAttribute"](_0x5e017d(0x150), ""),
    (_0x44d7f7[_0x5e017d(0x138)]["display"] = _0x5e017d(0x159));
}
(mybutton = document[_0x4d84f7(0x139)](_0x4d84f7(0x12f))),
  (window["onscroll"] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x1d832c = _0x4d84f7;
  document[_0x1d832c(0x158)]["scrollTop"] > 0x14 ||
  document[_0x1d832c(0x121)][_0x1d832c(0x132)] > 0x14
    ? (mybutton["style"][_0x1d832c(0x156)] = _0x1d832c(0x131))
    : (mybutton["style"][_0x1d832c(0x156)] = _0x1d832c(0x159));
}
function topFunction() {
  const _0x2e17bb = _0x4d84f7;
  (document["body"][_0x2e17bb(0x132)] = 0x0),
    (document[_0x2e17bb(0x121)]["scrollTop"] = 0x0);
}
