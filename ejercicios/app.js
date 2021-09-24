/*
/////////////////////////////////////////////////////////////////////////////////////
FOR

Estructura

for (inicializacion ; condicion ; iteracion) {
sentencia;
}

-------------------------------------------------------------------------------------

for (let i = 0; i < 20; i++) {
    console.log(i);
}

-------------------------------------------------------------------------------------

let numeroDeUsuarios = 20;

for (let i = 1; i <= numeroDeUsuarios; i++) {
    console.log(i);
}

-------------------------------------------------------------------------------------

let dias = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sabado' , 'domingo'];

for ( i = 0 ; i <= dias.length - 1 ; i++ ) {
    console.log(dias[i]);
}

/////////////////////////////////////////////////////////////////////////////////////

WHILE

El ciclo while se va a ejecutar siempre y cuando la condicion sea TRUE. En el momento que lee un false, el ciclo se termina. 

Estructura

while(condicion) {
    sentencia;
}

-------------------------------------------------------------------------------------

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

-------------------------------------------------------------------------------------

let dias = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sabado' , 'domingo'];
let  numeroDias = dias.length - 1;
i = 0;

while (i <= numeroDias) {
    console.log(dias[i]);
    i++;
}

/////////////////////////////////////////////////////////////////////////////////////

DO WHILE

El ciclo DO WHILE es igual al while, la unica diferencia es que la primera vez el ciclo se va a ejecutar SIN testear el condicional.

Estructura

do {
    sentencia;
}
while(condicion);

-------------------------------------------------------------------------------------

let num1;
let num2;

do{
    num1 = Math.floor(Math.random() * (7 - 1)) + 1;
    num2 = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(num1,num2);
} while(num1 != 3 || num2 != 3);

-------------------------------------------------------------------------------------

let dias = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sabado' , 'domingo'];
let diasLength = dias.length - 1;
let i = 0;

do {
    console.log(dias[i]);
    i++;
}
while (i <= diasLength)

-------------------------------------------------------------------------------------

let num1;
let num2;

do{
    num1 = Math.floor(Math.random() * (7 - 1)) + 1;
    num2 = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(num1,num2);
} while(num1 != 3 || num2 != 3);

/////////////////////////////////////////////////////////////////////////////////////

Write a program to check two numers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

const isEqualTo100 = (a, b) => a === 100 || b === 100;
console.log(isEqualTo100(70,0));

-------------------------------------------------------------------------------------

Write a program to get the extension of a file name.

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('webpack.config.js'));

Write a program to replace every character in a given string with the character following it in the alphabet.

const moveCharsForward = (str) => 
    str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForward('abcd'));

-------------------------------------------------------------------------------------

Write a program to get the current date. Expected output: mm-dd-yyyy, mm/dd/yyyy, dd/mm/yyyy.

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());

-------------------------------------------------------------------------------------

Write a program to create a new string adding "New!" in front of a given string. If the String begins with "New!" already, then return the original string. 

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! Offers'));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
}while(i < 10)

let num1;
let num2;

do {
    num1 = Math.floor(Math.random() * (7 - 1) + 1);
    num2 = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(num1, num2);
} while (num1 != 3 || num2 != 3);

// OR T T = T , T F = T , F T = T , F F = F

// AND T T = T , T F = F , F T = F , F F = F

NUMEROS PARES
NUMEROS IMPARES

Hacer un programa que tengas 2 variables (num1,num2) donde se generen numeros aleatorios. Quiero que me muestres esos 2 numeros aleatorios generados y SOLO en el caso que ambos numeros son iguales 3, deje de generar numeros. 

num1 = 3 y num2 = 3

Hacer un programa que tire 3 numeros aleatorios entre los valores 1 y 10. Primero mostrar los 3 numeros, despues mostrar la suma de los 3 numeros y que frene cuando la suma este entre 20 y 25. 
*/

let num1,num2,num3;
let suma;
do {
    num1 = Math.floor(Math.random()*(4-1)+1);
    num2 = Math.floor(Math.random()*(4-1)+1);
    num3 = Math.floor(Math.random()*(4-1)+1);
    console.log (num1,num2,num3);
    suma = num1 + num2 + num3;
    console.log (suma);
} while (0 < suma < 2 || 8 < suma <= 9)
