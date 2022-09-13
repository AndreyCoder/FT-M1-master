// ===== FIFO ===== \\

function QueueFifo() {
  this.fifo = []
}

QueueFifo.prototype.enqueue = function (value) {
  this.fifo.push(value)
}

QueueFifo.prototype.dequeue = function () {
  return this.fifo.shift()
}

QueueFifo.prototype.size = function () {
  return this.fifo.length
}

let queueFifo = new QueueFifo
queueFifo.enqueue(1)
queueFifo.enqueue(2)
queueFifo.enqueue(3)
queueFifo.enqueue(4)
console.log(queueFifo)
queueFifo.dequeue()
console.log(queueFifo)

// ===== FIFO ===== \\


// ===== lIFO ===== \\

function QueueLifo() {
  this.lifo = []
}

QueueLifo.prototype.enqueue = function (value) {
  this.lifo.push(value)
}

QueueLifo.prototype.dequeue = function () {
  return this.lifo.pop()
}

QueueLifo.prototype.size = function () {
  return this.lifo.length
}

let queueLifo = new QueueLifo
queueLifo.enqueue(1)
queueLifo.enqueue(2)
queueLifo.enqueue(3)
queueLifo.enqueue(4)
console.log(queueLifo)
queueLifo.dequeue()
console.log(queueLifo)

// ===== lIFO ===== \\