/*
FUNCIONES
Principios DRY (don't repeat yourself), KISS (Keep it simple) y YAGNI (You are gonna need it). Las funciones siempre tienen que llevar el nombre de las tareas que realizan. Si no declaro parametros en la funcion, se llama sin parametros. 

FUNCION DECLARADA 

Estructura

function nombre (parametros) {
    sentencia:
}

nombre();  ====>Hay que llamar la funcion para que se ejecute. Llamada a la funcion. No pongo atributos si la funcion no tiene parametros.

-----------------------------------------------------------------------

function suma (num1, num2) {
    console.log(num1 + num2);
}
suma(1,2);

function validar (nombre) {
let datoTrabajado = nombre.toLowerCase();

    if(datoTrabajado == "juan") {
        console.log('podes entrar');
    } else {
        console.log("No podes entrar");
    }
}

function entrarAlEdificio() {
    let pregunta = prompt("Como te llamas?");
    validar(pregunta);
}

function tomarDatos() {
    let nombre = prompt("Nombre")
    let apellido = prompt("Apellido")
    let edad = prompt("Edad")
}

function mostrarNombreCompleto(nombre,apellido,edad) {
    let respuesta = console.log(`Tu nombre es ${nombre} ${apellido} y tenes ${edad}`);
    return respuesta;
}

tomarDatos();
console.log(mostrarNombreCompleto("Federico","Moroni",27));
entrarAlEdificio();

FUNCION EXPRESADA => Es una variable a la que se le asigna una funcion anonima.

let unaResta = (numero) => {
    return(numero - 10);
};

console.log(unaResta(34));

Como cada vez se busca optimizar mas el codigo, si sabemos que solo vamos a tener 1 parametro y que las funciones siempre tienen que tener un return... se hace asi:

let unaResta = numero => numero - 10;

console.log(unaResta(34));

*/
