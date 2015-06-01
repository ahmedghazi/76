var Btn = function() {
	var _this 		= this;
			
	this.bindEvents = function(){
		var toggled = 0;

		$('header').mouseenter(function(e){
			clearTimeout(timer)
		});

		$('#burger').click(function(){
			$(this).toggleClass('toggled');
			$("#menu").toggleClass("toggled");
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
			console.log(id)
			var o = {
				action: "get_diapo_by_id",
				id: id,
				surtitre: "surtitre",
				titre: "titre"
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

	this.loadModalContent = function(o){
		console.log(o)
        $.ajax({
			url: ajaxUrl,
			type:'POST',
			data: o,
			success: function(html){
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