
  
  function desplegarMenu(){ 
    
    
    
    
    var body = document.querySelector("body");
    
    body.style.overflow ="hidden";
    
    
    
    var portada = document.querySelector(".portada");
   
    
    portada.innerHTML ="<div class='menuDesplegado'>  <div class='botonSalir' onClick='serrarMenu()'> x </div>    <div class='menuItems'>          <a href='../../index.html'> Home </a>          <a href='https://github.com/Dry-k9'> Proyectos </a>         <a href='index.html'> Sobre mi </a>       <a href='https://wa.me/8294937665/?text=saludos'> Contacta me </a>      </div>    </div>";
    
  }
  
  
  
  
  
  
  function reestableserMenu(intervalo){
    
   
    window.clearInterval(intervalo);
    
    
    var body = document.querySelector("body");
    
    body.style.overflow ="auto";
    
    
    
    
    var portada = document.querySelector(".portada");
    
    portada.innerHTML = '<div class="menu"> <div class="botonDesplegar" onClick="desplegarMenu()"> Menu  </div> <div class="cajaSwitch">  <div class="switch"> <div class="interuptor" onclick="cambiarColor()"></div> </div> </div> </div>';
    
    
  }
  
  
  
  
  
  
  
  
  
  function serrarMenu(){
    
    
    
    var menuDesplegado = document.querySelector(".menuDesplegado");
    var botonSalir = document.querySelector(".botonSalir");
    
    
    
    
    
    botonSalir.innerHTML = "";
    
    
    menuDesplegado.id = "animarCierre";
   
   
   
    
    var intervalo = window.setInterval(function(){
      
      
      reestableserMenu(intervalo);
     
     
    }, 250);
   
   
  }
  
  