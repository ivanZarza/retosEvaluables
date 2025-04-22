// ESTE ES EL PROMPT USADO PARA EL RETO:
//hazlo en javascript mejor, y añade manejo de errores, lectura de datos delimitados y lo que creas que puede mejorar el programa, explicamelo detalladamente

const fs = require('fs');
const csv = require('csv-parser');

/**
 
Convierte un archivo CSV a JSON.
@param {string} archivoCsv - Ruta del archivo CSV de entrada.
@param {string} archivoJson - Ruta del archivo JSON de salida.
@param {string} delimitador - Delimitador usado en el archivo CSV (por defecto es ',').*/
function csvAJson(archivoCsv, archivoJson, delimitador = ',') {
  // Validar si el archivo CSV existe
  if (!fs.existsSync(archivoCsv)) {
    console.error(new Error(`El archivo CSV "${archivoCsv}" no existe.`));
    return;
  }

  const resultados = [];

  try {
    // Leer el archivo CSV con el delimitador especificado
    fs.createReadStream(archivoCsv)
      .pipe(csv({ separator: delimitador }))
      .on('data', (fila) => {
        resultados.push(fila);
      })
      .on('end', () => {
        // Validar si el archivo CSV estaba vacío
        if (resultados.length === 0) {
          console.error('Error: El archivo CSV está vacío o no contiene datos válidos.');
          return;
        }

        // Escribir los datos en el archivo JSON
        fs.writeFile(archivoJson, JSON.stringify(resultados, null, 4), 'utf8', (err) => {
          if (err) {
            console.error('Error al escribir el archivo JSON:', err);
          } else {
            console.log(`Archivo convertido exitosamente: ${archivoJson}`);
          }
        });
      })
      .on('error', (err) => {
        console.error('Error al procesar el archivo CSV:', err);
      });
  } catch (error) {
    console.error('Error inesperado:', error);
  }
}

// Ejemplo de uso
// Cambia 'archivo.csv' y 'archivo.json' por las rutas de tus archivos
csvAJson('archivo.csv', 'archivo.json', ';');