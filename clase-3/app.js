/* 
Ciclo por conteo va iterando una cantidad definida de veces.

for(inicio; condicion; iteracion) {
    sentencia;
};
Se usa mucho en arrays.

for (let i = 0; i < 10; i++) {
    console.log(i);
};

Ciclo por condicionales se ejecuta siempre y cuando la condicion sea verdadera.

while(condicion) {
    sentencia;
};

let num = 0;

while (num < 10) { 
    console.log(`Estoy dentro de un bucle while ${num}`);
    num++;
};

El do while primero ejecuta una vez y despues empieza a preguntar.

do{
    sentencia;
} while(condicion);

let num = 0;

do{
    console.log('Hola Mundo');
    num++;
} while(num < 10);

Pares
let num = Number(prompt("Ingresa tu numero"))
for(let i = 0; i <= num; i = i + 2) {
    console.log(i);

Impares
let num = Number(prompt("Ingresa tu numero"))
    for(let i = 1; i <= num; i = i + 2) {
        console.log(i);
    }
}

continue me frena la iteracion pero no el ciclo, solo hace excepcion.
break te frena la iteracion y el ciclo abruptamente.

let num = Number(prompt("Ingresa tu numero"));

for(let i = 1; i <= num; i++) {
    if (i == 5) {
    continue
    }
    console.log(i);
};

Switch es una estructura disenada para multiples condiciones.

let num = Number(prompt("Ingresa tu numero"));

switch (num) {
    case 1:
        console.log("El numero ingresado es 1");
        break;
    case 2:
        console.log("El numero ingresado es 2");
        break;
    case 3:
        console.log("El numero ingresado es 3");
        break;
    default:
        console.log("El numero ingresado no esta dentro de los casos")
        break;
};

let pass = 22405;
let dato = Number(prompt("Ingresa tu contrasena"));
let intentos = 5;

while (dato != pass && intentos > 0) {
    alert(`Te equivocaste, te quedan ${intentos} intentos`);
    intentos--;
    dato = Number(prompt("Ingresa tu contrasena"));

    let validar = confirm ("Deseas cambiar la contrasena");
    if(validar && passold == pass) {
        let passold = prompt("Ingresa contrasena vieja")
        pass = Number(prompt("Ingresa tu nueva contrasena"));
    }

};

let numero = Number(prompt('Ingrese un numero'));

if (parseInt(numero)) {
for(i = 0; i < numero; i = i + 2) {
    console.log(i);
}
} else{
    alert('El dato ingresado no es un numero')
}

let num1;
let num2;

do{
    num1 = Math.floor(Math.random() * (7 - 1)) + 1;
    num2 = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(num1,num2);
} while(num1 != 3 || num2 != 3);


// AND
// && 1 2 true true (true), 1 3 true false (false), 3 1 false true (false), 3 3 false false (false)

// OR
// || 1 2 true true (true), 1 3 true false (true), 3 1 false true (true), 3 3 false false (false)

Export funciona para exportar de un .js a otro .js. En el segundo .js ponemos import {ejemplo.js} from './ejemplo'

*/

// let numero = 0;

// while (numero < 20) {
    //     numero = numero + 5;
    //     console.log(numero)
    // }

    // document.getElementById()
    // create.Element
    // inner.
    // 

    // funciones LAMBDA == ARROW FUNCTION == FUNCIONES FLECHA. Tambien estan las funciones anonimas (no tienen nombre - LAMBDA) y las no anonimas tienen nombre y las podemos llamar en cualquier parte del codigo.
    // No se declaran y se llaman... se ejecutan en el momento. 
    


let suma = () => {
return 15 + 8;
}

console.log(suma());