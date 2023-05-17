const _0x247516 = _0x2499;
(function (_0x51f772, _0x228aef) {
  const _0x1d4881 = _0x2499,
    _0x3c1f72 = _0x51f772();
  while (!![]) {
    try {
      const _0x419a66 =
        (-parseInt(_0x1d4881(0x7c)) / 0x1) *
          (-parseInt(_0x1d4881(0x94)) / 0x2) +
        (parseInt(_0x1d4881(0x92)) / 0x3) * (-parseInt(_0x1d4881(0xbe)) / 0x4) +
        (-parseInt(_0x1d4881(0x8b)) / 0x5) * (parseInt(_0x1d4881(0xb1)) / 0x6) +
        (-parseInt(_0x1d4881(0x7e)) / 0x7) *
          (-parseInt(_0x1d4881(0x97)) / 0x8) +
        (parseInt(_0x1d4881(0xae)) / 0x9) * (parseInt(_0x1d4881(0xb4)) / 0xa) +
        (-parseInt(_0x1d4881(0xba)) / 0xb) * (parseInt(_0x1d4881(0x8e)) / 0xc) +
        -parseInt(_0x1d4881(0xb6)) / 0xd;
      if (_0x419a66 === _0x228aef) break;
      else _0x3c1f72["push"](_0x3c1f72["shift"]());
    } catch (_0x3c3123) {
      _0x3c1f72["push"](_0x3c1f72["shift"]());
    }
  }
})(_0x47a1, 0xdf901);
const cardsContainer = document[_0x247516(0xbc)](_0x247516(0x8a)),
  paginationContainer = document[_0x247516(0xbc)](_0x247516(0x8d)),
  searchInput = document[_0x247516(0xbc)](_0x247516(0xa6));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(_0x247516(0xbd))
  ["then"]((_0x46eaef) => _0x46eaef[_0x247516(0x9e)]())
  [_0x247516(0xa3)]((_0x290094) => {
    _0x290094["sort"](
      (_0x396ce3, _0x259795) => _0x259795["id"] - _0x396ce3["id"]
    ),
      (currentCards = _0x290094),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x2b7351 = _0x247516;
  cardsContainer["innerHTML"] = "";
  const _0x2ab6dd = (currentPage - 0x1) * cardsPerPage,
    _0x509c49 = _0x2ab6dd + cardsPerPage,
    _0x2b73c1 = filteredCards[_0x2b7351(0xa9)](_0x2ab6dd, _0x509c49);
  _0x2b73c1[_0x2b7351(0x85)]((_0x3b5cfa) => {
    const _0x394b0e = _0x2b7351,
      _0x11c851 = document["createElement"](_0x394b0e(0xab));
    _0x11c851["classList"]["add"](_0x394b0e(0xb3)),
      (_0x11c851[_0x394b0e(0xa1)] =
        _0x394b0e(0xa0) +
        _0x3b5cfa[_0x394b0e(0x86)] +
        _0x394b0e(0x7b) +
        _0x3b5cfa[_0x394b0e(0x8c)] +
        _0x394b0e(0x91) +
        _0x3b5cfa[_0x394b0e(0xaf)] +
        _0x394b0e(0x89) +
        _0x3b5cfa["link"] +
        _0x394b0e(0x99) +
        _0x3b5cfa[_0x394b0e(0x7d)] +
        _0x394b0e(0x95)),
      cardsContainer["appendChild"](_0x11c851);
  });
}
function renderPagination() {
  const _0x2c9693 = _0x247516;
  paginationContainer[_0x2c9693(0xa1)] = "";
  const _0x4aa3ac = Math["ceil"](filteredCards[_0x2c9693(0xa4)] / cardsPerPage),
    _0x1768f1 = 0x4;
  let _0x306bf3 = Math[_0x2c9693(0xb5)](
      0x1,
      currentPage - Math["floor"](_0x1768f1 / 0x2)
    ),
    _0xfee5d7 = Math[_0x2c9693(0xb9)](_0x4aa3ac, _0x306bf3 + _0x1768f1 - 0x1);
  _0xfee5d7 - _0x306bf3 + 0x1 < _0x1768f1 &&
    (_0x306bf3 = Math["max"](0x1, _0xfee5d7 - _0x1768f1 + 0x1));
  for (let _0x451c27 = _0x306bf3; _0x451c27 <= _0xfee5d7; _0x451c27++) {
    const _0x52ef5e = document[_0x2c9693(0x80)](_0x2c9693(0x88));
    (_0x52ef5e[_0x2c9693(0xa8)] = _0x451c27),
      _0x52ef5e[_0x2c9693(0x96)](_0x2c9693(0x9f), () => {
        (currentPage = _0x451c27), renderCards(), renderPagination();
      }),
      _0x451c27 === currentPage &&
        _0x52ef5e[_0x2c9693(0x90)][_0x2c9693(0xa5)]("active"),
      paginationContainer[_0x2c9693(0xac)](_0x52ef5e);
  }
  const _0x457249 = document[_0x2c9693(0x80)](_0x2c9693(0x88));
  (_0x457249[_0x2c9693(0xa1)] = "&gt;"),
    (_0x457249[_0x2c9693(0xb8)][_0x2c9693(0x83)] = _0x2c9693(0x9c)),
    _0x457249[_0x2c9693(0x96)](_0x2c9693(0x9f), () => {
      currentPage < _0x4aa3ac &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x360fd4 = document[_0x2c9693(0x80)]("button");
  (_0x360fd4["innerHTML"] = "&lt;"),
    (_0x360fd4["style"][_0x2c9693(0x83)] = _0x2c9693(0x9c)),
    _0x360fd4[_0x2c9693(0x96)](_0x2c9693(0x9f), () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x2c9693(0x9d)](
      _0x360fd4,
      paginationContainer["firstChild"]
    ),
    paginationContainer[_0x2c9693(0xac)](_0x457249);
}
searchInput["addEventListener"](_0x247516(0x98), () => {
  const _0x3c7112 = _0x247516,
    _0x439021 = searchInput["value"][_0x3c7112(0x93)]()[_0x3c7112(0xaa)]();
  (filteredCards = currentCards[_0x3c7112(0x9b)]((_0x3e8dd4) =>
    _0x3e8dd4[_0x3c7112(0x8c)][_0x3c7112(0xaa)]()["includes"](_0x439021)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document["querySelectorAll"](_0x247516(0x7f));
categoryButtons[_0x247516(0x85)]((_0x44becd) => {
  const _0x55d680 = _0x247516;
  _0x44becd[_0x55d680(0x96)]("click", () => {
    const _0xc62ea2 = _0x55d680,
      _0x1a2250 = _0x44becd[_0xc62ea2(0xb2)][_0xc62ea2(0x81)];
    _0x1a2250 === _0xc62ea2(0x8f)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0xc62ea2(0x9b)]((_0x29c42d) => {
          const _0x280802 = _0xc62ea2;
          return (
            _0x29c42d[_0x280802(0xa7)] === _0x1a2250 ||
            _0x29c42d[_0x280802(0xb7)] === _0x1a2250 ||
            _0x29c42d[_0x280802(0x87)] === _0x1a2250
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0xc62ea2(0x85)]((_0x443122) => {
        const _0x43d31b = _0xc62ea2;
        _0x443122[_0x43d31b(0x90)][_0x43d31b(0xbb)](_0x43d31b(0x84));
      }),
      _0x44becd["classList"][_0xc62ea2(0xa5)](_0xc62ea2(0x84));
  });
});
function showTrailer(_0x5430d6) {
  const _0x6c5675 = _0x247516;
  _0x5430d6["preventDefault"]();
  var _0x188cb9 = document[_0x6c5675(0xbc)](_0x6c5675(0xa2)),
    _0x3fa4d3 = document["getElementById"](_0x6c5675(0xad)),
    _0x1d6316 = _0x5430d6["currentTarget"],
    _0x5927d8 = _0x1d6316["getAttribute"]("href");
  _0x3fa4d3["setAttribute"]("src", _0x5927d8),
    (_0x188cb9[_0x6c5675(0xb8)][_0x6c5675(0x82)] = "block");
}
function _0x47a1() {
  const _0x5f6a97 = [
    "addEventListener",
    "792UQsFCA",
    "input",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p\x20id=\x22title-card\x22>",
    "none",
    "filter",
    "#008cba",
    "insertBefore",
    "json",
    "click",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "innerHTML",
    "trailer-modal",
    "then",
    "length",
    "add",
    "search-input",
    "categoria",
    "innerText",
    "slice",
    "toLowerCase",
    "div",
    "appendChild",
    "trailer-video",
    "13406319yBmYpm",
    "trailer",
    "setAttribute",
    "2286rxcLzq",
    "dataset",
    "card",
    "10AHrCSq",
    "max",
    "3836027ogFuBt",
    "categoria_1",
    "style",
    "min",
    "33lBsTzr",
    "remove",
    "getElementById",
    "https://api.npoint.io/d70085baf287ef7f02b0",
    "16QhRcsQ",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>",
    "14cLckqb",
    "catego",
    "125335xdIyNU",
    ".category-button",
    "createElement",
    "category",
    "display",
    "backgroundColor",
    "active",
    "forEach",
    "img",
    "categoria_2",
    "button",
    "\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Trailer\x20🎬</a>\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22",
    "cards-container",
    "21515GoKdDM",
    "name",
    "pagination-container",
    "5459316mUFinh",
    "all",
    "classList",
    "</p>\x20\x20<br>\x20<a\x20id=\x22trailer\x22\x20href=\x22",
    "458538oJlTLv",
    "trim",
    "223466ePeUnF",
    "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
  ];
  _0x47a1 = function () {
    return _0x5f6a97;
  };
  return _0x47a1();
}
function _0x2499(_0x107977, _0x36340c) {
  const _0x47a1a9 = _0x47a1();
  return (
    (_0x2499 = function (_0x2499cc, _0x12a6d6) {
      _0x2499cc = _0x2499cc - 0x7b;
      let _0x183420 = _0x47a1a9[_0x2499cc];
      return _0x183420;
    }),
    _0x2499(_0x107977, _0x36340c)
  );
}
function closeTrailer() {
  const _0x96db9e = _0x247516;
  var _0x3a9d0d = document["getElementById"](_0x96db9e(0xa2)),
    _0x4197b3 = document[_0x96db9e(0xbc)]("trailer-video");
  _0x4197b3[_0x96db9e(0xb0)]("src", ""),
    (_0x3a9d0d[_0x96db9e(0xb8)][_0x96db9e(0x82)] = _0x96db9e(0x9a));
}
