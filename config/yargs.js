const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea especifica', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}