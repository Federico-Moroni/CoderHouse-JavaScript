/*

OBJETO LITERAL: Es un objeto que lo creo y defino desde cero.

let object = {
    propiedad : valor,
    propiedad : valor,
    propiedad : valor
}

DOM (API buscar) y BOM (Browser open model BOM)

let federicoMoroni = {
    nombre : "Federico Moroni",
    edad : 27,
    lf : {
        nombre : "js",
        version: "ecma6+"
    },
    casaPropia : false
}

console.log(federicoMoroni);
console.log(federicoMoroni.lenguajeFavorito.nombre);

federicoMoroni.edad = 28;
console.log(federicoMoroni.edad);

FUNCIONES CONSTRUCTORAS EN FORMA DE PROTOTIPO

Es muy importante llamar a las funciones en plural si son sustantivos. 

this. es una palabra reservada que hace referencia al entorno donde se estan asignando.

function personas (nombre, apellido, edad, lf) {
    this.nombre(este hace referencia a la propiedad) = nombre(este hace referencia al parametro);
}

crearPersona();

console.log(julian);

let hablar = () => {

}

// Esto seria como un productor en serie.
function personas (nombre, apellido, edad, lf) {
    this.nombre = nombre; // El this.nombre hace referencia al nombre que entra por let federicoMoroni, el = nombre hace referencia al parametro nombre. 
    this.apellido = apellido;
    this.edad = edad;
    this.lf = lf;
}

personas.prototype.hablar = function () {
    console.log(`hola mi nombre es ${this.nombre}`);
}

const usuario0 = new personas("federico" , "moroni" , 27 , {nombre: "js" , version : "ecma6+"});
const usuario1 = new personas("andres" , "garcia" , 27 , {nombre: "js" , version : "ecma6+"});

console.log(usuario1.hablar());

///////////////////////////////////////////////////////////////////////////////////////////
EJEMPLO JUEGO ROL

class personas {
    constructor(nombre, apellido, edad, lf, experiencia) {
        this.nombre = nombre;  // El this.nombre hace referencia al nombre que entra por let federicoMoroni, el = nombre hace referencia al parametro nombre. 
        this.apellido = apellido;
        this.edad = edad;
        this.lf = lf;
        this.experiencia = experiencia;
    }
    hablar() {
        console.log(`hola mi nombre es ${this.nombre}`);
    }
    caminar() {
        console.log(`hoy camine ${this.edad * 10} metros`)
    }
    entrenar(time) {
        let tiempo = time * 10;
        this.experiencia = this.experiencia + tiempo
        console.log("Ganaste " + tiempo + " experiencia")
    }
}

let usuario0 = new personas("julian" , "alvarez" , 28, "js", 0);

const parche = () => {
if (usuario0.experiencia >= 5500) {
    console.log("Esta roto");
}
}

usuario0.hablar();
usuario0.caminar();
usuario0.entrenar(50);
usuario0.entrenar(100);
usuario0.entrenar(100);
usuario0.entrenar(100);
usuario0.entrenar(100);
console.log(usuario0);

parche();

///////////////////////////////////////////////////////////////////////////////////////////
EJEMPLO E-COMMERCE

class productos {
    constructor ({nombrex = "N/A", categoriax = "Indumentaria" ,preciox,stockx,disponiblex}) {
        this.nombre = nombrex;
        this.categoria = categoriax;
        this.precio = preciox;
        this.stock = stockx;
        this.disponible = disponiblex;
    }
    comprar(cantidad) {
        if(this.stock <= 0) {
            console.log("No hay stock");
            this.disponible = false;
        }else {
            this.stock = this.stock - cantidad;
            console.log(`Compraste ${cantidad} ${this.nombre}, el precio fue ${this.precio * cantidad} y el stock remanente es ${this.stock}`);
        }
    }
    cuotas(cantidadCuotas) {
        console.log(`Compraste en ${cantidadCuotas} cuotas`);
    }
}

const producto0 = new productos ({
    nombrex : "Remera",
    preciox : 5000,
    stockx : 500,
    disponiblex : true,
});

console.log(producto0);

producto0.comprar(230);
producto0.cuotas(12);

*/


