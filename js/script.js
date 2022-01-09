$(document).ready(function(){  

    var menuBtn = $("#menuBtn");
    var menuDiv = $("#menu");
    var black = $("#black");
    var menuCancelBtn = $("#menuCancelBtn");
    menuBtn.click(function(){
        menuBtn.css("display","none");
        menuDiv.css("display","block");
        black.css("display","block");
    });
    menuCancelBtn.click(function(){
        menuBtn.css("display","block");
        menuDiv.css("display","none");
        black.css("display","none");
    })
});