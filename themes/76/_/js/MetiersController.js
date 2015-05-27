var MetiersController = function() {
	var _this = this,
		delay = 20;
			
	this.init = function(){
		//_this.animateIn();
		
	};

	this.bindEvents = function(){
		$(".map_item").mouseenter(function(e){
			$(".map_item").attr('class','map_item');
			$(this).attr('class','map_item hover');
			var id = $(this).attr("id");
			
			_this.metierAnimeOut(id);
			
		});

		//$(".map_item").eq(0).trigger("mouseenter");
		$("#social").trigger("mouseenter");
	};

	this.animateIn = function(){
		$(".page_controls").css({color:"#ffffff"});
		$(".page_controls .stripes div").css({"background-color":"#ffffff"});
		$("#burger div").css({"background-color":"#ffffff"});

		$(".map svg line").css({opacity:0});
		$(".map svg path").css({opacity:0});
		$(".map svg text").css({opacity:0});
		var d = 0;
		$(".map svg line").each(function(index, el) {
			_this.animateInEl(d,this);
			d+=delay;
		});	

		
		$(".map svg path").each(function(index, el) {
			_this.animateInEl(d,this);
			d+=delay*1;
		});

		
		$(".map svg text").each(function(index, el) {
			_this.animateInEl(d,this);
			d+=delay*1;
		});	

		setTimeout(function(){
			_this.bindEvents();
		},d);
		
	};

	this.animateInEl = function(d,el){
		//console.log(d)
		$(el).delay(d).animate({opacity:1});
	};

	this.metierAnimeOut = function(id){
		var d = 0;
		$(".agence_metier.show .agence_metier_content").children("div,h2").each(function(index, el) {
			//console.log(index, el);
			setTimeout(function(){
				$(el).addClass('slideRight');
			},d);
			d += delay*2;
			console.log(d);
		});


		setTimeout(function(){
			$(".agence_metier").removeClass("show");
			_this.metierAnimeIn(id);
		},d);
	};

	this.metierAnimeIn = function(id){
		$("#art-"+id).addClass("show");
		var d = 0;
		$("#art-"+id).find("div,h2").addClass('slideRight');
		$("#art-"+id).find(".slideRight").each(function(index, el) {
			
			setTimeout(function(){
				$(el).removeClass('slideRight');
			},d);
			d += delay*2;
			
		});
	};

	

};