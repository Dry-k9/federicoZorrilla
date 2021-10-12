

  function Publicar(elemento){ 
    
    var contenedor = document.querySelector(".proyectos");
   
   contenedor.insertAdjacentHTML("beforeend", elemento);
   
  }
  
  
 

  function crearBloke(obj){
    
    var img = obj.img;
    var texto = obj.texto;
    var dir = obj.dir;
    
    
    
    var bloke = '<div class="cajaProyecto pd">   <div class="fotoProyecto" style="background:url(\''+img+'\');  background-repeat: no-repeat, repeat;  background-size: cover; background-position: center; "></div> <div class="textoProyecto"> <a href="'+dir+'"> '+texto+'</a> </div> </div>'
    
    
    Publicar(bloke);
    
  }
  
  
  
  
  
  
  
  
  
  function depurarJson(){
    
    
    
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'Json/proyectos.json', true);
    
    
   
    xhr.onload = function(){
      
      
      var obj = JSON.parse(xhr.responseText);
      
      
      
      for (x =0; x <= Object.values(obj).length-1; x++){ 
        
        
        var datos = Object.values(obj)[x];
       
        crearBloke(datos);
       
      }
      
    }
    
    xhr.send(null);
    
    
   
  }
  
  
  
  
  depurarJson();
  