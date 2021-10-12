
  
  function insert(text, numero){ 
    
    
    var span = document.querySelector(".portada > span");
  
    
    
    span.innerHTML = "<h1>"+text+"</h1>";
    span.id = "t"+numero;
    
  }
  
  
  
  
  
  
  
  
  var cont = 1;
  var numero = 2;
  var textos = new Array();
  
  textos.push("Hagas lo que hagas");
  textos.push("Es mejor con una web");
  textos.push("Amplia tus posibilidades");
  textos.push("Llega a mas personas");
  textos.push("Opten nuevos clientes");
  textos.push("Asegura los antiguos clientes");
  textos.push("comunicate con migo");
  textos.push("Y ten tu propia web");
  textos.push("Hoy");
  





  
  insert(textos[0], 1);
  
  
  
  window.setInterval( function(){
    
    
    
    
    insert(textos[cont], numero);
    
    
    
    
    cont = cont + 1;
    numero = numero + 1;
    
    
    
    
    
    if (cont >= textos.length){
      
      cont =0;
    }
    
    
   
    if (numero >= 6){
      
      numero = 1;
    }
    
    
    
  }, 2000);