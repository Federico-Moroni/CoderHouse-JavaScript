// Programa que va a generar 2 numeros aleatorios entre 1 y 6, mostrarlos con console.log y SOLO va a frenar si ambos numeros son iguales a 3. Se utiliza do while y no solo while porque si justo los primeros 2 numeros random que tira el programa son ambos 3, la condicion va a ser falsa y no se va a ejecutar nada. 

let num1;
let num2;

do{
    num1 = Math.floor(Math.random() * (7 - 1)) + 1;
    num2 = Math.floor(Math.random() * (7 - 1)) + 1;
    console.log(num1,num2);
} while(num1 != 3 || num2 != 3);