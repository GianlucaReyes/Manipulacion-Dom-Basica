// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
// Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, 
// volvemos a empezar.

var respuesta = prompt("Cuanto es 2+2?");
while (respuesta != 4){
    respuesta = prompt("Lo siento, no es la respuesta correcta :( Intentalo de nuevo");
}
console.log("Felicitaciones, eres el crack de las matematicas!");



