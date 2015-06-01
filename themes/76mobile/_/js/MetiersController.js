var MetiersController = function() {
	var _this = this,
		delay = 20;
			
	this.init = function(){
		//_this.animateIn();
		
	};

	this.bindEvents = function(){
		/*$(".map_item").mouseenter(function(e){
			$(".map_item").attr('class','map_item');
			$(this).attr('class','map_item hover');
			var id = $(this).attr("id");
			
			//_this.metierAnimeOut(id);
			
		});*/

		$(".map svg > g").mouseenter(function(e){
			$(".map svg line,.map svg text").attr("class","");
			var id = $(this).data("rel");
			$(this).find("text,line").attr('class', 'rollover');
			$("#"+id).attr('class', 'rollover');
			_this.metierAnimeOut(id);

		}).mouseleave(function(event) {
			$(".map svg line,.map svg text").attr("class","");
		});

		//$(".map_item").eq(0).trigger("mouseenter");
		//$("#trade").trigger("mouseenter");
		_this.metierAnimeOut("brand-design");
	};

	this.animateIn = function(){
		$(".page_controls").css({color:"#ffffff"});
		$(".page_controls .stripes div").css({"background-color":"#ffffff"});
		$("#burger div").css({"background-color":"#ffffff"});

		$(".map svg line").css({opacity:0});
		$(".map svg path").css({opacity:0});
		$(".map svg text").css({opacity:0});
		
		var d = 0;

		$(".map svg text").each(function(index, el) {
			_this.animateInEl(d,this);
			d+=delay*2;
		});	

		$(".map svg line").each(function(index, el) {
			_this.animateInEl(d,this);
			d+=delay/4;
		});	

		
		$(".map svg path").each(function(index, el) {
			_this.animateInEl(d,this);
			d+=delay/8;
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
				$(el).addClass('slideBottom');
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
		console.log(id)
		$("#art-"+id).addClass("show");
		var d = 0;
		$("#art-"+id).find("div,h2").addClass('slideBottom');
		$("#art-"+id).find(".slideBottom").each(function(index, el) {
			
			setTimeout(function(){
				$(el).removeClass('slideBottom');
			},d);
			d += delay*2;
			
		});
	};

	this.reset = function(){
		$(".map svg line").css({opacity:0});
		$(".map svg path").css({opacity:0});
		$(".map svg text").css({opacity:0});
		$(".agence_metier.show .agence_metier_content").children("div,h2").addClass('slideBottom');
	};

};