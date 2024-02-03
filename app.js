let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSort = [];
let numeroMax = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor!');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    //Si ya sorteamos todos los numeros
    if (listaNumerosSort.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else {
        //Si num generado es in the list
        if (listaNumerosSort.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSort.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de iintervalo de numeros
    condicionesIniciales();
    //Generar el numero aleaotrio 
    //Inicializar el numero de intentos
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

/*
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
lenguagesDeProgramacion.push('Java','Ruby','GoLang');
console.log(lenguagesDeProgramacion);
console.log(`Hay ${lenguagesDeProgramacion.length} elementos en el array.`);

function muestraLen() {
    let numMax = lenguagesDeProgramacion.length;
    let inicio = 0;
    while (inicio < numMax) {
        console.log(`Lenguaje: ${lenguagesDeProgramacion[0+inicio]}.`);
        inicio++;
    }
}

muestraLen();
console.log('//////////////////////////////////////////');
function muestraLen2() {
    let numMax = lenguagesDeProgramacion.length;
    
    while (numMax > 0) {
        console.log(`Lenguaje: ${lenguagesDeProgramacion[numMax-1]}.`);
        numMax--;
    }
}

muestraLen2();
*/