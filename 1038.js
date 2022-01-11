var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var values = lines[0].split(' ')
var code = values[0]
var itemQuantity = values[1]

let total = 0
if (code === '1') {
  total = itemQuantity * 4
} else if (code === '2') {
  total = itemQuantity * 4.5
} else if (code === '3') {
  total = itemQuantity * 5
} else if (code === '4') {
  total = itemQuantity * 2
} else if (code === '5') {
  total = itemQuantity * 1.5
}

console.log(`Total: R$ ${total.toFixed(2)}`)

const codeObj = {
  1: 4,
  2: 4.5,
  3: 5,
  4: 2,
  5: 1.5
}
const valor = codeObj[code]
const valorPago = valor * itemQuantity
console.log('O valor é:', valorPago.toFixed(2))

let value = 0
switch (code) {
  case '1':
    value = 4
    break
  case '2':
    value = 4.5
    break
  case '3':
    value = 5
    break
  case '4':
    value = 2
    break
  case '5':
    value = 1.5
    break

  default:
    value = 0
    break
}

const finalValue = value * itemQuantity
console.log('O valor de value é', finalValue.toFixed(2))
