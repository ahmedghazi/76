// remap jQuery to $
(function($){})(window.jQuery);
//$.noConflict();

var dw,dh,ww,wh,
	_Btn,
	_ScrollController,
	_NavigateController,
	_MetiersController,
	arr_slide = [];

/* trigger when page is ready */
$(document).ready(function (){

	format();
	window.addEventListener("orientationchange", function() {
		format();
	}, false);
	
});

$(window).load(function() {
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
}

/**********************

**********************/
function init_vendors(){

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




