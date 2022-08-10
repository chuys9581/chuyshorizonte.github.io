clic = 1;
let = discipulados = document.querySelector('#boton');
let = servicios = document.querySelector('#boton2');
let = consejerias = document.querySelector('#boton3');
let = conexiones = document.querySelector('#boton4');
let = autenticado = document.querySelector('.Autenticar');
let = autenticado2 = document.querySelector('.Autenticar2');
let = formConsejeria = document.querySelector('.form-consejeria');
let = autenticado3 = document.querySelector('.Autenticar3');
let = formMujeres = document.querySelector('.grupo__woman');
let = formHombres = document.querySelector('.grupo__men');
let = regresa = document.querySelector('.rewin2');
let = orando = document.querySelector('#boton5');
let = formOrando = document.querySelector('.cajaOracion');



// ocultando cajas
ocular = document.querySelector('.Autenticar').style.display='none';
document.querySelector('.Autenticar2').style.display='none';
document.getElementById('caja').style.display='none';
document.getElementById('caja1').style.display='none';
document.querySelector('#caja2').style.display='none';
document.querySelector('.caja3').style.display='none';
document.querySelector('.caja4').style.display='none';
document.querySelector('.caja5').style.display='none';
document.querySelector('.caja7').style.display='none';
autenticado3.style.display='none';
formMujeres.style.display='none';
formHombres.style.display='none';
regresa.style.display='none';
formOrando.style.display='none';



// Discipulados

function divLogin(){
    if(clic == 1 ){
        document.querySelector('.Autenticar').style.display='';
        autenticado.style.margin='auto';
        discipulados.style.transform = 'scale(1.6)';
        discipulados.style.margin='auto';
        discipulados.style.translate = '1.5';
        discipulados.style.marginTop='65px';
        regresa.style.display='';

        servicios.style.display='none';
        consejerias.style.display='none';
        conexiones.style.display='none';
        orando.style.display ='none';
        clic = clic + 1;

    }else{
        document.querySelector('.Autenticar').style.display='none';
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.Autenticar2').style.display='none';
        document.querySelector('.caja3').style.display='none';
        document.querySelector('#caja2').style.display='none';
        document.querySelector('.caja4').style.display='none';
        document.querySelector('.caja5').style.display='none';
        clic = 1;
    }
}

function steps(){
    if(clic == 1 ){
        document.querySelector('#caja1').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        document.querySelector('.caja4').style.display='none';
        clic = 1;
    }
}

function paso1(){
    if(clic == 1 ){
        document.querySelector('.caja4').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('.caja4').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        clic = 1;
    }
}



function steps2(){
    if(clic == 1 ){
        document.querySelector('#caja').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('#caja').style.display='none';
        document.querySelector('#caja1').style.display='none';
        document.querySelector('.caja4').style.display='none';
        document.querySelector('.caja5').style.display='none';
        clic = 1;
    }
}

function paso2(){
    if(clic == 1 ){
        document.querySelector('.caja5').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('.caja5').style.display='none';
        document.querySelector('#caja1').style.display='none';
        clic = 1;
    }
}

// Servicios

function divLogin2(){
    if(clic == 1 ){
        document.querySelector('.Autenticar2').style.display='';
        autenticado2.style.margin='auto';
        servicios.style.transform = 'scale(1.6)';
        servicios.style.margin='auto';
        servicios.style.translate = '1.5';
        servicios.style.marginTop='65px';
        regresa.style.display='';

        discipulados.style.display='none';
        consejerias.style.display='none';
        conexiones.style.display='none';
        orando.style.display ='none';
        clic = clic + 1;

    }else{
        document.querySelector('.Autenticar2').style.display='none';
        document.querySelector('.caja3').style.display='none';
        document.querySelector('#caja2').style.display='none';
        document.querySelector('.Autenticar').style.display='none';
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        document.querySelector('.caja4').style.display='none';
        clic = 1;
    }
}

