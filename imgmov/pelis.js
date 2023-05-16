const _0x5f16e4 = _0x4ccc;
(function (_0xbd54b, _0x128b27) {
  const _0x147e6c = _0x4ccc,
    _0x23dd79 = _0xbd54b();
  while (!![]) {
    try {
      const _0x241679 =
        (-parseInt(_0x147e6c(0x149)) / 0x1) *
          (parseInt(_0x147e6c(0x120)) / 0x2) +
        (-parseInt(_0x147e6c(0x136)) / 0x3) *
          (parseInt(_0x147e6c(0x111)) / 0x4) +
        (-parseInt(_0x147e6c(0x134)) / 0x5) *
          (-parseInt(_0x147e6c(0x11d)) / 0x6) +
        parseInt(_0x147e6c(0x11e)) / 0x7 +
        (-parseInt(_0x147e6c(0x13a)) / 0x8) *
          (parseInt(_0x147e6c(0x127)) / 0x9) +
        -parseInt(_0x147e6c(0x10f)) / 0xa +
        parseInt(_0x147e6c(0x10b)) / 0xb;
      if (_0x241679 === _0x128b27) break;
      else _0x23dd79["push"](_0x23dd79["shift"]());
    } catch (_0x3953c8) {
      _0x23dd79["push"](_0x23dd79["shift"]());
    }
  }
})(_0x15d0, 0x60479);
function _0x15d0() {
  const _0x2c3f61 = [
    "currentTarget",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "#008cba",
    "appendChild",
    "none",
    "createElement",
    "img",
    "categoria_1",
    "1ZdCFZR",
    "input",
    "classList",
    "10294636HHbdoT",
    "click",
    "getElementById",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "5890660QOXEPu",
    "setAttribute",
    "1548ELSTdH",
    "src",
    "trailer-video",
    "insertBefore",
    "display",
    "filter",
    "forEach",
    "toLowerCase",
    "categoria",
    "block",
    ".category-button",
    "innerText",
    "36CNbloD",
    "1745940amzoqO",
    "dataset",
    "118754JRkTms",
    "add",
    "button",
    "style",
    "slice",
    "trim",
    "backgroundColor",
    "1267749zSwQAl",
    "&gt;",
    "min",
    "cards-container",
    "length",
    "getAttribute",
    "innerHTML",
    "firstChild",
    "value",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "pagination-container",
    "trailer",
    "querySelectorAll",
    "547835yDFQUQ",
    "ceil",
    "741hFMDhQ",
    "category",
    "card",
    "name",
    "40bUQOhs",
    "&lt;",
    "trailer-modal",
    "then",
    "addEventListener",
    "active",
    "href",
  ];
  _0x15d0 = function () {
    return _0x2c3f61;
  };
  return _0x15d0();
}
const cardsContainer = document["getElementById"](_0x5f16e4(0x12a)),
  paginationContainer = document[_0x5f16e4(0x10d)](_0x5f16e4(0x131)),
  searchInput = document[_0x5f16e4(0x10d)]("search-input");
function _0x4ccc(_0x2c4f41, _0x256199) {
  const _0x15d032 = _0x15d0();
  return (
    (_0x4ccc = function (_0x4cccf5, _0x2cfebc) {
      _0x4cccf5 = _0x4cccf5 - 0x10b;
      let _0x12c754 = _0x15d032[_0x4cccf5];
      return _0x12c754;
    }),
    _0x4ccc(_0x2c4f41, _0x256199)
  );
}
let currentPage = 0x1,
  cardsPerPage = 0xa,
  currentCards = [],
  filteredCards = [];
