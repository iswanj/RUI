// Tabs functions
class Tab {
	constructor(){
		this.init();
	}
	unbindTabLink(){
		$('.rui-nav li a').unbind('click');
	}

	resetActiveTab(el){
		el.closest('.rui-nav').children('li').each(function(){
			$(this).children('a').removeClass('active');
		});
	}

	resetAllTabpanes(el){
		el.closest('.rui-nav').next('.rui-tab-content').children('div').removeClass('active');
	}

	init(){
		this.unbindTabLink();
		$('.rui-nav li a').each(function(){
			let thisEl = $(this);

			thisEl.click(function(e){
				e.preventDefault();
				tab.resetActiveTab(thisEl);
				thisEl.addClass('active');

				//remove active class form other tabs
				tab.resetAllTabpanes(thisEl);

				//enable related tab 
				let thisAttr = thisEl.attr('href');
				$(`${thisAttr}`).addClass('active');
			});
		});
	}
}

const tab = new Tab();