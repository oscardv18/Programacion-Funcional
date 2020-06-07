// Ejemplo 1 de Programación Funcional

/* Calcular lo siguiente:

    - Volumen de una esfera v = 4/3 * (pi*pow(r,3))
    - Área de un TRangulo A = (b . h) / 2

*/

// Sin Funciones:

let v = 0.0; // Variable volumen
let a = 0.0; // Variable de área
let radio = 0.0; // Radio de la esfera
let base = 0.0; 
let altura = 0.0;

const PI = 3.14;

let opc = prompt("Ingrese la Opción que desee: 1 -> Para El Volumen de la Esfera, 2 -> Para el área del triangulo");
// MENÚ DE OPCIONES

switch(opc){
   
    case '1':

        r = prompt("Ingrese el radio de la esfera: ");

            parseFloat(r);

            v = 4/3 * (PI * Math.pow(r,3));

            alert("El Volúmen de la Esfera es: " + v);
            console.log(v);

        break;

    case '2':
        
        base = prompt("Ingrese la base de el triangulo: ");
        altura = prompt("Ingrese la altura de el triangulo: ");
        
        parseFloat(altura);
        parseFloat(base);

            a = (base * altura) / 2;

            alert("El área del Triangulo es: " + a);
            console.log(a);

        break;

    default:

        alert("ERROR - OPCIÓN NO ENCONTRADA");

        break;
}
