// Replica el comportamiento de tu condicional anterior con if, else y else if, 
// pero ahora solo con if.

// Ejemplo FINAL GIANLUCA REYES 

let InformacionDeMembresia = [
    {nombre:"Free",describe:"Solo puedes tomar los cursos gratis"},
    {nombre:"Basic",describe:"Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {nombre:"Expert",describe:"Puedes tomar casi todos los cursos de Platzi durante un año"},
    {nombre:"ExpertPlus",describe:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
    ];

let TipoDeMembresia = "Free";

InformacionDeMembresia.forEach(function(membresia){
    if (membresia.nombre === TipoDeMembresia){
        console.log(membresia.describe);
    }
});

//Solucion Platzi

function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripcion no existe') //Error y sale en amarillo en inspeccionar
};

conseguirTipoSuscripcion("Free");












 