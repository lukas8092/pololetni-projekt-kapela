$(document).ready(function(){  
    
    function calculateToBottom(){
        var heightOfScreen = $(window).height();
        console.log(heightOfScreen);
        var mainHeight = $("main").height()
        console.log(mainHeight);
        var toEnd = heightOfScreen - mainHeight;
        var footer = $("footer");
        footer.css("margin-top", toEnd-footer.height()-68+ "px");
    }

    calculateToBottom(); 
    
    $(window).resize(function() {
        calculateToBottom(); 
      });
});