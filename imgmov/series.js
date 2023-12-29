const _0x46debd = _0x4dd6;
function _0x4dd6(_0x179a3, _0x3f6a06) {
  const _0x54f627 = _0x54f6();
  return (
    (_0x4dd6 = function (_0x4dd6ff, _0x351b54) {
      _0x4dd6ff = _0x4dd6ff - 0x12b;
      let _0x3ff98b = _0x54f627[_0x4dd6ff];
      return _0x3ff98b;
    }),
    _0x4dd6(_0x179a3, _0x3f6a06)
  );
}
(function (_0x556fb6, _0x35c7de) {
  const _0x5b59ee = _0x4dd6,
    _0x1a56a3 = _0x556fb6();
  while (!![]) {
    try {
      const _0xb77abe =
        (parseInt(_0x5b59ee(0x14b)) / 0x1) *
          (-parseInt(_0x5b59ee(0x169)) / 0x2) +
        (-parseInt(_0x5b59ee(0x16a)) / 0x3) *
          (parseInt(_0x5b59ee(0x13e)) / 0x4) +
        parseInt(_0x5b59ee(0x14d)) / 0x5 +
        parseInt(_0x5b59ee(0x131)) / 0x6 +
        (parseInt(_0x5b59ee(0x14a)) / 0x7) *
          (-parseInt(_0x5b59ee(0x147)) / 0x8) +
        -parseInt(_0x5b59ee(0x135)) / 0x9 +
        parseInt(_0x5b59ee(0x139)) / 0xa;
      if (_0xb77abe === _0x35c7de) break;
      else _0x1a56a3["push"](_0x1a56a3["shift"]());
    } catch (_0x2bdc9f) {
      _0x1a56a3["push"](_0x1a56a3["shift"]());
    }
  }
})(_0x54f6, 0x1b1ee);
const cardsContainer = document[_0x46debd(0x153)](_0x46debd(0x133)),
  paginationContainer = document[_0x46debd(0x153)]("pagination-container"),
  searchInput = document[_0x46debd(0x153)](_0x46debd(0x168));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(_0x46debd(0x141))
  ["then"]((_0x455bca) => _0x455bca[_0x46debd(0x13b)]())
  ["then"]((_0x11c201) => {
    const _0x29742d = _0x46debd;
    (currentCards = _0x11c201),
      (filteredCards = currentCards),
      _0x11c201["sort"](
        (_0x934454, _0x4f7a10) => _0x934454["id"] - _0x4f7a10["id"]
      ),
      _0x11c201[_0x29742d(0x165)](),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x1df456 = _0x46debd;
  cardsContainer[_0x1df456(0x152)] = "";
  const _0x5cb034 = (currentPage - 0x1) * cardsPerPage,
    _0x50d4b7 = _0x5cb034 + cardsPerPage,
    _0x245945 = filteredCards[_0x1df456(0x157)](_0x5cb034, _0x50d4b7);
  _0x245945[_0x1df456(0x130)]((_0x5bd2d0) => {
    const _0x53a5e2 = _0x1df456,
      _0x3d8224 = document[_0x53a5e2(0x164)]("div");
    _0x3d8224[_0x53a5e2(0x144)][_0x53a5e2(0x162)](_0x53a5e2(0x149)),
      (_0x3d8224[_0x53a5e2(0x152)] =
        _0x53a5e2(0x13f) +
        _0x5bd2d0[_0x53a5e2(0x13d)] +
        _0x53a5e2(0x148) +
        _0x5bd2d0[_0x53a5e2(0x16f)] +
        _0x53a5e2(0x178) +
        _0x5bd2d0[_0x53a5e2(0x150)] +
        _0x53a5e2(0x158) +
        _0x5bd2d0[_0x53a5e2(0x177)] +
        _0x53a5e2(0x174)),
      cardsContainer[_0x53a5e2(0x159)](_0x3d8224);
  });
}
function _0x54f6() {
  const _0x464bee = [
    "min",
    "createElement",
    "reverse",
    "documentElement",
    "addEventListener",
    "search-input",
    "283358feomPi",
    "15BLocdt",
    "src",
    "length",
    "category",
    "setAttribute",
    "name",
    "active",
    "scrollTop",
    "matchMedia",
    "style",
    "</p>\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "click",
    "remove",
    "anios",
    "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22",
    "querySelectorAll",
    "trailer-modal",
    "scrollTo",
    "href",
    "anio",
    "forEach",
    "229056QtHvim",
    "ceil",
    "cards-container",
    "matches",
    "199566zQiGMg",
    "block",
    "(max-width:\x20767px)",
    "currentTarget",
    "4708040moFfyH",
    "backgroundColor",
    "json",
    ".category-button",
    "img",
    "114656nuAPwk",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "dataset",
    "https://script.google.com/macros/s/AKfycbzMk_hdMzvPXlDi2kghb51lYhi0D-MzCiL6lDGF40alFK4XoFwUtKR1JJHIQrM1Lwbp/exec",
    "button",
    "body",
    "classList",
    "none",
    "catego",
    "442328oZdPxg",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "card",
    "21eQCFLs",
    "1fNGkll",
    "firstChild",
    "375760JbaFPQ",
    "trailer-video",
    "includes",
    "link",
    "preventDefault",
    "innerHTML",
    "getElementById",
    "toLowerCase",
    "input",
    "value",
    "slice",
    "\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>\x20👀</a>\x20</p>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>",
    "appendChild",
    "filter",
    "max",
    "trim",
    "&lt;",
    "onscroll",
    "all",
    "innerText",
    "display",
    "add",
  ];
  _0x54f6 = function () {
    return _0x464bee;
  };
  return _0x54f6();
}
function renderPagination() {
  const _0xc3b532 = _0x46debd;
  paginationContainer[_0xc3b532(0x152)] = "";
  const _0x1cde96 = Math[_0xc3b532(0x132)](
      filteredCards[_0xc3b532(0x16c)] / cardsPerPage
    ),
    _0x4e1239 = 0x4;
  let _0x3b6ff2 = Math[_0xc3b532(0x15b)](
      0x1,
      currentPage - Math["floor"](_0x4e1239 / 0x2)
    ),
    _0x22de7a = Math[_0xc3b532(0x163)](_0x1cde96, _0x3b6ff2 + _0x4e1239 - 0x1);
  _0x22de7a - _0x3b6ff2 + 0x1 < _0x4e1239 &&
    (_0x3b6ff2 = Math[_0xc3b532(0x15b)](0x1, _0x22de7a - _0x4e1239 + 0x1));
  for (let _0x1ccd1b = _0x3b6ff2; _0x1ccd1b <= _0x22de7a; _0x1ccd1b++) {
    const _0x17aecb = document[_0xc3b532(0x164)](_0xc3b532(0x142));
    (_0x17aecb[_0xc3b532(0x160)] = _0x1ccd1b),
      _0x17aecb["addEventListener"](_0xc3b532(0x175), () => {
        const _0x21ae50 = _0xc3b532;
        (currentPage = _0x1ccd1b),
          renderCards(),
          renderPagination(),
          window["matchMedia"](_0x21ae50(0x137))[_0x21ae50(0x134)] &&
            window["scrollTo"](0x0, 0x0);
      }),
      _0x1ccd1b === currentPage &&
        _0x17aecb[_0xc3b532(0x144)][_0xc3b532(0x162)](_0xc3b532(0x170)),
      paginationContainer[_0xc3b532(0x159)](_0x17aecb);
  }
  const _0x145902 = document[_0xc3b532(0x164)](_0xc3b532(0x142));
  (_0x145902["innerHTML"] = "&gt;"),
    (_0x145902[_0xc3b532(0x173)]["backgroundColor"] = "#008cba"),
    _0x145902[_0xc3b532(0x167)](_0xc3b532(0x175), () => {
      const _0x3f7ac0 = _0xc3b532;
      currentPage < _0x1cde96 &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0x3f7ac0(0x172)]("(max-width:\x20767px)")["matches"] &&
          window[_0x3f7ac0(0x12d)](0x0, 0x0));
    });
  const _0x1a2ba1 = document[_0xc3b532(0x164)](_0xc3b532(0x142));
  (_0x1a2ba1["innerHTML"] = _0xc3b532(0x15d)),
    (_0x1a2ba1[_0xc3b532(0x173)][_0xc3b532(0x13a)] = "#008cba"),
    _0x1a2ba1[_0xc3b532(0x167)](_0xc3b532(0x175), () => {
      const _0x456dba = _0xc3b532;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window[_0x456dba(0x172)]("(max-width:\x20767px)")[_0x456dba(0x134)] &&
          window[_0x456dba(0x12d)](0x0, 0x0));
    }),
    paginationContainer["insertBefore"](
      _0x1a2ba1,
      paginationContainer[_0xc3b532(0x14c)]
    ),
    paginationContainer["appendChild"](_0x145902);
}
searchInput[_0x46debd(0x167)](_0x46debd(0x155), () => {
  const _0x566c5c = _0x46debd,
    _0x3bd6f3 = searchInput[_0x566c5c(0x156)]
      [_0x566c5c(0x15c)]()
      [_0x566c5c(0x154)]();
  (filteredCards = currentCards[_0x566c5c(0x15a)]((_0x49efe4) =>
    _0x49efe4["name"][_0x566c5c(0x154)]()[_0x566c5c(0x14f)](_0x3bd6f3)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document[_0x46debd(0x12b)](".anios-button"),
  categoryButtons = document[_0x46debd(0x12b)](_0x46debd(0x13c));
aniosButtons["forEach"]((_0x1acca8) => {
  const _0x2d12e0 = _0x46debd;
  _0x1acca8[_0x2d12e0(0x167)](_0x2d12e0(0x175), () => {
    const _0x17dc5c = _0x2d12e0,
      _0x1ec9ea = _0x1acca8["dataset"][_0x17dc5c(0x16d)];
    _0x1ec9ea === _0x17dc5c(0x15f)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x17dc5c(0x15a)]((_0x518fe8) => {
          const _0x510c7d = _0x17dc5c;
          return _0x518fe8[_0x510c7d(0x12f)] === _0x1ec9ea;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x17dc5c(0x130)]((_0x23b1f6) => {
        const _0x4ffd99 = _0x17dc5c;
        _0x23b1f6[_0x4ffd99(0x144)][_0x4ffd99(0x176)](_0x4ffd99(0x170));
      }),
      _0x1acca8[_0x17dc5c(0x144)]["add"]("active"),
      categoryButtons[_0x17dc5c(0x130)]((_0x328f08) => {
        const _0x366171 = _0x17dc5c;
        _0x328f08["classList"][_0x366171(0x176)](_0x366171(0x170));
      });
  });
}),
  categoryButtons[_0x46debd(0x130)]((_0x53311f) => {
    const _0x519461 = _0x46debd;
    _0x53311f[_0x519461(0x167)](_0x519461(0x175), () => {
      const _0xa77466 = _0x519461,
        _0x436676 = _0x53311f[_0xa77466(0x140)]["category"];
      _0x436676 === _0xa77466(0x15f)
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0xa77466(0x15a)]((_0x2e79ed) => {
            const _0x593ffe = _0xa77466;
            return _0x2e79ed[_0x593ffe(0x146)]["includes"](_0x436676);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0xa77466(0x130)]((_0xd08e74) => {
          const _0x506c2a = _0xa77466;
          _0xd08e74["classList"]["remove"](_0x506c2a(0x170));
        }),
        _0x53311f[_0xa77466(0x144)]["add"]("active"),
        aniosButtons[_0xa77466(0x130)]((_0x2c07d0) => {
          const _0xe59bcf = _0xa77466;
          _0x2c07d0["classList"][_0xe59bcf(0x176)](_0xe59bcf(0x170));
        });
    });
  });
function showTrailer(_0x5e310b) {
  const _0x25a221 = _0x46debd;
  _0x5e310b[_0x25a221(0x151)]();
  var _0x4d6f46 = document[_0x25a221(0x153)](_0x25a221(0x12c)),
    _0x16dd78 = document[_0x25a221(0x153)](_0x25a221(0x14e)),
    _0x352326 = _0x5e310b[_0x25a221(0x138)],
    _0xf13213 = _0x352326["getAttribute"](_0x25a221(0x12e));
  _0x16dd78[_0x25a221(0x16e)](_0x25a221(0x16b), _0xf13213),
    (_0x4d6f46["style"][_0x25a221(0x161)] = _0x25a221(0x136));
}
function closeTrailer() {
  const _0x2cf338 = _0x46debd;
  var _0x3ba98e = document[_0x2cf338(0x153)](_0x2cf338(0x12c)),
    _0x5f58da = document[_0x2cf338(0x153)](_0x2cf338(0x14e));
  _0x5f58da[_0x2cf338(0x16e)]("src", ""),
    (_0x3ba98e[_0x2cf338(0x173)][_0x2cf338(0x161)] = _0x2cf338(0x145));
}
(mybutton = document[_0x46debd(0x153)]("myBtn")),
  (window[_0x46debd(0x15e)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x269050 = _0x46debd;
  document[_0x269050(0x143)]["scrollTop"] > 0x14 ||
  document[_0x269050(0x166)][_0x269050(0x171)] > 0x14
    ? (mybutton[_0x269050(0x173)][_0x269050(0x161)] = _0x269050(0x136))
    : (mybutton[_0x269050(0x173)][_0x269050(0x161)] = _0x269050(0x145));
}
function topFunction() {
  const _0x235aa8 = _0x46debd;
  (document[_0x235aa8(0x143)][_0x235aa8(0x171)] = 0x0),
    (document["documentElement"][_0x235aa8(0x171)] = 0x0);
}
