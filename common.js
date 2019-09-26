(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(110))(0);

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGE_PAGE = exports.MOUSE_LEAVE = exports.MOUSE_ENTER = exports.CHANGE_LIST = exports.SEARCH_BLUR = exports.SEARCH_FOCUS = void 0;
var SEARCH_FOCUS = 'header/SEARCH_FOCUS';
exports.SEARCH_FOCUS = SEARCH_FOCUS;
var SEARCH_BLUR = 'header/SEARCH_BLUR';
exports.SEARCH_BLUR = SEARCH_BLUR;
var CHANGE_LIST = 'header/CHANGE_LIST';
exports.CHANGE_LIST = CHANGE_LIST;
var MOUSE_ENTER = 'header/MOUSE_ENTER';
exports.MOUSE_ENTER = MOUSE_ENTER;
var MOUSE_LEAVE = 'header/MOUSE_LEAVE';
exports.MOUSE_LEAVE = MOUSE_LEAVE;
var CHANGE_PAGE = 'header/CHANGE_PAGE';
exports.CHANGE_PAGE = CHANGE_PAGE;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
exports.Type = exports.actionCreate = void 0;

var _reducer = _interopRequireDefault(__webpack_require__(390));

var actionCreate = _interopRequireWildcard(__webpack_require__(391));

exports.actionCreate = actionCreate;

var Type = _interopRequireWildcard(__webpack_require__(114));

exports.Type = Type;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGOUT = exports.CHANGE_LOGIN = void 0;
var CHANGE_LOGIN = 'detail/CHANGE_LOGIN';
exports.CHANGE_LOGIN = CHANGE_LOGIN;
var LOGOUT = 'detail/LOGOUT';
exports.LOGOUT = LOGOUT;

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
exports.Type = exports.actionCreate = void 0;

var _reducer = _interopRequireDefault(__webpack_require__(398));

var actionCreate = _interopRequireWildcard(__webpack_require__(399));

exports.actionCreate = actionCreate;

var Type = _interopRequireWildcard(__webpack_require__(116));

exports.Type = Type;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANGE_SCROLL_TOP = exports.ADD_ARTICLE_LIST = exports.GET_HOME_DATA = void 0;
var GET_HOME_DATA = 'home/get_home_data';
exports.GET_HOME_DATA = GET_HOME_DATA;
var ADD_ARTICLE_LIST = 'home/add_article_list';
exports.ADD_ARTICLE_LIST = ADD_ARTICLE_LIST;
var CHANGE_SCROLL_TOP = 'home/CHANGE_SCROLL_TOP';
exports.CHANGE_SCROLL_TOP = CHANGE_SCROLL_TOP;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_DETAIL_CONTENT = void 0;
var ADD_DETAIL_CONTENT = 'detail/add_detail_content';
exports.ADD_DETAIL_CONTENT = ADD_DETAIL_CONTENT;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyled = void 0;

__webpack_require__(48);

var _styledComponents = __webpack_require__(59);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tbody {\n\t  margin: 0;\n\t  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t    sans-serif;\n\t  -webkit-font-smoothing: antialiased;\n\t  -moz-osx-font-smoothing: grayscale;\n\t}\n\n\tcode {\n\t  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t    monospace;\n\t}\t\n\thtml, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed, \n\tfigure, figcaption, footer, header, hgroup, \n\tmenu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tfont-size: 100%;\n\t\tfont: inherit;\n\t\tvertical-align: baseline;\n\t}\n\t/* HTML5 display-role reset for older browsers */\n\tarticle, aside, details, figcaption, figure, \n\tfooter, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t}\n\tol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n\t.clearfix:after{content: \"\";display: block;clear: both;}\n\t.clearfix{zoom:1;}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyled = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyled = GlobalStyled;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Iconfont = void 0;

__webpack_require__(48);

var _styledComponents = __webpack_require__(59);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n@font-face {font-family: \"iconfont\";\n  src: url('./iconfont.eot?t=1558689091291'); /* IE9 */\n  src: url('./iconfont.eot?t=1558689091291#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASoAAsAAAAACOQAAARbAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqFBIQ0ATYCJAMUCwwABCAFhG0HUBvAB8g+QRxjQw5alDq01iSJmd07DG22vDrB12ID/guSUXNVD+2lJodEiggVKiB+EhLIXr1ixzHmIf87V2WBOrOAirIIdFxIOplC+tK/5A6FIXD3PDsgVIwaGyBABjIPxL17f7c2FnEbLOy8yyfQWEZdGNHiOMc45ptsok2vBWZ7vvv5q9a0P8qijucV1kJJG6fNDmygxRdAS4+SuQYIMDPfAwQU/zsA54d5X2Cj//ufw6XN54HN37Zc5hhe1AswmkABjTFx+wV6J4z3AM9wYQJPAwFIrooEjHqGplA4TphEAGTJdBmFu/R4DI5QVIaQlTFyg6CEe/pAwbr+9+RHrXCgRESYWbRuDbXdoQGzutWpCAjKswK4rQMYIBgCB7IItbcJMuPBgshPdrB4CIpopVBWPKWBnzFJYV94sXJJ//AohgNJCXJjVKazjI+ZQGYBAS3JAgpaigUMNCBcKXJB4yXAFPCOQuqA9f4gxVGGWjM8vF1MKsU1vN58frVr366/Z8+2t3vHurNz12ayZ99u7NYNdvq/yc4kzbxTkuGZX7XbVTloP5BPqsuADApPZem9ucr+JrmU3D3xCLNRl98hu5mzn33CFRCWIVR+/rzyXctP50YIqXxx31aMm2MSN1K+Effs4nuwU9nkSNmnD2XeJXl37WOmJV5VPe63QrM0jIR9O3XXrndp5PK4pOSTpUfdW+OWs/mMvVdoNiGvwqkt394Kz8bnt1tS5i7zxt3/czt4Tcdm6991+WD8lSfQuUXrfiD7/tz4X3yyKY5OB3YorOUp96dluJwOCwjpl/D8GRa51jPY1vB21oebdpvfer+8UP07r/tACDqC9j38UJGwq4Ed2p5MKHgf3uuJSzflD6Azh65nWBLINjYTxFyNg18Enca///yZsck0yFMMLy+er7GMhdIvtt1rfHt3vjUmZsvjdpFGzpMPbJ0i497Tt6/VeTNx7j34scWGvORim/Y1t/Lk+GTILXuZyM08ddUzY3S3K7UztfJ611TZq0ytSqtCy4S96IsNgvSNBaDrhrm+k9FY+5NkFHYA9cbopr+kLqGGr4ZPNd2nG/IL9rQgteCUEKSs4l+RYBDxu1zmvwNCgZ0+jQIkCdDBbel5OUqb1MUAobCxgTLiAozCG8mxwSCoosFAkQZSkN71KitCEBLnAYG2ARDmDgNl6hUw5m4jOfYZCLa+gYF5QSBVFL+jyjcmdQoiA9GwsoKZym0qmUAySieIvmDKwinS8TNEuCyEy0vKvKleYhNRxhx3Ua8AoJgKbuEeOI+YJseO4H6iQokPwGkoLaVhLypRuYUkWQRCBggNpliBMSrORtX6QPL9/gRCt8AkEzEVP+wzCMHFusfKlShLgeyV26kqtqW/a5GuAgCUx1ECZ8F60EqYYpzDnPBhfoQKlPDliDoalFItmlZeUr/SWsYdAJJwDxGEQRTEQRKk5IowhckcWHlguyxR2dY12c/UAWGub0FeZjZCAA==') format('woff2'),\n  url('./iconfont.woff?t=1558689091291') format('woff'),\n  url('./iconfont.ttf?t=1558689091291') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('./iconfont.svg?t=1558689091291#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Iconfont = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.Iconfont = Iconfont;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(110))(8);

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
exports.Type = exports.actionCreate = void 0;

var _reducer = _interopRequireDefault(__webpack_require__(371));

var actionCreate = _interopRequireWildcard(__webpack_require__(372));

exports.actionCreate = actionCreate;

var Type = _interopRequireWildcard(__webpack_require__(111));

exports.Type = Type;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _reducer.default;
  }
});
exports.Type = exports.actionCreate = void 0;

