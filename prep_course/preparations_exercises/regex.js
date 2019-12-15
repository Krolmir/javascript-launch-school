let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function logMatch(array, reg) {
  array.forEach(word => {
    if (word.match(reg)) {
      console.log(word);
    }
  });
}

logMatch(words, /lab/);

// Output
// 'laboratory'
// 'flab'
// 'elaborate'