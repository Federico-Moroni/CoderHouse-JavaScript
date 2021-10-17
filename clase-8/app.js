/*
DOM = Document Object Model => Es una API que consume el cliente para deconstruir el HTML para que JS pueda manipularlo. El HTML se ramifica como arbol al ser deconstruidos. 

La etiqueta HTML es nuestro nodo central. El DOM lo que hace es transformarme todo en un arbol. El DOM me hace de conector entre JavaScript y HTML. Cada etiqueta del HTML se transforma en objetos, al que podemos llamar NODOS (elemento). Attr es un nodo que representa cada uno de los atributps de las etiquetas HTML. Text es un nodo que tiene texto encerrado por una etiqueta HTML. Comment representa los comentarios incluidos en la pagina HTML.

---------------------------------------

3 formas para acceder a los nodos.

//////////// Entrar por ID ////////////
Me trae solo un objeto HTML.

document.getElementById("idName");

//////////// Entrar por clase ////////////
Esto me trae un array de objetos HTML.

getElementsByClassName("className");

//////////// Entrar por etiqueta ////////////
Esto me trae un array de objetos HTML.
getElementByTagName("");

Esta es la manera antigua de acceder a los nodos.

---------------------------------------

Si quiero cambiar algo por JS sin entrar al HTML puedo acceder al elemento.
document.getElementByTagName("tagName")[3].textContent = "Este es mi nuevo texto"

//////////// El Query Selector es la forma mas moderna /////////////
Tambien puedo usar el Query Selector => Es un selector universal. Pero como dividimos entre ID, CLASS y ETIQUETA.. tomando los elementos de CSS. 

document.(QuerySelector(#ID))
document.(QuerySelector(.CLASS))
document.(QuerySelector(TAG))

Tiene la particularidad que solo me trae UN elemento, el primero que encuentra. Si quiero traer todos las etiquetas por ejemplo:
document.(QuerySelectorAll(TAG))

document.getElementById("#ID").style.color = "red"; => Le cambio el color a algun elemento desde desde JS. 

Agregar una clase con JS.
document.getElementById("#id").setAttribute(clave,valor); => Clave = Class y valor = nombre de la clase.

---------------------------------------

/////////////// Crear un elemento e inyectarlo dentro de un DIV vacio //////////////

const h2 = document.createElement("h2");
Ahora le quiero setear un atributo a mi h2.

h2.setAttribute("id", "elementoAgregado");
h2.textContent = "Elemento nuevo"

El elemento esta creado. Ahora quiero inyectarlo en un lugar especifico de mis HTML. La manera de hacerlo es ver el ID de mi DIV vacio. 

document.getElementById("ID").appendChild(h2);

/////////////// 

*/

