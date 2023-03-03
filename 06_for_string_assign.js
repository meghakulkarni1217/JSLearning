// function countVowels(str) {
//     var countVowels = 0;
//     var string = str.toString("JavaScript is the language of Internet");
//     for (var index = 0; index <= string.length - 1; index++) {
//       if (string.charAt(index) == "a" || string.charAt(index) == "e" || string.charAt(index) == "i" || string.charAt(index) == "o" || string.charAt(index) == "u") {
//       countVowels=countVowels+1;
//       }
//     }
//     return countVowels;
//     console.log("countVowels");
//   }

  console.log(`_______________Step2____________________`);
  var lengthOfLastWord = function(s) {
     var str = s. trim(); 
     var len = str. length;
      var i = len - 1; 
      while (i >= 0 && str[i] !== ' ') i--; 
      return len - 1 - i;
 };