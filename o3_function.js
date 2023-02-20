var num1=100;
var num2=200;
var str1="sweety";
var str2="cutie";


function swapVariables(value1,value2){//var value1=num1, var value2=num2
   console.log("Before swap:",value1,value2);
     var temp=value1;
     value1=value2;
     value2=temp;
     console.log("After swap:",value1,value2);
     return "swapping variables successfully completed";
}
  var swapResult=swapVariables(num1,num2);//function call or function invoke//
  console.log(swapResult);
  var swapResult1=swapVariables(str1,str2);
  console.log(swapResult1);

varAge