const _0x4c1a8e = _0x1410;
(function (_0x574796, _0x346ed0) {
  const _0x4ddc46 = _0x1410,
    _0x58cdf4 = _0x574796();
  while (!![]) {
    try {
      const _0x2fde27 =
        parseInt(_0x4ddc46(0x1df)) / 0x1 +
        (parseInt(_0x4ddc46(0x1c9)) / 0x2) *
          (-parseInt(_0x4ddc46(0x1cb)) / 0x3) +
        (parseInt(_0x4ddc46(0x1ce)) / 0x4) *
          (parseInt(_0x4ddc46(0x1dc)) / 0x5) +
        (parseInt(_0x4ddc46(0x1ed)) / 0x6) *
          (-parseInt(_0x4ddc46(0x1e7)) / 0x7) +
        -parseInt(_0x4ddc46(0x1eb)) / 0x8 +
        (parseInt(_0x4ddc46(0x1d8)) / 0x9) *
          (parseInt(_0x4ddc46(0x1c1)) / 0xa) +
        parseInt(_0x4ddc46(0x1ec)) / 0xb;
      if (_0x2fde27 === _0x346ed0) break;
      else _0x58cdf4["push"](_0x58cdf4["shift"]());
    } catch (_0x45afb5) {
      _0x58cdf4["push"](_0x58cdf4["shift"]());
    }
  }
})(_0xb70e, 0x51b44);
const cardsContainer = document["getElementById"](_0x4c1a8e(0x1e8)),
  paginationContainer = document[_0x4c1a8e(0x1e2)]("pagination-container"),
  searchInput = document["getElementById"](_0x4c1a8e(0x1ae));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch("https://api.npoint.io/9e11ea10ce7a4312e013")
  [_0x4c1a8e(0x1c4)]((_0x362da5) => _0x362da5[_0x4c1a8e(0x1e3)]())
  [_0x4c1a8e(0x1c4)]((_0x4126f8) => {
    const _0x3aacf0 = _0x4c1a8e;
    (currentCards = _0x4126f8),
      (filteredCards = currentCards),
      currentCards[_0x3aacf0(0x1bb)](
        (_0x18d1e2, _0xfb7e5d) => _0x18d1e2["id"] - _0xfb7e5d["id"]
      ),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x425ac4 = _0x4c1a8e;
  cardsContainer[_0x425ac4(0x1b5)] = "";
  const _0x237f37 = (currentPage - 0x1) * cardsPerPage,
    _0x182160 = _0x237f37 + cardsPerPage,
    _0x364a06 = filteredCards[_0x425ac4(0x1b3)](_0x237f37, _0x182160);
  _0x364a06[_0x425ac4(0x1b2)]((_0x1f2e34) => {
    const _0x1f778b = _0x425ac4,
      _0x392d09 = document[_0x1f778b(0x1e4)]("div");
    _0x392d09[_0x1f778b(0x1d7)][_0x1f778b(0x1d6)](_0x1f778b(0x1e5)),
      (_0x392d09[_0x1f778b(0x1b5)] =
        _0x1f778b(0x1ca) +
        _0x1f2e34["img"] +
        "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>" +
        _0x1f2e34["name"] +
        "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22" +
        _0x1f2e34[_0x1f778b(0x1d3)] +
        _0x1f778b(0x1c2)),
      cardsContainer["appendChild"](_0x392d09);
  });
}
function _0xb70e() {
  const _0x444d95 = [
    "7aRPVBM",
    "cards-container",
    "filter",
    "firstChild",
    "4153464meyAGq",
    "3812303qkHqua",
    "1100610GBMgrG",
    "setAttribute",
    ".category-button",
    "min",
    "addEventListener",
    "floor",
    "name",
    "search-input",
    "max",
    "appendChild",
    "none",
    "forEach",
    "slice",
    "input",
    "innerHTML",
    "trailer-modal",
    "innerText",
    "remove",
    "href",
    "src",
    "sort",
    "dataset",
    "backgroundColor",
    "includes",
    "button",
    "myBtn",
    "50HlecgQ",
    "\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "active",
    "then",
    "categoria_1",
    "style",
    "trim",
    "&gt;",
    "1102SQBnIB",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "2523aIlunt",
    "categoria",
    "scrollTop",
    "629540nAGMlH",
    "toLowerCase",
    "insertBefore",
    "length",
    "category",
    "link",
    "trailer-video",
    "categoria_2",
    "add",
    "classList",
    "1116738azviKY",
    "display",
    "querySelectorAll",
    "documentElement",
    "5xHWgLQ",
    "body",
    "click",
    "376301nogwvH",
    "onscroll",
    "preventDefault",
    "getElementById",
    "json",
    "createElement",
    "card",
    "ceil",
  ];
  _0xb70e = function () {
    return _0x444d95;
  };
  return _0xb70e();
}
function renderPagination() {
  const _0x1647c0 = _0x4c1a8e;
  paginationContainer["innerHTML"] = "";
  const _0x2fd557 = Math[_0x1647c0(0x1e6)](
      filteredCards[_0x1647c0(0x1d1)] / cardsPerPage
    ),
    _0x16bc63 = 0x1;
  let _0xeb64af = Math[_0x1647c0(0x1af)](
    0x1,
    currentPage - Math[_0x1647c0(0x1ac)](_0x16bc63 / 0x2)
  );
  _0xeb64af = Math["min"](_0xeb64af, _0x2fd557 - _0x16bc63 + 0x1);
  let _0x53190b = Math[_0x1647c0(0x1aa)](
    _0x2fd557,
    _0xeb64af + _0x16bc63 - 0x1
  );
  _0x53190b - _0xeb64af + 0x1 < _0x16bc63 &&
    (_0xeb64af = Math["max"](0x1, _0x53190b - _0x16bc63 + 0x1));
  for (let _0x277934 = _0xeb64af; _0x277934 <= _0x53190b; _0x277934++) {
    const _0x521d02 = document["createElement"](_0x1647c0(0x1bf));
    (_0x521d02[_0x1647c0(0x1b7)] = _0x277934),
      _0x521d02[_0x1647c0(0x1ab)](_0x1647c0(0x1de), () => {
        (currentPage = _0x277934), renderCards(), renderPagination();
      }),
      _0x277934 === currentPage &&
        _0x521d02[_0x1647c0(0x1d7)][_0x1647c0(0x1d6)](_0x1647c0(0x1c3)),
      paginationContainer["appendChild"](_0x521d02);
  }
  const _0x4da970 = document[_0x1647c0(0x1e4)](_0x1647c0(0x1bf));
  (_0x4da970[_0x1647c0(0x1b5)] = _0x1647c0(0x1c8)),
    (_0x4da970[_0x1647c0(0x1c6)][_0x1647c0(0x1bd)] = "#008cba"),
    _0x4da970["addEventListener"](_0x1647c0(0x1de), () => {
      currentPage < _0x2fd557 &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x2c172b = document[_0x1647c0(0x1e4)](_0x1647c0(0x1bf));
  (_0x2c172b[_0x1647c0(0x1b5)] = "&lt;"),
    (_0x2c172b[_0x1647c0(0x1c6)][_0x1647c0(0x1bd)] = "#008cba"),
    _0x2c172b[_0x1647c0(0x1ab)]("click", () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x1647c0(0x1d0)](
      _0x2c172b,
      paginationContainer[_0x1647c0(0x1ea)]
    ),
    paginationContainer[_0x1647c0(0x1b0)](_0x4da970);
}
searchInput[_0x4c1a8e(0x1ab)](_0x4c1a8e(0x1b4), () => {
  const _0x357a34 = _0x4c1a8e,
    _0x22ba85 = searchInput["value"][_0x357a34(0x1c7)]()[_0x357a34(0x1cf)]();
  (filteredCards = currentCards[_0x357a34(0x1e9)]((_0x4effc4) =>
    _0x4effc4[_0x357a34(0x1ad)]["toLowerCase"]()[_0x357a34(0x1be)](_0x22ba85)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
function _0x1410(_0x1dfc9d, _0x1cc0ba) {
  const _0xb70e2c = _0xb70e();
  return (
    (_0x1410 = function (_0x14101b, _0x4e7a99) {
      _0x14101b = _0x14101b - 0x1a8;
      let _0x4c4475 = _0xb70e2c[_0x14101b];
      return _0x4c4475;
    }),
    _0x1410(_0x1dfc9d, _0x1cc0ba)
  );
}
const categoryButtons = document[_0x4c1a8e(0x1da)](_0x4c1a8e(0x1a9));
categoryButtons[_0x4c1a8e(0x1b2)]((_0x2bbf42) => {
  const _0x25a716 = _0x4c1a8e;
  _0x2bbf42[_0x25a716(0x1ab)]("click", () => {
    const _0x1e5b6d = _0x25a716,
      _0x275954 = _0x2bbf42[_0x1e5b6d(0x1bc)][_0x1e5b6d(0x1d2)];
    _0x275954 === "all"
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards["filter"]((_0x264c1f) => {
          const _0x31022d = _0x1e5b6d;
          return (
            _0x264c1f[_0x31022d(0x1cc)] === _0x275954 ||
            _0x264c1f[_0x31022d(0x1c5)] === _0x275954 ||
            _0x264c1f[_0x31022d(0x1d5)] === _0x275954
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0x1e5b6d(0x1b2)]((_0x56cb25) => {
        const _0x428ab4 = _0x1e5b6d;
        _0x56cb25[_0x428ab4(0x1d7)][_0x428ab4(0x1b8)]("active");
      }),
      _0x2bbf42[_0x1e5b6d(0x1d7)][_0x1e5b6d(0x1d6)](_0x1e5b6d(0x1c3));
  });
});
function showTrailer(_0x436bba) {
  const _0x3ee86c = _0x4c1a8e;
  _0x436bba[_0x3ee86c(0x1e1)]();
  var _0x2125dd = document[_0x3ee86c(0x1e2)](_0x3ee86c(0x1b6)),
    _0x1306d0 = document["getElementById"](_0x3ee86c(0x1d4)),
    _0x96d176 = _0x436bba["currentTarget"],
    _0x5f585d = _0x96d176["getAttribute"](_0x3ee86c(0x1b9));
  _0x1306d0[_0x3ee86c(0x1a8)](_0x3ee86c(0x1ba), _0x5f585d),
    (_0x2125dd[_0x3ee86c(0x1c6)][_0x3ee86c(0x1d9)] = "block");
}
function closeTrailer() {
  const _0x17754e = _0x4c1a8e;
  var _0x4f44dd = document["getElementById"]("trailer-modal"),
    _0x368e15 = document[_0x17754e(0x1e2)](_0x17754e(0x1d4));
  _0x368e15[_0x17754e(0x1a8)](_0x17754e(0x1ba), ""),
    (_0x4f44dd[_0x17754e(0x1c6)][_0x17754e(0x1d9)] = _0x17754e(0x1b1));
}
(mybutton = document["getElementById"](_0x4c1a8e(0x1c0))),
  (window[_0x4c1a8e(0x1e0)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x58548d = _0x4c1a8e;
  document[_0x58548d(0x1dd)][_0x58548d(0x1cd)] > 0x14 ||
  document[_0x58548d(0x1db)][_0x58548d(0x1cd)] > 0x14
    ? (mybutton[_0x58548d(0x1c6)][_0x58548d(0x1d9)] = "block")
    : (mybutton[_0x58548d(0x1c6)][_0x58548d(0x1d9)] = _0x58548d(0x1b1));
}
function topFunction() {
  const _0x202ef2 = _0x4c1a8e;
  (document["body"][_0x202ef2(0x1cd)] = 0x0),
    (document[_0x202ef2(0x1db)]["scrollTop"] = 0x0);
}
