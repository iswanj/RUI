//dialog (Modal)
class Dialog{
	constructor( selector ) {
		this.Overlay;
        this.el = $(selector);
        this.afterClose = null;
        this.beforeClose = null;
        this.afterOpen = null;
        this.beforeOpen = null;
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
	show(options) {
		//handle dialog optional functions
		this.afterClose = options && options.afterClose;
        this.beforeClose = options && options.beforeClose;
        this.afterOpen = options && options.afterOpen;
        this.beforeOpen = options && options.beforeOpen;

		this.el.children('.dialog-content').css({
			left: this.leftPos,
			top: '4em'
		});
		this.el.addClass('rui-overlay');
		this.beforeOpen != null && this.beforeOpen();
		this.el.fadeIn('fast', ()=>{
			this.afterOpen != null && this.afterOpen();
		});
		this.initEvent();
		$('body').addClass('dialog-open');
	}

	//hide dialog
	hide() {
		this.beforeClose != null && this.beforeClose();
		this.unbindEvent();
		this.el.fadeOut('fast',()=>{
			$(this).removeClass('rui-overlay');
			this.afterClose != null && this.afterClose();
		});
		
		$('body').removeClass('dialog-open');
	}
}

const dialog = selector => new Dialog(selector);