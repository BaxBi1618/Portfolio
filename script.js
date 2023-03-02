$("#number-1").mouseover(function(){
    $("#number-1").css("background-image","url(image/me1.jpg)");
});
$("#number-1").mouseout(function(){
    $("#number-1").css("background-image","url(image/me.jpg)");
});

$("#number-2").mouseover(function(){
    $("#number-2").css("background-image","url(image/Desk2.jpg)");
});
$("#number-2").mouseout(function(){
    $("#number-2").css("background-image","url(image/Desk1.jpg)");
});

let button_state = 0;
$("#more-about-me").click(function(){
    if(button_state == 0){
        $("#more-about-me").text("LESS ABOUT ME");
        $("#about-me").css("width","100%");
        $("#about-me").css("min-width","1266px");
        $("#about-me").css("margin","40px 55px 0 35px");
        $("#side-div").css("width","100%");
        $("#side-div").css("min-width","1338px");
        $("#main-div").css("flex-wrap","wrap");
        button_state ++;
    }
    else if(button_state == 1){
        $("#more-about-me").html("MORE ABOUT ME");
        $("#about-me").css("width","26%");
        $("#about-me").css("min-width","508px");
        $("#about-me").css("margin","40px 20px 0 20px");
        $("#side-div").css("width","70%");
        $("#side-div").css("min-width","820px");
        $("#main-div").css("flex-wrap","nowrap");
        
        button_state --;
    }
    $("#div-more-about").fadeToggle(0);
});