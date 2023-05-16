function _0x1186(_0x3d5895, _0x27d107) {
  const _0x36478c = _0x3647();
  return (
    (_0x1186 = function (_0x11864, _0x4b7378) {
      _0x11864 = _0x11864 - 0xcb;
      let _0x3fbb0f = _0x36478c[_0x11864];
      return _0x3fbb0f;
    }),
    _0x1186(_0x3d5895, _0x27d107)
  );
}
const _0x5c5add = _0x1186;
(function (_0x33eb53, _0x39d30f) {
  const _0x32cc63 = _0x1186,
    _0x7c7022 = _0x33eb53();
  while (!![]) {
    try {
      const _0x5c4838 =
        (parseInt(_0x32cc63(0xdf)) / 0x1) * (-parseInt(_0x32cc63(0xe4)) / 0x2) +
        (-parseInt(_0x32cc63(0xe5)) / 0x3) *
          (-parseInt(_0x32cc63(0x10b)) / 0x4) +
        parseInt(_0x32cc63(0xf3)) / 0x5 +
        (parseInt(_0x32cc63(0xdd)) / 0x6) * (-parseInt(_0x32cc63(0xe9)) / 0x7) +
        (parseInt(_0x32cc63(0xfc)) / 0x8) * (-parseInt(_0x32cc63(0xe1)) / 0x9) +
        parseInt(_0x32cc63(0xd8)) / 0xa +
        -parseInt(_0x32cc63(0xe6)) / 0xb;
      if (_0x5c4838 === _0x39d30f) break;
      else _0x7c7022["push"](_0x7c7022["shift"]());
    } catch (_0x3c491b) {
      _0x7c7022["push"](_0x7c7022["shift"]());
    }
  }
})(_0x3647, 0x63dfb);
const cardsContainer = document["getElementById"]("cards-container"),
  paginationContainer = document[_0x5c5add(0x102)](_0x5c5add(0xcc)),
  searchInput = document[_0x5c5add(0x102)](_0x5c5add(0xd7));
let currentPage = 0x1,
  cardsPerPage = 0xa,
  currentCards = [],
  filteredCards = [];
