console.log(`-------For String Assignment-------------`);
console.log(`=======Q1)==========`);

var str = function name(string) {
  var count = 0;
  for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if ( char == "a" ||char == "e" || char == "i" ||char == "o" ||char == "u" ||char == "A" ||char == "E" || char == "I" ||char == "O" ||char == "U" ) 
    {
      count = count + 1;
    }
  }
  return count;
};
var result1 = str("JavaScript is the language of internet");
console.log(
  `The Number of Vowels in given string "JavaScript is the language of internet" is:${result1}`
);
console.log(`---------`);

var result2 = str("I am Angular Developer");
console.log(
  `The Number of Vowels in given string "I am Angular Developer" is:${result2}`
);
console.log(`---------`);

var result3 = str("Hard work and commitment is the key of success");
console.log(
  `The Number of Vowels in given string "Hard work and commitment is the key of success" is:${result3}`
);

console.log(`=======Q2)==========`);

function lastWordCharsCount(newString) {
  var countChar = 0;
  for (let index = newString.length - 1; index >= 0; index--) {
    var charNewString = newString.charAt(index);
    if (charNewString == " ") {
      break;
    }

    countChar = countChar + 1;
  }

  return countChar;
}
var result1 = lastWordCharsCount("JavaScript is the language of internet");
console.log(
  `Total number of character available in last word of string :"JavaScript is the language of internet" is: ${result1}`
);
console.log(`---------`);

var result2 = lastWordCharsCount("I am Angular Developer");
console.log(
  `Total number of character available in last word of string :"I am Angular Developer" is: ${result2}`
);
console.log(`---------`);

var result3 = lastWordCharsCount(
  "Hard work and commitment is the key of success"
);
console.log(
  `Total number of character available in last word of string :"Hard work and commitment is the key of success" is: ${result3}`
);