//Mostrar tabla del 5 y guardarla en un archivo .text

const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear(); //Limpiamos la consola

// Metodo viejo

// Obtenemos bandera de la base desde la terminal
// const [, , arg3 = 'base=5'] = process.argv;
// // extraemos solo el numero
// const [, base = 5] = arg3.split('=');
// const base = 2;

// console.log(argv);

// Mandamos la base que leemos desde la terminal
crearArchivo(argv.b, argv.l, argv.h)
   .then((nombreArchivo) => console.log(nombreArchivo.red, 'creado'))
   .catch((err) => console.log(err));
