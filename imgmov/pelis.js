const _0x114dec = _0x2a4d;
(function (_0x467b86, _0x2935ac) {
  const _0x5efc7f = _0x2a4d,
    _0x28f86e = _0x467b86();
  while (!![]) {
    try {
      const _0x146594 =
        (-parseInt(_0x5efc7f(0x14b)) / 0x1) *
          (-parseInt(_0x5efc7f(0x15a)) / 0x2) +
        (-parseInt(_0x5efc7f(0x141)) / 0x3) *
          (parseInt(_0x5efc7f(0x132)) / 0x4) +
        (parseInt(_0x5efc7f(0x142)) / 0x5) *
          (parseInt(_0x5efc7f(0x150)) / 0x6) +
        (-parseInt(_0x5efc7f(0x122)) / 0x7) *
          (-parseInt(_0x5efc7f(0x12e)) / 0x8) +
        (parseInt(_0x5efc7f(0x11f)) / 0x9) *
          (-parseInt(_0x5efc7f(0x159)) / 0xa) +
        -parseInt(_0x5efc7f(0x152)) / 0xb +
        (-parseInt(_0x5efc7f(0x11a)) / 0xc) *
          (-parseInt(_0x5efc7f(0x13c)) / 0xd);
      if (_0x146594 === _0x2935ac) break;
      else _0x28f86e["push"](_0x28f86e["shift"]());
    } catch (_0x24bd7a) {
      _0x28f86e["push"](_0x28f86e["shift"]());
    }
  }
})(_0x2b75, 0xf335c);
import { pelis } from "./export.js";
const cardsContainer = document[_0x114dec(0x117)](_0x114dec(0x151)),
  paginationContainer = document[_0x114dec(0x117)](_0x114dec(0x165)),
  searchInput = document["getElementById"](_0x114dec(0x116));
