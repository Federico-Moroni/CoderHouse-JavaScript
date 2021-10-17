/*

let mensaje = "hola mundo";

localStorage.setItem("saludo",mensaje);

console.log(mensaje);

let nombre = "federico";

localStorage.setItem("nombre",nombre);

console.log(localStorage.getItem("nombre"));



let edad = 27;

sessionStorage.setItem("edad", edad);

console.log(sessionStorage.getItem("edad"));

console.log(nombre);

*/

class producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

let producto1 = new producto ("remera", 5000);
let producto2 = new producto ("pantalon", 3000);

localStorage.setItem("producto",producto1);

//El localStorage no acepta estructuras de datos complejas. Hay que pasarla a JSON. 

console.log(JSON.stringify(producto2));
console.log(localStorage.getItem("producto"));

localStorage.setItem("pantalon",JSON.stringify(producto2));

//JSON.parse(JSON) => Para mostrar en consola un JSON a Objeto

let dato = JSON.parse(localStorage.getItem("pantalon"));
console.log(dato);

console.log(dato.nombre);
console.log(dato.precio);

// En consola vas a ver [object Object] porque la informacion que estamos pasando. Toda la informacion que guardo en localStorage se guarda en string en formato de text plano JSON (JS Object Notation) es un tipo de dato basado en texto plano (todo string) que tiene la sintaxis de objeto y se utiliza para guardar info y tomar info de la web. Por que lo uso? Porque usamos JS y si en el lenguaje backend uso java, php, python, etc.. no puedo pasarle una variable asi nomas a otro lenguaje.. entonces usamos JSON que es un idioma universal donde podemos comunicarnos con todos los lenguajes. Lo que pasa es que cada lenguaje interpreta JSON a su manera. Al leerlo, lo transforman a su propia estructura de objeto. 

//Como convierto la informacion a JSON?
