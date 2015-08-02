/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Message = __webpack_require__(1);

	var _Message2 = _interopRequireDefault(_Message);

	var message = new _Message2['default']();

/***/ },
/* 1 */
/***/ function(module, exports) {

	// message js
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Message = (function () {
		function Message() {
			_classCallCheck(this, Message);
		}

		_createClass(Message, [{
			key: 'clearToasters',

			//clear all toaster messages
			value: function clearToasters() {
				$('.rui-toaster').remove();
			}
		}, {
			key: 'toaster',
			value: function toaster(options) {
				var icon = undefined;
				var $toast = undefined;
				var $closeLink = undefined;
				var $ruiMsg = undefined;
				var title = options.title;
				var body = options.body;
				var type = options.type;
				var autoClose = options.autoClose;

				//clear all toasters
				this.clearToasters();

				//creating toaster
				$toast = $('<div></div>').addClass('rui-toaster');
				//toaster close button
				$closeLink = $('<a></a>').attr('href', '#').addClass('close').html('<i class="material-icons">&#xE5CD;</i>');

				//handling close link button
				$closeLink.click(function (e) {
					e.preventDefault();
					$toast.remove();
				});

				//toaster msg
				var msgClass = 'rui-message message-' + type;
				$ruiMsg = $('<div></div>').addClass(msgClass);

				//message icon generate
				switch (type) {
					case 'success':
						icon = '<i class="material-icons">&#xE876;</i>';
						break;
					case 'danger':
						icon = '<i class="material-icons">&#xE888;</i>';
						break;
					case 'warning':
						icon = '<i class="material-icons">&#xE002;</i>';
					default:
						icon = '<i class="material-icons">&#xE88F;</i>';
				}

				//msg content
				var msgCont = '<div class="msg-icon left">\n\t\t\t\t\t\t\t' + icon + '\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="msg-content left">\n\t\t\t\t\t\t\t<h4 class="title">' + title + '</h4>\n\t\t\t\t\t\t\t<p class="body">' + body + '</p>\n\t\t\t\t\t\t</div>';

				$ruiMsg.append($closeLink);
				$ruiMsg.append(msgCont);
				$toast.append($ruiMsg);
				$('body').append($toast);

				//timeout auto close after 4Sec
				if (autoClose === true) {
					setTimeout(function () {
						$toast.remove();
					}, 4000);
				}
			}
		}]);

		return Message;
	})();

	exports['default'] = Message;
	module.exports = exports['default'];

/***/ }
/******/ ]);