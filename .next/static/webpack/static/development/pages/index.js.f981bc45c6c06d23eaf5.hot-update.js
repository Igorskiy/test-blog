webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./api.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions */ "./store/actions.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\Igor\\Desktop\\test-blog\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createStyles"])({
    postBody: {
      margin: 'auto',
      textAlign: 'justify',
      maxHeight: '500px',
      overflow: 'hidden',
      lineClamp: 5,
      boxOrient: 'vertical',
      display: '-webkit-box'
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      color: 'black',
      fontSize: '24px'
    },
    root: {
      flexGrow: 1
    },
    paper: {
      marginTop: '20px',
      padding: '25px',
      textAlign: 'center',
      color: theme.palette.text.primary,
      outline: 'none',
      cursor: 'pointer',
      marginLeft: '20px',
      marginRight: '20px'
    }
  });
});

var Index = function Index() {
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.posts.posts;
  });

  var getPosts = function getPosts() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getPosts$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = dispatch;
            _context.t1 = _store_actions__WEBPACK_IMPORTED_MODULE_7__["setPosts"];
            _context.next = 4;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_6__["getPostsFromServer"])());

          case 4:
            _context.t2 = _context.sent;
            _context.t3 = (0, _context.t1)(_context.t2);
            (0, _context.t0)(_context.t3);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
  };

  var removePost = function removePost(id) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function removePost$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_6__["removePostFromServer"])(id));

          case 2:
            getPosts();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, posts.map(function (post) {
    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
      item: true,
      xs: 12,
      sm: 6,
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.paper,
      onClick: function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = dispatch;
                _context3.t1 = _store_actions__WEBPACK_IMPORTED_MODULE_7__["setPost"];
                _context3.next = 4;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_6__["getPostFromServer"])(post.id));

              case 4:
                _context3.t2 = _context3.sent;
                _context3.t3 = (0, _context3.t1)(_context3.t2);
                return _context3.abrupt("return", (0, _context3.t0)(_context3.t3));

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/posts/[id]",
      as: "/posts/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("a", {
      className: classes.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, post.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
      className: classes.postBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, post.body))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      onClick: function onClick() {
        return removePost(post.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "delete")));
  }))));
};

Index.getInitialProps = function _callee2(_ref) {
  var store, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          store = _ref.store;
          _context4.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_6__["getPostsFromServer"])());

        case 3:
          data = _context4.sent;
          store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_7__["setPosts"])(data));
          return _context4.abrupt("return", {
            data: data
          });

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
/* {posts.map((post: Post) => (
  <div key={post.id}>
    <div>
      <span onClick={() => removePost(post.id)}>{`delete`}</span>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a
          onClick={async () =>
            dispatch(setPost(await getPostFromServer(post.id)))
          }
        >
          {post.title}
        </a>
      </Link>
      {post.body}
    </div>
  </div> */

/***/ })

})
//# sourceMappingURL=index.js.f981bc45c6c06d23eaf5.hot-update.js.map