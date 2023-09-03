const _0x13cad4 = _0x4be0;
function _0x1425() {
  const _0x2a051a = [
    "65xHPDGB",
    "click",
    "2886320ZcNkRp",
    "backgroundColor",
    "name",
    "includes",
    "remove",
    "firstChild",
    "pagination-container",
    "#008cba",
    "trailer-video",
    ".anios-button",
    "innerText",
    "preventDefault",
    "157390KlePGO",
    "</p>\x20\x20\x20\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22",
    "getAttribute",
    "src",
    "style",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "filter",
    "insertBefore",
    "dataset",
    "innerHTML",
    "display",
    "776385bNxmmv",
    "max",
    "(max-width:\x20767px)",
    "ceil",
    "matchMedia",
    "querySelectorAll",
    "floor",
    "documentElement",
    "body",
    "img",
    "trailer-modal",
    "28xXSMqH",
    "104KxZMOA",
    "&gt;",
    "addEventListener",
    "scrollTo",
    ".category-button",
    "143KJpbsZ",
    "20740860qEXHEn",
    "link",
    "</p>\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>",
    "createElement",
    "classList",
    "toLowerCase",
    "&lt;",
    "scrollTop",
    "trim",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>👀\x20</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p\x20id=\x22title-card\x22>",
    "setAttribute",
    "active",
    "block",
    "myBtn",
    "getElementById",
    "div",
    "min",
    "86046moMOhC",
    "currentTarget",
    "610816LplvZN",
    "appendChild",
    "add",
    "href",
    "value",
    "sort",
    "catego",
    "matches",
    "anio",
    "forEach",
    "category",
    "3IdyTSo",
    "length",
    "json",
    "cards-container",
    "card",
    "button",
    "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "then",
    "15474DUbmCE",
    "https://xfrancool.github.io/imgmov/cuevanafullv2.json",
    "search-input",
    "none",
  ];
  _0x1425 = function () {
    return _0x2a051a;
  };
  return _0x1425();
}
(function (_0x51a233, _0x4f1a19) {
  const _0x2048b8 = _0x4be0,
    _0xe20302 = _0x51a233();
  while (!![]) {
    try {
      const _0x283675 =
        (parseInt(_0x2048b8(0x1b2)) / 0x1) *
          (parseInt(_0x2048b8(0x189)) / 0x2) +
        (parseInt(_0x2048b8(0x181)) / 0x3) *
          (parseInt(_0x2048b8(0x176)) / 0x4) +
        (-parseInt(_0x2048b8(0x18d)) / 0x5) *
          (-parseInt(_0x2048b8(0x174)) / 0x6) +
        (parseInt(_0x2048b8(0x1b1)) / 0x7) *
          (parseInt(_0x2048b8(0x18f)) / 0x8) +
        parseInt(_0x2048b8(0x1a6)) / 0x9 +
        (parseInt(_0x2048b8(0x19b)) / 0xa) *
          (-parseInt(_0x2048b8(0x1b7)) / 0xb) +
        -parseInt(_0x2048b8(0x1b8)) / 0xc;
      if (_0x283675 === _0x4f1a19) break;
      else _0xe20302["push"](_0xe20302["shift"]());
    } catch (_0x51a0e4) {
      _0xe20302["push"](_0xe20302["shift"]());
    }
  }
})(_0x1425, 0xb4b66);
const cardsContainer = document[_0x13cad4(0x171)](_0x13cad4(0x184)),
  paginationContainer = document[_0x13cad4(0x171)](_0x13cad4(0x195)),
  searchInput = document[_0x13cad4(0x171)](_0x13cad4(0x18b));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(_0x13cad4(0x18a))
  ["then"]((_0x1eb91b) => _0x1eb91b[_0x13cad4(0x183)]())
  [_0x13cad4(0x188)]((_0x2c8866) => {
    const _0x39e61f = _0x13cad4;
    _0x2c8866[_0x39e61f(0x17b)](
      (_0x2e073e, _0x4b3e99) => _0x4b3e99["id"] - _0x2e073e["id"]
    ),
      (currentCards = _0x2c8866),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x3fb44a = _0x13cad4;
  cardsContainer[_0x3fb44a(0x1a4)] = "";
  const _0x21e283 = (currentPage - 0x1) * cardsPerPage,
    _0x5dc4a4 = _0x21e283 + cardsPerPage,
    _0x63b3d6 = filteredCards["slice"](_0x21e283, _0x5dc4a4);
  _0x63b3d6[_0x3fb44a(0x17f)]((_0x233b1f) => {
    const _0x399569 = _0x3fb44a,
      _0x300a6d = document[_0x399569(0x1bb)](_0x399569(0x172));
    _0x300a6d[_0x399569(0x1bc)][_0x399569(0x178)](_0x399569(0x185)),
      (_0x300a6d["innerHTML"] =
        _0x399569(0x1a0) +
        _0x233b1f[_0x399569(0x1af)] +
        "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>" +
        _0x233b1f[_0x399569(0x191)] +
        _0x399569(0x19c) +
        _0x233b1f[_0x399569(0x1b9)] +
        _0x399569(0x16c) +
        _0x233b1f[_0x399569(0x17c)] +
        _0x399569(0x1ba) +
        _0x233b1f[_0x399569(0x17e)] +
        _0x399569(0x187)),
      cardsContainer[_0x399569(0x177)](_0x300a6d);
  });
}
function _0x4be0(_0x8f3f72, _0x4e696d) {
  const _0x14253c = _0x1425();
  return (
    (_0x4be0 = function (_0x4be0e1, _0x129f4e) {
      _0x4be0e1 = _0x4be0e1 - 0x168;
      let _0x5a348c = _0x14253c[_0x4be0e1];
      return _0x5a348c;
    }),
    _0x4be0(_0x8f3f72, _0x4e696d)
  );
}
function renderPagination() {
  const _0x47c299 = _0x13cad4;
  paginationContainer[_0x47c299(0x1a4)] = "";
  const _0x1b914a = Math[_0x47c299(0x1a9)](
      filteredCards[_0x47c299(0x182)] / cardsPerPage
    ),
    _0x43c2b7 = 0x4;
  let _0x55e0c7 = Math[_0x47c299(0x1a7)](
      0x1,
      currentPage - Math[_0x47c299(0x1ac)](_0x43c2b7 / 0x2)
    ),
    _0x1a5849 = Math[_0x47c299(0x173)](_0x1b914a, _0x55e0c7 + _0x43c2b7 - 0x1);
  _0x1a5849 - _0x55e0c7 + 0x1 < _0x43c2b7 &&
    (_0x55e0c7 = Math[_0x47c299(0x1a7)](0x1, _0x1a5849 - _0x43c2b7 + 0x1));
  for (let _0x29949b = _0x55e0c7; _0x29949b <= _0x1a5849; _0x29949b++) {
    const _0x27e40d = document["createElement"](_0x47c299(0x186));
    (_0x27e40d[_0x47c299(0x199)] = _0x29949b),
      _0x27e40d[_0x47c299(0x1b4)]("click", () => {
        const _0x16c3d3 = _0x47c299;
        (currentPage = _0x29949b),
          renderCards(),
          renderPagination(),
          window[_0x16c3d3(0x1aa)](_0x16c3d3(0x1a8))[_0x16c3d3(0x17d)] &&
            window[_0x16c3d3(0x1b5)](0x0, 0x0);
      }),
      _0x29949b === currentPage &&
        _0x27e40d[_0x47c299(0x1bc)]["add"](_0x47c299(0x16e)),
      paginationContainer[_0x47c299(0x177)](_0x27e40d);
  }
  const _0x5e8eb5 = document[_0x47c299(0x1bb)](_0x47c299(0x186));
  (_0x5e8eb5[_0x47c299(0x1a4)] = _0x47c299(0x1b3)),
    (_0x5e8eb5[_0x47c299(0x19f)][_0x47c299(0x190)] = _0x47c299(0x196)),
    _0x5e8eb5[_0x47c299(0x1b4)](_0x47c299(0x18e), () => {
      const _0x3cc58c = _0x47c299;
      currentPage < _0x1b914a &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0x3cc58c(0x1aa)](_0x3cc58c(0x1a8))[_0x3cc58c(0x17d)] &&
          window[_0x3cc58c(0x1b5)](0x0, 0x0));
    });
  const _0x96a902 = document[_0x47c299(0x1bb)](_0x47c299(0x186));
  (_0x96a902[_0x47c299(0x1a4)] = _0x47c299(0x169)),
    (_0x96a902["style"][_0x47c299(0x190)] = _0x47c299(0x196)),
    _0x96a902["addEventListener"]("click", () => {
      const _0x6fd113 = _0x47c299;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window[_0x6fd113(0x1aa)](_0x6fd113(0x1a8))[_0x6fd113(0x17d)] &&
          window[_0x6fd113(0x1b5)](0x0, 0x0));
    }),
    paginationContainer[_0x47c299(0x1a2)](
      _0x96a902,
      paginationContainer[_0x47c299(0x194)]
    ),
    paginationContainer[_0x47c299(0x177)](_0x5e8eb5);
}
searchInput[_0x13cad4(0x1b4)]("input", () => {
  const _0x4665eb = _0x13cad4,
    _0x44422c = searchInput[_0x4665eb(0x17a)]
      [_0x4665eb(0x16b)]()
      [_0x4665eb(0x168)]();
  (filteredCards = currentCards[_0x4665eb(0x1a1)]((_0x5c5190) =>
    _0x5c5190["name"][_0x4665eb(0x168)]()[_0x4665eb(0x192)](_0x44422c)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document[_0x13cad4(0x1ab)](_0x13cad4(0x198)),
  categoryButtons = document[_0x13cad4(0x1ab)](_0x13cad4(0x1b6));
aniosButtons[_0x13cad4(0x17f)]((_0x47e79e) => {
  const _0x5ba06c = _0x13cad4;
  _0x47e79e["addEventListener"](_0x5ba06c(0x18e), () => {
    const _0x4d3a33 = _0x5ba06c,
      _0x47e13f = _0x47e79e["dataset"][_0x4d3a33(0x180)];
    _0x47e13f === "all"
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x4d3a33(0x1a1)]((_0xcf526f) => {
          const _0x41e1ba = _0x4d3a33;
          return _0xcf526f[_0x41e1ba(0x17e)] === _0x47e13f;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x4d3a33(0x17f)]((_0x5cecda) => {
        const _0x417929 = _0x4d3a33;
        _0x5cecda[_0x417929(0x1bc)][_0x417929(0x193)](_0x417929(0x16e));
      }),
      _0x47e79e[_0x4d3a33(0x1bc)][_0x4d3a33(0x178)](_0x4d3a33(0x16e)),
      categoryButtons["forEach"]((_0x5caffc) => {
        const _0x152376 = _0x4d3a33;
        _0x5caffc[_0x152376(0x1bc)][_0x152376(0x193)](_0x152376(0x16e));
      });
  });
}),
  categoryButtons[_0x13cad4(0x17f)]((_0x475174) => {
    const _0x5b1e03 = _0x13cad4;
    _0x475174[_0x5b1e03(0x1b4)](_0x5b1e03(0x18e), () => {
      const _0x49f0bc = _0x5b1e03,
        _0x5d640e = _0x475174[_0x49f0bc(0x1a3)][_0x49f0bc(0x180)];
      _0x5d640e === "all"
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0x49f0bc(0x1a1)]((_0x343d7a) => {
            const _0x105a8c = _0x49f0bc;
            return _0x343d7a["catego"][_0x105a8c(0x192)](_0x5d640e);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0x49f0bc(0x17f)]((_0x4d8d73) => {
          const _0x953a51 = _0x49f0bc;
          _0x4d8d73[_0x953a51(0x1bc)][_0x953a51(0x193)]("active");
        }),
        _0x475174[_0x49f0bc(0x1bc)]["add"](_0x49f0bc(0x16e)),
        aniosButtons[_0x49f0bc(0x17f)]((_0x1cadb2) => {
          const _0x5b310f = _0x49f0bc;
          _0x1cadb2["classList"][_0x5b310f(0x193)]("active");
        });
    });
  });
function showTrailer(_0xb6bef9) {
  const _0x5b300c = _0x13cad4;
  _0xb6bef9[_0x5b300c(0x19a)]();
  var _0x420252 = document[_0x5b300c(0x171)](_0x5b300c(0x1b0)),
    _0x544f13 = document["getElementById"](_0x5b300c(0x197)),
    _0x224c35 = _0xb6bef9[_0x5b300c(0x175)],
    _0x5125af = _0x224c35[_0x5b300c(0x19d)](_0x5b300c(0x179));
  _0x544f13[_0x5b300c(0x16d)](_0x5b300c(0x19e), _0x5125af),
    (_0x420252[_0x5b300c(0x19f)][_0x5b300c(0x1a5)] = _0x5b300c(0x16f));
}
function closeTrailer() {
  const _0x2e3e4b = _0x13cad4;
  var _0x4188bf = document[_0x2e3e4b(0x171)](_0x2e3e4b(0x1b0)),
    _0x39a307 = document[_0x2e3e4b(0x171)](_0x2e3e4b(0x197));
  _0x39a307[_0x2e3e4b(0x16d)](_0x2e3e4b(0x19e), ""),
    (_0x4188bf[_0x2e3e4b(0x19f)][_0x2e3e4b(0x1a5)] = _0x2e3e4b(0x18c));
}
(mybutton = document[_0x13cad4(0x171)](_0x13cad4(0x170))),
  (window["onscroll"] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x47a18d = _0x13cad4;
  document[_0x47a18d(0x1ae)][_0x47a18d(0x16a)] > 0x14 ||
  document[_0x47a18d(0x1ad)][_0x47a18d(0x16a)] > 0x14
    ? (mybutton[_0x47a18d(0x19f)]["display"] = _0x47a18d(0x16f))
    : (mybutton[_0x47a18d(0x19f)][_0x47a18d(0x1a5)] = _0x47a18d(0x18c));
}
function topFunction() {
  const _0x33fcf6 = _0x13cad4;
  (document[_0x33fcf6(0x1ae)]["scrollTop"] = 0x0),
    (document["documentElement"][_0x33fcf6(0x16a)] = 0x0);
}
