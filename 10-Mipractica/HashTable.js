function HashTable() {
  this.buckets = []
  this.numBuckets = 35
}

HashTable.prototype.hash = function (key) {
  let sum = 0
  for (var i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i)
  }
  return sum % this.numBuckets
}

HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') throw TypeError('Keys must be string')
  var slot = this.hash(key)
  if (!this.buckets[slot]) {
    // vamos acrear una subestructura
    this.buckets[slot] = {}
  }
  this.buckets[slot][key] = value
}

HashTable.prototype.get = function (key) {
  var slot = this.hash(key)
  return this.buckets[slot][key]
}

HashTable.prototype.hasKey = function (key) {
  var slot = this.hash(key)
  return this.buckets[slot].hasOwnProperty(key)
}

