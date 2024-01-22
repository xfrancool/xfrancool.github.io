const _0x2efed0 = _0x3c46;
(function (_0xa3c32, _0x15f2d5) {
  const _0x49d424 = _0x3c46,
    _0x5a31a5 = _0xa3c32();
  while (!![]) {
    try {
      const _0x467c4c =
        -parseInt(_0x49d424(0x14d)) / 0x1 +
        (-parseInt(_0x49d424(0x15c)) / 0x2) *
          (parseInt(_0x49d424(0x145)) / 0x3) +
        (-parseInt(_0x49d424(0x120)) / 0x4) *
          (parseInt(_0x49d424(0x143)) / 0x5) +
        -parseInt(_0x49d424(0x124)) / 0x6 +
        parseInt(_0x49d424(0x126)) / 0x7 +
        -parseInt(_0x49d424(0x135)) / 0x8 +
        (parseInt(_0x49d424(0x14c)) / 0x9) * (parseInt(_0x49d424(0x12b)) / 0xa);
      if (_0x467c4c === _0x15f2d5) break;
      else _0x5a31a5["push"](_0x5a31a5["shift"]());
    } catch (_0x29b594) {
      _0x5a31a5["push"](_0x5a31a5["shift"]());
    }
  }
})(_0x4a60, 0x81b48);
function _0x4a60() {
  const _0x966738 = [
    "cards-container",
    ".category-button",
    "search-input",
    "dataset",
    "innerText",
    "max",
    "none",
    "6899920iVQSiR",
    "scrollTop",
    "ceil",
    "link",
    "&lt;",
    "href",
    "display",
    "floor",
    "filter",
    "button",
    "remove",
    "backgroundColor",
    "anio",
    "style",
    "298670EwQgTZ",
    "onscroll",
    "222549hkjBhD",
    "then",
    "addEventListener",
    "reverse",
    "matches",
    "input",
    "name",
    "171fFVaQa",
    "837582JnTxlH",
    "slice",
    "pagination-container",
    "classList",
    "getAttribute",
    "(max-width:\x20767px)",
    "querySelectorAll",
    "currentTarget",
    "createElement",
    "scrollTo",
    "all",
    "img",
    "anios",
    "category",
    "getElementById",
    "2HRVxsF",
    "add",
    "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22",
    "includes",
    "documentElement",
    "block",
    "sort",
    "click",
    "active",
    "length",
    "insertBefore",
    "#008cba",
    "value",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "trailer-video",
    "trim",
    "&gt;",
    "myBtn",
    "appendChild",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>\x20👀</a>\x20</p>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>",
    "src",
    "preventDefault",
    "innerHTML",
    "16nBGJhx",
    "body",
    "toLowerCase",
    "div",
    "4090656CHkJCz",
    "firstChild",
    "3082814sNqeLb",
    "setAttribute",
    "forEach",
    "min",
    "trailer-modal",
    "1466230RGCKOZ",
    "</p>\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "matchMedia",
  ];
  _0x4a60 = function () {
    return _0x966738;
  };
  return _0x4a60();
}
import { series } from "./export.js";
const cardsContainer = document[_0x2efed0(0x15b)](_0x2efed0(0x12e)),
  paginationContainer = document[_0x2efed0(0x15b)](_0x2efed0(0x14f)),
  searchInput = document[_0x2efed0(0x15b)](_0x2efed0(0x130));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(series)
  ["then"]((_0x3c88b0) => _0x3c88b0["json"]())
  [_0x2efed0(0x146)]((_0x118c84) => {
    const _0x57d326 = _0x2efed0;
    (currentCards = _0x118c84),
      (filteredCards = currentCards),
      _0x118c84[_0x57d326(0x162)](
        (_0x3efe5a, _0x30064a) => _0x3efe5a["id"] - _0x30064a["id"]
      ),
      _0x118c84[_0x57d326(0x148)](),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x566353 = _0x2efed0;
  cardsContainer[_0x566353(0x11f)] = "";
  const _0x28830e = (currentPage - 0x1) * cardsPerPage,
    _0x205bc2 = _0x28830e + cardsPerPage,
    _0x312abc = filteredCards[_0x566353(0x14e)](_0x28830e, _0x205bc2);
  _0x312abc[_0x566353(0x128)]((_0x4ef06e) => {
    const _0x3655 = _0x566353,
      _0x3abdcf = document[_0x3655(0x155)](_0x3655(0x123));
    _0x3abdcf["classList"]["add"]("card"),
      (_0x3abdcf["innerHTML"] =
        _0x3655(0x115) +
        _0x4ef06e[_0x3655(0x158)] +
        _0x3655(0x11b) +
        _0x4ef06e[_0x3655(0x14b)] +
        _0x3655(0x15e) +
        _0x4ef06e[_0x3655(0x138)] +
        _0x3655(0x11c) +
        _0x4ef06e[_0x3655(0x159)] +
        _0x3655(0x12c)),
      cardsContainer[_0x3655(0x11a)](_0x3abdcf);
  });
}
function renderPagination() {
  const _0x478301 = _0x2efed0;
  paginationContainer[_0x478301(0x11f)] = "";
  const _0x592339 = Math[_0x478301(0x137)](
      filteredCards[_0x478301(0x165)] / cardsPerPage
    ),
    _0x28eb80 = 0x4;
  let _0x3b13bf = Math[_0x478301(0x133)](
      0x1,
      currentPage - Math[_0x478301(0x13c)](_0x28eb80 / 0x2)
    ),
    _0x2d9b4d = Math[_0x478301(0x129)](_0x592339, _0x3b13bf + _0x28eb80 - 0x1);
  _0x2d9b4d - _0x3b13bf + 0x1 < _0x28eb80 &&
    (_0x3b13bf = Math[_0x478301(0x133)](0x1, _0x2d9b4d - _0x28eb80 + 0x1));
  for (let _0x5f1663 = _0x3b13bf; _0x5f1663 <= _0x2d9b4d; _0x5f1663++) {
    const _0x369e02 = document[_0x478301(0x155)]("button");
    (_0x369e02[_0x478301(0x132)] = _0x5f1663),
      _0x369e02["addEventListener"](_0x478301(0x163), () => {
        const _0x428cd4 = _0x478301;
        (currentPage = _0x5f1663),
          renderCards(),
          renderPagination(),
          window["matchMedia"](_0x428cd4(0x152))[_0x428cd4(0x149)] &&
            window[_0x428cd4(0x156)](0x0, 0x0);
      }),
      _0x5f1663 === currentPage &&
        _0x369e02[_0x478301(0x150)][_0x478301(0x15d)]("active"),
      paginationContainer[_0x478301(0x11a)](_0x369e02);
  }
  const _0x1d4fdb = document[_0x478301(0x155)](_0x478301(0x13e));
  (_0x1d4fdb[_0x478301(0x11f)] = _0x478301(0x118)),
    (_0x1d4fdb[_0x478301(0x142)]["backgroundColor"] = _0x478301(0x113)),
    _0x1d4fdb[_0x478301(0x147)](_0x478301(0x163), () => {
      const _0x148d2c = _0x478301;
      currentPage < _0x592339 &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0x148d2c(0x12d)](_0x148d2c(0x152))[_0x148d2c(0x149)] &&
          window[_0x148d2c(0x156)](0x0, 0x0));
    });
  const _0x4e814c = document[_0x478301(0x155)]("button");
  (_0x4e814c[_0x478301(0x11f)] = _0x478301(0x139)),
    (_0x4e814c[_0x478301(0x142)][_0x478301(0x140)] = _0x478301(0x113)),
    _0x4e814c["addEventListener"](_0x478301(0x163), () => {
      const _0x13eda3 = _0x478301;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window["matchMedia"](_0x13eda3(0x152))[_0x13eda3(0x149)] &&
          window[_0x13eda3(0x156)](0x0, 0x0));
    }),
    paginationContainer[_0x478301(0x166)](
      _0x4e814c,
      paginationContainer[_0x478301(0x125)]
    ),
    paginationContainer[_0x478301(0x11a)](_0x1d4fdb);
}
searchInput[_0x2efed0(0x147)](_0x2efed0(0x14a), () => {
  const _0x176d00 = _0x2efed0,
    _0x307f41 = searchInput[_0x176d00(0x114)]
      [_0x176d00(0x117)]()
      [_0x176d00(0x122)]();
  (filteredCards = currentCards[_0x176d00(0x13d)]((_0x440dc4) =>
    _0x440dc4["name"]["toLowerCase"]()[_0x176d00(0x15f)](_0x307f41)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document[_0x2efed0(0x153)](".anios-button"),
  categoryButtons = document[_0x2efed0(0x153)](_0x2efed0(0x12f));
aniosButtons[_0x2efed0(0x128)]((_0x4eb0a6) => {
  const _0x30c08b = _0x2efed0;
  _0x4eb0a6[_0x30c08b(0x147)](_0x30c08b(0x163), () => {
    const _0x5e3900 = _0x30c08b,
      _0x41bc42 = _0x4eb0a6["dataset"]["category"];
    _0x41bc42 === _0x5e3900(0x157)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x5e3900(0x13d)]((_0x224ce7) => {
          const _0x2cfdad = _0x5e3900;
          return _0x224ce7[_0x2cfdad(0x141)] === _0x41bc42;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x5e3900(0x128)]((_0x277c6f) => {
        const _0x2bba3b = _0x5e3900;
        _0x277c6f["classList"][_0x2bba3b(0x13f)](_0x2bba3b(0x164));
      }),
      _0x4eb0a6[_0x5e3900(0x150)][_0x5e3900(0x15d)]("active"),
      categoryButtons[_0x5e3900(0x128)]((_0xe1c9aa) => {
        const _0x563594 = _0x5e3900;
        _0xe1c9aa[_0x563594(0x150)][_0x563594(0x13f)](_0x563594(0x164));
      });
  });
}),
  categoryButtons[_0x2efed0(0x128)]((_0x1df595) => {
    const _0x3c2f37 = _0x2efed0;
    _0x1df595[_0x3c2f37(0x147)](_0x3c2f37(0x163), () => {
      const _0x3d27d9 = _0x3c2f37,
        _0x250329 = _0x1df595[_0x3d27d9(0x131)][_0x3d27d9(0x15a)];
      _0x250329 === _0x3d27d9(0x157)
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0x3d27d9(0x13d)]((_0x71dee3) => {
            const _0x4d9ff3 = _0x3d27d9;
            return _0x71dee3["catego"][_0x4d9ff3(0x15f)](_0x250329);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons["forEach"]((_0x1bcb66) => {
          const _0x3cf407 = _0x3d27d9;
          _0x1bcb66[_0x3cf407(0x150)]["remove"](_0x3cf407(0x164));
        }),
        _0x1df595[_0x3d27d9(0x150)][_0x3d27d9(0x15d)](_0x3d27d9(0x164)),
        aniosButtons[_0x3d27d9(0x128)]((_0x3b5f12) => {
          const _0x4a3263 = _0x3d27d9;
          _0x3b5f12[_0x4a3263(0x150)][_0x4a3263(0x13f)]("active");
        });
    });
  });
function showTrailer(_0x233bee) {
  const _0x472899 = _0x2efed0;
  _0x233bee[_0x472899(0x11e)]();
  var _0x2e86be = document[_0x472899(0x15b)](_0x472899(0x12a)),
    _0x564208 = document[_0x472899(0x15b)]("trailer-video"),
    _0x63b043 = _0x233bee[_0x472899(0x154)],
    _0x4f76c5 = _0x63b043[_0x472899(0x151)](_0x472899(0x13a));
  _0x564208[_0x472899(0x127)]("src", _0x4f76c5),
    (_0x2e86be["style"]["display"] = _0x472899(0x161));
}
function closeTrailer() {
  const _0x8aa9aa = _0x2efed0;
  var _0x2afe85 = document["getElementById"](_0x8aa9aa(0x12a)),
    _0x5b7253 = document[_0x8aa9aa(0x15b)](_0x8aa9aa(0x116));
  _0x5b7253["setAttribute"](_0x8aa9aa(0x11d), ""),
    (_0x2afe85["style"]["display"] = _0x8aa9aa(0x134));
}
(mybutton = document[_0x2efed0(0x15b)](_0x2efed0(0x119))),
  (window[_0x2efed0(0x144)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x5f1bee = _0x2efed0;
  document["body"]["scrollTop"] > 0x14 ||
  document["documentElement"][_0x5f1bee(0x136)] > 0x14
    ? (mybutton[_0x5f1bee(0x142)][_0x5f1bee(0x13b)] = "block")
    : (mybutton["style"][_0x5f1bee(0x13b)] = _0x5f1bee(0x134));
}
function _0x3c46(_0x12d87c, _0x98979b) {
  const _0x4a601a = _0x4a60();
  return (
    (_0x3c46 = function (_0x3c4665, _0x36283f) {
      _0x3c4665 = _0x3c4665 - 0x113;
      let _0x11a3e5 = _0x4a601a[_0x3c4665];
      return _0x11a3e5;
    }),
    _0x3c46(_0x12d87c, _0x98979b)
  );
}
function topFunction() {
  const _0x2407f3 = _0x2efed0;
  (document[_0x2407f3(0x121)]["scrollTop"] = 0x0),
    (document[_0x2407f3(0x160)][_0x2407f3(0x136)] = 0x0);
}
