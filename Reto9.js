//Función que pueda recibir cualquier ARRAY como parametro e imprima todos sus elementos 
// uno por uno (no se vale imprimir el array completo).

var onePiece = ["Luffy", "Zoro", "Nami", "Usoop"];

var imprimirArray = function(array){
    for(var i = 0; i < array.length; i++){ //DUDA
        console.log(array[i])
    }
}
imprimirArray(["Luffy", "Zoro", "Nami", "Usoop"])

// METODO 2

function imprimir(array){
    array.forEach(element =>{
        console.log(element)
    });
}
imprimir([2,4,6,8,10]);

// METODO 3 PLATZI

function imprimirElementoPorElemento(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
};

imprimirElementoPorElemento(["Luffy", "Zoro", "Nami", "Usoop"])
