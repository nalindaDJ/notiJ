//NotiJ v0.1 by Nalinda Jayasinghe

(function( $ )
	{	
		$.notij=function(msg, options, callback) { return $.fn.notij(msg, options, callback); };

		$.fn.notij = function(msg, options, callback){

			var settings={
				'speed': 'fast',
				'multiple': true,
				'autoclose': 5000,
				'onfocusdelay': false   
			};
			//adding DOM html to msg if dom specified.
			if(!msg){msg=this.html();}
			//merging settings with given options
			if(options){ $.extend(settings,options);}

			var display=true;
			var multiple="no";

			var uniquid=Math.floor(Math.random()*99999);

			$('.notij-msg').each(function(){
				if($(this).html()==msg && $(this).is(':visible')){
					multiple="yes";
					if(!settings['multiple']){
						display = false;
					}
				}
				if($(this).attr('id')==uniquid){
					uniquid=Math.floor(Math.random()*99999);
				}
			});

			//adding main layout
			if(!$('body').find('.notij-que').html()){
				$('body').append('<div class="notij-que"></div>');
			}

			if(display){
				$('.notij-que').prepend('<div class="notij" id="' + uniquid + '"></div>');
				$('#' + uniquid).append('<span class="notij-close" rel="' + uniquid + '">x</span>');
				$('#' + uniquid).append('<div class="notij-msg" rel="' + uniquid + '">' + msg + '</div>');

				var height=$('#'+uniquid).height();
				$('#'+uniquid).css('height',height);

				$('#'+uniquid).slideDown(settings['speed']);
				display=true;
			}

			$('.notij').ready(function(){
				if(settings['autoclose']){
					$('#'+uniquid).delay(settings['autoclose']).fadeOut(settings['speed']);
				}
			});

			$('.notij-close').click(function(){
				$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
			});

			var result={
				"id": uniquid,
				"multiple": multiple  
			};
			
			if(callback){
				callback(result);
			} else{
				return(result);
			}

		}

})( jQuery );