/**********************
    insertPageHtml
**********************/
(function($) {
    $.fn.insertPageHtml = function(options) {
        //the option is an array : {html:the ajax html, scripts: the scripts that already are in the html, customData:any data you associated to this state during navigate} 
        //switch elements
//console.log(options)
        //var bdc = $("#bdc", options.html).attr("class");
        $("#modal_close").click();
        reset_anime();

        $("body").attr("class", options.class);

        _MetiersController.reset();

        $('head').html($("head", options.head).html());
        $('section').scrollLeft(0);
        $('section').html($("section", options.html).html());
        $("#loader").fadeOut();

        handle_anime();

        $(this).trigger({type:"finishrefreshinsert"});
        
        clearTimeout(timer);
        timer = setTimeout(function(){
            $('section').css({opacity:1});
            $('#burger').click();
            _ScrollController.handleArrArticles();
        },400);

    };
})(jQuery);

var NavigateController = function() {
    var _this       = this;
            
    this.init = function(){
        _this.bindEvents();

        if(window.location.hash){
            //$('html,body').animate({ scrollTop: $(window.location.hash).position().top }, 400);
            console.log("hashchange : "+window.location.hash);
            //console.log(timer)
            //clearTimeout(timer);
            setTimeout(function(){
                if(window.location.hash != "#")_ScrollController.goToHash();
            },1000);
        }
    };

    this.bindEvents = function(){

        //
        /*
        $.navigate.init({
            //ajaxLinks:'a:not(.btn_popup)[rel!="external"][target!="_blank"][data-role!="hash"], .ajaxLink',
            ajaxLinks:'a:not(.btn_popup)[rel!="external"][target!="_blank"][data-role!="hash"][data-role!="internal"]',
            defaultInsertFunction:'insertPageHtml'
        });
        */
        
        $(window).on( 'hashchange', function(){
            var hash = window.location.hash;
            //console.log(hash)
            //console.log("hashchange : "+window.location.hash);
            if(hash != "")_ScrollController.goToHash();

            clearTimeout(timer);
            timer = setTimeout(function(){
                if(hash != "")if($('#burger').hasClass("toggled"))$('#burger').click();
            },400);
        });


        
    };



};

