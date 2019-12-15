let rlSync = require('readline-sync');
let startingAge = Number(rlSync.question('What is your age: '));

for (let i = 0; i < 5; i++ ) {
  if (i === 0) {
    console.log(`You are ${startingAge} years old.`);
  } else {
    startingAge += 10;
    console.log(`In 10 years, you will be ${startingAge} years old.`);
  }
}

/*}
console.log(`You are ${startingAge} years old.`);
console.log(`In 10 years, you will be ${startingAge + 10} years old.`);
console.log(`In 10 years, you will be ${startingAge + 20} years old.`);
console.log(`In 10 years, you will be ${startingAge + 30} years old.`);
console.log(`In 10 years, you will be ${startingAge + 40} years old.`);
*/