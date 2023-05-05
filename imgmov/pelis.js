const _0x1ec72e = _0x1578;
(function (_0x43a4d6, _0x40f859) {
  const _0x282850 = _0x1578,
    _0x5eee3e = _0x43a4d6();
  while (!![]) {
    try {
      const _0x2a62e5 =
        parseInt(_0x282850(0x14a)) / 0x1 +
        -parseInt(_0x282850(0x165)) / 0x2 +
        -parseInt(_0x282850(0x16c)) / 0x3 +
        (parseInt(_0x282850(0x140)) / 0x4) *
          (parseInt(_0x282850(0x158)) / 0x5) +
        -parseInt(_0x282850(0x176)) / 0x6 +
        -parseInt(_0x282850(0x154)) / 0x7 +
        (-parseInt(_0x282850(0x166)) / 0x8) *
          (-parseInt(_0x282850(0x167)) / 0x9);
      if (_0x2a62e5 === _0x40f859) break;
      else _0x5eee3e["push"](_0x5eee3e["shift"]());
    } catch (_0x2e2c12) {
      _0x5eee3e["push"](_0x5eee3e["shift"]());
    }
  }
})(_0x18b3, 0x39c8b);
const cardsContainer = document[_0x1ec72e(0x143)](_0x1ec72e(0x142)),
  paginationContainer = document["getElementById"](_0x1ec72e(0x147)),
  searchInput = document["getElementById"]("search-input");
let currentPage = 0x1,
  cardsPerPage = 0xa,
  currentCards = [],
  filteredCards = [];
