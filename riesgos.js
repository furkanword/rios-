let rioAlto = [];
let rioNormal = [];

const entrada  = true;

// REGISTRAR LOS DATOS DE LOS RIOS QUE PRESENTAN ALTO RIESGO PARA LA
// COMUNIDAD.

let cantidadRiosAltoRiesgo = parseInt(prompt("Ingrese la cantidad de rios que presentan alto riesgo para la comunidad: "));

let nombre;
let sitio;
let nivel;

for (let i = 0; i < cantidadRiosAltoRiesgo; i++) {
    nombre = prompt("Ingrese el el nombre del río: ");
    sitio = prompt("Digite el sitio o ubicación del río: ");
    nivel = parseFloat(prompt("Ingrese el nivel del río: "));
    if(nivel > 50){
        rioAlto.push([nombre, sitio, nivel]);
    }
    rioNormal.push([nombre, sitio, nivel]);
    
}   

let opcion;
while (entrada === true) {
    alert(`Ingrese 1 para mirar rios altos: \n Ingrese 2 para mirar rios normales:`);
    opcion = parseInt(prompt("Digite opcion: "));
    if (opcion === 1) {
        for (let j = 0; j < rioAlto.length; j++) {
            console.log(`EL nombre del rio es ${rioAlto[j][0]}, el sitio es ${rioAlto[j][1]}, el nivel del rio es ${rioAlto[j][2]}`);
        }
    }
    else if(opcion === 2){
        for (let j = 0; j < rioNormal.length; j++) {
            console.log(`EL nombre del rio es ${rioNormal[j][0]}, el sitio es ${rioNormal[j][1]}, el nivel del rio es ${rioNormal[j][2]}`);
        }
    }
}






    

    
