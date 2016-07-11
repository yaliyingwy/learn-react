webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213);


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(214);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _foo = __webpack_require__(215);

	var _foo2 = _interopRequireDefault(_foo);

	var _bar = __webpack_require__(216);

	var _bar2 = _interopRequireDefault(_bar);

	var _reactDom = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LifeCycle = function (_Component) {
		_inherits(LifeCycle, _Component);

		function LifeCycle(props) {
			_classCallCheck(this, LifeCycle);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LifeCycle).call(this, props));

			_this.state = {
				show: 'foo',
				time: new Date().getTime()
			};
			_this.displayName = 'LifeCycle';
			console.log('LifeCycle constructor, state: ', _this.state, 'props: ', _this.props);
			return _this;
		}

		_createClass(LifeCycle, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('LifeCycle componentWillMount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('LifeCycle componentDidMount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				console.log('LifeCycle componentWillUnmount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				console.log('LifeCycle componentWillUpdate, state: ', this.state, 'props: ', this.props, 'nextState: ', nextState, 'nextProps: ', nextProps);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				console.log('LifeCycle componentWillUpdate, state: ', this.state, 'props: ', this.props, 'prevState: ', prevState, 'prevProps: ', prevProps);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				console.log('LifeCycle componentWillReceiveProps, state: ', this.state, 'props: ', this.props, 'nextProps: ', nextProps);
			}
		}, {
			key: 'show',
			value: function show(type) {
				this.setState({
					show: type,
					time: new Date().getTime()
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _state = this.state;
				var show = _state.show;
				var time = _state.time;

				return _react2.default.createElement(
					'div',
					{ className: 'lifecycle' },
					_react2.default.createElement(
						'h1',
						null,
						'LifeCycle'
					),
					_react2.default.createElement(
						'div',
						{ onClick: this.show.bind(this, 'foo'), className: 'btn' },
						'show foo'
					),
					_react2.default.createElement(
						'div',
						{ onClick: this.show.bind(this, 'bar'), className: 'btn' },
						'show bar'
					),
					function () {
						var view = void 0;
						if (show === 'foo') {
							view = _react2.default.createElement(_foo2.default, { text: time });
						} else {
							view = _react2.default.createElement(_bar2.default, { text: time });
						}
						return view;
					}()
				);
			}
		}]);

		return LifeCycle;
	}(_react.Component);

	(0, _reactDom.render)(_react2.default.createElement(LifeCycle, null), document.getElementById('content'));

/***/ },

/***/ 214:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Foo = function (_Component) {
		_inherits(Foo, _Component);

		function Foo(props) {
			_classCallCheck(this, Foo);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Foo).call(this, props));

			_this.state = {
				count: 0
			};
			_this.displayName = 'Foo';
			_this.increaseCount = _this.increaseCount.bind(_this);
			console.log('Foo constructor, state: ', _this.state, 'props: ', _this.props);
			return _this;
		}

		_createClass(Foo, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('Foo componentWillMount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('Foo componentDidMount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				console.log('Foo componentWillUnmount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				console.log('Foo componentWillUpdate, state: ', this.state, 'props: ', this.props, 'nextState: ', nextState, 'nextProps: ', nextProps);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				console.log('Foo componentWillUpdate, state: ', this.state, 'props: ', this.props, 'prevState: ', prevState, 'prevProps: ', prevProps);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				console.log('Foo componentWillReceiveProps, state: ', this.state, 'props: ', this.props, 'nextProps: ', nextProps);
			}
		}, {
			key: 'increaseCount',
			value: function increaseCount() {
				var count = this.state.count;

				this.setState({
					count: count + 1
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var text = this.props.text;
				var count = this.state.count;

				var content = 'count in state: ' + count + ', text in props: ' + text;
				return _react2.default.createElement(
					'div',
					{ className: 'foo' },
					_react2.default.createElement(
						'h3',
						null,
						'foo'
					),
					content,
					_react2.default.createElement(
						'div',
						{ className: 'btn', onClick: this.increaseCount },
						'点我增加count'
					)
				);
			}
		}]);

		return Foo;
	}(_react.Component);

	Foo.propsTypes = {
		text: _react2.default.PropTypes.string.isRequired
	};

	exports.default = Foo;

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bar = function (_Component) {
		_inherits(Bar, _Component);

		function Bar(props) {
			_classCallCheck(this, Bar);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).call(this, props));

			_this.state = {
				count: 0
			};
			_this.displayName = 'Bar';
			_this.increaseCount = _this.increaseCount.bind(_this);
			console.log('Bar constructor, state: ', _this.state, 'props:', _this.props);
			return _this;
		}

		_createClass(Bar, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('Bar componentWillMount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('Bar componentDidMount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				console.log('Bar componentWillUnmount, state: ', this.state, 'props: ', this.props);
			}
		}, {
			key: 'componentWillUpdate',
			value: function componentWillUpdate(nextProps, nextState) {
				console.log('Bar componentWillUpdate, state: ', this.state, 'props: ', this.props, 'nextState: ', nextState, 'nextProps: ', nextProps);
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				console.log('Bar componentWillUpdate, state: ', this.state, 'props: ', this.props, 'prevState: ', prevState, 'prevProps: ', prevProps);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(nextProps) {
				console.log('Bar componentWillReceiveProps, state: ', this.state, 'props: ', this.props, 'nextProps: ', nextProps);
			}
		}, {
			key: 'increaseCount',
			value: function increaseCount() {
				var count = this.state.count;

				this.setState({
					count: count + 1
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var text = this.props.text;
				var count = this.state.count;

				var content = 'count in state: ' + count + ', text in props: ' + text;
				return _react2.default.createElement(
					'div',
					{ className: 'bar' },
					_react2.default.createElement(
						'h3',
						null,
						'bar'
					),
					content,
					_react2.default.createElement(
						'div',
						{ className: 'btn', onClick: this.increaseCount },
						'点我增加count'
					)
				);
			}
		}]);

		return Bar;
	}(_react.Component);

	Bar.propsTypes = {
		text: _react2.default.PropTypes.string.isRequired
	};

	exports.default = Bar;

/***/ }

});