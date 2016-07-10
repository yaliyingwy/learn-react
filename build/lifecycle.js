webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _foo = __webpack_require__(1);

	var _foo2 = _interopRequireDefault(_foo);

	var _bar = __webpack_require__(2);

	var _bar2 = _interopRequireDefault(_bar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	alert('before import');

	alert('after import');

	alert('foo.text:' + _foo2.default.text.toString() + ', bar.text:' + _bar2.default.text.toString());

	alert('DEBUG:' + (true));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	alert('foo');

	var Foo = function Foo() {
	  _classCallCheck(this, Foo);

	  this.text = Symbol('foo');
	};

	exports.default = new Foo();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	alert('bar');

	var Bar = function Bar() {
	  _classCallCheck(this, Bar);

	  this.text = Symbol('bar');
	};

	exports.default = new Bar();

/***/ }
]);