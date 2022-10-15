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
        $("#more-about-me").html("LESS ABOUT ME");
        button_state ++;
    }
    else if(button_state == 1){
        $("#more-about-me").html("MORE ABOUT ME");
        button_state --;
    }
});