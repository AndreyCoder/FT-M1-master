// CLOSURE

// Retorna una funcion que cuando sea invocada con un valor mayor a 50 
// retorne un valor decreciente,
// pero si el valor es menor o igual que 50 retorne un valor creciente
// el primer valor debe ser el que se le pase por parametro a la funcion 
// global.
// ejemplo: const newCounter = arribaArbajo(49);
// newCounter(); // 50
// newCounter(); // 51
// newCounter(); // 52
// newCounter(); // 53
// ejemplo: const newCounter = arribaArbajo(52)
// newCounter(); // 51
// newCounter(); // 50
// newCounter(); // 49

function arribaAbajo(n) {
  if (n <= 50) {
    return function () {
      return ++n
    }
  } else {
    return function () {
      return --n
    }
  }
}

// Testing casero

var arribaTest = arribaAbajo(48);
// console.log(arribaTest)
// console.log(arribaTest());
// console.log(arribaTest());
// console.log(arribaTest());
// console.log(arribaTest());

// var abajoTest = arribaAbajo(52);
// console.log(abajoTest())
// console.log(abajoTest())
// console.log(abajoTest())

/*---------------------------------------------------*/

/* 
  Desarrollar una funcion closureNacionality que recibe como parametro:
  - Un array de caracteristicas de la nacion (nacTips)
  - Un numero minimo de caracteristicas que tiene que tener la persona 
  para ser descubierta su nacionalidad

  Su funcion de closure, va a recibir a la persona a evaluar.

  var persona1 = {
    name: 'Ronaldo',
    tip: ['aguacate', 'caribe', 'Shakira', 'Tayrona']
  }

  var persona2 = {
    name: 'Marcelina',
    tip: ['fresa', 'Tayrona', 'mate', 'palta']
  }

  var colombia = [
    'fresa', 
    'Tayrona', 
    'Caribe', 
    'aguacate', 
    'cafe', 
    'piña', 
    'Shakira'
  ];

  var argentina = [
    'frutilla', 
    'Cataratas', 
    'mate', 
    'palta', 
    'Tonolec', 
    'anana' 
  ] 

  var sosColombia = closureNacionality(colombia, 3)

  let Ronaldo = sosColombia(persona1)
  --> true

  let Marce = sosColombia(persona2)
  --> false
*/

function closureNacionality(nac, min) {
  console.log(nac, min)
  return function nacPersona(persona) {
    console.log(persona)
    var iguales = 0
    console.log(iguales)
    for (let i = 0; i < nac.length; i++) {
      for (let j = 0; j < persona.tip.length; j++) {
        if (nac[i] === persona.tip[j]) {
          iguales++
          console.log(iguales)
        }
      }
    }
    if (iguales >= min) return true
    else return false
  }
}

// Testing casero
var persona1 = {
  name: "Ronaldo",
  tip: ["aguacate", "caribe", "Shakira", "Tayrona"],
};

var persona2 = {
  name: "Marcelina",
  tip: ["fresa", "Tayrona", "mate", "palta"],
};

var colombia = [
  "fresa",
  "Tayrona",
  "Caribe",
  "aguacate",
  "cafe",
  "piña",
  "Shakira",
];
var argentina = [
  "frutilla",
  "Cataratas",
  "mate",
  "palta",
  "L-gante",
  "anana"
];

var sosColombia = closureNacionality(colombia, 3);

var Ronaldo = sosColombia(persona1);
//var Marce = sosColombia(persona2);

// console.log(closureNacionality());
// console.log(Ronaldo);
// console.log(Marce);

/*---------------------------------------------------*/

// RECURSION

// OBJETOS Y RECURSION

// Implementar la función countProps: a partir de un objeto en el 
// cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de 
// objetos en cualquier nivel, ya sea el inicial
// u objetos anidados (Atencion: excepto que esten adentro de un 
// array, esas propiedades no se cuentan)

// Ejemplo:
var obj = {
  a: {
    a1: 10,
    a2: "10",
    a3: {
      a3a: "10",
      a3b: "10",
      a3c: {
        a3c1: true
      }
    },
  },
  b: 2,
  c: [1, { a: 1 }, "Duda"],
};
// countProps(obj)--> Deberia devolver 10 ya que el objeto 
// inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, y a3 tiene otras 3.
// Propiedades: a, a1, a2, a3, a3a, a3b, a3c, a3c1, b, c --> 10 en total

