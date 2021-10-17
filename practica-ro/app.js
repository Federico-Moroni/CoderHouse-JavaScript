// ENTIDAD Factory

class Usuarios {
    constructor ({nombre, documento, edad}) {
        this.nombre = nombre;
        this.documento = documento;
        this.edad = edad;
    }
}

// Funcion resetForm()

const resetForm = () => {
    document.getElementById('form').reset();
}

// Funcion generadora de usuarios extraerDatos()

const extraerDatos = () => {
    const nuevoUsuario = new Usuarios ({
        nombre : document.getElementById('nombre').value,
        documento : document.getElementById('documento').value,
        edad : document.getElementById('edad').value
    });
        
    return nuevoUsuario;
}

// Boton ejecuta guardarLocalStorage(), resetForm().

document.getElementById('btn').addEventListener('click', () => {guardarLocalStorage(),resetForm()});

// LocalStorage logic

const guardarLocalStorage = () => {
    if(JSON.parse(localStorage.getItem('listaUsuarios')) == null) {
        let listaUsuarios = [];
        listaUsuarios.push(extraerDatos());
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    } else {
        listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
        listaUsuarios.push(extraerDatos());
        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    }
}

