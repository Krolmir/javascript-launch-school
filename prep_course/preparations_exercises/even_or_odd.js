let prompt = require('readline-sync');

function evenOrOdd (number) {
  if (Number.isInteger(Number.parseInt(number)) && number % 2 === 0 ) {
    console.log('even')
  } else if (Number.isInteger(Number.parseInt(number)) && number % 2 !== 0 ) {
    console.log('odd')
  } else {
    console.log('That is not a number!')
  }
}

evenOrOdd(prompt.question('Enter a number to find out if it\'s even or odd: '));