var countProps = function (obj) {
  var contador = 0

  for (var propiedad in obj) {
    contador++
    if (typeof obj[propiedad] === 'object' && !Array.isArray(obj[propiedad])) {
      contador += countProps(obj[propiedad])
    }
  }
  return contador
};

// console.log(countProps(obj))

// ----------------------------------------------//
// Implementar la función countArray: a partir de un array en el cual 
// cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos 
// los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)

//No se puede utilizar, pero esta bueno investigar el metodo .flat()

var countArray = function (array) {
  // m 47
  return array.reduce((counter, item) => {
    const total = Array.isArray(item) ? countArray(item) : item
    return counter + total
  }, 0)
};

// const array = [1, [2, [3, 4]], [5, 6], 7];
// console.log(countArray(array), 'counterArray')

// ----------------------------------------------//
function espejo(str) {
  //Objetivo: Realizar una funcion que invierta el orden del string recibido

  // Ejemplo: espejo("hola susuna")
  // --> 'anusus aloh'

  //caso de corte
}

console.log(espejo("hola susana"))


// QUEUE ----------------------------------------------

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (x) {
  this.array.push(x);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

function filtraQueue(arg) {
  //Realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
  //Ejemplo
  // let array = [1, "a", 2, "b", [1, 2, 3]]
  //                        i
  // filtraQueue(array)
  // -> ["a", "b", [1, 2, 3]]

}
var arrayQueue = [1, "a", 2, "b", [1, 2, 3]]
// console.log(filtraQueue(arrayQueue))

/* ------------------------------------------------------------------------------------

  Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
  debe devolver una nueva Queue que vaya mergeando los elementos de las anteriores.
  Ejemplo:
  - queueOne: [1,3,5]
  - queueTwo: [2,4,6]
  mergeQueues(queueOne, queueTwo) --> [1,2,3,4,5,6]
  IMPORTANTE: Lo que recibe NO son arreglos sino que son Queues.
  */
var mergeQueues = function (queueOne, queueTwo) {

};

var queue1 = new Queue()
// queue1.enqueue(1)
// queue1.enqueue(32)
// queue1.enqueue(5)
// var queue2 = new Queue()
// queue2.enqueue(2)
// queue2.enqueue(4)
// queue2.enqueue(60)
// console.log(mergeQueues(queue1, queue2))


// LINKEDLIST ---------------------------------------------
function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function (value) {
  var nuevoNodo = new Node(value);

  if (!this.head) {
    this.head = nuevoNodo;
  } else {
    var current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = nuevoNodo;
  }
};


LinkedList.prototype.size = function () {
  //Elaborar una funcion que devuelva la cantidad de nodos de una linkedList

  //Ejemplo: [head] --> ["first"] --> ["second"] --> ["the last nodito"]---> null
  //                                                                            ^
  //                        1              2                   3
  // size: 3
};

var lista = new LinkedList()
lista.add("first")
lista.add("second")
//lista.add("last nodito")
lista.size()

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede forzar a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1
//

LinkedList.prototype.changeNotNumbers = function () {
};
var listDos = new LinkedList()
// listDos.add(1)
// console.log(listDos)
// listDos.add("2")
// listDos.add(false)
// listDos.add("hola")
// console.log(listDos.changeNotNumbers())
// console.log(listDos)


// ARBOLES ------------------------------------------
// Repasando BST
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value) {
    if (!this.left) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  } else if (this.value < value) {
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }
};

// Agrega a su prototipo el método sum
// Debe retornar la suma total de los valores dentro de cada nodo del arbol

BinarySearchTree.prototype.sum = function () {
};

var tree = new BinarySearchTree(0)
// tree.insert(-1)
// tree.insert(-2)
// tree.insert(5)
// tree.insert(3)
// tree.insert(7)
// tree.insert(4)
// console.log(tree.sum())

BinarySearchTree.prototype.height = function () {
  // Elaborar una funcion que devuelva la altura de un arbol (es decir la cantidad de niveles que tiene)
  // Tip. Pensar en el metodo size, y utilizar Math.max()
  /*  
                        0                  Nivel 0
                      /  \
                    -1   5                Nivel 1
                    /    / \
                  -2    3    7            Nivel 2
                        \
                        4                 Nivel 3
  
                        La altura de este arbol es 3.
                        
      */


  // caso de corte
};

/* --------------------------- EXTRAS --------------------------*/

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida:
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas.

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado oro : raM odaluzA oro

function efectoEspejo(str) {
  //tu codigo aqui
}
