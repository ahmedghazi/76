var ScrollController = function() {
	var _this 		= this,
		midDominante = 170;
			
	this.init = function(){
		_this.bindEvents();
		_this.handleArrArticles();
		
	};

	this.handleArrArticles = function(){
		arr_slide = [];
		if($("article").length > 1){
			$("article").each(function(index, el) {
				arr_slide.push($(this).data("slug"));
				$(this).data("px",$(this).position().left);
			});
			if(!window.location.hash)
				if(arr_slide.length>1)
					window.location.hash = arr_slide[0];

		}
	};

	this.bindEvents = function(){
		$("html").on("click", ".page_prev, #metiers_close", function(e){
			var prev;
			if(window.location.hash){
				var hash = window.location.hash.slice(1, window.location.hash.length)
				var idx = arr_slide.indexOf(hash) - 1 > 0 ? arr_slide.indexOf(hash) - 1 : 0;
				prev = arr_slide[idx];
			}else{
				prev = arr_slide[0];
			}
			window.location.hash = prev;
		});

		$("html").on("click", ".page_next", function(e){
			var next;
			if(window.location.hash){
				var hash = window.location.hash.slice(1, window.location.hash.length)
				var idx = arr_slide.indexOf(hash) + 1 < arr_slide.length ? arr_slide.indexOf(hash) + 1 : arr_slide.length-1;
				next = arr_slide[idx];
			}else{
				next = arr_slide[1];
			}
			window.location.hash = next;
		});

		$section = $('section');
		$projets = $(".projet");

		$section.scroll(function(){
			if($("body").hasClass("page-template-page-client")){
				[].slice.call($projets).forEach(function(el,i){
			        var windowXOffset = $section.scrollLeft(),
			            elBackgrounPos = "-" + (windowXOffset/10) + "px 50%";
			        el.style.backgroundPosition = elBackgrounPos;
			    });
			}
		});
	};

	this.goToHash = function(){		
		var hash = window.location.hash.split("#")[1];

		
		$(".projet").removeClass('current');
		$(".projet#art-"+hash).addClass('current');

		if($("svg").length && hash == "brand")$("#burger").hide();

		$('section').stop().animate({
			scrollLeft: $("#art-"+hash).data("px")
		}, 1000, "easeInOutQuint", function(){
			_this.handleDominanteColor(hash);
			
			var idx = arr_slide.indexOf(hash);
			//console.log(idx);
//			idx>0 ? $(".page_prev").removeClass('slideLeft') : $(".page_prev").addClass("slideLeft");
//			idx<arr_slide.length-1 ? $(".page_next").removeClass('slideRight') : $(".page_next").addClass('slideRight');

			//idx>0 ? $(".page_prev").fadeIn('fast') : $(".page_prev").fadeOut("fast");
			//idx<arr_slide.length-1 ? $(".page_next").fadeIn('fast') : $(".page_next").fadeOut('fast');
			idx>0 ? $(".page_prev").removeClass("slideLeft") : $(".page_prev").addClass("slideLeft");
			idx<arr_slide.length-1 ? $(".page_next").removeClass("slideRight") : $(".page_next").addClass("slideRight");

//_this.handleDominanteColor(hash);


			if($("svg").length && hash == "brand")
				_MetiersController.animateIn();
			else
				$("#burger").show();
		});
	};

	this.handleDominanteColor = function(hash){
		console.log(hash)
		console.log($("#art-"+hash).attr("style"))
		var style = $("#art-"+hash).attr("style");
		if(!style){
			$(".page_controls").css({color:"#ffffff"});
			$(".page_controls .stripes div").css({"background-color":"#ffffff"});
			$("#burger div").css({"background-color":"#ffffff"});
			return;
		};

		var sourceImage = $("#art-"+hash).css("background-image").slice(4,$("#art-"+hash).css("background-image").length-1);
		
		getImageBrightness(sourceImage,function(brightness) {
			//console.log(brightness)
			if(brightness > midDominante){
				$(".page_controls").css({color:"#1c1c1c"});
				$(".page_controls .stripes div").css({"background-color":"#1c1c1c"});
				$("#burger div").css({"background-color":"#1c1c1c"});
			}else{
				$(".page_controls").css({color:"#ffffff"});
				$(".page_controls .stripes div").css({"background-color":"#ffffff"});
				$("#burger div").css({"background-color":"#ffffff"});
			}
		});
	};

	this.handleDominanteColorByUrl = function(sourceImage){
		
		getImageBrightness(sourceImage,function(brightness) {
			//console.log(brightness)
			if(brightness > midDominante){
				$(".page_controls").css({color:"#1c1c1c"});
				$(".page_controls .stripes div").css({"background-color":"#1c1c1c"});
				$("#burger div").css({"background-color":"#1c1c1c"});
			}else{
				$(".page_controls").css({color:"#ffffff"});
				$(".page_controls .stripes div").css({"background-color":"#ffffff"});
				$("#burger div").css({"background-color":"#ffffff"});
			}
		});
	};

}