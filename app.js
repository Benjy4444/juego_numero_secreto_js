let numero = document.querySelector('input');
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    console.log(valorCaja);
    valorCaja.value = '';
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //Obtiene el valor del input a través del id
    
   if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número, en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        //El usuario no acertó el número.
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor.')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.')
        }
        intentos++;
        limpiarCaja();
   }

    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Elija un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    let intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales(); 
    //deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')

    }else{
        //Si el número aleatorio está en la lista generamos otro...
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

condicionesIniciales();