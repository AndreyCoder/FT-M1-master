function Node(data) {
  this.data = data
  this.next = null
}

function List() {
  this.head = null
  this.length = 0
}

List.prototype.add = function (data) {

  var nodo = new Node(data)
  this.length++

  if (!this.head) {
    this.head = nodo

  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = nodo
  }
}

let list = new List()
list.add('Andrey')
list.add('Hellen')
list.add('Emily')
list.add('Ibrahim')
console.log(list)