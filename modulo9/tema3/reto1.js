/**
 * Ordena un array de números en orden ascendente.
 * 
 * @param {number[]} numeros - Array de números a ordenar.
 *   - Debe ser un array cuyos elementos sean exclusivamente números.
 * @returns {number[]} - Array ordenado en orden ascendente.
 *   - Devuelve el mismo array de entrada, pero ordenado de menor a mayor.
 * 
 * @throws {TypeError} - Si el argumento no es un array.
 * @throws {TypeError} - Si algún elemento del array no es un número.
 */
function ordenarArray(numeros) {
  // Validar que el argumento es un array
  if (!Array.isArray(numeros)) {
    throw new TypeError("El argumento debe ser un array de números.");
  }

  // Validar que todos los elementos del array son números
  if (!numeros.every(num => typeof num === "number")) {
    throw new TypeError("Todos los elementos del array deben ser números.");
  }

  // Usar sort con una función de comparación para asegurar el orden numérico
  return numeros.sort((a, b) => a - b);
}

// Ejemplo de uso
try {
  const numeros = [5, 2, 9, 1, 7]; // Array de números desordenados
  /**
   * Un array que contiene números ordenados en orden ascendente.
   * Esta variable es el resultado de llamar a la función `ordenarArray`.
   * 
   * @type {number[]}
   */
  const numerosOrdenados = ordenarArray(numeros); // Llamada a la función
  console.log(numerosOrdenados); // Salida: [1, 2, 5, 7, 9]
} catch (error) {
  // Manejo de errores
  console.error(error.message);
}