var _reducer = _interopRequireDefault(__webpack_require__(402));

var actionCreate = _interopRequireWildcard(__webpack_require__(403));

exports.actionCreate = actionCreate;

var Type = _interopRequireWildcard(__webpack_require__(117));

exports.Type = Type;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(51));

__webpack_require__(159);

__webpack_require__(161);

var _App = _interopRequireDefault(__webpack_require__(364));

var _reactRedux = __webpack_require__(35);

var _store = _interopRequireDefault(__webpack_require__(407));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import 'core-js/stable/map';
// import 'core-js/stable/set';
// import 'react-app-polyfill/ie9';
var APPS = _react.default.createElement(_reactRedux.Provider, {
  store: _store.default
}, _react.default.createElement(_App.default, null));

_reactDom.default.render(APPS, document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _style = __webpack_require__(159);

var _iconfont = __webpack_require__(161);

var _header = _interopRequireDefault(__webpack_require__(365));

var _reactRouterDom = __webpack_require__(60);

var _home = _interopRequireDefault(__webpack_require__(393));

var _detail = _interopRequireDefault(__webpack_require__(400));

var _login = _interopRequireDefault(__webpack_require__(404));

var _write = _interopRequireDefault(__webpack_require__(406));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", null, _react.default.createElement(_iconfont.Iconfont, null), _react.default.createElement(_style.GlobalStyled, null), _react.default.createElement(_header.default, null), _react.default.createElement(_reactRouterDom.Route, {
    path: "/jianshu/",
    exact: true,
    component: _home.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/detail/:id",
    exact: true,
    component: _detail.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/login",
    exact: true,
    component: _login.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/write",
    exact: true,
    component: _write.default
  })));
}

var _default = App;
exports.default = _default;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(147);

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(366);

var _reactTransitionGroup = __webpack_require__(415);

var _reactRedux = __webpack_require__(35);

var _store = __webpack_require__(163);

var _store2 = __webpack_require__(113);

