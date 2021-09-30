/* 

Estructura de dato para almacenar informacion y poder manipularla facilmente. La diferencia es que el objeto tiene informacion pertinente a ese objeto y el array puede tener pero no necesariamente la tiene.

Un ARRAY, internamente, es un objeto. Los ARRAY en JS son dinamicos a diferencia de otros objetos. Esto quiere decir que pueden crecer indefinidamente pero guarda porque siempre tiene el doble de espacio del que le usas y esto ocupa espacio.

let lista = ["Persona","Mascota",28,1000,true,false,{nombre:"fede",apellido:"moroni"},[1,2]];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

METODOS

length
.push() // agrego un elemento al final de mi lista.
.unshift() // agrego un elemento al principio de mi elemento.
.sort() // ordena alfabeticamente.
nombreArray.concat(nombreArray1) // une dos arrays.
.slice() // corta un array.
.toString() // convierte todo a string.
.join("-") // me trae todos los elementos separados con un guion, asterisco, etc.
.split // transformo un string en un array.
.trim // borra todos los espacios de inicio y fin.
.typeof // devuelve el tipo de dato. console.log(typeof listasupermercado);

let ferreteria = ["tornillos" , "madera"];

let supermercado = ["pera" , "manzana" , "jamon" , "queso" , "cerveza" , "vino" , "agua" , "leche"];

supermercado.push("kilo de pan");
supermercado.unshift("galletitas");
supermercado.sort();
supermercado[3] = "panceta"

let listaDefinitiva = supermercado.concat(ferreteria);

console.log(listaDefinitiva);

lista0 = listaDefinitiva.slice(0,2);
lista1 = listaDefinitiva.slice(6,listaDefinitiva.length)

listaFinal = lista0.concat(lista1);
console.log(listaFinal)

Creacion de factory.

*/

class Producto {
    constructor (nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let listasupermercado = [];

    listasupermercado.push(new Producto("tornillo",1300));
    listasupermercado.push(new Producto("pera",100));
    listasupermercado.push(new Producto("banana",200));
    listasupermercado.push(new Producto("banana",300));
    listasupermercado.push(new Producto("banana",400));
    listasupermercado.push(new Producto("jamon",890));
    listasupermercado.push(new Producto("auto",1540300));

const agregarProductosALaLista = () => {
    let nombre = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));

    let producto = new Producto (nombre,precio);
    listasupermercado.push(producto);
}

// Ordenando por Nombre alfabeticamente. Tambien por precio. Si quiero ordenar de menor a mayor el precio, doy vuelta los signos. 

listasupermercado.sort((a,b) => {
    if (a.precio > b.precio) {
        return 1;
    } if (a.precio < b.precio) {
        return -1;
    }else {
        return 0;
    }
})


console.log(listasupermercado);

/*

// METODOS PARA RECORRER UN ARRAY DE OBJETOS

//For T
for (let i = 0; i < listasupermercado.length; i++) {
    console.log(listasupermercado[i]);
}

//For of nos recorre el array de objetos. Creo una constante que la llamo OBJ que guarda el valor de CADA elemento de listasupermercado.
for (const obj of listasupermercado) {
    console.log(obj);
}

let obje = {nombre:"tomate", precio:200} 

//For in
for (const prop in obje) {
    console.log(prop)
}

*/

//For each nos ayuda a utilizar un for of mas detallado. Se usa este en la actualidad. 
listasupermercado.forEach(obj =>{
    console.log(obj.nombre)
})

//Lo malo es que find me trae UN objeto. Tengo que encontrar el metodo que traiga todo el array de objetos... una coleccion de objetos.

// let search = prompt("Producto a buscar")
// let buscadorUnico = listasupermercado.find(obj => obj.nombre == search);
// console.log(buscadorUnico);

// Filter me trae la coleccion de objetos.

let search = prompt("Producto a buscar")
let buscadorMultiple = listasupermercado.filter(obj => obj.nombre == search);
console.log(buscadorMultiple);