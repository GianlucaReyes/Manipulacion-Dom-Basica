//  Crea una función que pueda recibir cualquier OBJETO como parámetro e imprima 
// todos sus elementos uno por uno (no se vale imprimir el objeto completo).

// var onePiece = ["Luffy", "Zoro", "Nami", "Usoop"];

// function buscar(objeto){
//     for (var onePiece in objeto){ 
//         console.log(objeto[onePiece]);
//     }
// };
// buscar(onePiece);

//Metodo Platzi

const obj = {
    nombre: 'Gianluca',
    edad: 3,
    comidasFavoritas: ['Pollo frito', 'vegetales'],
  };

function imprimirElementoPorElementoObjeto(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
};

imprimirElementoPorElementoObjeto(obj)

