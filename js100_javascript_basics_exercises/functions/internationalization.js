function greet(language) {
  switch (language) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Olá!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Hej!');
      break;
    case 'af':
      console.log('Haai!');
      break;
  }
}

// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'

function localGreet(languageCode) {
  let code =  languageCode.split('_')[0];
  let englishCode = languageCode.split('_')[1].split('.')[0];

  switch (code) {
     case 'en':
       if (englishCode === 'US') {
         return 'Hey!';
       } else if (englishCode === 'GB') {
         return 'Hello!';
       } else if (englishCode === 'AU') {
         return 'Howdy!';
       }
      break;
    case 'fr':
      return 'Salut!';
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'