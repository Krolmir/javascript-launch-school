let string = 'launch school tech & talk';

// Create a function that takes a string as an argument
// split the string into an array of words
// split the words into characters
// capitalize the first character then reassemble to characters, then words
function capitalizeWords(string) {
  let arrayOfWords = string.split(' ');
  console.log(arrayOfWords);

  let tempArray = arrayOfWords.map(function wordSplitter(letter) {
    let tempWord = (letter.split(''));
    return tempWord[0].toUpperCase() + tempWord.join('').substring(1);
  });
  console.log(tempArray.join(' '));
}

capitalizeWords(string);