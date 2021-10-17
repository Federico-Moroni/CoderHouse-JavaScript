/*

Event Handlers: Funciones asociadas a eventos.

Cuando ocurra un evento, quiero que se escriba un texto dentro del tag "p".

const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

------------------------------------------------------------------------------------

FORMAS DE LLAMAR AL ONCLICK.

Las opciones 1 y 2 son las recomendadas. En la opcion 1 el evento puede venir de una variable al usar la propiedad.

///// 1 /////

Primera forma de escuchar el evento => SELECTOR, METODO(EVENTO, FUNCION). Es un cambio momentaneo, ya que al refresh se vuelve a 0. Hay muchos eventos, uno es el "CLICK".

boton.addEventListener("click", escribir);  Esta es la forma sucia ya que estamos llamando a una funcion sin parentesis. Si pongo los parentesis, la funcion se autoejecuta sin necesidad del click. No sirve. Para hacerlo limpio se usa la funcion de callback. Es una funcion anonima que se le pasa a otra funcion para que se ejecute: 
    boton.addEventListener("click", () => {
    escribir()
    });

///// 2 /////

Segunda forma de escuchar un evento mas resumida: 

boton.onclick = () => {escribir()};

///// 3 /////

Tercera forma que viene de la mano con el HTML. Escribir esto en HTML. Boton es el objeto HTML y onclick es el atributo. El DOM transforma de atributo a metodo. No esta mal porque lo vamos a usar a veces pero no es el ideal en todos los casos. 

<button id="btn" onclick="escribir()">enviar</button>

-----------------------------------------------------------------------------------

Eventos mas utilizados.

mousedown/mouseup:
mouseover/mouseout:
mousemove:

const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

boton.addEventListener("mouseover", () => {
    console.log("a")
})

------------------------------------------------------------------------------------

EVENTOS DE TECLADO

keydown: Cuando se presiona.
keyup: Cuando se suelta.

------------------------------------------------------------------------------------

Evento CHANGE => Evento que se activa cuando cambia el valor de un elemento.

const input = document.getElementById("texto")
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

input.addEventListener("change", () => {
    console.log("cambio valor de texto")
})

OTRO

const input = document.getElementById("texto")
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

boton.addEventListener("click", () => {
    console.log(input.value)
})

PREVENTDEFAULT

const input = document.getElementById("texto")
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

boton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(input.value);
})

const input = document.getElementById("texto")
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("btn");

const escribir = () => {
    let texto = prompt("Que queres escribir?");
    parrafo.textContent = texto;
}

boton.addEventListener("click", (e) => {
    e.preventDefault();
    validadora();
        if(validadora == true) {
        document.getElementById("formulario").submit();
        }
        console.log(input.value);
        })

const validadora = () => {
    if(input.value.length > 5){
    return input.value
}
}
*/
