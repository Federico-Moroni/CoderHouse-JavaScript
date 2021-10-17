// Entidades

class User {
    constructor(nombre, password) {
        this.nombre = nombre;
        this.password = password;
    }
}

class Producto {
    constructor(nombre, categoria, precio, stock){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

const federico = new User ("federico", "1234567");
let listaProductos;

if(localStorage.getItem("lista") == null){
    listaProductos = [];
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"));
}

const crearProducto = (nombre, categoria, precio, stock) => {
    const producto = new Producto (nombre, categoria, precio, stock)
    return producto;
}

const confirmacionDeAcceso = () => {
let bucle = true;
    while(bucle) {
    const nombre = prompt("Ingresa tu nombre");
    const password = prompt("Ingresa tu password");
        if(nombre === federico.nombre && password === federico.password){
        let ciclo = true;
        bucle = false;
            let quiereAgregarProducto;
            quiereAgregarProducto = confirm("Desea agregar un producto?")
            while(ciclo) {
                if(quiereAgregarProducto == true){
                const nombre = prompt("Ingrese nombre del producto");
                const categoria = prompt("Ingrese categoria del producto");
                const precio = Number(prompt("Ingrese el precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
                crearProducto(nombre, categoria, precio, stock);
                listaProductos.push(crearProducto(nombre, categoria, precio, stock));
                localStorage.setItem("lista", JSON.stringify(listaProductos));
                ciclo = confirm("Deseas agregar otro producto?")
                } else {
                    break;
                }
            }
        break;
        } else {
            alert("Usuario incorrecto");
        }
}}

confirmacionDeAcceso();