var _reactRouterDom = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "getListArea",
    value: function getListArea() {
      var _this = this;

      var _this$props = this.props,
          focused = _this$props.focused,
          list = _this$props.list,
          page = _this$props.page,
          mouseIn = _this$props.mouseIn,
          totalPage = _this$props.totalPage,
          handleMouseEnter = _this$props.handleMouseEnter,
          handleMouseLeave = _this$props.handleMouseLeave,
          handleChangePage = _this$props.handleChangePage;
      var newList = list.toJS();
      var pageList = [];

      if (newList.length) {
        for (var i = page * 10; i < (page + 1) * 10; i++) {
          pageList.push(_react.default.createElement(_style.SearchInfoItem, {
            key: newList[i]
          }, newList[i]));
        }
      }

      if (focused || mouseIn) {
        return _react.default.createElement(_style.SearchInfo, {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave
        }, _react.default.createElement(_style.SearchInfoTitle, null, "\u70ED\u95E8\u641C\u7D22", _react.default.createElement(_style.SearchInfoSwitch, {
          onClick: function onClick() {
            handleChangePage(page, totalPage, _this.spinIcon);
          }
        }, "\u6362\u4E00\u6362"), _react.default.createElement("i", {
          ref: function ref(icon) {
            _this.spinIcon = icon;
          },
          className: "iconfont refresh"
        }, "\uE6A7")), _react.default.createElement(_style.SearchInfoList, null, pageList));
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          focused = _this$props2.focused,
          login = _this$props2.login,
          handleInputFocus = _this$props2.handleInputFocus,
          handleInputBlur = _this$props2.handleInputBlur,
          logout = _this$props2.logout;
      return _react.default.createElement(_style.HeaderWrapper, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/"
      }, _react.default.createElement(_style.Logo, null)), _react.default.createElement(_style.Nav, null, _react.default.createElement(_style.NavItem, {
        className: "left active"
      }, "\u9996\u9875"), _react.default.createElement(_style.NavItem, {
        className: "left"
      }, "\u4E0B\u8F7DAPP"), login ? _react.default.createElement(_style.NavItem, {
        onClick: logout,
        className: "right"
      }, "\u9000\u51FA") : _react.default.createElement(_reactRouterDom.Link, {
        to: "/login"
      }, _react.default.createElement(_style.NavItem, {
        className: "right"
      }, "\u767B\u5F55")), _react.default.createElement(_style.NavItem, {
        className: "right"
      }, _react.default.createElement("i", {
        className: "iconfont"
      }, "\uE636")), _react.default.createElement(_style.SearchWrapper, null, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        in: focused,
        timeout: 300,
        classNames: "slide"
      }, _react.default.createElement(_style.NavSearch, {
        className: focused ? 'focused' : "",
        onFocus: handleInputFocus,
        onBlur: handleInputBlur
      })), _react.default.createElement("i", {
        className: focused ? 'focused iconfont zoom' : 'iconfont zoom'
      }, "\uE637"), this.getListArea())), _react.default.createElement(_style.Addition, null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/write"
      }, _react.default.createElement(_style.Button, {
        className: "writting"
      }, _react.default.createElement("i", {
        className: "iconfont"
      }, "\uE61B"), "\u5199\u6587\u7AE0")), _react.default.createElement(_style.Button, {
        className: "reg"
      }, "\u6CE8\u518C")));
    }
  }]);

  return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // focused: state.header.focused
    // focused: state.header.get('focused'),
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleInputFocus: function handleInputFocus() {
      dispatch(_store.actionCreate.getList());
      dispatch(_store.actionCreate.searchFoucs());
    },
    handleInputBlur: function handleInputBlur() {
      dispatch(_store.actionCreate.searchBlur());
    },
    handleMouseEnter: function handleMouseEnter() {
      dispatch(_store.actionCreate.mouseEnter());
    },
    handleMouseLeave: function handleMouseLeave() {
      dispatch(_store.actionCreate.mouseLeave());
    },
    handleChangePage: function handleChangePage(page, totalPage, spin) {
      var originAngle = spin.style.transform.replace(/[^0-9]/ig, '');

      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }

      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        dispatch(_store.actionCreate.changePage(page + 1));
      } else {
        dispatch(_store.actionCreate.changePage(0));
      }
    },
    logout: function logout() {
      dispatch(_store2.actionCreate.logout());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports.default = _default;

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Addition = exports.SearchInfoItem = exports.SearchInfoList = exports.SearchInfoSwitch = exports.SearchInfoTitle = exports.SearchInfo = exports.SearchWrapper = exports.NavSearch = exports.NavItem = exports.Nav = exports.Logo = exports.HeaderWrapper = void 0;

__webpack_require__(48);

var _styledComponents = _interopRequireDefault(__webpack_require__(59));

var _logo = _interopRequireDefault(__webpack_require__(367));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\t&.reg {\n\t\tcolor: #ec6149\n\t}\n\t&.writting {\n\t\tcolor: #fff;\n\t\tbackground-color: #ec6149\n\t}\n\tfloat: right;\n\tmargin-top: 9px;\n\tmargin-right: 15px;\n\tpadding: 0 20px;\n\tline-height: 38px;\n\tborder-radius: 19px;\n\tborder: 1px solid #ec6149;\n\tfont-size: 14px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\theight: 56px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tfloat: left;\n\tmargin-right: 10px;\n\tmargin-bottom: 10px;\n\tline-height: 20px;\n\tpadding: 0 5px;\n\tfont-size: 12px;\n\tborder: 1px solid #999;\n\tborder-radius: 2px;\n\tcursor: pointer;\n\tcolor: #787878;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfloat: right;\n\tfont-size: 12px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin-top: 20px;\n\tmargin-bottom: 15px;\n\tline-height: 20px;\n\tfont-size: 12px;\n\tcolor: #969696;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tleft: 0;\n\ttop: 56px;\n\twidth: 240px;\n\tpadding: 0 20px;\n\tbox-shadow: 0 0 8px rgba(0,0,0,.2);\n\tbackground-color: #fff;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tfloat: left;\n\t.zoom {\n\t\tposition: absolute;\n\t\tright: 5px;\n\t\tbottom: 5px;\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tline-height: 30px;\n\t\ttext-align: center;\n\t\tborder-radius: 15px;\n\t\t&.focused  {\n\t\t\tbackground-color: #aaa\n\t\t}\n\t}\n\t.refresh {\n\t\tfloat: right;\n\t\tfont-size12px;\n\t\tmargin-right: 5px;\n\t\ttransition: all 0.2s ease-out;\n\t\ttransform-origin: center center;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\twidth: 160px;\n\theight: 38px;\n\tpadding: 0 35px 0 20px;\n\tmargin-top: 9px;\n\tmargin-left: 20px;\n\tbox-sizing: border-box;\n\toutline: none;\n\tborder: none;\n\tborder-radius: 19px;\n\tbackground-color: #eee;\n\tfont-size14px;\n\tcolor: #666;\n\t&::placeholder {\n\t\tcolor: #999;\n\t}\n\t&.focused {\n\t\twidth: 240px;\n\t}\n\t&.slide-enter {\n\t\twidth: 160px;\n\t\ttransition: all .2s ease-out;\n\t}\n\t&.slide-enter-active {\n\t\twidth: 240px;\n\t}\n\t&.slide-exit {\n\t\twidth: 240px;\n\t\ttransition: all .2s ease-out;\n\t}\n\t&.slide-exit-active {\n\t\twidth: 160px;\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tline-height: 56px;\n\tpadding: 0 15px;\n\tfont-size: 17px;\n\tcolor: #333;\n\t&.left {\n\t\tfloat:left;\n\t}\n\t&.right {\n\t\tfloat:right;\n\t\tcolor: #969696;\n\t}\n\t&.active {\n\t\tcolor: #ea6f5a;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\twidth: 960px;\n\theight: 100%;\n\tpadding-right: 70px;\n\tbox-sizing: border-box;\n\tmargin: 0 auto 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100px;\n\theight: 56px;\n\tbackground: url(", ");\n\tbackground-size: contain;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\theight: 58px;\n\tborder-bottom: 1px solid #f0f0f0;\n\tz-index: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents.default.div(_templateObject());

exports.HeaderWrapper = HeaderWrapper;

var Logo = _styledComponents.default.div(_templateObject2(), _logo.default);

exports.Logo = Logo;

var Nav = _styledComponents.default.div(_templateObject3());

exports.Nav = Nav;

var NavItem = _styledComponents.default.div(_templateObject4());

exports.NavItem = NavItem;

var NavSearch = _styledComponents.default.input.attrs({
  placeholder: '搜索'
})(_templateObject5());

exports.NavSearch = NavSearch;

var SearchWrapper = _styledComponents.default.div(_templateObject6());

exports.SearchWrapper = SearchWrapper;

var SearchInfo = _styledComponents.default.div(_templateObject7());

exports.SearchInfo = SearchInfo;

var SearchInfoTitle = _styledComponents.default.div(_templateObject8());

exports.SearchInfoTitle = SearchInfoTitle;

var SearchInfoSwitch = _styledComponents.default.span(_templateObject9());

exports.SearchInfoSwitch = SearchInfoSwitch;

var SearchInfoList = _styledComponents.default.div(_templateObject10());

exports.SearchInfoList = SearchInfoList;

var SearchInfoItem = _styledComponents.default.a(_templateObject11());

exports.SearchInfoItem = SearchInfoItem;

var Addition = _styledComponents.default.div(_templateObject12());

exports.Addition = Addition;

var Button = _styledComponents.default.div(_templateObject13());

exports.Button = Button;

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABwCAMAAABsH8+0AAAAq1BMVEUAAAD4aVb1bGLrb1rrb1rrb1rqcFrnaFLtb1zscFrsbFfobFjqcFrqb1nqb1nqb1rqcVnrblrrcFvsb1jqcVrrb1rrcFvrb1rqcFbqb1rqb1rqb1rrb1nrb1nsb1rrb1rsb1rrb1rrb1rrb1rsb1rsbVvsblrrb1roblnrbFjrb1rrb1rrb1rqb1vpblrrb1rrb1rrcFrrb1rscFv1dF7wclzyc13ucFv6d2AADBwFAAAAMnRSTlMAAwf8g+K1ChZpEg9S0TvdSFmUGyHyr+8k+Oqg2q01ymzm1pd2VY7DMClMfLtkQz6oianZqG4AAASuSURBVHja7drbcqowFIDhFVBR8IyISBXxUBVP7QqBvv+T7QS0W9Ha2g6tzuS7alNnzG8kWBAkSZIkSZIkSZIkSZIkSZIkSZJytAgRsT+FjF2N8fGCAV9UL1LEsAJ/RllFiOi4kDG1KWL0Yv4kxNiMRqNpB36F7sWI1G8qRwgAGYi+qEUy47etSNuhNJ4b8AvIliEP6b8+//caAARPfJzaL+0jky25MUTzEJG9KpA/fR6jEP/HnBUoA4YCPRa2bg2BoC9K6pA7ZRNiVuxXYOPHeCaq3xwCaxWRegbkjFQpcpZtOcg5tiWsF51xJIY5NRm3Eo0yHCGndknIiGRskyWpEMiV0kzm39hUW10+c3UdVLmgZ7qh2ABWs1lrLPYutzUTTjuGzWPbaV88st3M0OfipSgakCe9ZSUdWwAI+NSZpwFH6mteRe0WcK88NSrplw6ut/BYhAILT72NKuI54g3kaOFG4o31FADX82OkffF8WsUWk/LTI3vbEO+YOpwxXIafC0flInJjBfKjitfdmS9BKA/EbwMAGNYYHx43IWF4jE9npUGWtgrpibNdLg2BF1UsyRDyg0ix2B12ej1TzCtyHKcrFspj1HJ7sNflw2yiw5nF+OlYURUd/vhdX01CyMZCbgL5oaq/bgZFrlQGUncnk+dmEmKNC/Cu5XJDAhfoR4xgv/2SPVjZacjCotwa8jN+qYq3TkRj1VUgoRiGUX9pL4jxLvmLJn648bPW1KYiRCGlOdeC/HSAI83ko0gV9ErhYLoqXLAl3wuBX6KteQl6hsm302veXrX7DiFBsiQVzQ3xmqhw5yGgixng3JhGLL6MPkaI9hohxv1qzy11LytZdx+iGVwQqarqV66s2RO98xAidqrVaNJut1dl+FCnce8hypP4tLcGQVv2znWUn4ZUCPwCpUYR1RJwZLcunXN7l0NIOUsPfDHvqXlQLoiQaGqWBcjIMaT1xs5E9vByiPY8OWinngcWRYw992DiOcgH5ukDNMjIMwQ59o4m1yQ+CDH8MMpgKMTsXZwOREKYWZLcQ5zG097YV6+FeAxvQXXIyDckru2WB1OffhyiVByWkZ426fnwX4QwT4eDWTH+OASMoJqxSv5nn1SzPPVPQkw4aF0NOTdMtt8NZL2od70iX7+IPfiLkLixqc5S1XafPm4IOsVGMdXoq/jAIUjjA4qPHEJZdMAeOYTapcGB5zzwMRLXhubByH/gXevkPPLI2y/zOichsf+wIWU4mFoU2Xjx45B1EmJARs4htaWhJ8xWLU5u6v40JL0Y7yhwUZ4nxL3kEjRrkW+HLHfcdjNPFmRNICPnEDy5KfDmluHbIc9Fn7NRoFvIyDvkPxpH6rMJ3w8pWJRDIcz1/nQ2ZBaqx6zaZKdBqvedkJHNqMAidWVAVn4hoJjlE7pGYK/pi5CRclOI3vZqwqCw1CArz5DLCFGURXLAvu1uvK2gGalL/b8dsq3ZnKVicoq5428HXQ9J74vuRVty7yGOCx8xvfeQigZfCIln8BeSELtrwofaDgpOd0jg0xDszzcG/AmyWBqEXHtAZ8F1FAKf0kyFEJAkSZIkSZIkSZIkSZIkSZIk6UH8AxkhdeQ6zGoXAAAAAElFTkSuQmCC"

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Type = _interopRequireWildcard(__webpack_require__(111));

var _immutable = __webpack_require__(39);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var defaultState = (0, _immutable.fromJS)({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Type.SEARCH_FOCUS:
      // return {
      // 	focused: true
      // }
      return state.set('focused', true);

    case Type.SEARCH_BLUR:
      // return {
      // 	focused: false
      // }
      return state.set('focused', false);

    case Type.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({
        'list': action.data,
        'totalPage': action.totalPage
      });

    case Type.MOUSE_ENTER:
      return state.set('mouseIn', true);

    case Type.MOUSE_LEAVE:
      return state.set('mouseIn', false);

    case Type.CHANGE_PAGE:
      return state.set('page', action.page);

    default:
      return state;
  }
};

exports.default = _default;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = exports.changePage = exports.mouseLeave = exports.mouseEnter = exports.searchBlur = exports.searchFoucs = void 0;

var Type = _interopRequireWildcard(__webpack_require__(111));

var _axios = _interopRequireDefault(__webpack_require__(80));

var _immutable = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var changelist = function changelist(data) {
  return {
    type: Type.CHANGE_LIST,
    data: (0, _immutable.fromJS)(data),
    totalPage: Math.floor(data.length / 10)
  };
};

var searchFoucs = function searchFoucs() {
  return {
    type: Type.SEARCH_FOCUS
  };
};

exports.searchFoucs = searchFoucs;

var searchBlur = function searchBlur() {
  return {
    type: Type.SEARCH_BLUR
  };
};

exports.searchBlur = searchBlur;

var mouseEnter = function mouseEnter() {
  return {
    type: Type.MOUSE_ENTER
  };
};

exports.mouseEnter = mouseEnter;

var mouseLeave = function mouseLeave() {
  return {
    type: Type.MOUSE_LEAVE
  };
};

exports.mouseLeave = mouseLeave;

var changePage = function changePage(page) {
  return {
    type: Type.CHANGE_PAGE,
    page: page
  };
};

exports.changePage = changePage;

var getList = function getList() {
  return function (dispatch) {
    _axios.default.get('/jianshu/api/headerList.json').then(function (res) {
      var data = res.data;
      dispatch(changelist(data.data));
    }).catch(function (res) {
      console.log("\u62A5\u9519\u65F6\u95F4".concat(new Date(), ", \u62A5\u9519\u5185\u5BB9 ").concat(res));
    });
  };
};

exports.getList = getList;

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(39);

var Type = _interopRequireWildcard(__webpack_require__(114));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var defaultState = (0, _immutable.fromJS)({
  login: false
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Type.CHANGE_LOGIN:
      return state.set('login', action.value);

    case Type.LOGOUT:
      return state.set('login', action.value);

    default:
      return state;
  }
};

exports.default = _default;

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = void 0;

var Type = _interopRequireWildcard(__webpack_require__(114));

var _axios = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var changeLogin = function changeLogin() {
  return {
    type: Type.CHANGE_LOGIN,
    value: true
  };
};

var login = function login(account, password) {
  return function (dispatch) {
    _axios.default.get('/jianshu/api/login.json?account=' + account + '&password=' + password).then(function (res) {
      var data = res.data.data;

      if (data) {
        dispatch(changeLogin());
      } else {
        alert('登录失败');
      }
    }).catch(function (res) {
      console.log("\u62A5\u9519\u65F6\u95F4".concat(new Date(), ", \u62A5\u9519\u5185\u5BB9 ").concat(res));
    });
  };
};

exports.login = login;

var logout = function logout() {
  return {
    type: Type.LOGOUT,
    value: false
  };
};

exports.logout = logout;

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(65);

var _Topic = _interopRequireDefault(__webpack_require__(394));

var _Writer = _interopRequireDefault(__webpack_require__(395));

var _Recomend = _interopRequireDefault(__webpack_require__(396));

var _List = _interopRequireDefault(__webpack_require__(397));

var _reactRedux = __webpack_require__(35);

var _store = __webpack_require__(115);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Home =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "handleTop",
    value: function handleTop() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_style.HomeWraper, null, _react.default.createElement(_style.HomeLeft, null, _react.default.createElement("img", {
        className: "banner_img",
        alt: "",
        src: "//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
      }), _react.default.createElement(_Topic.default, null), _react.default.createElement(_List.default, null)), _react.default.createElement(_style.HomeRight, null, _react.default.createElement(_Recomend.default, null), _react.default.createElement(_Writer.default, null)), this.props.backTop ? _react.default.createElement(_style.BackTop, {
        onClick: this.handleTop
      }, "Top") : null);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.changeHomeList();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener('scroll', this.props.changeScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.props.changeScroll);
    }
  }]);

  return Home;
}(_react.PureComponent);

