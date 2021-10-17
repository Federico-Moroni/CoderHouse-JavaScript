/*

Tenemos un array con numeros y queremos crear y mostrar 2 arrays mas. Uno con numeros pares, otro con impares. Tambien queremos mostrar en dos variables distintas la suma de el array de pares e impares.

let array = [1,2,3,4,5,6,7,8,9];
let arrayEven = [];
let arrayOdd = [];
let totalArrayEven = 0;
let totalArrayOdd = 0;


for (let i = 0; i < array.length; i += 2) {
    totalArrayEven = totalArrayEven + i;
    arrayEven.push(i);
}
for (let i = 1; i < array.length; i += 2) {
    totalArrayOdd = totalArrayOdd + i;
    arrayOdd.push(i);
}

console.log(totalArrayEven)
console.log(totalArrayOdd)
console.log(arrayEven);
console.log(arrayOdd);

//////////////////////////////////////////////////////////////////////////////////////////

Este es un caso mas practico. No tenemos acceso al HTML, por ende, tenemos que modificarlo a traves de JavaScript. Imaginemos que tenemos una cantidad muy grande de links y queremos darle una clase a cada uno con un numero. Cada numero debe ser unico y deben ir en orden a como aparecen en HTML. 

const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
    links[i].className = "link-" + i;
}

//////////////////////////////////////////////////////////////////////////////////////////

Crear un loop para un login de password.

let pass = "1234";
let question;

do{
    question = Number(prompt("Guess the numeric password"));
} while (question != pass);

//////////////////////////////////////////////////////////////////////////////////////////

Hacer un for loop que encuentre una letra en especifico de un string y la devuelva.

let list = "search this string";
let charToSearch = "i";

for (let i = 0; i < list.length; i++) {
    if(list[i] === charToSearch) {
        console.log(`The index number where is "i" is ${i}`)
    }
}

//////////////////////////////////////////////////////////////////////////////////////////



*/



