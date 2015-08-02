//dialog (Modal)
class Dialog{
	constructor( selector ) {
		this.Overlay;
        this.el = $(selector);
    }

    unbindEvent() {
    	$('.close').unbind('click');
    	$('.rui-overlay').unbind('click');
    }

    initEvent() {
    	var hideFunc = () => {
    		return this.hide();
    	};
    	$('.close').each(function(){
    		$(this).click(function(e){
    			e.preventDefault();
    			hideFunc();
    		});
    	});

    	$('.rui-overlay').on('click',function(e){
    		e.preventDefault();
    		hideFunc();
    	});

		$('.rui-overlay div').click(function(e) {
			e.stopPropagation();
		});
    }

    //show dialog
	show() {
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
	hide() {
		this.unbindEvent();
		this.el.fadeOut('fast',function(){
			$(this).removeClass('rui-overlay');
		});
		
		$('body').removeClass('dialog-open');
	}
}

const dialog = selector => new Dialog(selector);