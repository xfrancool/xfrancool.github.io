const _0x4d382c = _0x2ba1;
(function (_0x5e91d3, _0x58e653) {
  const _0x53773b = _0x2ba1,
    _0x12b963 = _0x5e91d3();
  while (!![]) {
    try {
      const _0x2438d9 =
        parseInt(_0x53773b(0xb5)) / 0x1 +
        parseInt(_0x53773b(0x91)) / 0x2 +
        (-parseInt(_0x53773b(0x93)) / 0x3) *
          (-parseInt(_0x53773b(0xa2)) / 0x4) +
        parseInt(_0x53773b(0xc9)) / 0x5 +
        (parseInt(_0x53773b(0x99)) / 0x6) * (parseInt(_0x53773b(0xc0)) / 0x7) +
        parseInt(_0x53773b(0xac)) / 0x8 +
        (parseInt(_0x53773b(0xc3)) / 0x9) * (-parseInt(_0x53773b(0x8c)) / 0xa);
      if (_0x2438d9 === _0x58e653) break;
      else _0x12b963["push"](_0x12b963["shift"]());
    } catch (_0x5c66b5) {
      _0x12b963["push"](_0x12b963["shift"]());
    }
  }
})(_0x1cae, 0xb9c29);
const cardsContainer = document["getElementById"](_0x4d382c(0xc5)),
  paginationContainer = document["getElementById"](_0x4d382c(0xb9)),
  searchInput = document[_0x4d382c(0xad)](_0x4d382c(0x9e));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(_0x4d382c(0x9c))
  ["then"]((_0x552f2e) => _0x552f2e[_0x4d382c(0xc7)]())
  [_0x4d382c(0xba)]((_0x3ca0c6) => {
    (currentCards = _0x3ca0c6),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x5dfde9 = _0x4d382c;
  cardsContainer[_0x5dfde9(0x90)] = "";
  const _0x2d9d82 = (currentPage - 0x1) * cardsPerPage,
    _0x1829dd = _0x2d9d82 + cardsPerPage,
    _0x4eb47b = filteredCards[_0x5dfde9(0x96)](_0x2d9d82, _0x1829dd);
  _0x4eb47b[_0x5dfde9(0xc1)]((_0x28a594) => {
    const _0x46dad7 = _0x5dfde9,
      _0x5b2860 = document["createElement"](_0x46dad7(0xbe));
    _0x5b2860[_0x46dad7(0x8e)]["add"](_0x46dad7(0x86)),
      (_0x5b2860["innerHTML"] =
        _0x46dad7(0x92) +
        _0x28a594["img"] +
        _0x46dad7(0xa9) +
        _0x28a594["name"] +
        "</p>\x20\x20\x20\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22" +
        _0x28a594["link"] +
        "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>👀\x20</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p\x20id=\x22title-card\x22>" +
        _0x28a594[_0x46dad7(0xa5)] +
        _0x46dad7(0xc2) +
        _0x28a594["anio"] +
        "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer[_0x46dad7(0xa0)](_0x5b2860);
  });
}
function renderPagination() {
  const _0x17a262 = _0x4d382c;
  paginationContainer[_0x17a262(0x90)] = "";
  const _0x1a2ea8 = Math[_0x17a262(0xce)](
      filteredCards[_0x17a262(0xb4)] / cardsPerPage
    ),
    _0x286744 = 0x4;
  let _0x3e62a3 = Math[_0x17a262(0xcf)](
      0x1,
      currentPage - Math["floor"](_0x286744 / 0x2)
    ),
    _0x5711a6 = Math[_0x17a262(0xca)](_0x1a2ea8, _0x3e62a3 + _0x286744 - 0x1);
  _0x5711a6 - _0x3e62a3 + 0x1 < _0x286744 &&
    (_0x3e62a3 = Math["max"](0x1, _0x5711a6 - _0x286744 + 0x1));
  for (let _0x2d352c = _0x3e62a3; _0x2d352c <= _0x5711a6; _0x2d352c++) {
    const _0xbeb6e9 = document[_0x17a262(0xb0)]("button");
    (_0xbeb6e9[_0x17a262(0x9d)] = _0x2d352c),
      _0xbeb6e9[_0x17a262(0xb2)](_0x17a262(0xd0), () => {
        const _0x39af23 = _0x17a262;
        (currentPage = _0x2d352c),
          renderCards(),
          renderPagination(),
          window[_0x39af23(0x9a)](_0x39af23(0xb7))["matches"] &&
            window[_0x39af23(0x9b)](0x0, 0x0);
      }),
      _0x2d352c === currentPage &&
        _0xbeb6e9[_0x17a262(0x8e)][_0x17a262(0xa1)](_0x17a262(0xab)),
      paginationContainer[_0x17a262(0xa0)](_0xbeb6e9);
  }
  const _0x56d188 = document[_0x17a262(0xb0)]("button");
  (_0x56d188[_0x17a262(0x90)] = "&gt;"),
    (_0x56d188[_0x17a262(0x89)][_0x17a262(0xc8)] = _0x17a262(0xa4)),
    _0x56d188[_0x17a262(0xb2)](_0x17a262(0xd0), () => {
      const _0x2f2e59 = _0x17a262;
      currentPage < _0x1a2ea8 &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0x2f2e59(0x9a)](_0x2f2e59(0xb7))["matches"] &&
          window[_0x2f2e59(0x9b)](0x0, 0x0));
    });
  const _0x42696c = document[_0x17a262(0xb0)](_0x17a262(0xc6));
  (_0x42696c[_0x17a262(0x90)] = _0x17a262(0x95)),
    (_0x42696c[_0x17a262(0x89)][_0x17a262(0xc8)] = "#008cba"),
    _0x42696c["addEventListener"](_0x17a262(0xd0), () => {
      const _0x201cb0 = _0x17a262;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window[_0x201cb0(0x9a)](_0x201cb0(0xb7))[_0x201cb0(0xb8)] &&
          window["scrollTo"](0x0, 0x0));
    }),
    paginationContainer[_0x17a262(0x9f)](
      _0x42696c,
      paginationContainer[_0x17a262(0x98)]
    ),
    paginationContainer[_0x17a262(0xa0)](_0x56d188);
}
searchInput[_0x4d382c(0xb2)](_0x4d382c(0xb6), () => {
  const _0x2009f7 = _0x4d382c,
    _0x42632a = searchInput[_0x2009f7(0x87)]["trim"]()[_0x2009f7(0xa3)]();
  (filteredCards = currentCards[_0x2009f7(0x88)]((_0x3be2f0) =>
    _0x3be2f0[_0x2009f7(0xcb)][_0x2009f7(0xa3)]()[_0x2009f7(0x85)](_0x42632a)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document["querySelectorAll"](_0x4d382c(0x97)),
  categoryButtons = document["querySelectorAll"](".category-button");
aniosButtons[_0x4d382c(0xc1)]((_0x1579ec) => {
  const _0x466d01 = _0x4d382c;
  _0x1579ec[_0x466d01(0xb2)](_0x466d01(0xd0), () => {
    const _0x35ced1 = _0x466d01,
      _0x19cc0f = _0x1579ec[_0x35ced1(0x8b)][_0x35ced1(0xaf)];
    _0x19cc0f === _0x35ced1(0xa6)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x35ced1(0x88)]((_0x2563de) => {
          const _0x45f5a5 = _0x35ced1;
          return _0x2563de[_0x45f5a5(0x8d)] === _0x19cc0f;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x35ced1(0xc1)]((_0x2a5221) => {
        const _0xb7b122 = _0x35ced1;
        _0x2a5221["classList"][_0xb7b122(0xbc)](_0xb7b122(0xab));
      }),
      _0x1579ec["classList"][_0x35ced1(0xa1)](_0x35ced1(0xab)),
      categoryButtons[_0x35ced1(0xc1)]((_0x5e0232) => {
        const _0x5757a7 = _0x35ced1;
        _0x5e0232[_0x5757a7(0x8e)]["remove"](_0x5757a7(0xab));
      });
  });
}),
  categoryButtons[_0x4d382c(0xc1)]((_0x3ac8c5) => {
    const _0x259447 = _0x4d382c;
    _0x3ac8c5[_0x259447(0xb2)](_0x259447(0xd0), () => {
      const _0xd57653 = _0x259447,
        _0x548086 = _0x3ac8c5[_0xd57653(0x8b)]["category"];
      _0x548086 === "all"
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0xd57653(0x88)]((_0x192887) => {
            const _0x31c249 = _0xd57653;
            return _0x192887[_0x31c249(0xa5)][_0x31c249(0x85)](_0x548086);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0xd57653(0xc1)]((_0x56635d) => {
          const _0x29dd82 = _0xd57653;
          _0x56635d[_0x29dd82(0x8e)]["remove"](_0x29dd82(0xab));
        }),
        _0x3ac8c5[_0xd57653(0x8e)][_0xd57653(0xa1)](_0xd57653(0xab)),
        aniosButtons[_0xd57653(0xc1)]((_0x108a4c) => {
          const _0x388d83 = _0xd57653;
          _0x108a4c[_0x388d83(0x8e)][_0x388d83(0xbc)]("active");
        });
    });
  });
function _0x1cae() {
  const _0x3c73be = [
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "18108VLuMKW",
    "display",
    "&lt;",
    "slice",
    ".anios-button",
    "firstChild",
    "228XQYwES",
    "matchMedia",
    "scrollTo",
    "https://xfrancool.github.io/imgmov/movies.json",
    "innerText",
    "search-input",
    "insertBefore",
    "appendChild",
    "add",
    "240wzwgOt",
    "toLowerCase",
    "#008cba",
    "catego",
    "all",
    "setAttribute",
    "href",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>",
    "scrollTop",
    "active",
    "9935024duAbno",
    "getElementById",
    "onscroll",
    "category",
    "createElement",
    "documentElement",
    "addEventListener",
    "src",
    "length",
    "698318BtZBaF",
    "input",
    "(max-width:\x20767px)",
    "matches",
    "pagination-container",
    "then",
    "none",
    "remove",
    "trailer-modal",
    "div",
    "currentTarget",
    "124488WBCkXj",
    "forEach",
    "</p>\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>",
    "607302uWJoLI",
    "body",
    "cards-container",
    "button",
    "json",
    "backgroundColor",
    "1014135qrewhm",
    "min",
    "name",
    "getAttribute",
    "block",
    "ceil",
    "max",
    "click",
    "includes",
    "card",
    "value",
    "filter",
    "style",
    "trailer-video",
    "dataset",
    "370WOplZJ",
    "anio",
    "classList",
    "myBtn",
    "innerHTML",
    "153168HgoMqm",
  ];
  _0x1cae = function () {
    return _0x3c73be;
  };
  return _0x1cae();
}
function showTrailer(_0x1ddd18) {
  const _0x56b3cd = _0x4d382c;
  _0x1ddd18["preventDefault"]();
  var _0x47b3d2 = document[_0x56b3cd(0xad)](_0x56b3cd(0xbd)),
    _0x5825bf = document[_0x56b3cd(0xad)](_0x56b3cd(0x8a)),
    _0x3b89fb = _0x1ddd18[_0x56b3cd(0xbf)],
    _0x1c83ed = _0x3b89fb[_0x56b3cd(0xcc)](_0x56b3cd(0xa8));
  _0x5825bf[_0x56b3cd(0xa7)]("src", _0x1c83ed),
    (_0x47b3d2["style"][_0x56b3cd(0x94)] = _0x56b3cd(0xcd));
}
function _0x2ba1(_0x21c5ed, _0x46cb0a) {
  const _0x1caeb1 = _0x1cae();
  return (
    (_0x2ba1 = function (_0x2ba1cc, _0x497505) {
      _0x2ba1cc = _0x2ba1cc - 0x85;
      let _0x11368a = _0x1caeb1[_0x2ba1cc];
      return _0x11368a;
    }),
    _0x2ba1(_0x21c5ed, _0x46cb0a)
  );
}
function closeTrailer() {
  const _0x54f2df = _0x4d382c;
  var _0x437dba = document[_0x54f2df(0xad)](_0x54f2df(0xbd)),
    _0x31f3e5 = document[_0x54f2df(0xad)](_0x54f2df(0x8a));
  _0x31f3e5[_0x54f2df(0xa7)](_0x54f2df(0xb3), ""),
    (_0x437dba[_0x54f2df(0x89)][_0x54f2df(0x94)] = _0x54f2df(0xbb));
}
(mybutton = document[_0x4d382c(0xad)](_0x4d382c(0x8f))),
  (window[_0x4d382c(0xae)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x228c01 = _0x4d382c;
  document[_0x228c01(0xc4)][_0x228c01(0xaa)] > 0x14 ||
  document[_0x228c01(0xb1)][_0x228c01(0xaa)] > 0x14
    ? (mybutton["style"][_0x228c01(0x94)] = "block")
    : (mybutton[_0x228c01(0x89)]["display"] = _0x228c01(0xbb));
}
function topFunction() {
  const _0x2e4e84 = _0x4d382c;
  (document[_0x2e4e84(0xc4)]["scrollTop"] = 0x0),
    (document[_0x2e4e84(0xb1)][_0x2e4e84(0xaa)] = 0x0);
}
