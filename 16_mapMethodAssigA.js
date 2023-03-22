const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("Add 10 into each array element");
const arrayTransformed = [];
arrayNumbers.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+10)
} );
console.log(arrayTransformed);
console.log("Square the each array element");
const arrayTransformed1=[];
arrayNumbers.forEach((currentValue) =>{
    arrayTransformed1.push(currentValue **2)
});
console.log(arrayTransformed1);
console.log("Add the index value into its corresponding each array element");