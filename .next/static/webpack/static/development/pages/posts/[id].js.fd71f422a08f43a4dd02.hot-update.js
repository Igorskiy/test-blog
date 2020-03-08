webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./api.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./store/actions.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\Igor\\Desktop\\test-blog\\pages\\posts\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["createStyles"])({
    textField: {
      marginTop: '25px',
      marginBottom: '10px',
      maxWidth: '60%',
      justifyContent: 'center'
    },
    root: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      minHeight: '60vh',
      Width: '90vw',
      marginTop: '20px',
      marginRight: '20px',
      marginLeft: '20px',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      outline: 'none',
      cursor: 'pointer'
    },
    comment: {
      display: 'flex',
      alignItems: 'center',
      width: 'max-content',
      paddingTop: '5px',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginTop: '15px',
      maxWidth: '30vw',
      minHeight: '50px'
    },
    post: {
      paddingBottom: '20px'
    },
    commentTitle: {
      fontWeight: 'bold',
      paddingTop: '15px'
    }
  });
});

var PostPage = function PostPage() {
  var classes = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  var commentBody = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.inputs.commentBody;
  });
  var post = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.posts.post;
  });

  var addComment = function addComment(postId, commentBody) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function addComment$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!commentBody.trim()) {
              _context.next = 13;
              break;
            }

            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_4__["sendCommentOnServer"])(postId, commentBody));

          case 3:
            _context.t0 = dispatch;
            _context.t1 = _store_actions__WEBPACK_IMPORTED_MODULE_6__["setPost"];
            _context.next = 7;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_4__["getPostFromServer"])(postId));

          case 7:
            _context.t2 = _context.sent;
            _context.t3 = (0, _context.t1)(_context.t2);
            (0, _context.t0)(_context.t3);
            dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["setCommentBody"])(''));
            _context.next = 14;
            break;

          case 13:
            alert("Your comment is empty, please, fill it.");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.paper,
    onClick: function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = dispatch;
              _context2.t1 = _store_actions__WEBPACK_IMPORTED_MODULE_6__["setPost"];
              _context2.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_4__["getPostFromServer"])(post.id));

            case 4:
              _context2.t2 = _context2.sent;
              _context2.t3 = (0, _context2.t1)(_context2.t2);
              return _context2.abrupt("return", (0, _context2.t0)(_context2.t3));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, post.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, post.body)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: classes.commentTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Comments:"), post.comments ? post.comments.map(function (comment) {
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: comment.id,
      className: classes.comment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, comment.body));
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "No comments yet")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
    id: "outlined-multiline-flexible",
    className: classes.textField,
    label: "New comment",
    multiline: true,
    rowsMax: "100",
    fullWidth: true,
    placeholder: "Add your comment here",
    value: commentBody,
    onChange: function onChange(e) {
      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["setCommentBody"])(e.target.value));
    },
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    onClick: function onClick() {
      return addComment(post.id, commentBody);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Add new comment")))));
};

PostPage.getInitialProps = function _callee2(context) {
  var id, post;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = context.query.id;
          _context3.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_api__WEBPACK_IMPORTED_MODULE_4__["getPostFromServer"])(+id));

        case 3:
          post = _context3.sent;
          context.store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_6__["setPost"])(post));
          return _context3.abrupt("return", {
            post: post
          });

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (PostPage);

/***/ })

})
//# sourceMappingURL=[id].js.fd71f422a08f43a4dd02.hot-update.js.map