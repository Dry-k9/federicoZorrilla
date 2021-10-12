

var content = document.querySelector(".content");






var archivo = new XMLHttpRequest();


archivo.open("GET","js/data/dirGalery.html",false);
archivo.send(null);

var achivoCargado = archivo.responseText;


content.innerHTML = achivoCargado;






  function active(dd){
   
   
   
   var img = document.querySelector("."+dd);
   var descripcion = document.querySelector(".descripcion");
   var content = document.querySelector(".content-galeria");
   
   
   
   content.style.display="none";
   
   descripcion.style.display="flex";
   descripcion.style.alignItems="center";
   descripcion.style.flexDirection="column";
   descripcion.style.background="#444";
   
   
   
   descripcion.innerHTML="<div class='botonSalir' onclick='salir()'> x </div>  <div class='img'><img class='vistaTotal' src="+img.src+'></div>';
   
   
   var cajaImg = document.querySelector(".img");
   var img = document.querySelector("img");
   var botonSalir = document.querySelector(".botonSalir");
   
   
   botonSalir.style.background="#000";
   botonSalir.style.width="100vw";
   botonSalir.style.textAlign="right";
   botonSalir.style.padding="15px";
   botonSalir.style.marginBottom="3px";
   
   
   cajaImg.style.display="flex";
   cajaImg.style.alignItems="center";
   cajaImg.style.justifyContent="center";
   cajaImg.style.width="100%";
   cajaImg.style.minHeight="70vh";
   
  }
  
  
  
  
  
  
  
  function salir(){
    
    
   var descripcion = document.querySelector(".descripcion");
   
   var content = document.querySelector(".content-galeria");
   
   
   content.style.display="grid";
   
   descripcion.style.display="none";
  }