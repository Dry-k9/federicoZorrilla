

var sobreMy = document.querySelector(".sobreMy");






var archivo = new XMLHttpRequest();


archivo.open("GET","js/data/infoSobreMi.html",false);
archivo.send(null);

var achivoCargado = archivo.responseText;


sobreMy.innerHTML = achivoCargado;
