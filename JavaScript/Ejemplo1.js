// Ejemplo 1 de Programación Funcional

/* Calcular lo siguiente:

    - Volumen de una esfera v = 4/3 * (pi*pow(r,3))
    - Área de un TRangulo A = (b . h) / 2

*/

// Con Funciones:

let v = 0.0; // Variable volumen
let a = 0.0; // Variable de área
let radio = 0.0; // Radio de la esfera
let base = 0.0; 
let altura = 0.0;

const PI = 3.14;

let opc = prompt("Ingrese la Opción que desee: 1 -> Para El Volumen de la Esfera, 2 -> Para el área del triangulo");

parseInt(opc);

// Función Volumen
function Volumen_esfera(v, r, PI){
    
    v = 4/3 * (PI * Math.pow(r,3));

    return v;
}

// Función área:
function area(base, altura, a){

    a = (base * altura) / 2;

    return a;
}

// MENÚ DE OPCIONES

function menu(){

switch(opc){
   
    case '1':

        r = prompt("Ingrese el radio de la esfera: ");

            parseFloat(r);

            alert("El Volúmen de la Esfera es: " + Volumen_esfera(v, r, PI));
            console.log(Volumen_esfera(v, r, PI));

        break;

    case '2':
        
        base = prompt("Ingrese la base de el triangulo: ");
        altura = prompt("Ingrese la altura de el triangulo: ");
        parseFloat(altura);
        parseFloat(base);

            alert("El área del Triangulo es: " + area(base, altura, a));
            console.log(area(base, altura, a));

        break;

    default:

        alert("ERROR - OPCIÓN NO ENCONTRADA");

        break;
}

}

menu();