const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45]
console.log(`________________Given Array_________________`);
console.log(arrayRollNumbers);
console.log(`________________Reverse Array___________________`);
const sortedArray = arrayRollNumbers.reverse();
// console.log(sortedArray); // Sorting in ascending order
// sortedArray.reverse(); /
console.log(sortedArray);
console.log(`_____________Sort the array without any custom sorting logic______________`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`_____________Sort the array writing custom sorting logic______________`);
// Custom sorting to sort the elements in ascending order
arrayRollNumbers.sort( (a, b) => { // 3  6
    return a>b ? 1 : -1;
} );
console.log(arrayRollNumbers)
console.log(`_____________Find the Greatest Number from the Array______________`);
var largest=arrayRollNumbers[0];
for ( var index = 0; index<arrayRollNumbers.length; index++) {
       if (largest<arrayRollNumbers[index]) {
        var largest=arrayRollNumbers[index];
       }
    }
    console.log(largest);
    console.log(`_____________Find the Smallest Number from the Array______________`);
var Smallest=arrayRollNumbers[0];
for ( var index = 0; index>arrayRollNumbers.length; index++) {
       if (Smallest>arrayRollNumbers[index]) {
        var Smallest=arrayRollNumbers[index];
       }
    }
    console.log(Smallest);
    console.log(`_____________Remove duplicates from Array______________`);
    function removeDuplicates(arrayRollNumbers){
        return arrayRollNumbers.filter((item,index)=>arrayRollNumbers.indexOf(item)===index);
    }
    console.log(removeDuplicates(arrayRollNumbers));