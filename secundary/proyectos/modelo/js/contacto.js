

var footer = document.querySelector("footer");






var archivo = new XMLHttpRequest();


archivo.open("GET","js/data/infoFooter.html",false);
archivo.send(null);

var achivoCargado = archivo.responseText;


footer.innerHTML = achivoCargado;
