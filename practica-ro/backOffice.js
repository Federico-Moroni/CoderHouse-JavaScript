let arrayDatosLocalMostrar;

class User {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

const userLogin = new User ('federo',2712);

// Boton ejecuta chequeoLogin()

document.getElementById('btn-bo').addEventListener('click', () => {chequeoLogin(), resetForm()});

const resetForm = () => {
    document.getElementById('formBo').reset();
}

const chequeoLogin = () => {
usuario = document.getElementById('user').value;
contra = Number(document.getElementById('password').value);

    if ((usuario === 'federo') && (contra === 2712)) {
        imprimirDatos();
    } else {
        alert('Usuario Incorrecto')
    }
}

const extraerDatosLocalMostrar = () => {
    if (JSON.parse(localStorage.getItem('listaUsuarios')) == null) {
        alert('No hay datos para mostrar');
    } else {
        arrayDatosLocalMostrar = JSON.parse(localStorage.getItem('listaUsuarios'));
        return arrayDatosLocalMostrar;
    }
}

const imprimirDatos = () => {
    let indice = 0;
    extraerDatosLocalMostrar().forEach(element => {
        indice += 1;

        document.getElementById('table').innerHTML += `
        <tr>
            <td>${indice}</td>
            <td>${element.nombre}</td>
            <td>${element.documento}</td>
            <td>${element.edad}</td>
        </tr>
        `
    })
}

// Buscador

const guardarValorBuscado = () => {
let valorBuscado = document.getElementById('buscador').value;
return valorBuscado;
}

// Boton buscar guardarValorBuscado()

document.getElementById('btn-buscador').addEventListener('click', () => {guardarValorBuscado(), imprimirDatosBuscador()});

// Funcion buscadora 

const buscar = () => {
    let tipoDeBusqueda = "";

    let nombre1 = document.getElementById('nombre');
    let documento1 = document.getElementById('documento');
    let edad1 = document.getElementById('edad');
    
    if (nombre1.checked) {
        tipoDeBusqueda = nombre1.value;
    } else if(documento1.checked) {
        tipoDeBusqueda = documento1.value;
    } else if(edad1.checked) {
        tipoDeBusqueda = edad1.value; 
    }

    let arrayBuscado = extraerDatosLocalMostrar().filter(element => element.tipoDeBusqueda == guardarValorBuscado());
    return arrayBuscado;

}

const imprimirDatosBuscador = () => {
    let indice = 0;
    buscar().forEach(element => {
        indice += 1;

        document.getElementById('table-buscador').innerHTML += `
        <tr>
            <td>${indice}</td>
            <td>${element.nombre}</td>
            <td>${element.documento}</td>
            <td>${element.edad}</td>
        </tr>
        `
    })
}

const tipoDeBusqueda = () => {
    let tipoDeBusqueda = "";

    let nombre1 = document.getElementById('nombre');
    let documento1 = document.getElementById('documento');
    let edad1 = document.getElementById('edad');
    
    if (nombre1.checked) {
        tipoDeBusqueda = nombre1.value;
    } else if(documento1.checked) {
        tipoDeBusqueda = documento1.value;
    } else if(edad1.checked) {
        tipoDeBusqueda = edad1.value; 
    }

    return tipoDeBusqueda;
}