fetch(_0x1ec72e(0x13f))
  [_0x1ec72e(0x151)]((_0x4e86c3) => _0x4e86c3["json"]())
  [_0x1ec72e(0x151)]((_0x28ac4b) => {
    const _0x2a60aa = _0x1ec72e;
    _0x28ac4b[_0x2a60aa(0x14f)](
      (_0x495917, _0x50898d) => _0x50898d["id"] - _0x495917["id"]
    ),
      (currentCards = _0x28ac4b),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x14c5ef = _0x1ec72e;
  cardsContainer[_0x14c5ef(0x15d)] = "";
  const _0x346ff3 = (currentPage - 0x1) * cardsPerPage,
    _0x33bb2b = _0x346ff3 + cardsPerPage,
    _0x4a0fe3 = filteredCards["slice"](_0x346ff3, _0x33bb2b);
  _0x4a0fe3[_0x14c5ef(0x17d)]((_0x4cca5c) => {
    const _0x53b41f = _0x14c5ef,
      _0x3a3f7e = document["createElement"](_0x53b41f(0x172));
    _0x3a3f7e[_0x53b41f(0x16a)][_0x53b41f(0x164)](_0x53b41f(0x174)),
      (_0x3a3f7e["innerHTML"] =
        "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22" +
        _0x4cca5c[_0x53b41f(0x159)] +
        _0x53b41f(0x178) +
        _0x4cca5c["name"] +
        _0x53b41f(0x179) +
        _0x4cca5c[_0x53b41f(0x14d)] +
        _0x53b41f(0x163) +
        _0x4cca5c["link"] +
        "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer[_0x53b41f(0x15b)](_0x3a3f7e);
  });
}
function renderPagination() {
  const _0x5b1d89 = _0x1ec72e;
  paginationContainer[_0x5b1d89(0x15d)] = "";
  const _0x1ddb9e = Math["ceil"](
    filteredCards[_0x5b1d89(0x15f)] / cardsPerPage
  );
  for (let _0x4dd9aa = 0x1; _0x4dd9aa <= _0x1ddb9e; _0x4dd9aa++) {
    const _0x189c13 = document[_0x5b1d89(0x155)](_0x5b1d89(0x14e));
    (_0x189c13[_0x5b1d89(0x16f)] = _0x4dd9aa),
      _0x189c13[_0x5b1d89(0x153)]("click", () => {
        (currentPage = _0x4dd9aa), renderCards();
      }),
      paginationContainer[_0x5b1d89(0x15b)](_0x189c13);
  }
}
searchInput[_0x1ec72e(0x153)](_0x1ec72e(0x169), () => {
  const _0x206c84 = _0x1ec72e,
    _0x1137f1 = searchInput[_0x206c84(0x16d)]
      [_0x206c84(0x16e)]()
      [_0x206c84(0x141)]();
  (filteredCards = currentCards[_0x206c84(0x148)]((_0x49bf02) =>
    _0x49bf02[_0x206c84(0x171)][_0x206c84(0x141)]()[_0x206c84(0x15a)](_0x1137f1)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document[_0x1ec72e(0x146)](_0x1ec72e(0x161));
function _0x1578(_0x40bd89, _0x4e3caa) {
  const _0x18b39f = _0x18b3();
  return (
    (_0x1578 = function (_0x157893, _0x586f62) {
      _0x157893 = _0x157893 - 0x13f;
      let _0x47e885 = _0x18b39f[_0x157893];
      return _0x47e885;
    }),
    _0x1578(_0x40bd89, _0x4e3caa)
  );
}
categoryButtons[_0x1ec72e(0x17d)]((_0x1a20e0) => {
  const _0x5658d6 = _0x1ec72e;
  _0x1a20e0[_0x5658d6(0x153)](_0x5658d6(0x145), () => {
    const _0x345917 = _0x5658d6,
      _0x552579 = _0x1a20e0[_0x345917(0x15e)]["category"];
    _0x552579 === _0x345917(0x170)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards["filter"]((_0x495366) => {
          const _0x591890 = _0x345917;
          return (
            _0x495366[_0x591890(0x175)] === _0x552579 ||
            _0x495366[_0x591890(0x152)] === _0x552579 ||
            _0x495366["categoria_2"] === _0x552579
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons["forEach"]((_0x23b970) => {
        const _0x194a9c = _0x345917;
        _0x23b970[_0x194a9c(0x16a)][_0x194a9c(0x14c)]("active");
      }),
      _0x1a20e0[_0x345917(0x16a)][_0x345917(0x164)](_0x345917(0x177));
  });
});
function _0x18b3() {
  const _0x8d80da = [
    "none",
    "then",
    "categoria_1",
    "addEventListener",
    "1167446iFCWOF",
    "createElement",
    "getAttribute",
    "body",
    "71930Wdnioz",
    "img",
    "includes",
    "appendChild",
    "preventDefault",
    "innerHTML",
    "dataset",
    "length",
    "style",
    ".category-button",
    "onscroll",
    "\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Trailer\x20🎬</a>\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22",
    "add",
    "218674ixJNue",
    "19816RxGDFO",
    "1521lbWcJs",
    "currentTarget",
    "input",
    "classList",
    "trailer-video",
    "301659PbEkgz",
    "value",
    "trim",
    "innerText",
    "all",
    "name",
    "div",
    "src",
    "card",
    "categoria",
    "2232594pDGEql",
    "active",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "\x20<br>\x20\x20<br>\x20<a\x20id=\x22trailer\x22\x20href=\x22",
    "display",
    "block",
    "setAttribute",
    "forEach",
    "https://api.npoint.io/d70085baf287ef7f02b0",
    "92rAMcLM",
    "toLowerCase",
    "cards-container",
    "getElementById",
    "trailer-modal",
    "click",
    "querySelectorAll",
    "pagination-container",
    "filter",
    "scrollTop",
    "235959sgkgND",
    "documentElement",
    "remove",
    "trailer",
    "button",
    "sort",
  ];
  _0x18b3 = function () {
    return _0x8d80da;
  };
  return _0x18b3();
}
function showTrailer(_0x25d99d) {
  const _0x427b7d = _0x1ec72e;
  _0x25d99d[_0x427b7d(0x15c)]();
  var _0x484334 = document[_0x427b7d(0x143)]("trailer-modal"),
    _0x308284 = document["getElementById"](_0x427b7d(0x16b)),
    _0x46347c = _0x25d99d[_0x427b7d(0x168)],
    _0x1d890f = _0x46347c[_0x427b7d(0x156)]("href");
  _0x308284["setAttribute"](_0x427b7d(0x173), _0x1d890f),
    (_0x484334[_0x427b7d(0x160)]["display"] = _0x427b7d(0x17b));
}
function closeTrailer() {
  const _0x5938e6 = _0x1ec72e;
  var _0x111978 = document[_0x5938e6(0x143)](_0x5938e6(0x144)),
    _0x19476b = document["getElementById"]("trailer-video");
  _0x19476b[_0x5938e6(0x17c)]("src", ""),
    (_0x111978["style"][_0x5938e6(0x17a)] = _0x5938e6(0x150));
}
(mybutton = document[_0x1ec72e(0x143)]("myBtn")),
  (window[_0x1ec72e(0x162)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x4b445c = _0x1ec72e;
  document[_0x4b445c(0x157)][_0x4b445c(0x149)] > 0x14 ||
  document[_0x4b445c(0x14b)]["scrollTop"] > 0x14
    ? (mybutton[_0x4b445c(0x160)][_0x4b445c(0x17a)] = _0x4b445c(0x17b))
    : (mybutton[_0x4b445c(0x160)][_0x4b445c(0x17a)] = _0x4b445c(0x150));
}
function topFunction() {
  const _0x1e98a5 = _0x1ec72e;
  (document["body"][_0x1e98a5(0x149)] = 0x0),
    (document[_0x1e98a5(0x14b)][_0x1e98a5(0x149)] = 0x0);
}
