var MetiersController = function() {
	var _this = this,
		delay = 20;
			
	this.init = function(){
		//_this.animateIn();
		
	};

	this.bindEvents = function(){
		$(".map_item").hover(function(e){
			$(".map_item").attr('class','map_item');
			$(this).attr('class','map_item hover');
			var id = $(this).attr("id");
			$(".agence_metier").hide();
			$("#art-"+id).show()
		}, function(){
		   //$(this).attr('class','map_item');
		});

		//$(".map_item").eq(0).trigger("mouseenter");
		$("#social").trigger("mouseenter");
	};

	this.animateIn = function(){
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

	

};