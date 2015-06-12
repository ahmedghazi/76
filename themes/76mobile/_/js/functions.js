// remap jQuery to $
(function($){})(window.jQuery);
//$.noConflict();

var dw,dh,ww,wh,
	_Btn,
	_ScrollController,
	_NavigateController,
	_MetiersController,
	timer,
	arr_slide = [];

/* trigger when page is ready */
$(document).ready(function (){

	
	
	window.addEventListener("orientationchange", function() {
		format();
	}, false);
	
});

$(window).load(function() {
	//FastClick.attach(document.body);
	


	format();
	init_app();
});

$(window).resize(function() {
	format();
});

/**********************

**********************/
function init_app(){
	init_vendors();
	init_objects();
	
	reveal();

	clearTimeout(timer);
    timer = setTimeout(function(){
        handle_anime();
    },1000);
}

/**********************

**********************/
function init_vendors(){
	var scrollingContent = document.querySelector(".menu_scroll");
    new ScrollFix(scrollingContent);
}

/**********************

**********************/
function init_objects(){
	_Btn = new Btn();
	_Btn.bindEvents();

	//var _ViewController = new ViewController();
	//_ViewController.bindEvents();

	_ScrollController = new ScrollController();
	_ScrollController.init();

	_NavigateController = new NavigateController();
	_NavigateController.init();

	_MetiersController = new MetiersController();
	_MetiersController.init();
	
	//$("#burger").click();	
}

/**********************

**********************/
function handle_anime(){
	var path = window.location.pathname;
	//console.log(path)
	switch(path){
		case "/contacts/":
		$(".contact_content").removeClass("slideBottom");
		var sourceImage = $("article").eq(0).css("background-image").slice(4,$("article").eq(0).css("background-image").length-1);
		_ScrollController.handleDominanteColorByUrl(sourceImage);
		break;

		case "/agence/":
		case "/":
		var sourceImage = $("article").eq(0).css("background-image").slice(4,$("article").eq(0).css("background-image").length-1);
		_ScrollController.handleDominanteColorByUrl(sourceImage);
		break;

	}

	if($("body").hasClass('page-template-page-client')){
		$(".page_controls").css({color:"#ffffff"});
		$(".page_controls .stripes div").css({"background-color":"#ffffff"});
		$("#burger div").css({"background-color":"#ffffff"});
	}
}

function reset_anime(){
	var path = window.location.pathname;
	switch(path){
		case "/contacts/":
		$(".contact_content").addClass("slideBottom")
		break;
	}
}

/**********************

**********************/
function reveal(){
	$("#wrapper").css({opacity:0});
	$("#wrapper").removeClass('vhidden').animate({opacity:1});
}

function format(){
	dw = $(document).width();
	dh = $(document).height();

	ww = $(window).width();
	wh = $(window).height();

	clearTimeout($.data(this, 'formatTimer'));
    $.data(this, 'formatTimer', setTimeout(function() {
    	//console.log("end resize");
    	//if(window.location.hash && _ScrollController)_ScrollController.goToHash();
    }, 50));
}


function disable_context_menu(){
	if( !$("body").hasClass("parent-pageid-238") )return;
	$(document).bind("contextmenu",function(e) {
       return false;
    });

    $('img').on('contextmenu', function(e){
	    return false;
	});
}




