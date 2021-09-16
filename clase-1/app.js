// Un comentario de una sola linea

/* Un comentario de muchas lineas */

// Tipos de datos primitivos de JavaScript

/*

// String

"String"

'String'

`String`

// Number

10

// Boolean

true
false

*/

// var let const. No utilizamos mas VAR porque nos trae problemas a la hora de escribir el codigo. Es por un problema de hosting... JS te interpreta y acomoda el codigo PENSANDO que lo tenias mal escrito... VAR era lo que te traia este problema. 

// Operaciones basicas + - / *

// Prompt es un cuadro de dialogo que sale en el navegador que nos permite ingresar un dato (que lo ingrese un usuario) y guardarlo o manipularlo.

// Alert es para mostrar una alerta de forma abrupta

/* let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
let lenguaje = prompt('Cual es tu lenguaje favorito?'); */

// Hardcodear (te deja espacios entre cada variable ya)

// console.log(`${nombre} ${apellido} ${lenguaje}`);

let numero1 = Number(prompt('Ingresa tu numero'));
let numero2 = Number(prompt('Ingresa tu numero'));

//PARSE es convertir un tipo de dato a otro tipo de dato
// Number() parseInt() parseFloat()

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 / numero2);
console.log(numero1 * numero2);

