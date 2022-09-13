// ===== Metodo 1 ===== \\
var array1 = [2, 5, 6, 3, 1, 8, 10, 9]

function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // manera 1
        [array[j], array[j + 1]] = [array[j + 1], array[j]]

        // manera 2
        // let aux = array[j]
        // array[j] = array[j + 1]
        // array[j + 1] = aux
      }
    }
  }
  return array
}

let resp1 = bubbleSort(array1)
console.log(resp1, 'con for')

// ===== Metodo 2 ===== \\
var array2 = [2, 5, 6, 3, 1, 8, 10, 9]

function bubbleSortWhile(array) {
  var swap = true

  while (swap) {
    swap = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var aux = array[i + 1]
        array[i + 1] = array[i]
        array[i] = aux
        swap = true
      }

    }
  }
  return array
}

let resp2 = bubbleSortWhile(array2)
console.log(resp2, ' con while')