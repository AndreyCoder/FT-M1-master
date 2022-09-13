'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimalNumber = 0;
  const bitsCount = num.length;

  for (let i = 0; i < bitsCount; i++) {
    let position = bitsCount - 1 - i;
    let basePower = 2 ** i;
    decimalNumber += num[position] * basePower;
  }

  return decimalNumber;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = '';

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2)
  }

  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}