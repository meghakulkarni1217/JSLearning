
console.log(`___________________________Step1___________________________`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array=${arrayNumbers}`);
console.log(`Total element available in array:${arrayNumbers.length}`);
console.log(`___________________________Step2____________________________`);
let firstNumber=arrayNumbers[0];
let lastNumber=arrayNumbers[arrayNumbers.length-1];
console.log(`the first number of array is ${firstNumber} and the last number of array is ${lastNumber}`);
console.log(`___________________________Step3_______________________________`);
let lastThirdNumber=arrayNumbers[arrayNumbers.length-3];
console.log(`the last third number of array is ${lastThirdNumber}`);
console.log(`___________________________Step4________________________________`);
let arrayEven=[]
let arrayOdd=[]
let positionEven=[]
let positionOdd=[]

for (let index = 0; index < arrayNumbers.length; index++) {
 let element=arrayNumbers[index];
 if (element%2==0) {
    arrayEven.push(element)
 }   
}
console.log(`the all even numbers:${arrayEven}`);
console.log(`_________________________Step5____________________`);
for (let index = 0; index < arrayNumbers.length; index++) {
    let element=arrayNumbers[index];
    if (element%2!=0) {
       arrayOdd.push(element)

    }   
   }
   console.log(`the all odd numbers:${arrayOdd}`);
   console.log(`_____________________Step6_______________________`);
   let SumOfPositionEven=0;
   for (let index = 0; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    positionEven.push(element); 
   }
   console.log(`the all even positioned element:${positionEven}`);
   console.log(`______________________Step7__________________________`);
   for (let index = 1; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    positionOdd.push(element); 
   }
   console.log(`the all odd positioned element:${positionOdd}`);
   console.log(`________________________Step8___________________`);
   let SumOfPositionOdd=0;
   for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
    const element = arrayNumbers[index];
    SumOfPositionOdd=SumOfPositionOdd+element;
    }
   }
   console.log(`the sum of all elements from array:${SumOfPositionOdd}`);
   console.log(`______________________Step9___________________________`);
   let sum=0;
   for (let index = 0; index < arrayNumbers.length; index++) {
  const  element = arrayNumbers[index];
    sum=sum+arrayNumbers[index];
   }
   let multipleOfFive=[];
   for (let index = 0; index < arrayNumbers.length; index++) {
     let element = arrayNumbers[index];
     if (element%5==0) {
        multipleOfFive.push(element)
     }
    
   }
   console.log(`The numbers which are multiple of 5:${multipleOfFive}`);
   console.log(`______________________Step10___________________________`);
   let includeNumbers=arrayNumbers.includes(115);
  console.log(`Is 115 available in array:`,includeNumbers);
  console.log(`________________________Step11____________________`);
  let includeNumbersSecond=arrayNumbers.includes(23);
  console.log(`Is 23 available in array:`,includeNumbers);
  console.log(`________________________Step12____________________`);
  const addElement=arrayNumbers.splice(3,2,55,66);
  console.log(`Insert Numbers 55,66:`,arrayNumbers);
  console.log(`________________________Step13____________________`);
  const deleteElement=arrayNumbers.splice(4,3);
  console.log(`Delete 3 element starting from index4:`,arrayNumbers);