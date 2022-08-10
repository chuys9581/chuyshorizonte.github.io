let clic = 1;
// ocultando elementos
document.getElementById('Autenticar').style.display='none';
document.getElementById('caja').style.display='none';
document.getElementById('caja1').style.display='none';

// seccion de discipulados
function divLogin(){ 

    if(clic => 1){
 
    document.getElementById('Autenticar').style.display='block';
 
    clic = clic = +1;
    }else{
 
        document.getElementById("Autenticar").style.display='none';      
 
     clic = 1;
 
    }   
 
 }
function steps(){
    if(clic ==1){
      document.getElementById("caja1").style.display='';
      
      clic = clic + 1;
    }else{
        document.getElementById("caja1").style.display='none';      
 
     clic = 1;
    }
}

function steps2(){
    if(clic ==1){
      document.getElementById("caja").style.display='';
    
      clic = clic + 1;
    }
    else{
        document.getElementById("caja").style.display='none';            
 
     clic = 1;
    }
}
