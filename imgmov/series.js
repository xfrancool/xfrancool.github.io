const _0x4c894b = _0x333c;
(function (_0x58dd30, _0x40415e) {
  const _0x51981a = _0x333c,
    _0x5c0b70 = _0x58dd30();
  while (!![]) {
    try {
      const _0x44f7c4 =
        parseInt(_0x51981a(0x9e)) / 0x1 +
        (-parseInt(_0x51981a(0xb1)) / 0x2) *
          (-parseInt(_0x51981a(0xb9)) / 0x3) +
        parseInt(_0x51981a(0xae)) / 0x4 +
        (parseInt(_0x51981a(0xb7)) / 0x5) * (parseInt(_0x51981a(0xbc)) / 0x6) +
        parseInt(_0x51981a(0xb6)) / 0x7 +
        (-parseInt(_0x51981a(0xa9)) / 0x8) *
          (-parseInt(_0x51981a(0x9d)) / 0x9) +
        -parseInt(_0x51981a(0x92)) / 0xa;
      if (_0x44f7c4 === _0x40415e) break;
      else _0x5c0b70["push"](_0x5c0b70["shift"]());
    } catch (_0x497f50) {
      _0x5c0b70["push"](_0x5c0b70["shift"]());
    }
  }
})(_0x5b74, 0x53033);
const cardsContainer = document["getElementById"](_0x4c894b(0xbf)),
  paginationContainer = document[_0x4c894b(0x8e)]("pagination-container"),
  searchInput = document["getElementById"](_0x4c894b(0xa3));
function _0x333c(_0x474b73, _0x43f039) {
  const _0x5b7454 = _0x5b74();
  return (
    (_0x333c = function (_0x333c5f, _0x11868b) {
      _0x333c5f = _0x333c5f - 0x86;
      let _0x7b9601 = _0x5b7454[_0x333c5f];
      return _0x7b9601;
    }),
    _0x333c(_0x474b73, _0x43f039)
  );
}
let currentPage = 0x1,
  cardsPerPage = 0xa,
  currentCards = [],
  filteredCards = [];
