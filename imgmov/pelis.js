const _0x3a2fde = _0x5a2c;
(function (_0x2b41a4, _0x4d41cd) {
  const _0x50a29f = _0x5a2c,
    _0x24e9b1 = _0x2b41a4();
  while (!![]) {
    try {
      const _0x1e311b =
        (-parseInt(_0x50a29f(0x157)) / 0x1) *
          (parseInt(_0x50a29f(0x12c)) / 0x2) +
        (-parseInt(_0x50a29f(0x139)) / 0x3) *
          (-parseInt(_0x50a29f(0x12a)) / 0x4) +
        (parseInt(_0x50a29f(0x155)) / 0x5) *
          (-parseInt(_0x50a29f(0x149)) / 0x6) +
        (parseInt(_0x50a29f(0x123)) / 0x7) *
          (parseInt(_0x50a29f(0x122)) / 0x8) +
        (parseInt(_0x50a29f(0x128)) / 0x9) *
          (-parseInt(_0x50a29f(0x144)) / 0xa) +
        (parseInt(_0x50a29f(0x138)) / 0xb) *
          (parseInt(_0x50a29f(0x124)) / 0xc) +
        (parseInt(_0x50a29f(0x12d)) / 0xd) * (parseInt(_0x50a29f(0x11b)) / 0xe);
      if (_0x1e311b === _0x4d41cd) break;
      else _0x24e9b1["push"](_0x24e9b1["shift"]());
    } catch (_0x2b54d1) {
      _0x24e9b1["push"](_0x24e9b1["shift"]());
    }
  }
})(_0x34d7, 0x5d3bd);
const cardsContainer = document[_0x3a2fde(0x130)](_0x3a2fde(0x120)),
  paginationContainer = document[_0x3a2fde(0x130)](_0x3a2fde(0x11f)),
  searchInput = document[_0x3a2fde(0x130)]("search-input");
