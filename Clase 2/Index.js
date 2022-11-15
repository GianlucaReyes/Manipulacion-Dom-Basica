//Declarar Variables

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

//Codigo JS 

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "El Resultado es: " + sumaInputs;
};