var mapState = function mapState(state) {
  return {
    backTop: state.getIn(['home', 'backTop'])
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    changeHomeList: function changeHomeList() {
      dispatch(_store.actionCreate.getHomeList());
    },
    changeScroll: function changeScroll() {
      if (document.documentElement.scrollTop >= 400) {
        dispatch(_store.actionCreate.changeScrollBool(true));
      } else {
        dispatch(_store.actionCreate.changeScrollBool(false));
      }
    }
  };
};

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(Home);

exports.default = _default;

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(65);

var _reactRedux = __webpack_require__(35);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Topic =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Topic, _PureComponent);

  function Topic() {
    _classCallCheck(this, Topic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Topic).apply(this, arguments));
  }

  _createClass(Topic, [{
    key: "render",
    value: function render() {
      var topicList = this.props.topicList;
      return _react.default.createElement(_style.Topicwraper, null, topicList.map(function (item) {
        return _react.default.createElement(_style.TopicItem, {
          key: item
        }, _react.default.createElement("img", {
          alt: "",
          className: "topic_pic",
          src: item.get('imgUrl')
        }), item.get('title'));
      }));
    }
  }]);

  return Topic;
}(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    topicList: state.getIn(['home', 'topicList'])
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(Topic);

exports.default = _default;

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(65);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Writer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Writer, _PureComponent);

  function Writer() {
    _classCallCheck(this, Writer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Writer).apply(this, arguments));
  }

  _createClass(Writer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_style.WriterWraper, null, "Writer");
    }
  }]);

  return Writer;
}(_react.PureComponent);

