/*
/////////////////////////////////////////////////////////////////////////////////////
FOR

Estructura

for (inicializacion ; condicion ; iteracion) {
sentencia;
}

--------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < 20; i++) {
    console.log(i);
}

--------------------------------------------------------------------------------------------------------------------------------------------------

let numeroDeUsuarios = 20;

for (let i = 1; i <= numeroDeUsuarios; i++) {
    console.log(i);
}

--------------------------------------------------------------------------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------------------------------------------------------------------------

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

--------------------------------------------------------------------------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------------------------------------------------------------------------

let num1;
let num2;

do{
    num1 = Math.floor(Math.random() * (7 - 1)) + 1;
    num2 = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(num1,num2);
} while(num1 != 3 || num2 != 3);

--------------------------------------------------------------------------------------------------------------------------------------------------

let dias = ['lunes' , 'martes' , 'miercoles' , 'jueves' , 'viernes' , 'sabado' , 'domingo'];
let diasLength = dias.length - 1;
let i = 0;

do {
    console.log(dias[i]);
    i++;
}
while (i <= diasLength)

--------------------------------------------------------------------------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------------------------------------------------------------------------

Write a program to get the extension of a file name.

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('webpack.config.js'));

Write a program to replace every character in a given string with the character following it in the alphabet.

const moveCharsForward = (str) => 
    str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForward('abcd'));

--------------------------------------------------------------------------------------------------------------------------------------------------

Write a program to get the current date. Expected output: mm-dd-yyyy, mm/dd/yyyy, dd/mm/yyyy.

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());

--------------------------------------------------------------------------------------------------------------------------------------------------

Write a program to create a new string adding "New!" in front of a given string. If the String begins with "New!" already, then return the original string. 

const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! Offers'));

for (let i = 0; i < 10; i++) {
    console.log(i);
}

--------------------------------------------------------------------------------------------------------------------------------------------------

let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

--------------------------------------------------------------------------------------------------------------------------------------------------

do {
    console.log(i);
    i++;
}while(i < 10)

--------------------------------------------------------------------------------------------------------------------------------------------------

Hacer un programa que tengas 2 variables (num1,num2) donde se generen numeros aleatorios. Quiero que me muestres esos 2 numeros aleatorios generados y SOLO en el caso que ambos numeros son iguales 3, deje de generar numeros. 

let num1;
let num2;

--------------------------------------------------------------------------------------------------------------------------------------------------

do {
    num1 = Math.floor(Math.random() * (7 - 1) + 1);
    num2 = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(num1, num2);
} while (num1 != 3 || num2 != 3);

// OR T T = T , T F = T , F T = T , F F = F

// AND T T = T , T F = F , F T = F , F F = F

--------------------------------------------------------------------------------------------------------------------------------------------------

Hacer un programa que tire 3 numeros aleatorios entre los valores 1 y 3. Primero mostrar los 3 numeros, despues mostrar la suma de los 3 numeros y que frene cuando la suma de mas de 5.

let num1,num2,num3;
let suma;
do {
    num1 = Math.floor(Math.random()*(4-1)+1);
    num2 = Math.floor(Math.random()*(4-1)+1);
    num3 = Math.floor(Math.random()*(4-1)+1);
    console.log (num1,num2,num3);
    suma = num1 + num2 + num3;
    console.log (suma);
} while (suma < 6)

--------------------------------------------------------------------------------------------------------------------------------------------------

Using MAP write a function that converts farenhait to celcius. Use this array [23, 140, 112, 41]. The formula is (number - 32) * 5/9 = Celcius.

const farenhait = [23, 140, 112, 41];

function getCelcius () {
    return farenhait.map(value => parseInt((value - 32) * 5/9));
}

console.log(getCelcius);

--------------------------------------------------------------------------------------------------------------------------------------------------

Using SOME write a function that checks an array for a 'falsey' value. Use [11, NaN, [], 'Angels'].

const array = [11, NaN, [], 'Angels'];

function checkFalsey () {
    return array.some(item => !item);
}

console.log(checkFalsey());

--------------------------------------------------------------------------------------------------------------------------------------------------

Using REDUCE write a function that will return the total number of characters in an array of strings. Use ['Rabbit', 'Football', 'Cracking']

const array = ['Rabbit', 'Football', 'Cracking'];

function getTotal() {
    return array.reduce ((total, word) => total + word.length, 0);
}

console.log(getTotal());

Total es la variable donde voy a ir almacenando mi resultado y la inicializo en 0 al final de la expresion. Word es CADA ITEM (puede llamarse de cualquier otra forma) y es lo que va a ir iterando. Entonces A CADA word le voy a hacer .length y a su resultado se lo voy a sumar a total que inicializo en 0.

--------------------------------------------------------------------------------------------------------------------------------------------------

Using EVERY write a function that checks wether every number in an array is a square number. [9, 16, 81] => true

const array = [9, 16, 81];

function checkSquares() {
    return array.every(number => Math.sqrt(number) % 1 === 0);
}

console.log(checkSquares());

Lo que hacemos es dentro del array, declaramos que "number" es cada item de mi array y le hacemos a number la raiz cuadrada. Al hacerlo, si el numero es cuadrado, el resultado no tiene decimales. Al hacerle el modulo de uno ( number % 1 ) a un number sin decimales, el resto es igual a 0. Ejemplos de modulos (%) para recordar. 5 % 2 = 1 -- 10 % 4 = 2 -- 10 % 1 = 0. 

--------------------------------------------------------------------------------------------------------------------------------------------------

Using an array method, write a function that returns the string elements of an array that have a given length or larger. Use ['Florida', 'Dog', 'Phone']. 5 or more characters words should be shown.

const array = ['Florida', 'Dog', 'Phone'];

function getWords () {
    return array.filter(item => item.length > 4)
}
console.log(getWords())

--------------------------------------------------------------------------------------------------------------------------------------------------

Using an array method, write a function that converts an array of cm values as strings, into an array of numbers. Use ["23cm" ,"5.6cm", "1000cm"].

const array = ["23cm" ,"5.6cm", "1000cm"];

function getValues() {
    return array.map(item => parseFloat(item))
}

console.log(getValues())

MAP() crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos. 

--------------------------------------------------------------------------------------------------------------------------------------------------

Using SPLIT and FILTER, write a function that count the number of vowels in a sentence. Use 'In west Philadelphia, born and raised'.

const sentence = 'In west Philadelphia, born and raised';
const vowels = ["a","e","i","o","u","A","E","I","O","U"];

function getVowelCount() {
    return sentence.split('').filter(letter => vowels.includes(letter))
}

console.log(getVowelCount())

--------------------------------------------------------------------------------------------------------------------------------------------------

Using SPLIT, MAP and JOIN, write a function that capitalises the first letter of each word in a sentence. Use ["the queens gambit"] and get ["The Queens Gambit"]

const sentence = "the queens gambit";

function capitalise() {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

console.log(capitalise())

Uso SPLIT (' ') para separar cada palabra por un espacio. A esto le hago un .map para que a CADA word le saque la primera letra (para esto uso charAt(0)) y la transformo toUpperCase. De ahi tengo que sumarla de nuevo a mi palabra pero le hago .substring para insertarla al principio de mi palabra para que reemplace mi primer letra de la palabra con la toUpperCase y luego hago .join(' ') con espacio para que quede el string.

--------------------------------------------------------------------------------------------------------------------------------------------------

Write a JS program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them togather. The inicial string must be 6 characters long. If not, return the original string you were fed with.

const sentence = 'Welcome to Argentina';

const f = () => {
    if (sentence.length >= 6) {
        let parteUno = sentence.slice(0,3);
        let parteDos = sentence.slice(-3);
        return parteUno + parteDos;
    } else {
        return sentence;
    }
}

console.log(f())

--------------------------------------------------------------------------------------------------------------------------------------------------

Write a JS program to extract the first half of a string of even length.
(Por alguna razon el programa funciona pero siempre me tira un undefined junto con el resultado.)

const string = 'Buenos dias federico';

const extract = () => {
let finalString;
    if(string.length % 2 == 0) {
        let stringHalfLength = string.length / 2;
        for (let i = 0; i < stringHalfLength; i++) {
            finalString = finalString + string[i];
        } return finalString;
    } else {
        return 'Is not even';
    }
}

console.log(extract())

--------------------------------------------------------------------------------------------------------------------------------------------------

Write a JS program to chech two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

let a = 5;
let b = 95;

const isEqualTo = () => {
    if((a === 100 || b === 100) || (a + b === 100)) {
        return true;
    } else {
        return 'no se cumple'
    }
}

console.log(isEqualTo())

*/