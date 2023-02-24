function greaterNumber(num1,num2){
  var result=num1>num2 ? num1:num2;
  console.log(`Greater number amongst ${num1},${num2} is:${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`______________Step2______________`);

function isEvenOrOddNum(num){
    var result1=num%2==0 ? "True":"False";
    return result1;
}
var result1=isEvenOrOddNum(29);
var result2=isEvenOrOddNum(44);
var result3=isEvenOrOddNum(0);
var result4=isEvenOrOddNum(101);
console.log(`29 is Even or Odd:${result1}`);
console.log(`44 is Even or Odd:${result2}`);
console.log(`0 is Even or Odd:${result3}`);
console.log(`101 is Even or Odd:${result4}`);
console.log(`____________________step3_____________________`);
function wordLength(word){
    var wordLength=word.length;
     var result=wordLength%2==0?"Even":"Odd";
    return result;
}
var result=wordLength("javascript");
var result1=wordLength("developer");
var result2=wordLength("Google Chrome");
console.log(`Word "javascript" has length:${result}`);
console.log(`Word "developer" has length:${result1}`);
console.log(`Word "google chrome" has length:${result2}`);