var _default = Writer;
exports.default = _default;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(65);

var _reactRedux = __webpack_require__(35);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Recomend =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Recomend, _PureComponent);

  function Recomend() {
    _classCallCheck(this, Recomend);

    return _possibleConstructorReturn(this, _getPrototypeOf(Recomend).apply(this, arguments));
  }

  _createClass(Recomend, [{
    key: "render",
    value: function render() {
      var List = this.props.List;
      return _react.default.createElement(_style.Recomendwraper, null, List.map(function (item) {
        return _react.default.createElement(_style.RecomendItem, {
          key: item,
          imgItem: item.get('imgUrl')
        });
      }));
    }
  }]);

  return Recomend;
}(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    List: state.getIn(['home', 'recommendList'])
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null)(Recomend);

exports.default = _default;

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(65);

var _reactRedux = __webpack_require__(35);

var _store = __webpack_require__(115);

var _reactRouterDom = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var List =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          articleList = _this$props.articleList,
          getMoreList = _this$props.getMoreList,
          page = _this$props.page;
      return _react.default.createElement("div", null, articleList.map(function (item, index) {
        return _react.default.createElement(_reactRouterDom.Link, {
          key: item + index,
          to: '/detail/' + item.get('id')
        }, _react.default.createElement(_style.ListItem, {
          className: "clearfix"
        }, _react.default.createElement("img", {
          alt: "",
          className: "pic",
          src: item.get('imgUrl')
        }), _react.default.createElement(_style.ListInfo, null, _react.default.createElement("h3", {
          className: "title"
        }, item.get('title')), _react.default.createElement("p", {
          className: "des"
        }, item.get('des')))));
      }), _react.default.createElement(_style.LoadMore, {
        onClick: function onClick() {
          getMoreList(page);
        }
      }, "\u52A0\u8F7D\u66F4\u591A"));
    }
  }]);

  return List;
}(_react.PureComponent);

