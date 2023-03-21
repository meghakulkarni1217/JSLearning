const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`_______________________________Step1______________________________________`);
arrayNumbers.forEach( ( index,currentValue ) => {
    console.log(`index is:${index} Array Element is:${currentValue}`);
});
console.log(`_______________________________Step2______________________________________`);
console.log("Positive Numbers");
arrayNumbers.forEach((index,currentValue) => {
    if (index>0) {
        console.log(index);
    }
});
console.log(`_______________________________Step3______________________________________`);
console.log("Negative  Numbers");
arrayNumbers.forEach((index,currentValue)=>{
    if(index<0){
        console.log(index);
    }
});
console.log(`_______________________________Step4______________________________________`);
console.log("Even Number");
arrayNumbers.forEach((index,currentValue)=>{
           if (index%2==0) {
            console.log(index);
           }
});
console.log(`_______________________________Step5______________________________________`);
console.log("sum of all  Numbers");
let sum = 0;
arrayNumbers.forEach( (currentValue) => {
    sum = sum + currentValue;
});
console.log(sum);
console.log(`_______________________________Step6______________________________________`);
console.log("Only even indexed array values");
arrayNumbers.forEach((index,currentValue)=> {
      if(currentValue%2==0){
        console.log(index);
      }
});