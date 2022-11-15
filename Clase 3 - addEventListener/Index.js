//Declarar Variables

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

//Escuchador de eventos:
// 1. Enviar 2 argumentos, el primero es el nombre del evento y el segundo es el codigo a llamar
//2. No se usa parentesis a la hora de llamar la funcion.

form.addEventListener('click', sumarInputValues); //1. evento y 2. funcion que se debe de ejecutar

//Codigo JS 

function sumarInputValues(event){
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "El Resultado es: " + sumaInputs;
};