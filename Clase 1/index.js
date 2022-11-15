//Variables que representen a cada elemento 

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito'); //es una clase 
const pid = document.getElementById('pid'); //es un id
const input = document.querySelector('input');

//Imprimir las etiquetas en html:

console.log(h1); //Asi se imprime cierto elemento especifico del HTML

//Imprimir todo en un console log:

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//1. Modificar el HTML en el JavaScript sin picarle al HTML:

h1.innerHTML = 'Caverna Regia <br> Youtube';
h1.innerText = 'Caverna Regia <br> Youtube 2'; //Projer de amenzas y es solo texto

//2. Modificar atributos en HTML:

console.log(h1.getAttribute('class')); //Leer atributos 
h1.setAttribute('class', 'rojo'); //Modificar atributos

//3. Modificar clases en HTML:

h1.classList.add('verde', 'amarillo') //Agregar otra clase
h1.classList.remove('amarillo') //Remover la clase amarillo y que solo se quede verde

//4. Modificar input

input.value = '456';

//5. Como crear una etiqueta html desde java script desde cero pero por java script

document.createElement('img');

// 6. Como hacer visible la imagen en el HTML pero en JS

const imagen = document.createElement('img')
imagen.setAttribute('src', 'https://i.blogs.es/d06679/luffy-de-pequeno/1366_2000.jpeg');
console.log(imagen);
pid.append(imagen);
