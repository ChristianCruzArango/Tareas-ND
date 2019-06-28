const argv = require('./config/yargs').argv;
const TODO = require('./TODO/TODO');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = TODO.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = TODO.getListado(argv.completado);

        for (let tarea of listado) {
            console.log('==========TODO============='.green);
            console.log(tarea.descripcion);
            console.log('Estado:' + tarea.completado);
            console.log('==========================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = TODO.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = TODO.borrado(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}