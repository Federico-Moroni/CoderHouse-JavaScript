let listaObjetos;

if(localStorage.getItem("lista") == null) {
    alert("No tenes productos")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"));
}

let dato = prompt("Ingresa tu categoria");
listaFiltrada = listaObjetos.filter(e => e.categoria === dato);

if(listaFiltrada.length != 0) {
listaFiltrada.forEach(element => {
    console.log(element.nombre + " " + element.categoria)
})
} else {
    alert("No tenes productos de esa categoria")
};

const comprar = (dato) => {
let carrito;

    if(localStorage.getItem("carrito") == null) {
    carrito = [];
    } else {
    carrito = JSON.parse(localStorage.getItem("lista"));
    }

carrito.push(dato);
localStorage.setItem("carrito", JSON.stringify(carrito));
}