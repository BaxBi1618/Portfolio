document.getElementById("my_name").onmouseover = function(){
    document.getElementById("my_name").style.backgroundColor = "#e5383b"
}
document.getElementById("my_name").onmouseout = function(){
    document.getElementById("my_name").style.backgroundColor = "#131313"
}

$("#my-photo").mouseover(function(){
    $("#my-photo").css("background-image","url(image/me1.jpg)");
});
$("#my-photo").mouseout(function(){
    $("#my-photo").css("background-image","url(image/me.jpg)");
});