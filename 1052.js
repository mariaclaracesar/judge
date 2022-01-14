var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var value = lines[0]

let number
if (value === '1') {
  number = 'January'
} else if (value === '2') {
  number = 'February'
} else if (value === '3') {
  number = 'March'
} else if (value === '4') {
  number = 'April'
} else if (value === '5') {
  number = 'May'
} else if (value === '6') {
  number = 'June'
} else if (value === '7') {
  number = 'July'
} else if (value === '8') {
  number = 'August'
} else if (value === '9') {
  number = 'September'
} else if (value === '10') {
  number = 'October'
} else if (value === '11') {
  number = 'November'
} else if (value === '12') {
  number = 'December'
}

console.log(number)
