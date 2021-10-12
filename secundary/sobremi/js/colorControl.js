
  var modoOscuro = false;


  function cambiarColor(){
    
    
    
    var switche = document.querySelector(".switch");
    var interuptor = document.querySelector(".interuptor");
   
    
    
    if(modoOscuro == false){
      
      switche.style.justifyContent = "flex-start";
      
      
     interuptor.style.imageRendering = "pixelated";
     interuptor.style.background = 'url("../../img/sol.png")';
     interuptor.style.backgroundRepeat = "no-repeat, repeat";
     interuptor.style.backgroundSize = "cover";
     interuptor.style.backgroundPosition = "center";
     
      
      modoOscuro = true;
      negro()
      
    }else{
      
      switche.style.justifyContent = "flex-end";
      
      
     interuptor.style.imageRendering = "pixelated";
     interuptor.style.background = 'url("../../img/luna.png")';
     interuptor.style.backgroundRepeat = "no-repeat, repeat";
     interuptor.style.backgroundSize = "cover";
     interuptor.style.backgroundPosition = "center";
     
      
      modoOscuro = false;
      blanco()
    }
    
    
    
   
  }
  
  
  
  
  
  
  function negro(){
    
    var estilos = document.querySelector("link");
    
    estilos.href = "style/dark/principal.css";
    
  }
  
  
  
  
  
  
  function blanco(){
    
    var estilos = document.querySelector("link");
    
    estilos.href = "style/principal.css";
    
  }