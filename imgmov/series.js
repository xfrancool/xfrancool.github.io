const _0x5ed3f9 = _0x3d0d;
(function (_0x997ad, _0x20a0cb) {
  const _0xa4e361 = _0x3d0d,
    _0x1312c2 = _0x997ad();
  while (!![]) {
    try {
      const _0x5f21e2 =
        -parseInt(_0xa4e361(0x203)) / 0x1 +
        -parseInt(_0xa4e361(0x1e4)) / 0x2 +
        parseInt(_0xa4e361(0x201)) / 0x3 +
        (-parseInt(_0xa4e361(0x1f5)) / 0x4) *
          (-parseInt(_0xa4e361(0x1fc)) / 0x5) +
        parseInt(_0xa4e361(0x1ea)) / 0x6 +
        -parseInt(_0xa4e361(0x1df)) / 0x7 +
        -parseInt(_0xa4e361(0x1e6)) / 0x8;
      if (_0x5f21e2 === _0x20a0cb) break;
      else _0x1312c2["push"](_0x1312c2["shift"]());
    } catch (_0x339318) {
      _0x1312c2["push"](_0x1312c2["shift"]());
    }
  }
})(_0x5a24, 0x69d60);
function _0x3d0d(_0x2766c1, _0xa40d09) {
  const _0x5a24b2 = _0x5a24();
  return (
    (_0x3d0d = function (_0x3d0d99, _0x37fe58) {
      _0x3d0d99 = _0x3d0d99 - 0x1c9;
      let _0x301bb9 = _0x5a24b2[_0x3d0d99];
      return _0x301bb9;
    }),
    _0x3d0d(_0x2766c1, _0xa40d09)
  );
}
const cardsContainer = document[_0x5ed3f9(0x205)]("cards-container"),
  paginationContainer = document[_0x5ed3f9(0x205)]("pagination-container"),
  searchInput = document[_0x5ed3f9(0x205)](_0x5ed3f9(0x1d5));
let currentPage = 0x1,
  cardsPerPage = 0xc,
  currentCards = [],
  filteredCards = [];
fetch(_0x5ed3f9(0x1c9))
  [_0x5ed3f9(0x200)]((_0x13f31c) => _0x13f31c["json"]())
  [_0x5ed3f9(0x200)]((_0x15a5c4) => {
    const _0x56dff0 = _0x5ed3f9;
    _0x15a5c4[_0x56dff0(0x1f0)](
      (_0x1d5399, _0x1abf88) => _0x1abf88["id"] - _0x1d5399["id"]
    ),
      (currentCards = _0x15a5c4),
      (filteredCards = currentCards),
      renderCards(),
      renderPagination();
  });
