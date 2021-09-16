// Condicionales. Dentro del if {} se ejecuta una sentencia o bloque. Dentro del () esta la condicion. Cuando se cumple una condicion? Cuando es TRUE (Boolean).
/*

let frio = false;

if(frio) {
    console.log("Hace frio");
} else {
    console.log("Hace calor");
}

*/

/*

let edad = prompt("Que edad tenes?");

// Operadores de comparacion

if(edad > 18) {
    console.log("Podes ingresar al boliche")
} else {
    console.log("Sos muy chico");
}

*/

/*

let password = "comision22405";
let pass = prompt("Ingresa tu password");

if(pass == password) {
    console.log("Correct Password");
} else if(pass === "coderhouse") {
    console.log("Ahora sos admin del canal")
}
else {
    console.log("Incorrect Password");
};

*/

// Comparadores compuestos && || !

/*
let persona = "julian";
let edad = 30;

if(persona === "julian" || edad === 28) {
    console.log("Hola julian");
}else {
    console.log("no te conozco");
}
*/

//Primero que me verifique el nombre
//Si ese nombre es correcto
//Va al ascensor y a su departamento

const nombrePersona1 = "julian";
const nombrePersona2 = "tomas";
const nombrePersona3 = "pedro";
let dpto;

let nombreDinamico = (prompt("cual es tu nombre?")).toLowerCase();

if(nombreDinamico === nombrePersona1 || nombreDinamico === nombrePersona2 || nombreDinamico === nombrePersona3 ) {
    console.log(`podes ingresar ${nombreDinamico}`);

    dpto = Number(prompt("A que departamento vas?"));

    if(dpto >= 1) {

        if(dpto < 3) {
            console.log("Anda por el ascensor de la izquierda");
        }else if (dpto > 7) {
            console.log("Anda por el ascensor de la derecha");
        }else if(dpto === 5) {
            console.log(`${nombreDinamico} no sos de este piso, andate`);
        }else {
            console.log("Espera que lo estan arreglando");
        }

    }else {
    console.log("Ese departamento no existe, para casa")
    }
}
else{
    console.log(`No podes ingresar ${nombreDinamico}, no estas en la lista`)
}
dpto = 0;

