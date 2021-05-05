const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
   try {
      let salida = '';
      let consola = '';

      for (let i = 1; i <= hasta; i++) {
         // Guardar en el archivo text
         salida += `${base} x ${i} = ${base * i}\n`;

         //   Imprimir en pantalla
         consola += `${base} ${'x'.grey} ${i} ${'='.grey} ${base * i}\n`;
      }

      if (listar) {
         console.log('-----------------------'.cyan);
         console.log('  Tabla del '.cyan, colors.magenta(base));
         console.log('-----------------------'.cyan);

         console.log(colors.green(consola));
      }

      // File
      // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
      //    if (err) throw err;

      //    console.log('Archivo tabala-5.txt creado');
      // });

      //FileSync
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

      return `Archivo tabala-${base}.txt`;
   } catch (error) {
      throw error;
   }
};

module.exports = {
   crearArchivo,
};