var mapState = function mapState(state) {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    getMoreList: function getMoreList(page) {
      dispatch(_store.actionCreate.getMoreList(page));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(List);

exports.default = _default;

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(39);

var Type = _interopRequireWildcard(__webpack_require__(116));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var defaultState = (0, _immutable.fromJS)({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0,
  backTop: false
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Type.GET_HOME_DATA:
      return state.merge({
        topicList: (0, _immutable.fromJS)(action.data.topicList),
        articleList: (0, _immutable.fromJS)(action.data.articleList),
        recommendList: (0, _immutable.fromJS)(action.data.recommendList)
      }) // state.merge({ ...state
      // } = fromJS(action.data))
      ;

    case Type.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.data),
        'articlePage': action.nextPage
      });

    case Type.CHANGE_SCROLL_TOP:
      return state.set('backTop', action.bool);

    default:
      return state;
  }
};

exports.default = _default;

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMoreList = exports.getHomeList = exports.changeScrollBool = void 0;

var Type = _interopRequireWildcard(__webpack_require__(116));

var _axios = _interopRequireDefault(__webpack_require__(80));

var _immutable = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var changeHomelist = function changeHomelist(data) {
  return {
    type: Type.GET_HOME_DATA,
    data: data
  };
};

var addHomeList = function addHomeList(data, nextPage) {
  return {
    type: Type.ADD_ARTICLE_LIST,
    data: (0, _immutable.fromJS)(data),
    nextPage: nextPage
  };
};

var changeScrollBool = function changeScrollBool(bool) {
  return {
    type: Type.CHANGE_SCROLL_TOP,
    bool: bool
  };
};

exports.changeScrollBool = changeScrollBool;

var getHomeList = function getHomeList() {
  return function (dispatch) {
    _axios.default.get('/jianshu/api/home.json').then(function (res) {
      var data = res.data.data;
      dispatch(changeHomelist(data));
    }).catch(function (res) {
      console.log("\u62A5\u9519\u65F6\u95F4".concat(new Date(), ", \u62A5\u9519\u5185\u5BB9 ").concat(res));
    });
  };
};

