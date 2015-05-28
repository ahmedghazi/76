/**********************
    insertPageHtml
**********************/
(function($) {
    $.fn.insertPageHtml = function(options) {
        //the option is an array : {html:the ajax html, scripts: the scripts that already are in the html, customData:any data you associated to this state during navigate} 
        //switch elements

        var bdc = $("#bdc", options.html).attr("class");
        $("body").attr("class", bdc);

        $('section').scrollLeft(0);
        $('section').html($("section", options.html).html());
        $('section').animate({opacity:1});

//

        $(this).trigger({type:"finishrefreshinsert"});
        
        timer = setTimeout(function(){
            $('#burger').click();
            _ScrollController.handleArrArticles();
        },2000);

    };
})(jQuery);

var NavigateController = function() {
	var _this		= this;
			
	this.init = function(){
		_this.bindEvents();

        if(window.location.hash){
            //$('html,body').animate({ scrollTop: $(window.location.hash).position().top }, 400);
            console.log("hashchange : "+window.location.hash);
            _ScrollController.goToHash();
        }
	};

    this.bindEvents = function(){
        $.navigate.init({
            ajaxLinks:'a:not(.btn_popup)[rel!="external"][target!="_blank"][data-role!="hash"], .ajaxLink',
            defaultInsertFunction:'insertPageHtml'
        });

        $(window).on( 'hashchange', function(){
            var hash = window.location.hash;
            if(hash.search("&") != -1){
                var queryParams = $.getQueryParameters();
                if(queryParams.diapo)_Btn.loadModalContent({
                    id:queryParams.diapo,
                    action: "get_diapo_by_id"
                })
                console.log(queryParams)
            }else{
                _ScrollController.goToHash();

                timer = setTimeout(function(){
                    if($('#burger').hasClass("toggled"))$('#burger').click();
                },2000);
            }
            
        });


        
    };



};

