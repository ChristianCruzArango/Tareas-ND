const fs = require('fs');


let listadoTODO = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTODO);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoTODO = require('../db/data.json');
    } catch (error) {
        listadoTODO = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoTODO.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = (completado) => {
    cargarDB();

    return listadoTODO;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoTODO.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoTODO[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false
    }
}

const borrado = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoTODO.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoTODO.length === nuevoListado.length) {
        return false
    } else {
        listadoTODO = nuevoListado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrado
}