function steps3(){
    if(clic == 1 ){
        document.querySelector('.caja3').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('.caja3').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('#caja2').style.display='none';
        
        clic = 1;
    }
}

function steps4(){
    if(clic == 1 ){
        document.querySelector('#caja2').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('#caja2').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja3').style.display='none';
        clic = 1;
    }
}


// Consejerias

function divLogin3(){
    if(clic == 1 ){
        document.querySelector('.caja7').style.display='';
        autenticado2.style.margin='auto';
        consejerias.style.transform = 'scale(1.6)';
        consejerias.style.margin='auto';
        consejerias.style.translate = '1.5';
        consejerias.style.marginTop='65px';
        regresa.style.display='';

        discipulados.style.display='none';
        servicios.style.display='none';
        conexiones.style.display='none';
        orando.style.display ='none';
        clic = clic + 1;

    }else{
        document.querySelector('.Autenticar2').style.display='none';
        document.querySelector('.caja3').style.display='none';
        document.querySelector('#caja2').style.display='none';
        document.querySelector('.Autenticar').style.display='none';
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        document.querySelector('.caja4').style.display='none';
        document.querySelector('.caja7').style.display='none';
        clic = 1;
    }
}

// Grupos de Conexiòn

function divLogin4(){
    if(clic == 1 ){
        document.querySelector('.Autenticar3').style.display='';
        autenticado3.style.margin='auto';
        conexiones.style.transform = 'scale(1.6)';
        conexiones.style.margin='auto';
        conexiones.style.translate = '1.5';
        conexiones.style.marginTop='65px';
        regresa.style.display='';

        discipulados.style.display='none';
        servicios.style.display='none';
        consejerias.style.display='none';
        orando.style.display ='none';
        clic = clic + 1;

    }else{
        document.querySelector('.Autenticar2').style.display='none';
        document.querySelector('.caja3').style.display='none';
        document.querySelector('#caja2').style.display='none';
        document.querySelector('.Autenticar').style.display='none';
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        document.querySelector('.caja4').style.display='none';
        document.querySelector('.caja7').style.display='none';
        formMujeres.style.display='none';
        autenticado3.style.display='none';
        formHombres.style.display='none';
        clic = 1;
    }
}

function grupom(){
    if(clic == 1 ){
        document.querySelector('.grupo__woman').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        document.querySelector('.caja4').style.display='none';
        formMujeres.style.display='none';
        formHombres.style.display='none';
        clic = 1;
    }
}

function grupoh(){
    if(clic == 1 ){
        document.querySelector('.grupo__men').style.display='';
        clic = clic + 1;

    }else{
        document.querySelector('#caja1').style.display='none';
        document.querySelector('#caja').style.display='none';
        document.querySelector('.caja5').style.display='none';
        document.querySelector('.caja4').style.display='none';
        formMujeres.style.display='none';
        formHombres.style.display='none';
        clic = 1;
    }
}

// funcion para caja de Oracion

function divLogin5(){
      if(clic == 1){
        orando.style.display='';
        orando.style.margin='auto';
        orando.style.transform = 'scale(1.6)';
        orando.style.margin='auto';
        orando.style.translate = '1.5';
        orando.style.marginTop='65px';
        regresa.style.display='';
        formOrando.style.display = '';

        servicios.style.display='none';
        consejerias.style.display='none';
        conexiones.style.display='none';
        discipulados.style.display ='none';
        clic = clic + 1;
      }else{
        formOrando.style.display='none';
        clic = 1;
      }
}


// * Objetivos del Temario

// seleccionando botones
const btnUno = document.querySelector('.b1');
const objetoUno = document.querySelector('.objUno');

// ocultando las cajas primero
 
objetoUno.style.display='none';

btnUno.addEventListener('click', mostrarOcultarUno);

const mostrarOcultarUno = () => {
    if(clic == 1){
        objetoUno.style.display='';

        clic = clic + 1;
          
    }else{

    }
};

