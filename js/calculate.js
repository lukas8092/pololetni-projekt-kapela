$(document).ready(function(){  
    
    function calculateToBottom(){
        var heightOfScreen = $(window).height();        
        var mainHeight = $("main").height()
        var toEnd = heightOfScreen - mainHeight;
        var footer = $("footer");
        var final = toEnd-footer.height()-68;
        if(final > 1){
        footer.css("margin-top",final + "px");
        }
    }

    calculateToBottom(); 
    
    $(window).resize(function() {
        calculateToBottom(); 
      });
});