exports.getHomeList = getHomeList;

var getMoreList = function getMoreList(page) {
  return function (dispatch) {
    _axios.default.get('/jianshu/api/homeList.json?page=' + page).then(function (res) {
      var data = res.data.data;
      dispatch(addHomeList(data, page + 1));
    }).catch(function (res) {
      console.log("\u62A5\u9519\u65F6\u95F4".concat(new Date(), ", \u62A5\u9519\u5185\u5BB9 ").concat(res));
    });
  };
};

exports.getMoreList = getMoreList;

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

__webpack_require__(146);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(401);

var _reactRedux = __webpack_require__(35);

var _store = __webpack_require__(169);

var _reactRouterDom = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, _getPrototypeOf(Detail).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content;
      return _react.default.createElement(_style.DetailWraper, null, _react.default.createElement(_style.Header, null, title), _react.default.createElement(_style.Content, {
        dangerouslySetInnerHTML: {
          __html: content
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getDetailData(this.props.match.params.id);
    }
  }]);

  return Detail;
}(_react.Component);

var mapState = function mapState(state) {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  };
};

var mapDipatch = function mapDipatch(dispatch) {
  return {
    getDetailData: function getDetailData(id) {
      dispatch(_store.actionCreate.getDetailContent(id));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapState, mapDipatch)((0, _reactRouterDom.withRouter)(Detail));

exports.default = _default;

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Header = exports.DetailWraper = void 0;

__webpack_require__(48);

var _styledComponents = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #666;\n\timg {\n\t\twidth: 100%;\n\t}\n\tp {\n\t\tmargin: 20px 0;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\t}\n\tb {\n\t\tfont-weight: bold;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 50px 0 20px 0;\n\tline-height: 44px;\n\tfont-size: 34px;\n\tcolor: #333;\n\tfont-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\twidth: 620px;\n\tmargin: 0 auto;\n\tpadding-bottom: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DetailWraper = _styledComponents.default.div(_templateObject());

exports.DetailWraper = DetailWraper;

var Header = _styledComponents.default.div(_templateObject2());

exports.Header = Header;

var Content = _styledComponents.default.div(_templateObject3());

exports.Content = Content;

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(39);

var Type = _interopRequireWildcard(__webpack_require__(117));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var defaultState = (0, _immutable.fromJS)({
  title: "shui",
  content: ""
});

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Type.ADD_DETAIL_CONTENT:
      return (// state.merge({ ...state
        // } = fromJS(action.data)),
        state.merge({
          title: (0, _immutable.fromJS)(action.data.title),
          content: (0, _immutable.fromJS)(action.data.content)
        })
      );

    default:
      return state;
  }
};

exports.default = _default;

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetailContent = void 0;

var Type = _interopRequireWildcard(__webpack_require__(117));

var _axios = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var detailContent = function detailContent(data) {
  return {
    type: Type.ADD_DETAIL_CONTENT,
    data: data
  };
};

var getDetailContent = function getDetailContent(id) {
  return function (dispatch) {
    _axios.default.get('/jianshu/api/detail.json?id=' + id).then(function (res) {
      dispatch(detailContent(res.data.data));
    }).catch(function (res) {
      console.log("\u62A5\u9519\u65F6\u95F4".concat(new Date(), ", \u62A5\u9519\u5185\u5BB9 ").concat(res));
    });
  };
};

exports.getDetailContent = getDetailContent;

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _style = __webpack_require__(405);

var _reactRedux = __webpack_require__(35);

var _store = __webpack_require__(113);

var _reactRouterDom = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Login =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (!this.props.loginStatus) {
        return _react.default.createElement(_style.LoginWraper, null, _react.default.createElement(_style.LoginBox, null, _react.default.createElement(_style.Input, {
          placeholder: "\u8D26\u53F7",
          ref: function ref(input) {
            _this.account = input;
          }
        }), _react.default.createElement(_style.Input, {
          placeholder: "\u5BC6\u7801",
          ref: function ref(input) {
            _this.password = input;
          },
          type: "password"
        }), _react.default.createElement(_style.Button, {
          onClick: function onClick() {
            _this.props.login(_this.account, _this.password);
          }
        }, "\u767B\u5F55")));
      } else {
        return _react.default.createElement(_reactRouterDom.Redirect, {
          to: "/"
        });
      }
    }
  }]);

  return Login;
}(_react.PureComponent);

var mapState = function mapState(state) {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    login: function login(account, password) {
      dispatch(_store.actionCreate.login(account, password));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapState, mapDispatch)(Login);

exports.default = _default;

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Input = exports.LoginBox = exports.LoginWraper = void 0;

__webpack_require__(48);

var _styledComponents = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\twidth: 220px;\n\theight: 30px;\n\tline-height: 30px;\n\tmargin: 10px auto;\n\tcolor: #fff;\n\tbackground-color: #3194d0;\n\tborder-radius: 15px;\n\ttext-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\twidth: 200px;\n\theight: 30px;\n\tline-height: 30px;\n\tpadding: 0 10;\n\tmargin: 10px auto;\n\tcolor: #777;\n\t&::placeholder {\n\t\tcolor: #999;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\twidth: 400px;\n\theight: 220px;\n\tmargin: 80px auto;\n\tpadding-top: 20px;\n\tbackground-color: #fff;\n\tbox-shadow: 0 0 8px rgba(0,0,0,.1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\ttop: 56px;\n\tbackground-color: #ccc;\n\tz-index: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginWraper = _styledComponents.default.div(_templateObject());

exports.LoginWraper = LoginWraper;

var LoginBox = _styledComponents.default.div(_templateObject2());

exports.LoginBox = LoginBox;

var Input = _styledComponents.default.input(_templateObject3());

exports.Input = Input;

var Button = _styledComponents.default.div(_templateObject4());

exports.Button = Button;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(31);

__webpack_require__(23);

__webpack_require__(29);

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactRedux = __webpack_require__(35);

var _reactRouterDom = __webpack_require__(60);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Write =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Write, _PureComponent);

  function Write() {
    _classCallCheck(this, Write);

    return _possibleConstructorReturn(this, _getPrototypeOf(Write).apply(this, arguments));
  }

  _createClass(Write, [{
    key: "render",
    value: function render() {
      if (this.props.loginStatus) {
        return _react.default.createElement("div", null, "\u5199\u6587\u7AE0ing............");
      } else {
        return _react.default.createElement(_reactRouterDom.Redirect, {
          to: "/login"
        });
      }
    }
  }]);

  return Write;
}(_react.PureComponent);

