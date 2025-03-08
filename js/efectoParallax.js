window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    // tenemos el valor de la imagen 
    var elemento1 = document.getElementById("icon_idea");
    
    elemento1.style.bottom = posicion * 0.2 + "px";

}