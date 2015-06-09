var Btn = function() {
	var _this 		= this,
		delay = 20;
			
	this.bindEvents = function(){
		var toggled = 0;

		$('header').mouseenter(function(e){
			clearTimeout(timer)
		});

		$('#burger').click(function(){
			$(this).toggleClass('toggled');
			$("#menu").toggleClass("toggled");
			$("section").toggleClass("toggled");
			
			setTimeout(function(){
				if($("#menu").hasClass("toggled")){
					_this.animateOut();
				}else{
					_this.animateIn();
				}
			},100);
		});

		$(document).keyup(function(e) {
			console.log(e.keyCode);
			if (e.keyCode == 27) $('#modal_close').click();   // esc
			if (e.keyCode == 37) { // left
			    if( $("#modal").is(":visible") ) $('#modal_prev').click();
			    else $('.page_prev').click();
			}
			if (e.keyCode == 39) { // right
			    if( $("#modal").is(":visible") ) $('#modal_next').click();
			    else $('.page_next').click();
			}
			if (e.keyCode == 32) {
				if( $("#modal").is(":visible") )$('.diapo_play').click();
			}
			
		});

		$("html").on("click","#modal_close", function(){
			$("#modal").fadeOut("fast", function(){
				$("#modal_slider").html("");
			});
		});

		$("html").on("click",".btn_diapo", function(e){
			e.preventDefault();

			$("#loader").fadeIn("fast");

			var id = $(this).data("href"),
				surtitre = $(this).data("surtitre"),
				titre = $(this).data("titre");
				
			var o = {
				action: "get_diapo_by_id",
				id: id,
				surtitre: surtitre,
				titre: titre
			}
			
			_this.loadModalContent(o);
		});

		$("html").on("click", ".btn_video", function(e){
			e.preventDefault();

			$("#loader").fadeIn("fast");

			var thumbnail_video = $(this).data("thumbnail-video"),
				url_video = $(this).data("href"),
				surtitre = $(this).data("surtitre"),
				titre = $(this).data("titre");
			
			var o = {
				thumbnail_video: thumbnail_video,
				url_video: url_video,
				surtitre: surtitre,
				titre: titre
			}

			_this.renderModalContentVideo(o);
		});

		$("html").on("click", ".diapo_play", function(e){
			$(this).addClass('stripes_loading');
			var url_video = $(this).parent().data("video");
			var o = {
				action: "get_oembed_by_url",
				url: url_video
			}
			_this.loadOEmbedVideo(o);
		});

	};

	this.animateIn = function(){
		var d = 0;
		$(".l0").each(function(idx,el){
			setTimeout(function(){
				$(el).removeClass("l0")
			},d);
			d+=delay*2;
		});
	};

	this.animateOut = function(){
		var d = 0;
		$("#menu li").each(function(idx,el){
			setTimeout(function(){
				$(el).addClass("l0")
			},d);
			d+=delay*2;
		});
	};

	this.loadModalContent = function(o){
		//console.log(o)
        $.ajax({
			url: ajaxUrl,
			type:'POST',
			data: o,
			success: function(html){
				$("#modal_slider").html(html);
				$("#modal_surtitre").text(o.surtitre);
				$("#modal_titre").text(o.titre);
				_this.revealModal();
				_this.launchCycle();
			}
		});
	};

	this.loadOEmbedVideo = function(o){
		//console.log(o)
        $.ajax({
			url: ajaxUrl,
			type:'POST',
			data: o,
			success: function(html){
				//$(".diapo_play").removeClass('stripes_loading').hide();
				$(".diapo_item_image").css("background-image","")

				$(".diapo_item").append(html);
				var src = $(".diapo_item iframe").attr("src");
					src += "?autoplay=1";

				$(".diapo_item iframe").attr("src", src);
			}
		});
	};

	this.renderModalContentVideo = function(o){
		$(".diapo_play").show();

		var css = 'style="background-image:url('+o.thumbnail_video+')"';

		var html = '<div class="diapo">';
	        html +=  '<div class="diapo_item" data-video="'+o.url_video+'">';
		        html +=  '<div class="diapo_item_image" '+css+'></div>';
		        html +=  '<div class="diapo_play ">';
		        	html +=  '<div class="diapo_play_fond"></div>';
		        	html +=  '<div class="stripes">';
			        	html +=  '<div class="stripe0 anime"></div>';
			        	html +=  '<div class="stripe1 anime"></div>';
			        	html +=  '<div class="stripe2 anime"></div>';
			        	html +=  '<div class="stripe3 anime"></div>';
			        	html +=  '<div class="stripe4 anime"></div>';
			        	html +=  '<div class="stripe5 anime"></div>';
			        	html +=  '<div class="stripe6 anime"></div>';
		        	html +=  '</div>';
		        html +=  '</div>';
	        html +=  '</div>';
        html +=  '</div>';

        $("#modal_slider").html(html);
		$("#modal_surtitre").text(o.surtitre);
		$("#modal_titre").text(o.titre);


		_this.revealModal();
	};

	this.revealModal = function(){
		if($(".diapo_item").length > 1){
			$(".modal_controls").show();
		}else{
			$(".modal_controls").hide();
		}

		$("#modal").fadeIn();
		$("#loader").fadeOut("fast");
	}

	this.launchCycle = function(){
		if($(".diapo_item").length > 1){

			$('.diapo').cycle({ 
				fx:     'scrollHorz', 
//				fx: 	'scrollHorzZoom',
				containerResize: 1,
    			width: 'fit',
				speed:   600, 
				//timeout: 0,
				//pause:   1,
				easing:  'easeInOutQuint',
				//timeout: 2500, 
				next:   '#modal_next', 
				prev:   '#modal_prev',
				before:function(el_in,el_out,opt){
					$(el_in).addClass("scaleIt")
					$(el_out).removeClass("scaleIt")
				},
				after:function(el_in,el_out,opt){

				},
				end:function(){

				}
			});
		}
	};
}