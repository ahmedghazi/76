var MetiersController = function() {
	var _this = this,
		delay = 20;
			
	this.init = function(){
		_this.reset();
		
	};

	this.bindEvents = function(){
		
		$(".map svg > g").mouseenter(function(e){
			//$(".map svg line,.map svg text").attr("class","");
			//var classs = $(".map svg > g").attr('class');
			//console.log(classs)
			//if(classs == "rollover")$(".map svg > g").attr('class', '')
			//$(this).attr('class', 'rollover')
			//$(this).find("text,line").attr('class', 'rollover');
			var id = $(this).data("rel");
			$("#"+id).attr('class', 'rollover');
			//_this.metierAnimeOut(id);

		}).mouseleave(function(event) {
			//$(".map svg > g.rollover").attr('class', '')
			//$(".map svg line,.map svg text").attr("class","");
		});

		$(".map svg > g").on("click", function(e){
			$(".map svg > g").attr('class', '')
			//$(".map svg line,.map svg text").attr("class","");
			//console.log($(this))
			//$(this).find("text,line").attr('class', 'current-metier');
			$(this).attr('class', 'current_metier')
			var id = $(this).data("rel");
			_this.metierAnimeOut(id);
		});

		_this.metierAnimeOut("metier_intro");
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
				$(el).addClass('slideRight');
			},d);
			d += delay*4;
			//console.log(d);
		});


		setTimeout(function(){
			$(".agence_metier").removeClass("show");
			_this.metierAnimeIn(id);
		},d);
	};

	this.metierAnimeIn = function(id){
		//console.log(id)
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

	this.reset = function(){
		console.log("reset")
		$(".map svg line").css({opacity:0}).removeClass("rollover");
		$(".map svg path").css({opacity:0}).removeClass("rollover");
		$(".map svg text").css({opacity:0}).removeClass("rollover");
		$(".agence_metier.show .agence_metier_content").children("div,h2").addClass('slideRight');
	};
	

};