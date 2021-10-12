

class layout{
  
  constructor(){}
  
  
  /*
  Este metodo hace responsivo 
  los hijos de cualquier caja asignada.
  
  resibe los parametros: nombre del elemento padre; ancho de las cajas hijas. ejemplo: 300px; distacia entre cajas hijas.
  */
  blokeResponsive(elemento, widthSon, distans){
    
    
    var block = document.querySelector(elemento);
    
    
    block.style.paddingTop=distans;
    block.style.paddingBottom=distans;
    block.style.display="flex";
    block.style.flexDirection="column";
    block.style.alignItems="center";
    block.style.justifyContent="center";
    
    
    block.style.display="grid";
    block.style.gridTemplateColumns="repeat(auto-fit, minmax("+widthSon+", "+widthSon+"))";
    block.style.gridGap=distans;
    
  }
  
  
  
  
  
  
  /*
  Este metodo cambia el id de un elemento al hacer click
  
  resive los parametros: disparador (que es el id del elemento donde se hace click); objeto (que es el id a cambiar ); y cambio(que es el nuevo id que se ingresara).
  */
  cambiarId(disparador, objeto, cambio){
    
    var disp = document.querySelector(disparador);
    
    disp.addEventListener("click", function(){
      
     
      var obje = document.querySelector(objeto);
      
      obje.id = cambio;
      
      
    }, false)
    
  }
  
  
  
  
  
}



  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  /*instanciasion 
   
   
    //var miVar = new layout;
   
  */






//>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  /*ejecucion del primer metodo
    
    
    //miVar.blokeResponsive("#gg", "330px", "100px");
    
  */
  
  
  
  
  
  
  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  /*ejecucion del segundo metodo
    
    forma 1
     
      //miVar.cambiarId("#rr","#rr","ss");
   
   
    forma 2
     
      //miVar.cambiarId("#gg","#ss","rr");
   
   
  */


