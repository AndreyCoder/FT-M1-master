function saludar(saludo) {
  return function (saludar) {
    return `${saludo} ${saludar}`
  }
}
// var primerSaludo = saludar('Hola buen dia');
// primerSaludo('Andrey')

// =============================================== \\

function crearFunction() {
  var arreglo = []
  for (let i = 0; i < 3; i++) {
    arreglo.push(
      // (function (j) {
      //   console.log(j)
      // }(i))
      function () {
        console.log(i, 'crarFuntion')
      }
    )
  }
  return arreglo
}
// var arr = crearFunction()
// console.log(arr[0]())
// console.log(arr[1]())
// console.log(arr[2]())


// ================================================== \\

function hacerSaludo(lenguaje) {
  if (lenguaje === 'en') {
    return function () {
      console.log('Hi')
    }
  }
  if (lenguaje === 'es') {
    return function () {
      console.log('Hola')
    }
  }
}
// var saludatI = hacerSaludo('en')
// saludatI()
// var saludatE = hacerSaludo('es')
// saludatE()

// =================================================== \\

function numeros(num) {
  return function () {
    return ++num
  }
}
// var numero = numeros(0)
// numero()
// numero()
// numero()

// ==================================================== \\

var persona = {
  nombre: 'Andrey',
  apellido: 'Murillo'
}

function logNombre() {
  var nombreCompleto = `${this.nombre} ${this.apellido}`
  return nombreCompleto
}
// var nombreP = logNombre.bind(persona)
// nombreP()

// ==================================================== \\

function multiplicar(a, b) {
  return a * b
}
// var mult = multiplicar.bind(this, 2)
// mult(5)

// ==================================================== \\

function counter() {
  let contador = 0;
  return function () {
    return ++contador
  }
}
// let newCounter = counter()
// newCounter()
// newCounter()
// newCounter()

// ==================================================== \\

let array = [1, 1, 2, 3, 3, 4, 5, 5]
let ar = new Set(array)

// array.push(20)
// console.log(array)
// ar.add(6)
// console.log(ar)

// ==================================================== \\

class Stack {
  constructor() {
    this.stack = []
  }
  push(value) {
    this.stack.push(value)
  }
  shift() {
    return this.stack.shift()
  }
}
// stackOne = new Stack()
// stackOne.push(1)
// stackOne.push(2)
// stackOne.push(3)
// console.log(stackOne)

// stackOne.shift()
// console.log(stackOne)


