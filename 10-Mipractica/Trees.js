let contenedor = []

function Tree(data) {
  this.data = data
  this.right = null
  this.left = null
}

Tree.prototype.add = function (value) {
  var tree = new Tree(value)

  if (value < this.value) {
    if (!this.value) this.left = tree
    else this.left.add(value)

  } else {
    if (!this.right) this.right = tree
    else this.right.add(value)
  }
}

// ===== Inicio ordenamiento ===== \\

Tree.prototype.order = function () {

  contenedor.push(this.value)           // pre-order
  if (this.left) this.left.order()
  // contenedor.push(this.value)        // in-order
  if (this.right) this.right.order()
  // contenedor.push(this.value)        // post-order
}

// ===== Fin del ordenamiento ===== \\

let tree = new Tree(50)
tree.add(60)
tree.add(40)
tree.add(30)

console.log(tree)
console.log(tree.order())