var mapState = function mapState(state) {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};

var _default = (0, _reactRedux.connect)(mapState, null)(Write);

exports.default = _default;

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reducer = _interopRequireDefault(__webpack_require__(408));

var _redux = __webpack_require__(118);

var _reduxThunk = _interopRequireDefault(__webpack_require__(414));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : _redux.compose;
var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default));

var _default = (0, _redux.createStore)(_reducer.default, enhancer);

exports.default = _default;

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxImmutable = __webpack_require__(409);

var _store = __webpack_require__(163);

var _store2 = __webpack_require__(115);

var _store3 = __webpack_require__(169);

var _store4 = __webpack_require__(113);

var reducer = (0, _reduxImmutable.combineReducers)({
  header: _store.reducer,
  home: _store2.reducer,
  detail: _store3.reducer,
  login: _store4.reducer
});
var _default = reducer;
exports.default = _default;

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);
module.exports = __webpack_require__(360);


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(110))(4);

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WriterWraper = exports.BackTop = exports.LoadMore = exports.RecomendItem = exports.Recomendwraper = exports.ListInfo = exports.ListItem = exports.TopicItem = exports.Topicwraper = exports.HomeRight = exports.HomeLeft = exports.HomeWraper = void 0;

__webpack_require__(48);

var _styledComponents = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 200px;\n\tline-height: 200px;\n\ttext-align: center;\n\tfont-size: 20px;\n\tbox-shadow: 0 0 8px rgba(0,0,0,.2);\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\tbottom: 30px;\n\tright: 50px;\n\twidth: 60px;\n\theight: 60px;\n\tline-height: 60px;\n\ttext-align: center;\n\tborder: 1px solid #ccc;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 40px;\n\tmargin: 30px 0;\n\tline-height: 40px;\n\tbackground-color: #a5a5a5;\n\ttext-align: center;\n\tborder-radius: 20px;\n\tcolor: #fff;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\twidth: 280px;\n\theight: 50px;\n\tbackground: url(", ");\n\tbackground-size: contain;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin-bottom: 20px;\n\tmargin-top: 20px;\n\twidth: 280px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tfloat: left;\n\twidth: 500px;\n\t.title {\n\t\tline-height: 27px;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\tcolor: #333;\n\t}\n\t.des {\n\t\tline-height: 24px;\n\t\tfont-size: 13px;\n\t\tcolor: #999;\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 20px 0;\n\tborder-bottom: 1px solid #dcdcdc;\n\t.pic {\n\t\tfloat: right;\n\t\twidth: 125px;\n\t\theight: 100px;\n\t\tborder-radius: 10px;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tfloat: left;\n\theight: 32px;\n\tline-height: 32px;\n\tpadding-right: 10px;\n\tmargin-left: 18px;\n\tmargin-bottom: 18px;\n\tfont-size: 14px;\n\tcolor: #000000;\n\tbackground-color: #f7f7f7;\n\tborder: 1px solid #dcdcdc;\n\tborder-radius: 4px;\n\t.topic_pic {\n\t\tfloat: left;\n\t\twidth: 32px;\n\t\theight: 32px;\n\t\tmargin-right: 10px;\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tpadding: 20px 0 10px 0;\n\tmargin-left: -18px;\n\tborder-bottom: 1px solid #dcdcdc;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\twidth: 280px;\n\tfloat: right;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\toverflow: hidden;\n\tmargin-left: 15px;\n\tpadding-top: 30px;\n\twidth: 625px;\n\tfloat: left;\n\t.banner_img {\n\t\twidth: 625px;\n\t\theight: 270px;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: 960px;\n\tmargin: 0 auto ;\n\theight: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeWraper = _styledComponents.default.div(_templateObject());

exports.HomeWraper = HomeWraper;

var HomeLeft = _styledComponents.default.div(_templateObject2());

exports.HomeLeft = HomeLeft;

var HomeRight = _styledComponents.default.div(_templateObject3());

exports.HomeRight = HomeRight;

var Topicwraper = _styledComponents.default.div(_templateObject4());

exports.Topicwraper = Topicwraper;

var TopicItem = _styledComponents.default.div(_templateObject5()); // List


exports.TopicItem = TopicItem;

var ListItem = _styledComponents.default.div(_templateObject6());

exports.ListItem = ListItem;

var ListInfo = _styledComponents.default.div(_templateObject7());

exports.ListInfo = ListInfo;

var Recomendwraper = _styledComponents.default.div(_templateObject8());

exports.Recomendwraper = Recomendwraper;

var RecomendItem = _styledComponents.default.div(_templateObject9(), function (props) {
  return props.imgItem;
});

exports.RecomendItem = RecomendItem;

var LoadMore = _styledComponents.default.div(_templateObject10());

exports.LoadMore = LoadMore;

var BackTop = _styledComponents.default.div(_templateObject11());

exports.BackTop = BackTop;

var WriterWraper = _styledComponents.default.div(_templateObject12());

exports.WriterWraper = WriterWraper;

/***/ })

}]);
//# sourceMappingURL=common.js.map