function renderCards() {
  const _0x4327ff = _0x5ed3f9;
  cardsContainer["innerHTML"] = "";
  const _0x4cdfd9 = (currentPage - 0x1) * cardsPerPage,
    _0x5524cc = _0x4cdfd9 + cardsPerPage,
    _0x2e3175 = filteredCards[_0x4327ff(0x1cf)](_0x4cdfd9, _0x5524cc);
  _0x2e3175["forEach"]((_0x45d8af) => {
    const _0x562630 = _0x4327ff,
      _0x575933 = document[_0x562630(0x1ff)]("div");
    _0x575933[_0x562630(0x1cc)][_0x562630(0x1de)]("card"),
      (_0x575933[_0x562630(0x1dd)] =
        _0x562630(0x1d1) +
        _0x45d8af[_0x562630(0x1dc)] +
        "\x22\x20alt=\x22\x22>\x0a\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-header\x22>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20<p>" +
        _0x45d8af["name"] +
        _0x562630(0x1ce) +
        _0x45d8af[_0x562630(0x1fb)] +
        _0x562630(0x1f1)),
      cardsContainer[_0x562630(0x1d2)](_0x575933);
  });
}
function renderPagination() {
  const _0x25b8d6 = _0x5ed3f9;
  paginationContainer[_0x25b8d6(0x1dd)] = "";
  const _0x515b82 = Math[_0x25b8d6(0x1d4)](
      filteredCards[_0x25b8d6(0x1ef)] / cardsPerPage
    ),
    _0x4935bc = 0x4;
  let _0x301c0b = Math[_0x25b8d6(0x1f7)](
      0x1,
      currentPage - Math[_0x25b8d6(0x204)](_0x4935bc / 0x2)
    ),
    _0x466a17 = Math["min"](_0x515b82, _0x301c0b + _0x4935bc - 0x1);
  _0x466a17 - _0x301c0b + 0x1 < _0x4935bc &&
    (_0x301c0b = Math[_0x25b8d6(0x1f7)](0x1, _0x466a17 - _0x4935bc + 0x1));
  for (let _0x9c46c0 = _0x301c0b; _0x9c46c0 <= _0x466a17; _0x9c46c0++) {
    const _0x394ada = document["createElement"]("button");
    (_0x394ada["innerText"] = _0x9c46c0),
      _0x394ada["addEventListener"](_0x25b8d6(0x1db), () => {
        (currentPage = _0x9c46c0), renderCards(), renderPagination();
      }),
      _0x9c46c0 === currentPage &&
        _0x394ada[_0x25b8d6(0x1cc)][_0x25b8d6(0x1de)](_0x25b8d6(0x1ee)),
      paginationContainer[_0x25b8d6(0x1d2)](_0x394ada);
  }
  const _0x3aba68 = document[_0x25b8d6(0x1ff)](_0x25b8d6(0x202));
  (_0x3aba68[_0x25b8d6(0x1dd)] = _0x25b8d6(0x1da)),
    (_0x3aba68[_0x25b8d6(0x1e0)][_0x25b8d6(0x1d9)] = "#008cba"),
    _0x3aba68["addEventListener"](_0x25b8d6(0x1db), () => {
      currentPage < _0x515b82 &&
        (currentPage++, renderCards(), renderPagination());
    });
  const _0x512971 = document[_0x25b8d6(0x1ff)](_0x25b8d6(0x202));
  (_0x512971[_0x25b8d6(0x1dd)] = _0x25b8d6(0x1f3)),
    (_0x512971[_0x25b8d6(0x1e0)][_0x25b8d6(0x1d9)] = _0x25b8d6(0x1d0)),
    _0x512971["addEventListener"]("click", () => {
      currentPage > 0x1 && (currentPage--, renderCards(), renderPagination());
    }),
    paginationContainer[_0x25b8d6(0x1e2)](
      _0x512971,
      paginationContainer[_0x25b8d6(0x1e9)]
    ),
    paginationContainer[_0x25b8d6(0x1d2)](_0x3aba68);
}
searchInput[_0x5ed3f9(0x1e8)](_0x5ed3f9(0x1fd), () => {
  const _0x10df00 = _0x5ed3f9,
    _0x270e22 = searchInput[_0x10df00(0x1e3)]
      [_0x10df00(0x1f4)]()
      [_0x10df00(0x1cd)]();
  (filteredCards = currentCards[_0x10df00(0x1ec)]((_0x5dcd91) =>
    _0x5dcd91[_0x10df00(0x1ca)]["toLowerCase"]()["includes"](_0x270e22)
  )),
    (currentPage = 0x1),
    renderCards(),
    renderPagination();
});
const categoryButtons = document[_0x5ed3f9(0x1fa)](".category-button");
categoryButtons[_0x5ed3f9(0x1d3)]((_0x4e6a37) => {
  const _0x44162e = _0x5ed3f9;
  _0x4e6a37[_0x44162e(0x1e8)](_0x44162e(0x1db), () => {
    const _0x334774 = _0x44162e,
      _0x3efad2 = _0x4e6a37["dataset"][_0x334774(0x1e5)];
    _0x3efad2 === _0x334774(0x1f2)
      ? (filteredCards = currentCards)
      : (filteredCards = currentCards["filter"]((_0x5a322e) => {
          const _0x35a4b6 = _0x334774;
          return (
            _0x5a322e[_0x35a4b6(0x1f8)] === _0x3efad2 ||
            _0x5a322e[_0x35a4b6(0x1d8)] === _0x3efad2 ||
            _0x5a322e[_0x35a4b6(0x1f6)] === _0x3efad2
          );
        })),
      (currentPage = 0x1),
      renderCards(),
      renderPagination(),
      categoryButtons[_0x334774(0x1d3)]((_0x2e08e6) => {
        const _0x491f6d = _0x334774;
        _0x2e08e6[_0x491f6d(0x1cc)][_0x491f6d(0x1fe)](_0x491f6d(0x1ee));
      }),
      _0x4e6a37[_0x334774(0x1cc)][_0x334774(0x1de)](_0x334774(0x1ee));
  });
});
function showTrailer(_0x2b4df6) {
  const _0x4a65c4 = _0x5ed3f9;
  _0x2b4df6["preventDefault"]();
  var _0x19b21c = document[_0x4a65c4(0x205)](_0x4a65c4(0x1eb)),
    _0xac87f9 = document[_0x4a65c4(0x205)]("trailer-video"),
    _0x52c2a6 = _0x2b4df6["currentTarget"],
    _0x40763a = _0x52c2a6[_0x4a65c4(0x1d6)](_0x4a65c4(0x1e7));
  _0xac87f9[_0x4a65c4(0x1d7)](_0x4a65c4(0x1f9), _0x40763a),
    (_0x19b21c[_0x4a65c4(0x1e0)]["display"] = _0x4a65c4(0x1cb));
}
function closeTrailer() {
  const _0x9a575e = _0x5ed3f9;
  var _0x2ab7d2 = document[_0x9a575e(0x205)](_0x9a575e(0x1eb)),
    _0x488ff2 = document[_0x9a575e(0x205)](_0x9a575e(0x1ed));
  _0x488ff2[_0x9a575e(0x1d7)](_0x9a575e(0x1f9), ""),
    (_0x2ab7d2[_0x9a575e(0x1e0)]["display"] = _0x9a575e(0x1e1));
}
function _0x5a24() {
  const _0x434e11 = [
    "button",
    "128416lfFkyj",
    "floor",
    "getElementById",
    "https://api.npoint.io/9e11ea10ce7a4312e013",
    "name",
    "block",
    "classList",
    "toLowerCase",
    "\x20<br><br>\x20\x20\x20\x20<a\x20id=\x22link\x22\x20href=\x22",
    "slice",
    "#008cba",
    "\x0a\x20\x20\x20\x20\x20<div\x20class=\x22cover\x22>\x0a\x0a\x20\x20\x20\x20\x20<img\x20id=\x22img\x22\x20src=\x22",
    "appendChild",
    "forEach",
    "ceil",
    "search-input",
    "getAttribute",
    "setAttribute",
    "categoria_1",
    "backgroundColor",
    "&gt;",
    "click",
    "img",
    "innerHTML",
    "add",
    "1334991gOOqYJ",
    "style",
    "none",
    "insertBefore",
    "value",
    "272648MhaNxA",
    "category",
    "8872944vmJGgp",
    "href",
    "addEventListener",
    "firstChild",
    "4117890OIUetb",
    "trailer-modal",
    "filter",
    "trailer-video",
    "active",
    "length",
    "sort",
    "\x22>Ver\x20👀</a>\x20</p>\x0a\x0a\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "all",
    "&lt;",
    "trim",
    "4OtUpoN",
    "categoria_2",
    "max",
    "categoria",
    "src",
    "querySelectorAll",
    "link",
    "2687725yfQJNY",
    "input",
    "remove",
    "createElement",
    "then",
    "2322645eogohe",
  ];
  _0x5a24 = function () {
    return _0x434e11;
  };
  return _0x5a24();
}
