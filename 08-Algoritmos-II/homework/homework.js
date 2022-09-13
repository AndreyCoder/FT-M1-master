'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array

  var pivote = array[0]
  var menores = []
  var mayores = []

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivote) {
      mayores.push(array[i])
    } else {
      menores.push(array[i])
    }
  }
  return quickSort(menores).concat(pivote, quickSort(mayores))
}

function merge(izq, der) {
  var izqIndex = 0
  var derIndex = 0
  var array = []

  while (izqIndex < izq.length && derIndex < der.length) {
    if (izq[izqIndex] < der[derIndex]) {
      array.push(izq[izqIndex])
      izqIndex++
    } else {
      array.push(der[derIndex])
      derIndex++
    }
  }
  return array.concat(izq.slice(izqIndex)).concat(der.slice(derIndex))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // el caso base es el array.length <= 1
  if (array.length === 1) return array

  // dividir el array en 2
  var mitad = Math.floor(array.length / 2)

  // la primera mitas del array
  var izquierda = array.slice(0, mitad)
  // la segunda mitas del array
  var derecha = array.slice(mitad)

  return merge(mergeSort(izquierda), mergeSort(derecha))
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
