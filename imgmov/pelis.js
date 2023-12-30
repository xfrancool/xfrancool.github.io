function _0x4c7e() {
  const _0x5f583f = [
    "preventDefault",
    "display",
    "matches",
    "dataset",
    "filter",
    "block",
    "category",
    ".category-button",
    "appendChild",
    "classList",
    "trailer-modal",
    "catego",
    "active",
    "card",
    "forEach",
    "scrollTo",
    "src",
    "then",
    "sort",
    "&lt;",
    "#008cba",
    "70679FVEMsS",
    "myBtn",
    "1011213wchmuX",
    "2138loaXdn",
    "querySelectorAll",
    "insertBefore",
    "body",
    "getElementById",
    "79114dOZOdu",
    "matchMedia",
    "documentElement",
    "length",
    "all",
    "name",
    "cards-container",
    "json",
    "button",
    "href",
    "11422020QjczDC",
    "max",
    "anio",
    "innerText",
    "style",
    "</p>\x0a\x20\x20\x20\x20\x20<p\x20id=\x22anios\x22>",
    "&gt;",
    "img",
    "add",
    "pagination-container",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "40oFeplr",
    "1603684FatiVx",
    "807sgCGUb",
    "132rRGSdj",
    "scrollTop",
    "search-input",
    "createElement",
    "onscroll",
    "none",
    "remove",
    "</p>\x20\x20\x20\x20\x20<br>\x20<a\x20id=\x22link\x22\x20href=\x22",
    "innerHTML",
    "toLowerCase",
    "backgroundColor",
    "input",
    "value",
    "(max-width:\x20767px)",
    "addEventListener",
    ".anios-button",
    "1209525RrebjK",
    "currentTarget",
    "setAttribute",
    "click",
    "\x22\x22\x20onclick=\x22showTrailer(event)\x22\x20data-card-index=\x220\x22><ion-icon\x20name=\x22play-circle-outline\x22\x20id=\x22play\x22>\x20</ion-icon>👀\x20</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20<p\x20id=\x22title-card\x22>",
  ];
  _0x4c7e = function () {
    return _0x5f583f;
  };
  return _0x4c7e();
}
const _0x2abb14 = _0x5b60;
(function (_0x109e7e, _0xdd9171) {
  const _0x15866f = _0x5b60,
    _0x27414c = _0x109e7e();
  while (!![]) {
    try {
      const _0x37c598 =
        -parseInt(_0x15866f(0x16d)) / 0x1 +
        (-parseInt(_0x15866f(0x168)) / 0x2) *
          (-parseInt(_0x15866f(0x13a)) / 0x3) +
        -parseInt(_0x15866f(0x139)) / 0x4 +
        parseInt(_0x15866f(0x14b)) / 0x5 +
        (parseInt(_0x15866f(0x13b)) / 0x6) *
          (-parseInt(_0x15866f(0x165)) / 0x7) +
        (parseInt(_0x15866f(0x138)) / 0x8) *
          (-parseInt(_0x15866f(0x167)) / 0x9) +
        parseInt(_0x15866f(0x177)) / 0xa;
      if (_0x37c598 === _0xdd9171) break;
      else _0x27414c["push"](_0x27414c["shift"]());
    } catch (_0x965786) {
      _0x27414c["push"](_0x27414c["shift"]());
    }
  }
})(_0x4c7e, 0x638a2);
const cardsContainer = document["getElementById"](_0x2abb14(0x173)),
  paginationContainer = document[_0x2abb14(0x16c)](_0x2abb14(0x136)),
  searchInput = document["getElementById"](_0x2abb14(0x13d));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch("https://xfrancool.github.io/imgmov/cuevanafullv2.json")
  [_0x2abb14(0x161)]((_0x3ade26) => _0x3ade26[_0x2abb14(0x174)]())
  [_0x2abb14(0x161)]((_0x399fea) => {
    const _0xd5dc63 = _0x2abb14;
    _0x399fea[_0xd5dc63(0x162)](
      (_0x4bc941, _0x23083e) => _0x23083e["id"] - _0x4bc941["id"]
    ),
      (currentCards = _0x399fea),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x462c74 = _0x2abb14;
  cardsContainer[_0x462c74(0x143)] = "";
  const _0x338836 = (currentPage - 0x1) * cardsPerPage,
    _0x394ea8 = _0x338836 + cardsPerPage,
    _0x103bca = filteredCards["slice"](_0x338836, _0x394ea8);
  _0x103bca["forEach"]((_0x2fdac4) => {
    const _0x36a678 = _0x462c74,
      _0xe4b916 = document["createElement"]("div");
    _0xe4b916[_0x36a678(0x159)][_0x36a678(0x135)](_0x36a678(0x15d)),
      (_0xe4b916["innerHTML"] =
        _0x36a678(0x137) +
        _0x2fdac4[_0x36a678(0x134)] +
        "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p><p\x20id=\x22title-card\x22>" +
        _0x2fdac4[_0x36a678(0x172)] +
        _0x36a678(0x142) +
        _0x2fdac4["link"] +
        _0x36a678(0x14f) +
        _0x2fdac4[_0x36a678(0x15b)] +
        _0x36a678(0x132) +
        _0x2fdac4[_0x36a678(0x179)] +
        "</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer[_0x36a678(0x158)](_0xe4b916);
  });
}
function renderPagination() {
  const _0x2c47af = _0x2abb14;
  paginationContainer[_0x2c47af(0x143)] = "";
  const _0x17cdac = Math["ceil"](
      filteredCards[_0x2c47af(0x170)] / cardsPerPage
    ),
    _0x5c5577 = 0x4;
  let _0x1beba7 = Math[_0x2c47af(0x178)](
      0x1,
      currentPage - Math["floor"](_0x5c5577 / 0x2)
    ),
    _0x2ebd58 = Math["min"](_0x17cdac, _0x1beba7 + _0x5c5577 - 0x1);
  _0x2ebd58 - _0x1beba7 + 0x1 < _0x5c5577 &&
    (_0x1beba7 = Math[_0x2c47af(0x178)](0x1, _0x2ebd58 - _0x5c5577 + 0x1));
  for (let _0x3efd98 = _0x1beba7; _0x3efd98 <= _0x2ebd58; _0x3efd98++) {
    const _0x4aa29c = document[_0x2c47af(0x13e)](_0x2c47af(0x175));
    (_0x4aa29c[_0x2c47af(0x17a)] = _0x3efd98),
      _0x4aa29c[_0x2c47af(0x149)](_0x2c47af(0x14e), () => {
        const _0x6806af = _0x2c47af;
        (currentPage = _0x3efd98),
          renderCards(),
          renderPagination(),
          window[_0x6806af(0x16e)](_0x6806af(0x148))[_0x6806af(0x152)] &&
            window[_0x6806af(0x15f)](0x0, 0x0);
      }),
      _0x3efd98 === currentPage &&
        _0x4aa29c[_0x2c47af(0x159)]["add"](_0x2c47af(0x15c)),
      paginationContainer[_0x2c47af(0x158)](_0x4aa29c);
  }
  const _0x5e7154 = document[_0x2c47af(0x13e)](_0x2c47af(0x175));
  (_0x5e7154[_0x2c47af(0x143)] = _0x2c47af(0x133)),
    (_0x5e7154[_0x2c47af(0x131)][_0x2c47af(0x145)] = _0x2c47af(0x164)),
    _0x5e7154[_0x2c47af(0x149)]("click", () => {
      const _0x14ddcc = _0x2c47af;
      currentPage < _0x17cdac &&
        (currentPage++,
        renderCards(),
        renderPagination(),
        window[_0x14ddcc(0x16e)](_0x14ddcc(0x148))[_0x14ddcc(0x152)] &&
          window[_0x14ddcc(0x15f)](0x0, 0x0));
    });
  const _0x33b20e = document[_0x2c47af(0x13e)](_0x2c47af(0x175));
  (_0x33b20e[_0x2c47af(0x143)] = _0x2c47af(0x163)),
    (_0x33b20e["style"]["backgroundColor"] = _0x2c47af(0x164)),
    _0x33b20e[_0x2c47af(0x149)](_0x2c47af(0x14e), () => {
      const _0x4b4173 = _0x2c47af;
      currentPage > 0x1 &&
        (currentPage--,
        renderCards(),
        renderPagination(),
        window["matchMedia"](_0x4b4173(0x148))[_0x4b4173(0x152)] &&
          window[_0x4b4173(0x15f)](0x0, 0x0));
    }),
    paginationContainer[_0x2c47af(0x16a)](
      _0x33b20e,
      paginationContainer["firstChild"]
    ),
    paginationContainer[_0x2c47af(0x158)](_0x5e7154);
}
searchInput[_0x2abb14(0x149)](_0x2abb14(0x146), () => {
  const _0x5e2048 = _0x2abb14,
    _0x3f5413 = searchInput[_0x5e2048(0x147)]["trim"]()[_0x5e2048(0x144)]();
  (filteredCards = currentCards[_0x5e2048(0x154)]((_0x3149dd) =>
    _0x3149dd[_0x5e2048(0x172)][_0x5e2048(0x144)]()["includes"](_0x3f5413)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document[_0x2abb14(0x169)](_0x2abb14(0x14a)),
  categoryButtons = document[_0x2abb14(0x169)](_0x2abb14(0x157));
aniosButtons[_0x2abb14(0x15e)]((_0x7ecb4) => {
  const _0x1d07b3 = _0x2abb14;
  _0x7ecb4[_0x1d07b3(0x149)](_0x1d07b3(0x14e), () => {
    const _0x2fee50 = _0x1d07b3,
      _0x508802 = _0x7ecb4[_0x2fee50(0x153)][_0x2fee50(0x156)];
    _0x508802 === _0x2fee50(0x171)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x2fee50(0x154)]((_0x159c32) => {
          const _0x51c25e = _0x2fee50;
          return _0x159c32[_0x51c25e(0x179)] === _0x508802;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x2fee50(0x15e)]((_0x33d468) => {
        const _0x2e09f5 = _0x2fee50;
        _0x33d468[_0x2e09f5(0x159)]["remove"](_0x2e09f5(0x15c));
      }),
      _0x7ecb4[_0x2fee50(0x159)][_0x2fee50(0x135)](_0x2fee50(0x15c)),
      categoryButtons[_0x2fee50(0x15e)]((_0x5f09bd) => {
        const _0x53e083 = _0x2fee50;
        _0x5f09bd["classList"][_0x53e083(0x141)](_0x53e083(0x15c));
      });
  });
}),
  categoryButtons[_0x2abb14(0x15e)]((_0x458e6e) => {
    _0x458e6e["addEventListener"]("click", () => {
      const _0x5d2f11 = _0x5b60,
        _0x4bb1d0 = _0x458e6e[_0x5d2f11(0x153)][_0x5d2f11(0x156)];
      _0x4bb1d0 === _0x5d2f11(0x171)
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards["filter"]((_0x58774a) => {
            return _0x58774a["catego"]["includes"](_0x4bb1d0);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons[_0x5d2f11(0x15e)]((_0x2da968) => {
          const _0x5c739f = _0x5d2f11;
          _0x2da968["classList"][_0x5c739f(0x141)](_0x5c739f(0x15c));
        }),
        _0x458e6e[_0x5d2f11(0x159)]["add"]("active"),
        aniosButtons["forEach"]((_0x45f854) => {
          const _0x5e2eee = _0x5d2f11;
          _0x45f854["classList"][_0x5e2eee(0x141)]("active");
        });
    });
  });
function showTrailer(_0x5c2087) {
  const _0x3a3577 = _0x2abb14;
  _0x5c2087[_0x3a3577(0x150)]();
  var _0x291da6 = document[_0x3a3577(0x16c)]("trailer-modal"),
    _0x57580a = document[_0x3a3577(0x16c)]("trailer-video"),
    _0x35f9fe = _0x5c2087[_0x3a3577(0x14c)],
    _0x218364 = _0x35f9fe["getAttribute"](_0x3a3577(0x176));
  _0x57580a[_0x3a3577(0x14d)](_0x3a3577(0x160), _0x218364),
    (_0x291da6["style"][_0x3a3577(0x151)] = "block");
}
function _0x5b60(_0x57e705, _0x49c36d) {
  const _0x4c7e41 = _0x4c7e();
  return (
    (_0x5b60 = function (_0x5b608c, _0x2c76b2) {
      _0x5b608c = _0x5b608c - 0x131;
      let _0x181ec5 = _0x4c7e41[_0x5b608c];
      return _0x181ec5;
    }),
    _0x5b60(_0x57e705, _0x49c36d)
  );
}
function closeTrailer() {
  const _0x484a5c = _0x2abb14;
  var _0x444e97 = document[_0x484a5c(0x16c)](_0x484a5c(0x15a)),
    _0x4b6d87 = document["getElementById"]("trailer-video");
  _0x4b6d87["setAttribute"](_0x484a5c(0x160), ""),
    (_0x444e97[_0x484a5c(0x131)]["display"] = _0x484a5c(0x140));
}
(mybutton = document[_0x2abb14(0x16c)](_0x2abb14(0x166))),
  (window[_0x2abb14(0x13f)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0x1b71b2 = _0x2abb14;
  document[_0x1b71b2(0x16b)]["scrollTop"] > 0x14 ||
  document[_0x1b71b2(0x16f)][_0x1b71b2(0x13c)] > 0x14
    ? (mybutton[_0x1b71b2(0x131)][_0x1b71b2(0x151)] = _0x1b71b2(0x155))
    : (mybutton[_0x1b71b2(0x131)][_0x1b71b2(0x151)] = "none");
}
function topFunction() {
  const _0x282320 = _0x2abb14;
  (document[_0x282320(0x16b)]["scrollTop"] = 0x0),
    (document[_0x282320(0x16f)][_0x282320(0x13c)] = 0x0);
}
