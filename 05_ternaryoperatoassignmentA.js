var num1=10;
var num2=-10;
function greaterNumber(){
result=num1>=num2;
return greaterNumber;
}
 var greatervalue=greaterNumber(num1,num2);
console.log(`The given no 10 is more than -10`);
console.log(result);

var num1=800;
var num2=899;
function greaterNumber(){
result=num1>=num2;
return greaterNumber;
}
 var greatervalue=greaterNumber(num1,num2);
console.log(`The given no 800 is  not more than 899`);
console.log(result);
  console.log(`===Step2===`);
var num=29;
function isEvenOrOdd(){
    result= num%2==0?"Even":"Odd";
    return isEvenOrOdd;
}
var EvenOdd=isEvenOrOdd(num);
console.log(`The given no is 29`);
console.log(result);

var num=44;
function isEvenOrOdd(){
    result= num%2==0?"Even":"Odd";
    return isEvenOrOdd;
}
var EvenOdd=isEvenOrOdd(num);
console.log(`The given no is 44`);
console.log(result);

var num=0;
function isEvenOrOdd(){
    result= num%2==0?"Even":"Odd";
    return isEvenOrOdd;
}
var EvenOdd=isEvenOrOdd(num);
console.log(`The given no is 0`);
console.log(result);

var num=101;
function isEvenOrOdd(){
    result= num%2==0?"Even":"Odd";
    return isEvenOrOdd;
}
var EvenOdd=isEvenOrOdd(num);
console.log(`The given no is 101 `);
console.log(result);

console.log(`==Step 3==`);
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 console.log(`Word "Google" has ${wordLength("Google")} length` );
 var result = wordLength("Developer");
 console.log(`Word "Developer" has ${wordLength("Developer")} length` );