fetch(_0x5c5add(0xcd))
  [_0x5c5add(0xd2)]((_0x4140de) => _0x4140de["json"]())
  ["then"]((_0x591a9f) => {
    const _0x58be0f = _0x5c5add;
    _0x591a9f[_0x58be0f(0xfa)](
      (_0xd150f, _0x71e300) => _0x71e300["id"] - _0xd150f["id"]
    ),
      (currentCards = _0x591a9f),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x35143d = _0x5c5add;
  cardsContainer[_0x35143d(0xcf)] = "";
  const _0x21b4d6 = (currentPage - 0x1) * cardsPerPage,
    _0x512981 = _0x21b4d6 + cardsPerPage,
    _0x2cf2d5 = filteredCards["slice"](_0x21b4d6, _0x512981);
  _0x2cf2d5[_0x35143d(0x10c)]((_0x424990) => {
    const _0x1ab6e7 = _0x35143d,
      _0x40e553 = document[_0x1ab6e7(0xd3)](_0x1ab6e7(0xf7));
    _0x40e553[_0x1ab6e7(0xd9)][_0x1ab6e7(0xcb)](_0x1ab6e7(0xf9)),
      (_0x40e553[_0x1ab6e7(0xcf)] =
        _0x1ab6e7(0xf0) +
        _0x424990["img"] +
        _0x1ab6e7(0xf6) +
        _0x424990["name"] +
        _0x1ab6e7(0x105) +
        _0x424990["link"] +
        "\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20"),
      cardsContainer["appendChild"](_0x40e553);
  });
}
function _0x3647() {
  const _0x32fb33 = [
    "preventDefault",
    "addEventListener",
    "all",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "trailer-video",
    "display",
    "3870160gizWaD",
    "#008cba",
    "active",
    "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>",
    "div",
    "value",
    "card",
    "sort",
    "backgroundColor",
    "8ktXcKX",
    "querySelectorAll",
    "categoria_2",
    "filter",
    "href",
    "trailer-modal",
    "getElementById",
    "button",
    "dataset",
    "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22",
    "style",
    "insertBefore",
    ".category-button",
    "trim",
    "&gt;",
    "1080904McDhbz",
    "forEach",
    "add",
    "pagination-container",
    "https://api.npoint.io/9e11ea10ce7a4312e013",
    "includes",
    "innerHTML",
    "src",
    "currentTarget",
    "then",
    "createElement",
    "firstChild",
    "categoria_1",
    "none",
    "search-input",
    "4592020eRwrSK",
    "classList",
    "&lt;",
    "categoria",
    "appendChild",
    "234tAraSq",
    "remove",
    "105603AbJvgJ",
    "ceil",
    "3491937GxMXiY",
    "toLowerCase",
    "floor",
    "6AGKFlE",
    "6hqcfHx",
    "2457730otGKSf",
    "click",
    "category",
    "78323sZnCSr",
    "name",
    "setAttribute",
    "max",
  ];
  _0x3647 = function () {
    return _0x32fb33;
  };
  return _0x3647();
}
function renderPagination() {
  const _0x11d176 = _0x5c5add;
  paginationContainer[_0x11d176(0xcf)] = "";
  const _0x52e68e = Math[_0x11d176(0xe0)](
      filteredCards["length"] / cardsPerPage
    ),
    _0x2b405c = 0x4;
  let _0x28c277 = Math[_0x11d176(0xec)](
      0x1,
      currentPage - Math[_0x11d176(0xe3)](_0x2b405c / 0x2)
    ),
    _0x71d583 = Math["min"](_0x52e68e, _0x28c277 + _0x2b405c - 0x1);
  _0x71d583 - _0x28c277 + 0x1 < _0x2b405c &&
    (_0x28c277 = Math[_0x11d176(0xec)](0x1, _0x71d583 - _0x2b405c + 0x1));
  for (let _0x20d5ce = _0x28c277; _0x20d5ce <= _0x71d583; _0x20d5ce++) {
    const _0x4c9705 = document["createElement"]("button");
    (_0x4c9705["innerText"] = _0x20d5ce),
      _0x4c9705[_0x11d176(0xee)](_0x11d176(0xe7), () => {
        (currentPage = _0x20d5ce), renderCards(), renderPagination();
      }),
      _0x20d5ce === currentPage &&
        _0x4c9705["classList"][_0x11d176(0xcb)](_0x11d176(0xf5)),
      paginationContainer["appendChild"](_0x4c9705);
  }
  const _0x18daa2 = document["createElement"](_0x11d176(0x103));
  (_0x18daa2[_0x11d176(0xcf)] = _0x11d176(0x10a)),
    (_0x18daa2["style"]["backgroundColor"] = _0x11d176(0xf4)),
    _0x18daa2[_0x11d176(0xee)](_0x11d176(0xe7), () => {
      currentPage < _0x52e68e &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x146d27 = document[_0x11d176(0xd3)](_0x11d176(0x103));
  (_0x146d27["innerHTML"] = _0x11d176(0xda)),
    (_0x146d27[_0x11d176(0x106)][_0x11d176(0xfb)] = _0x11d176(0xf4)),
    _0x146d27[_0x11d176(0xee)](_0x11d176(0xe7), () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x11d176(0x107)](
      _0x146d27,
      paginationContainer[_0x11d176(0xd4)]
    ),
    paginationContainer[_0x11d176(0xdc)](_0x18daa2);
}
searchInput[_0x5c5add(0xee)]("input", () => {
  const _0x4ba245 = _0x5c5add,
    _0x307b25 = searchInput[_0x4ba245(0xf8)]
      [_0x4ba245(0x109)]()
      [_0x4ba245(0xe2)]();
  (filteredCards = currentCards[_0x4ba245(0xff)]((_0x4f6ca8) =>
    _0x4f6ca8[_0x4ba245(0xea)]["toLowerCase"]()[_0x4ba245(0xce)](_0x307b25)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document[_0x5c5add(0xfd)](_0x5c5add(0x108));
categoryButtons["forEach"]((_0x345c5d) => {
  const _0x130745 = _0x5c5add;
  _0x345c5d[_0x130745(0xee)](_0x130745(0xe7), () => {
    const _0x5e2b06 = _0x130745,
      _0x593964 = _0x345c5d[_0x5e2b06(0x104)][_0x5e2b06(0xe8)];
    _0x593964 === _0x5e2b06(0xef)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards[_0x5e2b06(0xff)]((_0x25a298) => {
          const _0x3e81a8 = _0x5e2b06;
          return (
            _0x25a298[_0x3e81a8(0xdb)] === _0x593964 ||
            _0x25a298[_0x3e81a8(0xd5)] === _0x593964 ||
            _0x25a298[_0x3e81a8(0xfe)] === _0x593964
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0x5e2b06(0x10c)]((_0xb262e3) => {
        const _0x40db82 = _0x5e2b06;
        _0xb262e3[_0x40db82(0xd9)][_0x40db82(0xde)](_0x40db82(0xf5));
      }),
      _0x345c5d["classList"]["add"](_0x5e2b06(0xf5));
  });
});
function showTrailer(_0x40eb66) {
  const _0x1c0972 = _0x5c5add;
  _0x40eb66[_0x1c0972(0xed)]();
  var _0x3c8ce0 = document[_0x1c0972(0x102)]("trailer-modal"),
    _0x25acbb = document[_0x1c0972(0x102)](_0x1c0972(0xf1)),
    _0x220459 = _0x40eb66[_0x1c0972(0xd1)],
    _0xfcdc83 = _0x220459["getAttribute"](_0x1c0972(0x100));
  _0x25acbb[_0x1c0972(0xeb)](_0x1c0972(0xd0), _0xfcdc83),
    (_0x3c8ce0[_0x1c0972(0x106)][_0x1c0972(0xf2)] = "block");
}
function closeTrailer() {
  const _0x176313 = _0x5c5add;
  var _0x1d8a53 = document["getElementById"](_0x176313(0x101)),
    _0x1946fe = document[_0x176313(0x102)](_0x176313(0xf1));
  _0x1946fe[_0x176313(0xeb)](_0x176313(0xd0), ""),
    (_0x1d8a53[_0x176313(0x106)][_0x176313(0xf2)] = _0x176313(0xd6));
}