fetch(_0x4c894b(0xbd))
  [_0x4c894b(0xc9)]((_0x3ca254) => _0x3ca254[_0x4c894b(0x95)]())
  [_0x4c894b(0xc9)]((_0x2157a4) => {
    const _0x2664f9 = _0x4c894b;
    _0x2157a4[_0x2664f9(0xc6)](
      (_0x418990, _0x35b17d) => _0x35b17d["id"] - _0x418990["id"]
    ),
      (currentCards = _0x2157a4),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x302a3a = _0x4c894b;
  cardsContainer["innerHTML"] = "";
  const _0x2321e3 = (currentPage - 0x1) * cardsPerPage,
    _0x48475e = _0x2321e3 + cardsPerPage,
    _0x567344 = filteredCards[_0x302a3a(0x86)](_0x2321e3, _0x48475e);
  _0x567344[_0x302a3a(0xa8)]((_0x390a9d) => {
    const _0x493a13 = _0x302a3a,
      _0x229786 = document[_0x493a13(0xb2)](_0x493a13(0xaa));
    _0x229786["classList"]["add"](_0x493a13(0xb3)),
      (_0x229786[_0x493a13(0x8a)] =
        _0x493a13(0xa1) +
        _0x390a9d["img"] +
        _0x493a13(0xc1) +
        _0x390a9d[_0x493a13(0x8d)] +
        _0x493a13(0xc2) +
        _0x390a9d[_0x493a13(0xcb)] +
        "\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Trailer\x20🎬</a>\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22" +
        _0x390a9d[_0x493a13(0x88)] +
        _0x493a13(0xb5)),
      cardsContainer[_0x493a13(0x99)](_0x229786);
  });
}
function renderPagination() {
  const _0x30d7b1 = _0x4c894b;
  paginationContainer["innerHTML"] = "";
  const _0x5be954 = Math[_0x30d7b1(0xbb)](
      filteredCards[_0x30d7b1(0x96)] / cardsPerPage
    ),
    _0x10a3c0 = 0x4;
  let _0x5d1196 = Math[_0x30d7b1(0x89)](
      0x1,
      currentPage - Math[_0x30d7b1(0xa7)](_0x10a3c0 / 0x2)
    ),
    _0x1524b1 = Math[_0x30d7b1(0xa5)](_0x5be954, _0x5d1196 + _0x10a3c0 - 0x1);
  _0x1524b1 - _0x5d1196 + 0x1 < _0x10a3c0 &&
    (_0x5d1196 = Math[_0x30d7b1(0x89)](0x1, _0x1524b1 - _0x10a3c0 + 0x1));
  for (let _0x231906 = _0x5d1196; _0x231906 <= _0x1524b1; _0x231906++) {
    const _0x4f0a45 = document[_0x30d7b1(0xb2)](_0x30d7b1(0xc4));
    (_0x4f0a45[_0x30d7b1(0x97)] = _0x231906),
      _0x4f0a45["addEventListener"]("click", () => {
        (currentPage = _0x231906), renderCards(), renderPagination();
      }),
      _0x231906 === currentPage && _0x4f0a45["classList"]["add"]("active"),
      paginationContainer[_0x30d7b1(0x99)](_0x4f0a45);
  }
  const _0x2149c2 = document[_0x30d7b1(0xb2)](_0x30d7b1(0xc4));
  (_0x2149c2[_0x30d7b1(0x8a)] = _0x30d7b1(0xb0)),
    (_0x2149c2["style"][_0x30d7b1(0x9a)] = _0x30d7b1(0x9b)),
    _0x2149c2[_0x30d7b1(0xab)](_0x30d7b1(0x9f), () => {
      currentPage < _0x5be954 &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0xdf117d = document[_0x30d7b1(0xb2)](_0x30d7b1(0xc4));
  (_0xdf117d["innerHTML"] = _0x30d7b1(0x94)),
    (_0xdf117d[_0x30d7b1(0xa0)][_0x30d7b1(0x9a)] = _0x30d7b1(0x9b)),
    _0xdf117d[_0x30d7b1(0xab)](_0x30d7b1(0x9f), () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x30d7b1(0x8b)](
      _0xdf117d,
      paginationContainer["firstChild"]
    ),
    paginationContainer["appendChild"](_0x2149c2);
}
searchInput[_0x4c894b(0xab)](_0x4c894b(0xcc), () => {
  const _0x1a970d = _0x4c894b,
    _0x11ba94 = searchInput["value"][_0x1a970d(0xbe)]()[_0x1a970d(0xb8)]();
  (filteredCards = currentCards["filter"]((_0x5e5cbd) =>
    _0x5e5cbd["name"][_0x1a970d(0xb8)]()[_0x1a970d(0xaf)](_0x11ba94)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document[_0x4c894b(0xc5)](_0x4c894b(0x8c));
categoryButtons[_0x4c894b(0xa8)]((_0x3a0e2c) => {
  const _0x315800 = _0x4c894b;
  _0x3a0e2c[_0x315800(0xab)](_0x315800(0x9f), () => {
    const _0x53e281 = _0x315800,
      _0x119c21 = _0x3a0e2c[_0x53e281(0x9c)]["category"];
    _0x119c21 === _0x53e281(0xc3)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x53e281(0xc0)]((_0x9cf00d) => {
          const _0x23453a = _0x53e281;
          return (
            _0x9cf00d[_0x23453a(0xac)] === _0x119c21 ||
            _0x9cf00d[_0x23453a(0xa6)] === _0x119c21 ||
            _0x9cf00d[_0x23453a(0xad)] === _0x119c21
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0x53e281(0xa8)]((_0xd07d1e) => {
        const _0x2cd943 = _0x53e281;
        _0xd07d1e["classList"][_0x2cd943(0x87)](_0x2cd943(0x90));
      }),
      _0x3a0e2c[_0x53e281(0x8f)][_0x53e281(0xcd)]("active");
  });
});
function showTrailer(_0x1002df) {
  const _0x411414 = _0x4c894b;
  _0x1002df[_0x411414(0xba)]();
  var _0x1bb1f0 = document[_0x411414(0x8e)](_0x411414(0xb4)),
    _0x46693e = document[_0x411414(0x8e)]("trailer-video"),
    _0x5bcb1a = _0x1002df[_0x411414(0xc8)],
    _0x43b70a = _0x5bcb1a[_0x411414(0x93)](_0x411414(0x91));
  _0x46693e[_0x411414(0xa2)](_0x411414(0xce), _0x43b70a),
    (_0x1bb1f0[_0x411414(0xa0)][_0x411414(0xa4)] = _0x411414(0xc7));
}
function _0x5b74() {
  const _0x5b06df = [
    "all",
    "button",
    "querySelectorAll",
    "sort",
    "block",
    "currentTarget",
    "then",
    "none",
    "trailer",
    "input",
    "add",
    "src",
    "slice",
    "remove",
    "link",
    "max",
    "innerHTML",
    "insertBefore",
    ".category-button",
    "name",
    "getElementById",
    "classList",
    "active",
    "href",
    "11008780vIUipY",
    "getAttribute",
    "&lt;",
    "json",
    "length",
    "innerText",
    "trailer-video",
    "appendChild",
    "backgroundColor",
    "#008cba",
    "dataset",
    "9tdkQMv",
    "180427MCPNnp",
    "click",
    "style",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "setAttribute",
    "search-input",
    "display",
    "min",
    "categoria_1",
    "floor",
    "forEach",
    "756616bMajUA",
    "div",
    "addEventListener",
    "categoria",
    "categoria_2",
    "815528rsZZWX",
    "includes",
    "&gt;",
    "97718IuvXib",
    "createElement",
    "card",
    "trailer-modal",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "1852319OKpVpm",
    "5yJbkqH",
    "toLowerCase",
    "15flZNjQ",
    "preventDefault",
    "ceil",
    "2718594nRVGjA",
    "https://api.npoint.io/9e11ea10ce7a4312e013",
    "trim",
    "cards-container",
    "filter",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "\x20<br>\x20\x20<br>\x20<a\x20id=\x22trailer\x22\x20href=\x22",
  ];
  _0x5b74 = function () {
    return _0x5b06df;
  };
  return _0x5b74();
}
function closeTrailer() {
  const _0x2f11ee = _0x4c894b;
  var _0x4762ec = document["getElementById"]("trailer-modal"),
    _0x2071e1 = document[_0x2f11ee(0x8e)](_0x2f11ee(0x98));
  _0x2071e1["setAttribute"](_0x2f11ee(0xce), ""),
    (_0x4762ec[_0x2f11ee(0xa0)][_0x2f11ee(0xa4)] = _0x2f11ee(0xca));
}
