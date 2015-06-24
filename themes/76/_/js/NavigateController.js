/**********************
    insertPageHtml
**********************/
(function($) {
    $.fn.insertPageHtml = function(options) {
        //the option is an array : {html:the ajax html, scripts: the scripts that already are in the html, customData:any data you associated to this state during navigate} 
//console.log(options)
        $("#modal_close").click();
        reset_anime();

        $("body").attr("class", options.class);

        _MetiersController.reset();
        
//console.log(options.head)
        $('head').html($("head", options.head).html());
        $('section').scrollLeft(0);
        $('section').html($("section", options.html).html());

        $("#loader").fadeOut();
        $('section').removeClass("section_loading");

        $(this).trigger({type:"finishrefreshinsert"});
        
        clearTimeout(timer);
        timer = setTimeout(function(){
            if($('#burger').hasClass("toggled"))$('#burger').click();
            _ScrollController.handleArrArticles();
            handle_anime();
        },400);

    };
})(jQuery);

var NavigateController = function() {
	var _this		= this;
			
	this.init = function(){
		_this.bindEvents();

        if(window.location.hash){
            //$('html,body').animate({ scrollTop: $(window.location.hash).position().top }, 400);
            //console.log("hashchange : "+window.location.hash);
            
            clearTimeout(timer);
            timer = setTimeout(function(){
                _ScrollController.goToHash();
            },1000);
        }
	};

    this.bindEvents = function(){
        $.navigate.init({
            //ajaxLinks:'a:not(.btn_popup)[rel!="external"][target!="_blank"][data-role!="hash"], .ajaxLink',
            ajaxLinks:'a:not(.btn_popup)[rel!="external"][target!="_blank"][data-role!="hash"]',
            defaultInsertFunction:'insertPageHtml'
        });

        $(window).on( 'hashchange', function(){
            var hash = window.location.hash;
            //console.log("hashchange : "+window.location.hash);
            _ScrollController.goToHash();

            clearTimeout(timer);
            timer = setTimeout(function(){
                if($('#burger').hasClass("toggled"))$('#burger').click();
            },400);
        });

        $("html").on("failrefresh", function(e){
            console.log(e)
        });
        
    };



};

