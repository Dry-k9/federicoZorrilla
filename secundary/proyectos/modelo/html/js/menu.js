
 
 function desplegarMenu(){
   
  var barra = document.querySelector(".barra");
  
  
  
  barra.innerHTML="<div class='menu-desplegado'><p class='boton-salir' onclick='retraerMenu()'> x </p> <div class='items-menu'> <a href='../index.html'>home</a>  <a href='galeria.html'>galeria</a>  <a href='sobreMi.html'>sobre mi</a>  <a href='#pie' onclick='retraerMenu()'>contactame</a> </div></div>";
  
 }
 
 
 
 function retraerMenu(){
   
   
  var barra = document.querySelector(".barra");
  
  
  barra.innerHTML='<div class="boton-menu" onclick="desplegarMenu()"> menu  </div>';
  
 }
 
 
 
  function reajustar(){
   
    if(screen.width>=700){
      
        var barra = document.querySelector(".barra");
  
  
  
  barra.innerHTML=" <div class='items-menu_pc'> <div><a href='../index.html'>home</a></div>  <div><a href='galeria.html'>galeria</a></div>  <div><a href='sobreMi.html'>sobre mi</a></div>  <div><a href='#pie' onclick='retraerMenu()'>contactame</a></div> </div></div>";
    
    }
  }
  
  
 
 window.addEventListener("load", reajustar, false);
 
 