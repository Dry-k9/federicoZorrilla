

  var textarea = document.querySelector("textarea");
  
  var botonGuardar = document.querySelector(".guardar");

  var fecha =new Date();
  
  
  textarea.value="";
  
  botonGuardar.onclick=guardar;
  
  
  
  

  function guardar(){
    
    
    
   
   if(textarea.value == ""){
     
    }else{
     
     var fed = new XMLHttpRequest();
     fed.open('POST', '../backend/guardador.php', true);
     fed.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     
     fed.send("text="+ fecha + "{\n\n" + textarea.value +"\n}");
     textarea.value="";
     
     
     
      fed.onload = function(){ 
       
       alert(fed.responseText);
       
      }
      
    }
   
  }
