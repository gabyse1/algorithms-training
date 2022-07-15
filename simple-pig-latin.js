// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
  //Code here
  return str.split(/ /).map((ele) => {
    if (!ele.match(/[^a-zA-Z]/)) {
      return ele.slice(1).concat(ele[0], 'ay');
    }
    return ele;
  }).join(' ');
};

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
