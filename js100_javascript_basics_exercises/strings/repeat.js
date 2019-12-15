function repeat(number, string) {
   let resultString = '';
   for (let i = 0; i < number; i++) {
     resultString += string;
   }
   console.log(resultString);
}

repeat(3, 'ha'); // 'hahaha'