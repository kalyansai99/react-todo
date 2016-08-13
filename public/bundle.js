/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _inputText = __webpack_require__(3);
	
	var _inputText2 = _interopRequireDefault(_inputText);
	
	var _countContainer = __webpack_require__(4);
	
	var _countContainer2 = _interopRequireDefault(_countContainer);
	
	var _listWithHeader = __webpack_require__(5);
	
	var _listWithHeader2 = _interopRequireDefault(_listWithHeader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var counter = 100;
	var getUniqueId = function getUniqueId() {
	    return '' + ++counter;
	};
	
	var ToDoApp = function (_Component) {
	    _inherits(ToDoApp, _Component);
	
	    function ToDoApp() {
	        _classCallCheck(this, ToDoApp);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ToDoApp).apply(this, arguments));
	
	        _this.state = {
	            'itemsList': []
	        };
	        return _this;
	    }
	
	    _createClass(ToDoApp, [{
	        key: 'addItemKeyDownHandler',
	        value: function addItemKeyDownHandler(event) {
	            if (event.keyCode === 13) {
	                var target = event.target;
	                var value = target.value.replace(/\s/, '');
	                target.value = '';
	                if (value) {
	                    this.setState({
	                        'itemsList': [].concat(_toConsumableArray(this.state.itemsList), [{
	                            'id': getUniqueId(),
	                            'itemName': value,
	                            'status': 'TO_DO'
	                        }])
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'onListUpdate',
	        value: function onListUpdate() {
	            this.forceUpdate();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;
	            return _react2.default.createElement(
	                'div',
	                { className: 'app-page jsApp' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'header-wrapper clearfix' },
	                    _react2.default.createElement(
	                        'label',
	                        { htmlFor: 'textInput', className: 'label' },
	                        'Add Project'
	                    ),
	                    _react2.default.createElement(_inputText2.default, { id: 'textInput', onKeyDown: self.addItemKeyDownHandler.bind(self) }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'keep-right clearfix' },
	                        _react2.default.createElement(
	                            'label',
	                            { htmlFor: 'textInput' },
	                            'Total'
	                        ),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(_countContainer2.default, { itemCount: this.state.itemsList.length, counterText: 'PROJECTS' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'lists-wrapper' },
	                    _react2.default.createElement(_listWithHeader2.default, {
	                        itemsList: this.state.itemsList,
	                        status: 'TO_DO',
	                        headText: 'To do',
	                        counterText: 'PROJECTS',
	                        onListUpdate: this.onListUpdate.bind(this) }),
	                    _react2.default.createElement(_listWithHeader2.default, {
	                        itemsList: this.state.itemsList,
	                        status: 'IN_PROGRESS',
	                        headText: 'In Progress',
	                        counterText: 'PROJECTS',
	                        onListUpdate: this.onListUpdate.bind(this) }),
	                    _react2.default.createElement(_listWithHeader2.default, {
	                        itemsList: this.state.itemsList,
	                        status: 'DONE',
	                        headText: 'Done',
	                        counterText: 'PROJECTS',
	                        onListUpdate: this.onListUpdate.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return ToDoApp;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(ToDoApp, null), document.getElementById('appContainer'));
	
	exports.default = ToDoApp;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InputText = function (_Component) {
	    _inherits(InputText, _Component);
	
	    function InputText() {
	        _classCallCheck(this, InputText);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InputText).apply(this, arguments));
	    }
	
	    _createClass(InputText, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("input", _extends({ type: "text", className: "input-text" }, this.props));
	        }
	    }]);
	
	    return InputText;
	}(_react.Component);
	
	exports.default = InputText;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CountContainer = function (_Component) {
	    _inherits(CountContainer, _Component);
	
	    function CountContainer() {
	        _classCallCheck(this, CountContainer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CountContainer).apply(this, arguments));
	    }
	
	    _createClass(CountContainer, [{
	        key: 'render',
	        value: function render() {
	            var counterText = this.props.counterText;
	            return _react2.default.createElement(
	                'div',
	                { className: 'counter-container' },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'count' },
	                    this.props.itemCount
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(
	                    'span',
	                    { className: 'text' },
	                    counterText
	                )
	            );
	        }
	    }]);
	
	    return CountContainer;
	}(_react.Component);
	
	exports.default = CountContainer;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _list = __webpack_require__(6);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _countContainer = __webpack_require__(4);
	
	var _countContainer2 = _interopRequireDefault(_countContainer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListWithHeader = function (_Component) {
	    _inherits(ListWithHeader, _Component);
	
	    function ListWithHeader() {
	        _classCallCheck(this, ListWithHeader);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListWithHeader).apply(this, arguments));
	
	        var itemsList = _this.props.itemsList || [];
	        _this.state = {
	            'itemsList': itemsList
	        };
	        return _this;
	    }
	
	    _createClass(ListWithHeader, [{
	        key: 'onDrop',
	        value: function onDrop(event) {
	            var dragElementData = JSON.parse(event.dataTransfer.getData("data"));
	            var itemId = dragElementData.text;
	            var draggedItem = this.props.itemsList.find(function (item) {
	                return item.id === itemId;
	            });
	            if (draggedItem && draggedItem.status !== this.props.status) {
	                draggedItem.status = this.props.status;
	                this.props.onListUpdate();
	            }
	            event.preventDefault();
	        }
	    }, {
	        key: 'onDragOver',
	        value: function onDragOver(event) {
	            event.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var itemsList = this.props.itemsList || [];
	            var headText = this.props.headText;
	            var status = this.props.status;
	            var filteredItems = itemsList.filter(function (item) {
	                return item.status === status;
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'list-wrapper', onDrop: this.onDrop.bind(this), onDragOver: this.onDragOver.bind(this) },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'header-wrapper clearfix' },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: 'head-text' },
	                        headText
	                    ),
	                    _react2.default.createElement(_countContainer2.default, { itemCount: filteredItems.length, counterText: this.props.counterText })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'list-container' },
	                    _react2.default.createElement(_list2.default, { itemsList: filteredItems, allItemsList: itemsList, onListUpdate: this.props.onListUpdate.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return ListWithHeader;
	}(_react.Component);
	
	exports.default = ListWithHeader;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _listItem = __webpack_require__(7);
	
	var _listItem2 = _interopRequireDefault(_listItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = function (_Component) {
	    _inherits(List, _Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	
	        _this.state = {
	            'itemsList': _this.props.itemsList || []
	        };
	        return _this;
	    }
	
	    _createClass(List, [{
	        key: 'render',
	        value: function render() {
	            var self = this;
	            var itemsList = this.props.itemsList;
	            return _react2.default.createElement(
	                'ul',
	                null,
	                itemsList.map(function (item, index) {
	                    return _react2.default.createElement(_listItem2.default, { key: index, itemDesc: item, allItemsList: self.props.allItemsList, onListUpdate: self.props.onListUpdate.bind(self) });
	                })
	            );
	        }
	    }]);
	
	    return List;
	}(_react.Component);
	
	exports.default = List;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ListItem = function (_Component) {
	    _inherits(ListItem, _Component);
	
	    function ListItem() {
	        _classCallCheck(this, ListItem);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	
	        _this.state = {
	            'itemDesc': _this.props.itemDesc
	        };
	        return _this;
	    }
	
	    _createClass(ListItem, [{
	        key: 'getNodeIndex',
	        value: function getNodeIndex() {
	            var index = 0;
	            var itemsList = this.props.allItemsList;
	            while (itemsList[index].id !== this.props.itemDesc.id) {
	                index++;
	            }
	            return index;
	        }
	    }, {
	        key: 'moveElement',
	        value: function moveElement(array, oldIndex, newIndex) {
	            var dragElement = array.splice(oldIndex, 1)[0];
	            console.log(array);
	            array.splice(newIndex, 0, dragElement);
	            console.log(array);
	        }
	    }, {
	        key: 'onDrop',
	        value: function onDrop(event) {
	            var target = event.target;
	            var dragElementData = JSON.parse(event.dataTransfer.getData("data"));
	            var dragElemNewIndex;
	            var dragElementOldIndex = dragElementData.index;
	
	            if (target.classList.contains('list-item')) {
	                dragElemNewIndex = this.getNodeIndex();
	                var status = this.props.status;
	                var itemsList = this.props.allItemsList;
	                this.moveElement(itemsList, dragElementOldIndex, dragElemNewIndex);
	                this.props.onListUpdate();
	            }
	            event.preventDefault();
	        }
	    }, {
	        key: 'dragStart',
	        value: function dragStart(event) {
	            var dataObject = {
	                'text': this.props.itemDesc.id,
	                'index': this.getNodeIndex(event.target)
	            };
	            event.dataTransfer.setData('data', JSON.stringify(dataObject));
	        }
	    }, {
	        key: 'dragOver',
	        value: function dragOver(event) {
	            event.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var itemDesc = this.props.itemDesc.itemName;
	            return _react2.default.createElement(
	                'li',
	                { draggable: 'true',
	                    className: 'list-item',
	                    onDragStart: this.dragStart.bind(this),
	                    onDragOver: this.dragOver.bind(this),
	                    onDrop: this.onDrop.bind(this) },
	                itemDesc
	            );
	        }
	    }]);
	
	    return ListItem;
	}(_react.Component);
	
	exports.default = ListItem;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map