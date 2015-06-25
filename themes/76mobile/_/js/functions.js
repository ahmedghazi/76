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

	//FastClick.attach(document.body);
	
	
	setTimeout(function() { window.scrollTo(0, 1) }, 1000);


	window.addEventListener("orientationchange", function() {
		format();
	}, false);
	
});

$(window).load(function() {
	format();	
	init_app();

});

$(window).resize(function() {
	format();
});

function hideBar(){
	var doScrollTop, pageFill;

	pageFill = null;

	if ((document.body.clientHeight - 75) < window.innerHeight) {
	  pageFill = document.createElement("div");
	}

	pageFill.style.height = (window.innerHeight - document.body.clientHeight + 75) + "px";

	document.getElementsByTagName("body")[0].appendChild(pageFill);

	doScrollTop = setInterval(function() {
	  var pageYOffset;
	  if (document.body) {
	    clearInterval(doScrollTop);
	    scrollTo(0, 1);
	    pageYOffset = 0;
	    scrollTo(0, (pageYOffset === document.body.scrollTop ? 1 : 0));
	    return setTimeout(function() {
	      if (pageFill) {
	        return document.getElementsByTagName("body")[0].removeChild(pageFill);
	      }
	    }, 1000);
	  }
	}, 200);
}
/**********************

**********************/
function init_app(){
	//init_vendors();
	init_objects();
	
	//reveal();

	if(getCookie("visited")){
		reveal();
		handle_anime();
	}else{
		setCookie("visited", true, 365);
		clearTimeout(timer);

		$("#prehomeAnime").css({"background-image": "url("+templateDir+"/_/img/logo-soixanteseize-anime.gif)"});
	    timer = setTimeout(function(){
	    	reveal();

			clearTimeout(timer);
		    timer = setTimeout(function(){
		        handle_anime();
		    },1000);

	    },2400);
    }
//$('#burger').click();

	
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
function reveal(){
	$("#wrapper").css({opacity:0});
	$("#wrapper").removeClass('vhidden').animate({opacity:1});

	$("#prehome").fadeOut();
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
		/*if($("article")){
			console.log($("article").eq(0).css())
			var sourceImage = $("article").eq(0).css("background-image").slice(4,$("article").eq(0).css("background-image").length-1);
			_ScrollController.handleDominanteColorByUrl(sourceImage);
		}*/
		
		break;

	}
		
		//$(".page_controls").css({color:"#ffffff"});
		//$(".page_controls .stripes div").css({"background-color":"#ffffff"});
		//$("#burger:not(.toggled) div").css({"background-color":"#ffffff"});
		//return
	if($("body").hasClass('page-template-page-client')){
		$(".page_controls").css({color:"#ffffff"});
		$(".page_controls .stripes div").css({"background-color":"#ffffff"});
		$("#burger:not(.toggled) div").css({"background-color":"#ffffff"});
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


function format(){
	dw = $(document).width();
	dh = $(document).height();

	ww = $(window).width();
	wh = $(window).height();

//console.log(wh)
	$("body,#wrapper").css({width:ww})
	if(wh == 480){
		$("body,#wrapper").css({height:wh+50})
		setTimeout(function() { window.scrollTo(0, 1) }, 1000);
	}
/*
	clearTimeout($.data(this, 'formatTimer'));
    $.data(this, 'formatTimer', setTimeout(function() {
    	//console.log("end resize");
    	//if(window.location.hash && _ScrollController)_ScrollController.goToHash();
    }, 50));
*/
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




