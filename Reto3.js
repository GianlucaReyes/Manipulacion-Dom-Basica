// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario 
// las variables constantes por parámetros y argumentos en una función
const name = "Gianluca";
const lastname = "Reyes Cisneros";
const completeName = name + lastname;
const nickname = "Caverna Regia";

function apodo (){
    console.log("Mi nombre es "  +  completeName + ", pero prefiero que me digas " + nickname + ".");
};
apodo();


// Ejemplo 2

function nombreCompleto(name, lastName) {
    return name + ' ' + lastName
}
nombreCompleto('Gianluca', 'Reyes');


