function factorialOfNum(num){
  let result=1;
  if(typeof num!="number" ||isNaN(num) ){
    return `Invalid Data`;
  }
  for (let index = num; index >=1; index--) {
    let numIndex=index;
    result=result*numIndex;
     }
     return result;
}
let factorialOf5=factorialOfNum(5);
console.log(`The factorial of given number "5" is :${factorialOf5}`);
let factorialOf3=factorialOfNum(3);
console.log(`The factorial of given number "3" is :${factorialOf3}`);
let factorialOfNull=factorialOfNum(null);
console.log(`The factorial of given number "Null" is :${factorialOfNull}`);
let factorialOf8=factorialOfNum(8);
console.log(`The factorial of given number "8" is :${factorialOf8}`);
let factorialOfUndefined=factorialOfNum(undefined);
console.log(`The factorial of given number "Undefined" is :${factorialOfUndefined}`);
let factorialOf9=factorialOfNum(9);
console.log(`The factorial of given number "9" is :${factorialOf9}`);
let factorialOf0=factorialOfNum(0);
console.log(`The factorial of given number "0" is :${factorialOf0}`);
let factorialOfNaN=factorialOfNum(NaN);
console.log(`The factorial of given number "NaN" is :${factorialOfNaN}`);
