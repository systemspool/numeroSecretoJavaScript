let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let  numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);   //con document.getElementById se podemos indicar que elemento del html se va a ocupar indicando el id
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //el usuario no acerto
        if(numeroDeUsuario >  numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', ' el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //mandamos a llamar con queryselector tambien se pudo hacer con get element y para limpiar se le da un valor vacio  entre comillas
    let valorCaja = document.querySelector('#valorUsuario').value = '';  
}

//se crea una funcion que retorna el numer secreto a generar
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros;
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
     }  else{
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
     }
    }
    
}

function reiniciarJuego(){
    //Limpia la caja
    limpiarCaja();
    //indicar mensaje de inicio intervalo de numeros
    //generar el numero aleatorio
    //reiniciar intentos
    condicionesIniciales();
    //deshabiliar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

function condicionesIniciales(){
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    asignarTextoElemento('h1', "Juego del numero secreto");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();

