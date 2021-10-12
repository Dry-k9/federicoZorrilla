


  function Publicar2(elemento){ 
    
    var abilidades = document.querySelector(".abilidades");
   
   abilidades.insertAdjacentHTML("beforeend", elemento);
   
  }
  
  
 
 
 
 
 

  function crearBloke2(obj){
    
    var img = obj.img;
    var texto = obj.texto;
    
    
    
    var bloke = '<div class="cajaAbilidad pd">   <div class="fotoAbilidad" style="background:url(\''+img+'\');  background-repeat: no-repeat, repeat;  background-size: cover; background-position: center; "></div> <div class="nombreAbilidad"> '+texto+'</div> </div>'
    
   
    Publicar2(bloke);
    
  }
  
  
  
  
  
  
  
  
  
  
  
  function depurarJson(){
    
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'Json/Abilidades.json', true);
    
    
   
    xhr.onload = function(){
      
      
      var obj = JSON.parse(xhr.responseText);
      
      
      
      for (x =0; x <= Object.values(obj).length-1; x++){ 
        
        
        var datos = Object.values(obj)[x];
       
        crearBloke2(datos);
       
      }
      
    }
    
    xhr.send(null);
    
    
   
  }
  
  
  
  
  depurarJson();
  