console.log("#Step 1:two functions no arguments and no return type#");
var name1="megha";
var  name2="kulkarni";
function myName(){
}
console.log("My FullName:",name1,name2);
console.log("#step 2:With arguments and inside a function");
var firstname="Megha";
var lastname="kulkarni";
var clgname="Sangola college Sangola";
function personalDetails(firstname,lastname,clgname){
    console.log("First Name:",firstname,"\n Last Name:",lastname,"\n college Name:",clgname);
}
personalDetails("Megha","Kulkarni","Sangola College Sangola");
console.log("# Step 3:Swap values");
function swapvaluesDude(value1,value2){
    console.log("Before swap:");
    console.log(value1,value2);
    console.log("After swap:");
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log(value1,value2);
}
swapvaluesDude("1000","2000");
swapvaluesDude("Virat","Anushka");
console.log("#Step 4 function with arguments and return");
function addthreeValues(value1,value2,value3){
    var sum=value1 + value2 + value3;
    return sum;
}
var sumResult=addthreeValues(10.23,600,40)
console.log(sumResult);

var sumResult=addthreeValues("Hello ", "Good ","Morning ")
console.log(sumResult);