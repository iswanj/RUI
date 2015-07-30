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
		value: function toaster(option) {
			var icon = undefined;
			var $toast = undefined;
			var $closeLink = undefined;
			var $ruiMsg = undefined;
			var title = option.title;
			var body = option.body;
			var type = option.type;
			var autoClose = option.autoClose;

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
// sidebar js
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sidebar = function Sidebar() {
	_classCallCheck(this, Sidebar);
};

var sidebar = new Sidebar();
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