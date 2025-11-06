// scripts/app.js

// Datos Simulados
const estudiantes = [
    { id: 1, Nombre: 'Alice', Apellido: 'Pinga', Edad: 28 },
    { id: 2, Nombre: 'Bob', Apellido: 'Melano', Edad: 34 },
    { id: 3, Nombre: 'Charlie', Apellido: 'Flores', Edad: 22 },
];

const tabla = document.getElementById('tablaEstudiantes');

function cargarTabla() {
    tabla.innerHTML = '';
    estudiantes.forEach(est => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <tr>
            <td>${est.id}</td>
            <td>${est.Nombre}</td>
            <td>${est.Apellido}</td>
            <td>${est.Edad}</td>
            <td>
                <button class="btn btn-sm btn-warning">Editar</button>
                <button class="btn btn-sm btn-danger">Eliminar</button>
            </td>
        </tr>`;
    tabla.innerHTML += fila;
    });
}

cargarTabla();