$(document).ready(function(){  
    
    function calculateToBottom(){
        var heightOfScreen = $(window).height();
        console.log(heightOfScreen);
        var mainHeight = $("main").height()
        console.log(mainHeight);
        var toEnd = heightOfScreen - mainHeight;
        var footer = $("footer");
        var final = toEnd-footer.height()-68;
        console.log(final)
        if(final > 1){
        footer.css("margin-top",final + "px");
        }
    }

    calculateToBottom(); 
    
    $(window).resize(function() {
        calculateToBottom(); 
      });
});