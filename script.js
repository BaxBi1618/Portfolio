document.getElementById("my_name").onmouseover = function(){
    document.getElementById("my_name").style.animationName = "name-zoom-in";
}
document.getElementById("my_name").onmouseout = function(){
    document.getElementById("my_name").style.animationName = "name-zoom-out";
}