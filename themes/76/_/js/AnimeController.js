var AnimeController = function() {
	var _this		= this;
			
	this.init = function(){
		//_this.bindEvents();

	};

    this.animateBgByMouse = function(div){
        var gap = 50,
            x = ww/2,
            y = wh/2,
            imgW,imgH;

        var sourceImage = $(div).css("background-image").slice(4,$(div).css("background-image").length-1);
        var img = new Image();
        img.onload = function(){
            imgW = this.width;
            imgH = this.height;
            console.log(imgW,imgH)
        };
        img.src = sourceImage;

        
//console.log(x,y);
        $(div).on("mousemove", function(e) {


var offset = $(this).offset();
            var xPos = e.pageX - offset.left;
            var yPos = e.pageY - offset.top;

     
            var percentX = -Math.round(xPos / $(this).width() * 100);
            var percentY = -Math.round(yPos / $(this).height() * 100);
            $(this).css("background-position", percentX+"px "+percentY+"px");
            
        });
    };



};

