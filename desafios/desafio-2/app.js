// Escribir un algoritmo donde se ingresen 2 numeros por prompt() y se fije si uno de esos numeros es 100 o si la suma de ambos es 100. En caso que no se cumpla lo anterior, SOLO si ambos numeros ingresados son pares, devolver el mas grande. En caso que los numeros pares sean iguales, devolver "Los numeros son iguales".

let num1 = Number(prompt("Ingresar el primer numero"));
let num2 = Number(prompt("Ingresar el segundo numero"));

if (num1 === 100 || num2 === 100) {
    console.log("Uno de los numeros es igual a 100");
} else if (num1 + num2 === 100) {
    console.log("La suma de ambos numeros es igual a 100");
} else if (num1 % 2 === 0 && num2 % 2 === 0) {
    if(num1 > num2) {
        console.log("El numero mas grande par es " + num1);
    } else if(num2 > num1) {
        console.log("El numero mas grande par es " + num2);
    } else {
        console.log("Los numeros son iguales");
    }
}

