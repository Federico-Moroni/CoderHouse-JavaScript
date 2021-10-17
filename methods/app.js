/*
**************************************************** STRING METHODS ****************************************************

let stringOne = "freeCodeCamp is the best place to learn";
let stringTwo = "frontend and backend development";

1. charAt() => Devuelve el caracter en la posicion del index especificada. 

console.log(stringOne.charAt(4))

2. charCodeAt() => Devuelve el unicode del character de un index especifico.

console.log(stringOne.charCodeAt())

3.concat() => Une 2 strings.

console.log(stringOne.concat(stringTwo))

4.endsWith() => Chequea si un string termina con un string o caracter especifico. Devuelve booleano.

console.log(stringOne.endsWith("learn"))

5. fromCharCode() => Transforma valor unicode a character.

console.log(String.fromCharCode(114))

6. includes() => Especifica si un string contiene un string o caracter en especifico.

console.log(stringTwo.includes("frontend"))

7. indexOf() => Return the position of the first found ocurrence of an specified value in a string. Osea que devuelve el indice del primer caracter donde comienza el match con lo buscado. Si hay dos iguales devuelve el primero que encuentra. 

console.log(stringTwo.indexOf("end"))

8. lastIndexOf() => Igual que el anterior pero si hay 2 iguales o mas, devuelve el ultimo que encuentra. 

console.log(stringTwo.lastIndexOf("end"))

9. match() => Match va a buscar en un string una expresion regular y devolver los matches. Devuelve un array.

console.log(stringTwo.match(/end/g))

10. repeat() => Is going to return a repeated string (the numbers of times you specified).

console.log(stringOne.repeat(2))

11. replace(a,b) => Reemplazo un string o caracter por otro. En este caso reemplazo a por b. 

console.log(stringTwo.replace("end", "hello"))

12. search() => Busca en el string un valor especifico y devuelve la posicion del match.

console.log(stringTwo.search("and"))

13. slice(a,b) => Va a cortar un string. Empieza incluyendo a y excluye b. Si ponemos en el parametro un (-5) por ejemplo, empieza a contar desde el fondo y devuelve los ultimos 5 caracteres.

console.log(stringTwo.slice(1,4))

14. split() => Splits a string into a array of sub-strings.

console.log(stringTwo.split(" "))

15. startsWith() => Verifica si un string comienza con ciertos caracteres especificados. Devuelve booleano.

console.log(stringTwo.startsWith("fronte"))

16. substr(a,b) => Extract the characters from a string beggining with a specified position and through the number of characters specified. Empieza en a y te devuelve los proximos b caracteres.

console.log(stringTwo.substr(12,20))

17. substring(a,b) => Igual que substr(), pero en este caso, b es hasta que caracter del string queres extraer.

console.log(stringTwo.substring(12,20))

18. trim() => Removes all the spaces (white space) from the string. Tipico si me mete muchos espacios y eso.

console.log(stringTwo.trim())

**************************************************** ARRAY METHODS ****************************************************

1. filter() => Usamos filter cuando queremos filtrar algo de un array. Puedo filtrar numeros, objetos, etc. 

Ejemplo de array de numeros:

const numbers = [1, -1, 2, 3];

const isEven = () => {
    return numbers.filter(number => number >= 2);
}

console.log(isEven());

Ejemplo de array de objetos:

const array = [
    {'name':'juan', 'age':23},
    {'name':'pedro', 'age':4},
    {'name':'julian', 'age':43}
];

const isBigger = () => {
    return array.filter(item => item.age >= 20);
}

console.log(isBigger());

2. map() => En este caso tenemos un array con los platos y postres de un restaurante y queremos crear un array para el chef encargado de los platos. No queremos que aparezcan los postres. Hacerlo primero con un ciclo FOR y despues con el metodo MAP().

FOR

let almuerzos = [
    {"plato":"carne con papas", "postre":"helado"},
    {"plato":"carne con lechuga", "postre":"quesos"},
    {"plato":"carne con zanahorias", "postre":"torta"},
    {"plato":"carne con lentejas", "postre":"helado"},
];
let almuerzosChefPlato = [];

const chefPlatos = () => {
for (let i = 0; i < almuerzos.length; i++) {
    almuerzosChefPlato.push(almuerzos[i].plato);
} return almuerzosChefPlato;
}

console.log(chefPlatos());

MAP => El map() lo que hace es generarme automaticamente un array con todos los valores que estoy buscando. 

let almuerzos = [
    {"plato":"carne con papas", "postre":"helado"},
    {"plato":"carne con lechuga", "postre":"quesos"},
    {"plato":"carne con zanahorias", "postre":"torta"},
    {"plato":"carne con lentejas", "postre":"helado"},
];

const platosChef = () => {
    return almuerzos.map(object => object.plato);
}

console.log(platosChef());

La cosa es que esto no se esta guardando en ninguna variable. En caso de querer guardarlo en algun lado, puedo hacer lo siguiente:

let almuerzosChefPlato = [];

const platosChef = () => {
    almuerzosChefPlato = almuerzos.map(object => object.plato);
    return almuerzosChefPlato;
}

console.log(platosChef())

3. find() => Va a buscar dentro de un array y devolver el elemento que matche la condicion que le pasemos. Va a devolver el primero que matchee.

const array = [
    {name:'dom',occupation:'software developer'},
    {name:'eric',occupation:'dentist'},
    {name:'kate',occupation:'hair dresser'}
];

const isDentist = (object) => {
    return object.occupation === 'dentist';
}

console.log(array.find(isDentist).name)

Otro ejemplo:

const array = [
    {name: 'agustin', edad: 29},
    {name: 'francisco', edad: 24},
    {name: 'carlos', edad: 22}
];

const buscador = (object) => {
    return object.edad === 24;
}

console.log(array.find(buscador).name);

4. forEach() => Va a ejecutar una funcion especificada sobre CADA elemento de un array.

const array = ['hola senor','jdsakljsk'];

const p = () => {
    array.forEach(element => {
        console.log(element.length + ' ' + element)
    });
}

p()

5. some() => Chequea si la expresion que escribimos es true or false. Para que sea true, tiene que cumplirse en al menos UN caso. 

const array = [
    {name: 'federico', age: 27},
    {name: 'natalia', age: 26},
    {name: 'andres', age: 28}
];

const isThereA = () => {
    return array.some(item => item.name == 'juan');
}

console.log(isThereA())

6. every() => Chequea si la expresion que escribimos es true or false. Para que sea true, tiene que cumplirse en TODOS los casos.

const array = [
    {name: 'federico', age: 27},
    {name: 'natalia', age: 26},
    {name: 'andres', age: 28}
];

const everyObjectHas = () => {
    return array.every(object => object.age == 27);
};

console.log(everyObjectHas());

7. reduce() => En este caso, mirar la estructura. No vamos a declarar una const con una arrow function adentro. Directamente vamos ejectuar el metodo y a toda la ejecucion se la vamos a asignar a una variable. Sirve para sumar uno por uno los valores de un array. Evitamos hacer un ciclo for de esta forma.

const array = [
    {name: 'federico', age: 27},
    {name: 'natalia', age: 26},
    {name: 'andres', age: 28}
];

const sumAges = array.reduce((sum, item) => {
        return item.age + sum;
    },0);

console.log(sumAges)

8. includes() => Va a chequear si encuentra dentro del array un valor que pasamos entre () y devuelve un booleano.

let array = [1,2,3,4,5,6];

const chequearSiHay5 = array.includes(5);

console.log(chequearSiHay5);

9. sort() => Este metodo se utiliza para ordenar strings y arrays. En el primer ejemplo, el usar el metodo sort en un array con strings, te acomoda todos los elementos del array alfabeticamente.

const names = ['Florin', 'Liam', 'Jai', 'Ivan'];

names.sort();

console.log(names);

Si queremos hacer lo mismo con un array de numeros, lo que hace el metodo es ordenar los numeros pero solo viendo el primer numero de cada elemento. Todos los que empiecen con 1 van antes de los que empiezan con 2 o mas. Lo malo es que si tenemos un numero 1 , 12 o 1242, estos van a ir antes que un 2. 

const numbers = [74,28,241,63,12,35,12];

numbers.sort();

console.log(numbers);

Para arreglar esto, tenemos que hacer una funcion dentro de sort.

const numbers = [74,28,241,63,12,35,12];

numbers.sort((a,b) => {
    return a - b;
})

console.log(numbers)

Si tuviese el objeto adentro del array con numeros como una de sus propiedades:

const array = [
    {name: 'federico', age: 27},
    {name: 'natalia', age: 26},
    {name: 'andres', age: 28}
];

const array = [
    {name: 'federico', age: 27},
    {name: 'natalia', age: 26},
    {name: 'andres', age: 28}
];

array.sort((a,b) => {
    return a.age - b.age;
})

console.log(array);

Si quiero acomodar en orden los objetos dentro de un array por el nombre, apellido o cualquier propiedad que contenga valor string, usamos la siguiente:

const array = [
    {name: 'federico', age: 27},
    {name: 'natalia', age: 26},
    {name: 'andres', age: 28}
];

array.sort((a,b) => {
    if(a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
});

console.log(array);

No es necesario saber esto de memoria, solo recordar que esta aca y asi se usa para un array de numeros, strings u objetos con numeros.

*/
