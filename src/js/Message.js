// message js
class Message {
	//clear all toaster messages
	clearToasters(){
		$('.rui-toaster').remove();
	}

	toaster(option){
		let icon;
		let $toast;
		let $closeLink;
		let $ruiMsg;
		const title = option.title;
		const body = option.body;
		const type = option.type;
		const autoClose= option.autoClose;

		//clear all toasters
		this.clearToasters();

		//creating toaster
		$toast = $('<div></div>').addClass('rui-toaster');
		//toaster close button
		$closeLink = $('<a></a>').attr('href','#').addClass('close').html('<i class="material-icons">&#xE5CD;</i>');

		//handling close link button
		$closeLink.click(function(e) {
			e.preventDefault();
			$toast.remove();
		});

		//toaster msg
		const msgClass = `rui-message message-${type}`;
		$ruiMsg = $('<div></div>').addClass(msgClass);

		//message icon generate
		switch(type) {
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
		const msgCont = `<div class="msg-icon left">
							${icon}
						</div>
						<div class="msg-content left">
							<h4 class="title">${title}</h4>
							<p class="body">${body}</p>
						</div>`;

		$ruiMsg.append($closeLink);
		$ruiMsg.append(msgCont);
		$toast.append($ruiMsg);
		$('body').append($toast);

		//timeout auto close after 4Sec
		if(autoClose === true){
			setTimeout(()=>{
				$toast.remove();
			}, 4000);
		}
		
	}
}

const message = new Message();