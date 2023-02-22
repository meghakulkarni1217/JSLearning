 var javas="javascript";
 var gchrome="Google Chrome";
 var devsmart="Developer Smart";

function squareOfWordLength(value1){
console.log(`The given string is:${value1}`);
console.log(`the length of word is ${value1}:${value1.length}`);
console.log(`the square of the string is: ${value1.length ** 2}`);
console.log(`===================`);
}
squareOfWordLength(javas);
squareOfWordLength(gchrome);
squareOfWordLength(devsmart);

function angularD(){
    var angu="I am Angular Developer";
    var strLength=angu.length;
    var splitStatement=angu.split(" ");
    var wordCount=splitStatement.length;
    console.log(`The given string is "I am Angular Developer" and its length is: ${strLength}`);
    console.log(`The given string is "I am Angular Developer" and its length is: ${wordCount}`);
    console.log(`The Result of string length divide by total number words is: ${strLength/wordCount}`);
    console.log(`The Result of string length multiplication by total number words is: ${strLength*wordCount}`);
}
angularD()