let rSync = require('readline-sync');
let weather = rSync.question('How is the weather? ');

switch (weather) {
  case 'sunny':
    console.log('It\'s a beautiful day');
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log('Let\'s stay inside.');
}