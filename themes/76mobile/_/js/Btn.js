var Btn = function() {
	var _this 		= this,
		delay 		= 20;
			
	this.bindEvents = function(){
		var toggled = 0;

		$('header').mouseenter(function(e){
			clearTimeout(timer)
		});

		$('#burger').click(function(){
			$(this).toggleClass('toggled');
			$("#menu").toggleClass("toggled");

			setTimeout(function(){
				if($("#menu").hasClass("toggled")){
					_this.animateOut();
				}else{
					_this.animateIn();
				}
			},100);
		});

		$(document).keyup(function(e) {
			if (e.keyCode == 27) $('#modal_close').click();   // esc
		});

		$("html").on("click","#modal_close", function(){
			$("#modal").addClass("vhidden");
		});

		$("html").on("click",".btn_diapo", function(e){
			e.preventDefault();

			$("#loader").removeClass("vhidden");

			var id = $(this).data("href");
				id = id.split("-")[1]
			var surtitre = $(this).data("surtitre");
			var titre = $(this).data("titre");
			console.log(id)
			var o = {
				action: "get_diapo_by_id",
				id: id,
				surtitre: surtitre,
				titre: titre
			}
			//var hash = window.location.hash;
			//console.log(window.location)
			//window.location.href = window.location.href+"&diapo="+id;
			_this.loadModalContent(o);
		});

		$("html").on("click", ".btn_video", function(e){
			e.preventDefault();

			//$("#loader").removeClass("vhidden");

			//var url = $(this).attr("href").split("-")[1];
			//console.log(url)
		});
	};

	this.animateIn = function(){
		console.log("animateIn")
		var d = 0;
		$(".l0").each(function(idx,el){
			setTimeout(function(){
				$(el).removeClass("l0")
			},d);
			d+=delay*2;
		});
	};

	this.animateOut = function(){
		console.log("animateOut")
		var d = 0;
		$("#menu li").each(function(idx,el){
			setTimeout(function(){
				$(el).addClass("l0")
			},d);
			d+=delay*2;
		});
	};

	this.loadModalContent = function(o){
		console.log(o)
        $.ajax({
			url: ajaxUrl,
			type:'POST',
			data: o,
			success: function(html){
				console.log(html)
				$("#modal_slider").html(html);
				$("#modal_surtitre").text(o.surtitre);
				$("#modal_titre").text(o.titre);
				_this.revealModal(o);
			}
		});
	};

	this.revealModal = function(o){
		$("#loader").addClass("vhidden");
		$("#modal").removeClass("vhidden");
		
		if($(".diapo_item").length > 1){

			$('.diapo').cycle({ 
				fx:     'scrollHorz', 
				speed:   600, 
				//timeout: 0,
				//pause:   1,
				easing:  'easeInOutQuint',
				//timeout: 2500, 
				next:   '#modal_next', 
				prev:   '#modal_prev',
				before:function(el_in,el_out,opt){

				},
				after:function(el_in,el_out,opt){

				},
				end:function(){

				}
			});
		}
	}
}