fetch("https://api.npoint.io/d70085baf287ef7f02b0")
  [_0x5f16e4(0x13d)]((_0x453550) => _0x453550["json"]())
  [_0x5f16e4(0x13d)]((_0x346935) => {
    _0x346935["sort"](
      (_0x5414bc, _0x2aec20) => _0x2aec20["id"] - _0x5414bc["id"]
    ),
      (currentCards = _0x346935),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x3c98ca = _0x5f16e4;
  cardsContainer[_0x3c98ca(0x12d)] = "";
  const _0x4024f4 = (currentPage - 0x1) * cardsPerPage,
    _0x326650 = _0x4024f4 + cardsPerPage,
    _0x1e9b8d = filteredCards[_0x3c98ca(0x124)](_0x4024f4, _0x326650);
  _0x1e9b8d[_0x3c98ca(0x117)]((_0x26604d) => {
    const _0x498cf0 = _0x3c98ca,
      _0x288c80 = document[_0x498cf0(0x146)]("div");
    _0x288c80[_0x498cf0(0x14b)]["add"](_0x498cf0(0x138)),
      (_0x288c80[_0x498cf0(0x12d)] =
        _0x498cf0(0x130) +
        _0x26604d[_0x498cf0(0x147)] +
        _0x498cf0(0x142) +
        _0x26604d[_0x498cf0(0x139)] +
        "\x20<br>\x20\x20<br>\x20<a\x20id=\x22trailer\x22\x20href=\x22" +
        _0x26604d[_0x498cf0(0x132)] +
        "\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22>Trailer\x20🎬</a>\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22" +
        _0x26604d["link"] +
        _0x498cf0(0x10e)),
      cardsContainer[_0x498cf0(0x144)](_0x288c80);
  });
}
function renderPagination() {
  const _0x16f8c1 = _0x5f16e4;
  paginationContainer[_0x16f8c1(0x12d)] = "";
  const _0x34d0bc = Math[_0x16f8c1(0x135)](
      filteredCards[_0x16f8c1(0x12b)] / cardsPerPage
    ),
    _0x5e0349 = 0x4;
  let _0x4cc20a = Math["max"](
      0x1,
      currentPage - Math["floor"](_0x5e0349 / 0x2)
    ),
    _0x44ee66 = Math[_0x16f8c1(0x129)](_0x34d0bc, _0x4cc20a + _0x5e0349 - 0x1);
  _0x44ee66 - _0x4cc20a + 0x1 < _0x5e0349 &&
    (_0x4cc20a = Math["max"](0x1, _0x44ee66 - _0x5e0349 + 0x1));
  for (let _0x46090d = _0x4cc20a; _0x46090d <= _0x44ee66; _0x46090d++) {
    const _0x185aae = document[_0x16f8c1(0x146)](_0x16f8c1(0x122));
    (_0x185aae[_0x16f8c1(0x11c)] = _0x46090d),
      _0x185aae["addEventListener"]("click", () => {
        (currentPage = _0x46090d), renderCards(), renderPagination();
      }),
      _0x46090d === currentPage &&
        _0x185aae["classList"][_0x16f8c1(0x121)]("active"),
      paginationContainer["appendChild"](_0x185aae);
  }
  const _0x41fff9 = document[_0x16f8c1(0x146)]("button");
  (_0x41fff9["innerHTML"] = _0x16f8c1(0x128)),
    (_0x41fff9[_0x16f8c1(0x123)]["backgroundColor"] = _0x16f8c1(0x143)),
    _0x41fff9[_0x16f8c1(0x13e)](_0x16f8c1(0x10c), () => {
      currentPage < _0x34d0bc &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x46cbbe = document[_0x16f8c1(0x146)](_0x16f8c1(0x122));
  (_0x46cbbe["innerHTML"] = _0x16f8c1(0x13b)),
    (_0x46cbbe[_0x16f8c1(0x123)][_0x16f8c1(0x126)] = _0x16f8c1(0x143)),
    _0x46cbbe[_0x16f8c1(0x13e)](_0x16f8c1(0x10c), () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x16f8c1(0x114)](
      _0x46cbbe,
      paginationContainer[_0x16f8c1(0x12e)]
    ),
    paginationContainer[_0x16f8c1(0x144)](_0x41fff9);
}
searchInput[_0x5f16e4(0x13e)](_0x5f16e4(0x14a), () => {
  const _0x52c082 = _0x5f16e4,
    _0x5bede1 = searchInput[_0x52c082(0x12f)]
      [_0x52c082(0x125)]()
      [_0x52c082(0x118)]();
  (filteredCards = currentCards[_0x52c082(0x116)]((_0x2be418) =>
    _0x2be418[_0x52c082(0x139)][_0x52c082(0x118)]()["includes"](_0x5bede1)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document[_0x5f16e4(0x133)](_0x5f16e4(0x11b));
categoryButtons["forEach"]((_0xb3b66c) => {
  const _0x388e56 = _0x5f16e4;
  _0xb3b66c["addEventListener"](_0x388e56(0x10c), () => {
    const _0xfc89f4 = _0x388e56,
      _0x3c3a96 = _0xb3b66c[_0xfc89f4(0x11f)][_0xfc89f4(0x137)];
    _0x3c3a96 === "all"
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0xfc89f4(0x116)]((_0xc1e129) => {
          const _0x1b3988 = _0xfc89f4;
          return (
            _0xc1e129[_0x1b3988(0x119)] === _0x3c3a96 ||
            _0xc1e129[_0x1b3988(0x148)] === _0x3c3a96 ||
            _0xc1e129["categoria_2"] === _0x3c3a96
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0xfc89f4(0x117)]((_0xad5149) => {
        const _0x34b075 = _0xfc89f4;
        _0xad5149[_0x34b075(0x14b)]["remove"](_0x34b075(0x13f));
      }),
      _0xb3b66c[_0xfc89f4(0x14b)]["add"](_0xfc89f4(0x13f));
  });
});
function showTrailer(_0x3af737) {
  const _0x1dca5e = _0x5f16e4;
  _0x3af737["preventDefault"]();
  var _0x3ae48c = document[_0x1dca5e(0x10d)](_0x1dca5e(0x13c)),
    _0x59f01c = document[_0x1dca5e(0x10d)](_0x1dca5e(0x113)),
    _0x2d687b = _0x3af737[_0x1dca5e(0x141)],
    _0x1d826f = _0x2d687b[_0x1dca5e(0x12c)](_0x1dca5e(0x140));
  _0x59f01c[_0x1dca5e(0x110)](_0x1dca5e(0x112), _0x1d826f),
    (_0x3ae48c[_0x1dca5e(0x123)][_0x1dca5e(0x115)] = _0x1dca5e(0x11a));
}
function closeTrailer() {
  const _0x1e41ef = _0x5f16e4;
  var _0x5e98a4 = document[_0x1e41ef(0x10d)]("trailer-modal"),
    _0x1efe99 = document[_0x1e41ef(0x10d)]("trailer-video");
  _0x1efe99[_0x1e41ef(0x110)](_0x1e41ef(0x112), ""),
    (_0x5e98a4[_0x1e41ef(0x123)]["display"] = _0x1e41ef(0x145));
}
