"use strict";

/*
  Implementar la clase BinarySearchTree, definiendo los siguientes métodos 
  recursivos:
  - size: retorna la cantidad total de nodos del árbol

  - insert: agrega un nodo en el lugar correspondiente

  - contains: retorna true o false luego de evaluar si cierto valor existe 
  dentro del árbol

  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) 
  en cualquiera de sus variantes, según se indique por parámetro ("post-order", 
  "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el 
  recorrido "in-order" por defecto.

  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen 
  bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function (value) {

  // pregunto si el parametro es menor
  if (this.value > value) {
    // preunto si la izquierda esta vacia, si lo agrego el nodo
    if (!this.left) this.left = new BinarySearchTree(value)
    // si no esta vacia se hace recursion
    else this.left.insert(value)

    // si el parametro es mayor o igual
  } else {
    // preunto si la derecha esta vacia, si lo agrego el nodo
    if (!this.right) this.right = new BinarySearchTree(value)
    // si no esta vacia se hace recursion
    else this.right.insert(value)
  }
}

BinarySearchTree.prototype.size = function () {

  // caso base --> 1 bst hoja
  if (!this.left && !this.right) return 1
  // 1 bst con 1 hijo a la izquierda
  if (this.left && !this.right) return 1 + this.left.size()
  // 1 bst con 1 hijo a la derecha
  if (!this.left && this.right) return 1 + this.right.size()
  // 1 bst con 2 hijos
  if (this.left && this.right) return 1 + this.left.size() + this.right.size()
}

BinarySearchTree.prototype.contains = function (value) {

  // caso de corte ne la recursion
  if (this.value === value) return true
  // si es mayor o menor
  if (value > this.value) {
    if (!this.right) return false
    else return this.right.contains(value)

  } else {
    if (!this.left) return false
    else return this.left.contains(value)
  }
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {

  if (order === "post-order") {
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }

  else if (order === "pre-order") {
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
  }

  else {
    if (this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {

  cb(this.value)
  if (this.left) array.push(this.left)
  if (this.right) array.push(this.right)

  if (array.length > 0) array.shift().breadthFirstForEach(cb, array)
}

// let tree = new BinarySearchTree(50)
// tree.insert(70)
// tree.insert(60)
// console.log(tree)



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
