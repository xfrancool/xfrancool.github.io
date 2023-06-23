const _0x1b4f57 = _0x5ee3;
function _0x5ee3(_0x2a3184, _0x579729) {
  const _0x46b7cb = _0x46b7();
  return (
    (_0x5ee3 = function (_0x5ee35c, _0x5ab4d9) {
      _0x5ee35c = _0x5ee35c - 0x136;
      let _0x129527 = _0x46b7cb[_0x5ee35c];
      return _0x129527;
    }),
    _0x5ee3(_0x2a3184, _0x579729)
  );
}
(function (_0x323ff1, _0x18c3af) {
  const _0x4f2689 = _0x5ee3,
    _0x4b0c71 = _0x323ff1();
  while (!![]) {
    try {
      const _0x17ccd2 =
        parseInt(_0x4f2689(0x177)) / 0x1 +
        parseInt(_0x4f2689(0x173)) / 0x2 +
        parseInt(_0x4f2689(0x15e)) / 0x3 +
        parseInt(_0x4f2689(0x17a)) / 0x4 +
        (-parseInt(_0x4f2689(0x150)) / 0x5) *
          (-parseInt(_0x4f2689(0x148)) / 0x6) +
        parseInt(_0x4f2689(0x179)) / 0x7 +
        -parseInt(_0x4f2689(0x17c)) / 0x8;
      if (_0x17ccd2 === _0x18c3af) break;
      else _0x4b0c71["push"](_0x4b0c71["shift"]());
    } catch (_0x2b3029) {
      _0x4b0c71["push"](_0x4b0c71["shift"]());
    }
  }
})(_0x46b7, 0x9cff6);
const cardsContainer = document[_0x1b4f57(0x145)](_0x1b4f57(0x16a)),
  paginationContainer = document[_0x1b4f57(0x145)](_0x1b4f57(0x178)),
  searchInput = document[_0x1b4f57(0x145)](_0x1b4f57(0x16c));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(_0x1b4f57(0x166))
  [_0x1b4f57(0x14d)]((_0xfc79f2) => _0xfc79f2[_0x1b4f57(0x15a)]())
  [_0x1b4f57(0x14d)]((_0x215571) => {
    (currentCards = _0x215571),
      (filteredCards = currentCards),
      _0x215571["sort"](
        (_0x160222, _0x598cc1) => _0x598cc1["id"] - _0x160222["id"]
      ),
      _0x215571["reverse"](),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x3db213 = _0x1b4f57;
  cardsContainer[_0x3db213(0x147)] = "";
  const _0x4e131b = (currentPage - 0x1) * cardsPerPage,
    _0x519c42 = _0x4e131b + cardsPerPage,
    _0x24973e = filteredCards["slice"](_0x4e131b, _0x519c42);
  _0x24973e[_0x3db213(0x17b)]((_0x2c1fa4) => {
    const _0x1a9f93 = _0x3db213,
      _0x13fd23 = document[_0x1a9f93(0x162)](_0x1a9f93(0x158));
    _0x13fd23[_0x1a9f93(0x172)][_0x1a9f93(0x169)](_0x1a9f93(0x170)),
      (_0x13fd23[_0x1a9f93(0x147)] =
        _0x1a9f93(0x151) +
        _0x2c1fa4[_0x1a9f93(0x13f)] +
        _0x1a9f93(0x171) +
        _0x2c1fa4["name"] +
        "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22" +
        _0x2c1fa4[_0x1a9f93(0x175)] +
        "\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer[_0x1a9f93(0x15d)](_0x13fd23);
  });
}
function _0x46b7() {
  const _0x2bdc32 = [
    "max",
    "addEventListener",
    "innerText",
    "href",
    "getAttribute",
    "trim",
    "div",
    "&lt;",
    "json",
    "filter",
    "dataset",
    "appendChild",
    "3661626BilCUI",
    "ceil",
    "name",
    "includes",
    "createElement",
    "trailer-video",
    "insertBefore",
    "&gt;",
    "https://api.npoint.io/9e11ea10ce7a4312e013",
    "active",
    "style",
    "add",
    "cards-container",
    "backgroundColor",
    "search-input",
    "anio",
    "category",
    "button",
    "card",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "classList",
    "2276902AcdBeK",
    "none",
    "link",
    "#008cba",
    "963771gtPiPR",
    "pagination-container",
    "8231055cEmROS",
    "885168mxLzsL",
    "forEach",
    "33799656QdqoiO",
    "block",
    "remove",
    "currentTarget",
    "myBtn",
    "input",
    "documentElement",
    "onscroll",
    "setAttribute",
    "firstChild",
    "img",
    "min",
    ".anios-button",
    "trailer-modal",
    "floor",
    "body",
    "getElementById",
    "src",
    "innerHTML",
    "296196bdGABA",
    "scrollTop",
    "value",
    "preventDefault",
    ".category-button",
    "then",
    "click",
    "display",
    "15rhCkGE",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
  ];
  _0x46b7 = function () {
    return _0x2bdc32;
  };
  return _0x46b7();
}
function renderPagination() {
  const _0x405de0 = _0x1b4f57;
  paginationContainer["innerHTML"] = "";
  const _0x2b3117 = Math[_0x405de0(0x15f)](
      filteredCards["length"] / cardsPerPage
    ),
    _0xd6de23 = 0x1;
  let _0x524b40 = Math[_0x405de0(0x152)](
    0x1,
    currentPage - Math[_0x405de0(0x143)](_0xd6de23 / 0x2)
  );
  _0x524b40 = Math[_0x405de0(0x140)](_0x524b40, _0x2b3117 - _0xd6de23 + 0x1);
  let _0x57b5f8 = Math[_0x405de0(0x140)](
    _0x2b3117,
    _0x524b40 + _0xd6de23 - 0x1
  );
  _0x57b5f8 - _0x524b40 + 0x1 < _0xd6de23 &&
    (_0x524b40 = Math["max"](0x1, _0x57b5f8 - _0xd6de23 + 0x1));
  for (let _0x276028 = _0x524b40; _0x276028 <= _0x57b5f8; _0x276028++) {
    const _0x4be180 = document["createElement"]("button");
    (_0x4be180[_0x405de0(0x154)] = _0x276028),
      _0x4be180[_0x405de0(0x153)](_0x405de0(0x14e), () => {
        (currentPage = _0x276028), renderCards(), renderPagination();
      }),
      _0x276028 === currentPage &&
        _0x4be180[_0x405de0(0x172)][_0x405de0(0x169)](_0x405de0(0x167)),
      paginationContainer["appendChild"](_0x4be180);
  }
  const _0x5dce14 = document[_0x405de0(0x162)](_0x405de0(0x16f));
  (_0x5dce14[_0x405de0(0x147)] = _0x405de0(0x165)),
    (_0x5dce14[_0x405de0(0x168)][_0x405de0(0x16b)] = _0x405de0(0x176)),
    _0x5dce14["addEventListener"](_0x405de0(0x14e), () => {
      currentPage < _0x2b3117 &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x59d72d = document[_0x405de0(0x162)](_0x405de0(0x16f));
  (_0x59d72d[_0x405de0(0x147)] = _0x405de0(0x159)),
    (_0x59d72d["style"][_0x405de0(0x16b)] = _0x405de0(0x176)),
    _0x59d72d["addEventListener"](_0x405de0(0x14e), () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x405de0(0x164)](
      _0x59d72d,
      paginationContainer[_0x405de0(0x13e)]
    ),
    paginationContainer["appendChild"](_0x5dce14);
}
searchInput["addEventListener"](_0x1b4f57(0x13a), () => {
  const _0x232f81 = _0x1b4f57,
    _0x4e9539 = searchInput[_0x232f81(0x14a)]
      [_0x232f81(0x157)]()
      ["toLowerCase"]();
  (filteredCards = currentCards[_0x232f81(0x15b)]((_0x18a1e9) =>
    _0x18a1e9[_0x232f81(0x160)]["toLowerCase"]()["includes"](_0x4e9539)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const aniosButtons = document["querySelectorAll"](_0x1b4f57(0x141)),
  categoryButtons = document["querySelectorAll"](_0x1b4f57(0x14c));
aniosButtons[_0x1b4f57(0x17b)]((_0x108352) => {
  _0x108352["addEventListener"]("click", () => {
    const _0x7a50d8 = _0x5ee3,
      _0x4c53ac = _0x108352[_0x7a50d8(0x15c)][_0x7a50d8(0x16e)];
    _0x4c53ac === "all"
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x7a50d8(0x15b)]((_0x14fa11) => {
          const _0x35cbf9 = _0x7a50d8;
          return _0x14fa11[_0x35cbf9(0x16d)] === _0x4c53ac;
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      aniosButtons[_0x7a50d8(0x17b)]((_0x556cc4) => {
        const _0x342ae7 = _0x7a50d8;
        _0x556cc4[_0x342ae7(0x172)]["remove"](_0x342ae7(0x167));
      }),
      _0x108352[_0x7a50d8(0x172)]["add"](_0x7a50d8(0x167)),
      categoryButtons[_0x7a50d8(0x17b)]((_0x1d0477) => {
        const _0x32057e = _0x7a50d8;
        _0x1d0477[_0x32057e(0x172)][_0x32057e(0x137)](_0x32057e(0x167));
      });
  });
}),
  categoryButtons[_0x1b4f57(0x17b)]((_0x44a524) => {
    const _0x3671e1 = _0x1b4f57;
    _0x44a524[_0x3671e1(0x153)](_0x3671e1(0x14e), () => {
      const _0x20d2f0 = _0x3671e1,
        _0x2e7f0d = _0x44a524[_0x20d2f0(0x15c)][_0x20d2f0(0x16e)];
      _0x2e7f0d === "all"
        ? (filteredCards = currentCards)
        : (filteredCards = currentCards[_0x20d2f0(0x15b)]((_0x27bc36) => {
            const _0x1261c4 = _0x20d2f0;
            return _0x27bc36["catego"][_0x1261c4(0x161)](_0x2e7f0d);
          })),
        (currentPage = 0x1),
        renderCards(),
        renderPagination(),
        categoryButtons["forEach"]((_0x5cff77) => {
          const _0x54c86a = _0x20d2f0;
          _0x5cff77[_0x54c86a(0x172)][_0x54c86a(0x137)](_0x54c86a(0x167));
        }),
        _0x44a524[_0x20d2f0(0x172)][_0x20d2f0(0x169)]("active"),
        aniosButtons["forEach"]((_0x173c43) => {
          const _0xbd1d18 = _0x20d2f0;
          _0x173c43[_0xbd1d18(0x172)][_0xbd1d18(0x137)](_0xbd1d18(0x167));
        });
    });
  });
function showTrailer(_0x4d7f68) {
  const _0x449c21 = _0x1b4f57;
  _0x4d7f68[_0x449c21(0x14b)]();
  var _0x35f881 = document["getElementById"](_0x449c21(0x142)),
    _0x1f3947 = document["getElementById"](_0x449c21(0x163)),
    _0x43cf26 = _0x4d7f68[_0x449c21(0x138)],
    _0x8f545a = _0x43cf26[_0x449c21(0x156)](_0x449c21(0x155));
  _0x1f3947[_0x449c21(0x13d)](_0x449c21(0x146), _0x8f545a),
    (_0x35f881[_0x449c21(0x168)][_0x449c21(0x14f)] = _0x449c21(0x136));
}
function closeTrailer() {
  const _0x32d194 = _0x1b4f57;
  var _0x75704 = document["getElementById"]("trailer-modal"),
    _0x9104a = document[_0x32d194(0x145)](_0x32d194(0x163));
  _0x9104a[_0x32d194(0x13d)](_0x32d194(0x146), ""),
    (_0x75704[_0x32d194(0x168)][_0x32d194(0x14f)] = _0x32d194(0x174));
}
(mybutton = document[_0x1b4f57(0x145)](_0x1b4f57(0x139))),
  (window[_0x1b4f57(0x13c)] = function () {
    scrollFunction();
  });
function scrollFunction() {
  const _0xc50b8e = _0x1b4f57;
  document[_0xc50b8e(0x144)][_0xc50b8e(0x149)] > 0x14 ||
  document[_0xc50b8e(0x13b)][_0xc50b8e(0x149)] > 0x14
    ? (mybutton[_0xc50b8e(0x168)][_0xc50b8e(0x14f)] = "block")
    : (mybutton[_0xc50b8e(0x168)]["display"] = _0xc50b8e(0x174));
}
function topFunction() {
  const _0x1d98c8 = _0x1b4f57;
  (document[_0x1d98c8(0x144)][_0x1d98c8(0x149)] = 0x0),
    (document[_0x1d98c8(0x13b)][_0x1d98c8(0x149)] = 0x0);
}
