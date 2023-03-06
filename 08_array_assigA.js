 var  arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(arraySeasonalFruits);
console.log(`Given array is: ${arraySeasonalFruits}`);

console.log(`______________________Step1______________________`);
console.log(arraySeasonalFruits);
const firstandlast=arraySeasonalFruits.slice(0,-1);
console.log(`Display first and last element of array:${firstandlast}`);


console.log(`______________________Step2_______________________`);
arraySeasonalFruits.unshift("papaya");
console.log(arraySeasonalFruits);
console.log(`First Add papaya:${arraySeasonalFruits}`);
console.log(`Given array is: ${arraySeasonalFruits}`);


console.log(`_______________________Step3___________________`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(4,1);
console.log(`Mango delete from array:${arraySeasonalFruits}`);


console.log(`____________________Step4__________________`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.push("Pineapple");
console.log(`Add pineapple at the last position:${arraySeasonalFruits}`);


console.log(`_______________Step5_________________`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(`Add Dragon Fruit before Water Melon ${arraySeasonalFruits}`);


console.log(`____________________Step6_________________`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(2,1,"Kiwi");
console.log(`Replacement an element Orange with Kiwi:${arraySeasonalFruits}`);


console.log(`_______________________Step7_________________`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.slice(1,4);


console.log(`_______________________Step8_______________________`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(0,4);
console.log(`Only Select last 3 elements:${arraySeasonalFruits}`);

