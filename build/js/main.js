//dialog (Modal)
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Dialog = (function () {
	function Dialog(selector) {
		_classCallCheck(this, Dialog);

		this.Overlay;
		this.el = $(selector);
	}

	_createClass(Dialog, [{
		key: 'unbindEvent',
		value: function unbindEvent() {
			$('.close').unbind('click');
			$('.rui-overlay').unbind('click');
		}
	}, {
		key: 'initEvent',
		value: function initEvent() {
			var _this = this;

			var hideFunc = function hideFunc() {
				return _this.hide();
			};
			$('.close').each(function () {
				$(this).click(function (e) {
					e.preventDefault();
					hideFunc();
				});
			});

			$('.rui-overlay').on('click', function (e) {
				e.preventDefault();
				hideFunc();
			});

			$('.rui-overlay div').click(function (e) {
				e.stopPropagation();
			});
		}

		//show dialog
	}, {
		key: 'show',
		value: function show() {
			this.el.children('.dialog-content').css({
				left: this.leftPos,
				top: '4em'
			});
			this.el.addClass('rui-overlay');
			this.el.fadeIn('fast');
			this.initEvent();
			$('body').addClass('dialog-open');
		}

		//hide dialog
	}, {
		key: 'hide',
		value: function hide() {
			this.unbindEvent();
			this.el.fadeOut('fast', function () {
				$(this).removeClass('rui-overlay');
			});

			$('body').removeClass('dialog-open');
		}
	}]);

	return Dialog;
})();

var dialog = function dialog(selector) {
	return new Dialog(selector);
};
// message js
'use strict';

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

var message = new Message();
// Tabs functions
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tab = (function () {
	function Tab() {
		_classCallCheck(this, Tab);

		this.init();
	}

	_createClass(Tab, [{
		key: 'unbindTabLinks',
		value: function unbindTabLinks() {
			$('.rui-nav li a').unbind('click');
		}
	}, {
		key: 'resetActiveTab',
		value: function resetActiveTab(el) {
			el.closest('.rui-nav').children('li').each(function () {
				$(this).children('a').removeClass('active');
			});
		}
	}, {
		key: 'resetAllTabpanes',
		value: function resetAllTabpanes(el) {
			el.closest('.rui-nav').next('.rui-tab-content').children('div').removeClass('active');
		}
	}, {
		key: 'init',
		value: function init() {
			this.unbindTabLinks();
			$('.rui-nav li a').each(function () {
				var thisEl = $(this);

				thisEl.click(function (e) {
					e.preventDefault();
					tab.resetActiveTab(thisEl);
					thisEl.addClass('active');

					//remove active class form other tabs
					tab.resetAllTabpanes(thisEl);

					//enable related tab
					var thisAttr = thisEl.attr('href');
					$('' + thisAttr).addClass('active');
				});
			});
		}
	}]);

	return Tab;
})();

var tab = new Tab();
// sidebar js
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sidebar = function Sidebar() {
	_classCallCheck(this, Sidebar);
};

var sidebar = new Sidebar();