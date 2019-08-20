// app.js

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(() => {
                console.log('tabla creada.');
            })
            .catch((e) => {
                console.log(e);
            })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log('Archivo creado:'.blue + ` ${ archivo }`.cyan);
            })
            .catch((e) => {
                console.log(e);
            });
        break;
    default:
        console.log('Comando no reconocido'.red);

}




//console.log(comando);
/*

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);




*/