function _0x34d7() {
  const _0x32a72f = [
    "block",
    "trailer-modal",
    "trailer",
    "active",
    "category",
    "sort",
    "10wPKEEZ",
    "categoria_1",
    "2OPEnOj",
    "categoria",
    "all",
    "add",
    "min",
    "click",
    "max",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p>",
    "style",
    "then",
    "appendChild",
    "setAttribute",
    "img",
    "card",
    "categoria_2",
    "toLowerCase",
    "14NrLbvD",
    "slice",
    "forEach",
    "currentTarget",
    "pagination-container",
    "cards-container",
    "getAttribute",
    "112eaCAQn",
    "62503vurAPe",
    "12LoWLYT",
    "none",
    "remove",
    "backgroundColor",
    "18mESWun",
    "input",
    "20YDCBeu",
    "classList",
    "455384acAMDx",
    "11171381Juynbi",
    "&gt;",
    "innerText",
    "getElementById",
    "</p>\x20\x20<br>\x20<a\x20id=\x22trailer\x22\x20href=\x22",
    "display",
    "createElement",
    "link",
    "ceil",
    "catego",
    "trailer-video",
    "845757nYHoUJ",
    "42327FCDWsi",
    ".category-button",
    "&lt;",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "includes",
    "src",
    "json",
    "button",
    "filter",
    "div",
    "insertBefore",
    "29180OgRelb",
    "name",
    "preventDefault",
    "floor",
    "addEventListener",
    "866010XIfNId",
    "https://api.npoint.io/d70085baf287ef7f02b0",
    "value",
    "href",
    "trim",
    "innerHTML",
  ];
  _0x34d7 = function () {
    return _0x32a72f;
  };
  return _0x34d7();
}
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
function _0x5a2c(_0xa33748, _0x3f7bf0) {
  const _0x34d76b = _0x34d7();
  return (
    (_0x5a2c = function (_0x5a2c50, _0x4ea56b) {
      _0x5a2c50 = _0x5a2c50 - 0x111;
      let _0x535404 = _0x34d76b[_0x5a2c50];
      return _0x535404;
    }),
    _0x5a2c(_0xa33748, _0x3f7bf0)
  );
}
fetch(_0x3a2fde(0x14a))
  [_0x3a2fde(0x114)]((_0x5d3873) => _0x5d3873[_0x3a2fde(0x13f)]())
  [_0x3a2fde(0x114)]((_0x4830c5) => {
    const _0x428f00 = _0x3a2fde;
    _0x4830c5[_0x428f00(0x154)](
      (_0x1cde30, _0x95fc06) => _0x95fc06["id"] - _0x1cde30["id"]
    ),
      (currentCards = _0x4830c5),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x6e8fa3 = _0x3a2fde;
  cardsContainer["innerHTML"] = "";
  const _0x5d4e80 = (currentPage - 0x1) * cardsPerPage,
    _0x3b6da2 = _0x5d4e80 + cardsPerPage,
    _0x3f96a1 = filteredCards[_0x6e8fa3(0x11c)](_0x5d4e80, _0x3b6da2);
  _0x3f96a1["forEach"]((_0x5acaec) => {
    const _0x4a74c4 = _0x6e8fa3,
      _0x3a245c = document[_0x4a74c4(0x133)](_0x4a74c4(0x142));
    _0x3a245c[_0x4a74c4(0x12b)][_0x4a74c4(0x15a)](_0x4a74c4(0x118)),
      (_0x3a245c[_0x4a74c4(0x14e)] =
        _0x4a74c4(0x13c) +
        _0x5acaec[_0x4a74c4(0x117)] +
        "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>" +
        _0x5acaec[_0x4a74c4(0x145)] +
        _0x4a74c4(0x131) +
        _0x5acaec[_0x4a74c4(0x151)] +
        "\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Trailer\x20🎬</a>\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22" +
        _0x5acaec[_0x4a74c4(0x134)] +
        _0x4a74c4(0x112) +
        _0x5acaec[_0x4a74c4(0x136)] +
        "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer[_0x4a74c4(0x115)](_0x3a245c);
  });
}
function renderPagination() {
  const _0x79bdc8 = _0x3a2fde;
  paginationContainer[_0x79bdc8(0x14e)] = "";
  const _0x42202f = Math[_0x79bdc8(0x135)](
      filteredCards["length"] / cardsPerPage
    ),
    _0x390a28 = 0x4;
  let _0x47894e = Math["max"](
      0x1,
      currentPage - Math[_0x79bdc8(0x147)](_0x390a28 / 0x2)
    ),
    _0x5f5894 = Math[_0x79bdc8(0x15b)](_0x42202f, _0x47894e + _0x390a28 - 0x1);
  _0x5f5894 - _0x47894e + 0x1 < _0x390a28 &&
    (_0x47894e = Math[_0x79bdc8(0x111)](0x1, _0x5f5894 - _0x390a28 + 0x1));
  for (let _0x51db41 = _0x47894e; _0x51db41 <= _0x5f5894; _0x51db41++) {
    const _0x4ae52c = document["createElement"](_0x79bdc8(0x140));
    (_0x4ae52c[_0x79bdc8(0x12f)] = _0x51db41),
      _0x4ae52c[_0x79bdc8(0x148)](_0x79bdc8(0x15c), () => {
        (currentPage = _0x51db41), renderCards(), renderPagination();
      }),
      _0x51db41 === currentPage &&
        _0x4ae52c[_0x79bdc8(0x12b)][_0x79bdc8(0x15a)]("active"),
      paginationContainer[_0x79bdc8(0x115)](_0x4ae52c);
  }
  const _0x4aa9c3 = document["createElement"]("button");
  (_0x4aa9c3[_0x79bdc8(0x14e)] = _0x79bdc8(0x12e)),
    (_0x4aa9c3["style"][_0x79bdc8(0x127)] = "#008cba"),
    _0x4aa9c3[_0x79bdc8(0x148)](_0x79bdc8(0x15c), () => {
      currentPage < _0x42202f &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x473f09 = document[_0x79bdc8(0x133)]("button");
  (_0x473f09[_0x79bdc8(0x14e)] = _0x79bdc8(0x13b)),
    (_0x473f09[_0x79bdc8(0x113)][_0x79bdc8(0x127)] = "#008cba"),
    _0x473f09[_0x79bdc8(0x148)]("click", () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x79bdc8(0x143)](
      _0x473f09,
      paginationContainer["firstChild"]
    ),
    paginationContainer[_0x79bdc8(0x115)](_0x4aa9c3);
}
searchInput[_0x3a2fde(0x148)](_0x3a2fde(0x129), () => {
  const _0x1c5fde = _0x3a2fde,
    _0x161d91 = searchInput[_0x1c5fde(0x14b)]
      [_0x1c5fde(0x14d)]()
      [_0x1c5fde(0x11a)]();
  (filteredCards = currentCards[_0x1c5fde(0x141)]((_0x4fef42) =>
    _0x4fef42[_0x1c5fde(0x145)]["toLowerCase"]()[_0x1c5fde(0x13d)](_0x161d91)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document["querySelectorAll"](_0x3a2fde(0x13a));
categoryButtons[_0x3a2fde(0x11d)]((_0x48055d) => {
  const _0x27e81a = _0x3a2fde;
  _0x48055d[_0x27e81a(0x148)](_0x27e81a(0x15c), () => {
    const _0x1b2aed = _0x27e81a,
      _0x61217f = _0x48055d["dataset"][_0x1b2aed(0x153)];
    _0x61217f === _0x1b2aed(0x159)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x1b2aed(0x141)]((_0x1eeddd) => {
          const _0x4c1f02 = _0x1b2aed;
          return (
            _0x1eeddd[_0x4c1f02(0x158)] === _0x61217f ||
            _0x1eeddd[_0x4c1f02(0x156)] === _0x61217f ||
            _0x1eeddd[_0x4c1f02(0x119)] === _0x61217f
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons["forEach"]((_0x48b74a) => {
        const _0x1c07a3 = _0x1b2aed;
        _0x48b74a[_0x1c07a3(0x12b)][_0x1c07a3(0x126)](_0x1c07a3(0x152));
      }),
      _0x48055d["classList"][_0x1b2aed(0x15a)](_0x1b2aed(0x152));
  });
});
function showTrailer(_0x3812a1) {
  const _0x1b52aa = _0x3a2fde;
  _0x3812a1[_0x1b52aa(0x146)]();
  var _0x21befc = document[_0x1b52aa(0x130)]("trailer-modal"),
    _0x4a4483 = document["getElementById"]("trailer-video"),
    _0x45802a = _0x3812a1[_0x1b52aa(0x11e)],
    _0x4418da = _0x45802a[_0x1b52aa(0x121)](_0x1b52aa(0x14c));
  _0x4a4483[_0x1b52aa(0x116)](_0x1b52aa(0x13e), _0x4418da),
    (_0x21befc[_0x1b52aa(0x113)]["display"] = _0x1b52aa(0x14f));
}
function closeTrailer() {
  const _0x47d0d0 = _0x3a2fde;
  var _0x2a8a26 = document["getElementById"](_0x47d0d0(0x150)),
    _0x51e6ae = document["getElementById"](_0x47d0d0(0x137));
  _0x51e6ae[_0x47d0d0(0x116)](_0x47d0d0(0x13e), ""),
    (_0x2a8a26[_0x47d0d0(0x113)][_0x47d0d0(0x132)] = _0x47d0d0(0x125));
}
