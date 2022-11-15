let kafelki = document.querySelectorAll(".kafelki");

for(let i = 0; i < kafelki.length; i++){
    kafelki[i].addEventListener('mouseover', () =>{
        switch(i){
            case 0:
                kafelki[i].innerHTML = "<h3>M2</h3> Eksploatacja i serwisowanie urządzeń techniki komputerowej";
                break;
            case 1:
                kafelki[i].innerHTML = "<h3>M9</h3> Programowanie aplikacji internetowych";
                break;
            case 2:
                kafelki[i].innerHTML = "<h3>M5</h3> Administrowanie sieciowymi systemami operacyjnymi";
                break;
            case 3:
                kafelki[i].innerHTML = "<h3>M8</h3> Projektowanie i administrowanie bazami danych";
                break;
        }
    })
}

for(let i = 0; i < kafelki.length; i++){
    kafelki[i].addEventListener('mouseout', () =>{
        switch(i){
            case 0:
                kafelki[i].innerHTML = "<img src='image/m2.png'>"
                break;
            case 1:
                kafelki[i].innerHTML = "<img src='image/M9.png'>"
                break;
            case 2:
                kafelki[i].innerHTML = "<img src='image/m5.png'>"
                break;
            case 3:
                kafelki[i].innerHTML = "<img src='image/m8.png'>"
                break;
        }
    })
}
let check = 0
let kwal = document.getElementsByClassName("kwal")
document.getElementById("kwalButton").onclick = () => {
    for(let i =0 ; i< kwal.length ; i++){
        kwal[i].style.transform = "rotate(360deg)";
        kwal[i].style.fontSize = "30px"
        kwal[i].style.paddingTop = "200px"
        if(i == 0){
            kwal[i].innerHTML = "INF.02 (w trakcie)"
        }
        else if(i == 1){
            kwal[i].innerHTML = "INF.03 (w trakcie)"
        }
    }
    check = 1
}

document.getElementById("kwalButton").onmouseout = () => {
    if(check != 0 ){
        for(let i =0 ; i< kwal.length ; i++){
            kwal[i].style.transform = "rotate(-360deg)";
            kwal[i].innerHTML = "?"
            kwal[i].style.fontSize = "150px"
            kwal[i].style.paddingTop = "130px"
        }
        check = 0
    }
}