function _0x2b75() {
  const _0x5a814b = [
    "firstChild",
    "includes",
    "sort",
    "5059288PpFBPt",
    "scrollTop",
    "value",
    "addEventListener",
    "4KbiLPU",
    "insertBefore",
    "length",
    "innerHTML",
    "anio",
    "ceil",
    "createElement",
    "input",
    "block",
    ".category-button",
    "312vglUYv",
    "src",
    "slice",
    "click",
    "forEach",
    "5930307wYJrhO",
    "65UPUcHy",
    "img",
    "name",
    "all",
    "button",
    "</p>\x20\x20\x20\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22",
    "div",
    "style",
    "max",
    "15091uYernR",
    "matchMedia",
    "then",
    "toLowerCase",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>👀\x20</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p\x20id=\x22title-card\x22>",
    "414438kwFEzm",
    "cards-container",
    "11887491LCDlFU",
    "dataset",
    "filter",
    "none",
    "classList",
    "preventDefault",
    "display",
    "10tQAMuj",
    "110gHBpnc",
    "(max-width:\x20767px)",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>",
    "</p>\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>",
    "trailer-video",
    "getAttribute",
    "innerText",
    "scrollTo",
    "href",
    "min",
    "myBtn",
    "pagination-container",
    "body",
    "documentElement",
    "appendChild",
    "backgroundColor",
    "search-input",
    "getElementById",
    "querySelectorAll",
    "currentTarget",
    "857496UrvHdZ",
    "&lt;",
    "#008cba",
    "add",
    "trim",
    "11578869jHqbOJ",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "21FCfXDX",
    "card",
    "floor",
    "onscroll",
    "setAttribute",
    "active",
    "remove",
    "trailer-modal",
    "link",
  ];
  _0x2b75 = function () {
    return _0x5a814b;
  };
  return _0x2b75();
}
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(pelis)
  [_0x114dec(0x14d)]((_0x318d13) => _0x318d13["json"]())
  [_0x114dec(0x14d)]((_0x48408a) => {
    const _0x56c9bd = _0x114dec;
    _0x48408a[_0x56c9bd(0x12d)](
      (_0x5be5ad, _0x10f9c8) => _0x10f9c8["id"] - _0x5be5ad["id"]
    ),
      (currentCards = _0x48408a),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x1eb18c = _0x114dec;
  cardsContainer["innerHTML"] = "";
  const _0x230552 = (currentPage - 0x1) * cardsPerPage,
    _0x5513b5 = _0x230552 + cardsPerPage,
    _0x48307a = filteredCards[_0x1eb18c(0x13e)](_0x230552, _0x5513b5);
  _0x48307a[_0x1eb18c(0x140)]((_0x4688cb) => {
    const _0x7b3566 = _0x1eb18c,
      _0x2e89d1 = document[_0x7b3566(0x138)](_0x7b3566(0x148));
    _0x2e89d1[_0x7b3566(0x156)]["add"](_0x7b3566(0x123)),
      (_0x2e89d1[_0x7b3566(0x135)] =
        _0x7b3566(0x120) +
        _0x4688cb[_0x7b3566(0x143)] +
        _0x7b3566(0x15c) +
        _0x4688cb[_0x7b3566(0x144)] +
        _0x7b3566(0x147) +
        _0x4688cb[_0x7b3566(0x12a)] +
        _0x7b3566(0x14f) +
        _0x4688cb["catego"] +
        _0x7b3566(0x15d) +
        _0x4688cb[_0x7b3566(0x136)] +
        _0x7b3566(0x121)),
      cardsContainer[_0x7b3566(0x168)](_0x2e89d1);
  });
}
function renderPagination() {
  const _0x2141a0 = _0x114dec;
  paginationContainer[_0x2141a0(0x135)] = "";
  const _0xd54363 = Math[_0x2141a0(0x137)](
      filteredCards[_0x2141a0(0x134)] / cardsPerPage
    ),
    _0x111521 = 0x4;
  let _0x2d55d8 = Math[_0x2141a0(0x14a)](
      0x1,
      currentPage - Math[_0x2141a0(0x124)](_0x111521 / 0x2)
    ),
    _0x1fa80e = Math[_0x2141a0(0x163)](_0xd54363, _0x2d55d8 + _0x111521 - 0x1);
  _0x1fa80e - _0x2d55d8 + 0x1 < _0x111521 &&
    (_0x2d55d8 = Math[_0x2141a0(0x14a)](0x1, _0x1fa80e - _0x111521 + 0x1));
  for (let _0x5981f3 = _0x2d55d8; _0x5981f3 <= _0x1fa80e; _0x5981f3++) {
    const _0x24906f = document[_0x2141a0(0x138)](_0x2141a0(0x146));
    (_0x24906f[_0x2141a0(0x160)] = _0x5981f3),
      _0x24906f[_0x2141a0(0x131)](_0x2141a0(0x13f), () => {
        const _0xdba109 = _0x2141a0;
        (currentPage = _0x5981f3),
          renderCards(),
          renderPagination(),
          window[_0xdba109(0x14c)](_0xdba109(0x15b))["matches"] &&
            window["scrollTo"](0x0, 0x0);
      }),
      _0x5981f3 === currentPage &&
        _0x24906f[_0x2141a0(0x156)][_0x2141a0(0x11d)](_0x2141a0(0x127)),
      paginationContainer[_0x2141a0(0x168)](_0x24906f);
  }
  const _0x5524e1 = document[_0x2141a0(0x138)](_0x2141a0(0x146));
  (_0x5524e1[_0x2141a0(0x135)] = "&gt;"),
    (_0x5524e1[_0x2141a0(0x149)][_0x2141a0(0x169)] = _0x2141a0(0x11c)),
    _0x5524e1["addEventListener"](_0x2141a0(0x13f), () => {
      const _0x48cd8b = _0x2141a0;
      currentPage < _0xd54363 &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0x48cd8b(0x14c)](_0x48cd8b(0x15b))["matches"] &&
          window[_0x48cd8b(0x161)](0x0, 0x0));
    });
  const _0x101ec9 = document[_0x2141a0(0x138)](_0x2141a0(0x146));
  (_0x101ec9[_0x2141a0(0x135)] = _0x2141a0(0x11b)),
    (_0x101ec9[_0x2141a0(0x149)][_0x2141a0(0x169)] = "#008cba"),
    _0x101ec9[_0x2141a0(0x131)]("click", () => {
      const _0x19eb31 = _0x2141a0;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window[_0x19eb31(0x14c)]("(max-width:\x20767px)")["matches"] &&
          window[_0x19eb31(0x161)](0x0, 0x0));
    }),
    paginationContainer[_0x2141a0(0x133)](
      _0x101ec9,
      paginationContainer[_0x2141a0(0x12b)]
    ),
    paginationContainer[_0x2141a0(0x168)](_0x5524e1);
}
searchInput["addEventListener"](_0x114dec(0x139), () => {
  const _0x33c867 = _0x114dec,
    _0x54a653 = searchInput[_0x33c867(0x130)]
      [_0x33c867(0x11e)]()
      [_0x33c867(0x14e)]();
  (filteredCards = currentCards[_0x33c867(0x154)]((_0x5bb417) =>
    _0x5bb417[_0x33c867(0x144)]["toLowerCase"]()[_0x33c867(0x12c)](_0x54a653)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document["querySelectorAll"](".anios-button"),
  categoryButtons = document[_0x114dec(0x118)](_0x114dec(0x13b));
aniosButtons[_0x114dec(0x140)]((_0x2ccd79) => {
  const _0x1294f4 = _0x114dec;
  _0x2ccd79[_0x1294f4(0x131)]("click", () => {
    const _0x2eeb30 = _0x1294f4,
      _0x5835d8 = _0x2ccd79[_0x2eeb30(0x153)]["category"];
    _0x5835d8 === _0x2eeb30(0x145)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x2eeb30(0x154)]((_0x405037) => {
          return _0x405037["anio"] === _0x5835d8;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x2eeb30(0x140)]((_0x4f3494) => {
        const _0x273381 = _0x2eeb30;
        _0x4f3494["classList"]["remove"](_0x273381(0x127));
      }),
      _0x2ccd79["classList"][_0x2eeb30(0x11d)](_0x2eeb30(0x127)),
      categoryButtons["forEach"]((_0x2dd443) => {
        const _0x5cb51a = _0x2eeb30;
        _0x2dd443[_0x5cb51a(0x156)]["remove"](_0x5cb51a(0x127));
      });
  });
}),
  categoryButtons[_0x114dec(0x140)]((_0x8af1b8) => {
    const _0xb23860 = _0x114dec;
    _0x8af1b8[_0xb23860(0x131)](_0xb23860(0x13f), () => {
      const _0xa1af5e = _0xb23860,
        _0x1deec6 = _0x8af1b8[_0xa1af5e(0x153)]["category"];
      _0x1deec6 === "all"
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0xa1af5e(0x154)]((_0x46e117) => {
            const _0x2081c3 = _0xa1af5e;
            return _0x46e117["catego"][_0x2081c3(0x12c)](_0x1deec6);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0xa1af5e(0x140)]((_0xbafc0a) => {
          const _0x72554d = _0xa1af5e;
          _0xbafc0a[_0x72554d(0x156)]["remove"](_0x72554d(0x127));
        }),
        _0x8af1b8[_0xa1af5e(0x156)][_0xa1af5e(0x11d)](_0xa1af5e(0x127)),
        aniosButtons[_0xa1af5e(0x140)]((_0x7d83ea) => {
          const _0x2540f7 = _0xa1af5e;
          _0x7d83ea[_0x2540f7(0x156)][_0x2540f7(0x128)](_0x2540f7(0x127));
        });
    });
  });
function showTrailer(_0x4ad19f) {
  const _0x5e1698 = _0x114dec;
  _0x4ad19f[_0x5e1698(0x157)]();
  var _0x213ff4 = document["getElementById"](_0x5e1698(0x129)),
    _0x3e8da2 = document[_0x5e1698(0x117)](_0x5e1698(0x15e)),
    _0x364f2d = _0x4ad19f[_0x5e1698(0x119)],
    _0x1a2a69 = _0x364f2d[_0x5e1698(0x15f)](_0x5e1698(0x162));
  _0x3e8da2[_0x5e1698(0x126)](_0x5e1698(0x13d), _0x1a2a69),
    (_0x213ff4[_0x5e1698(0x149)][_0x5e1698(0x158)] = _0x5e1698(0x13a));
}
function _0x2a4d(_0x2b8fcc, _0x5276bc) {
  const _0x2b7502 = _0x2b75();
  return (
    (_0x2a4d = function (_0x2a4d6e, _0x57a8d5) {
      _0x2a4d6e = _0x2a4d6e - 0x116;
      let _0x1ea7c6 = _0x2b7502[_0x2a4d6e];
      return _0x1ea7c6;
    }),
    _0x2a4d(_0x2b8fcc, _0x5276bc)
  );
}
function closeTrailer() {
  const _0x53cbdf = _0x114dec;
  var _0x141fe3 = document["getElementById"](_0x53cbdf(0x129)),
    _0x138d09 = document["getElementById"](_0x53cbdf(0x15e));
  _0x138d09[_0x53cbdf(0x126)](_0x53cbdf(0x13d), ""),
    (_0x141fe3[_0x53cbdf(0x149)]["display"] = _0x53cbdf(0x155));
}
(mybutton = document["getElementById"](_0x114dec(0x164))),
  (window[_0x114dec(0x125)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x31cb78 = _0x114dec;
  document["body"][_0x31cb78(0x12f)] > 0x14 ||
  document[_0x31cb78(0x167)][_0x31cb78(0x12f)] > 0x14
    ? (mybutton["style"][_0x31cb78(0x158)] = "block")
    : (mybutton["style"]["display"] = _0x31cb78(0x155));
}
function topFunction() {
  const _0x5b96f4 = _0x114dec;
  (document[_0x5b96f4(0x166)][_0x5b96f4(0x12f)] = 0x0),
    (document["documentElement"]["scrollTop"] = 0x0);
}
