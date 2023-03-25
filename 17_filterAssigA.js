const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("All the numbers which are greater than 50");
const newArray=[];
arrayNumbers.forEach(Element=>{
    if (Element>=50) {
        newArray.push(Element);
    }
} );
console.log(newArray);
console.log("All the even number");
const newArray1=[];
arrayNumbers.forEach(Element=>{
 if(Element%2==0){
    newArray1.push(Element);
     }
});
 console.log(newArray1);
console.log("All the odd number");
const newArray2=[];
arrayNumbers.forEach(Element=>{
    if (Element%2!=0) {
    newArray2.push(Element);
    }
})
console.log(newArray2);
console.log("Find all the number which are multiple of 5");
const newArray3=[];
arrayNumbers.forEach(Element=>{
    if (Element%5==0) {
        newArray3.push(Element)
    }
});
console.log(newArray3);