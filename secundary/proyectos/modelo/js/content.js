

var content = document.querySelector(".content");






var archivo = new XMLHttpRequest();


archivo.open("GET","js/data/dirGalery.html",false);
archivo.send(null);

var achivoCargado = archivo.responseText;


content.innerHTML = achivoCargado;
