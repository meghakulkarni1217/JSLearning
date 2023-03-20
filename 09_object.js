let student = {
    firstName: "Prashant",
    lastName: "Deshmukh",
    isWorking: true,
    age: 22,
    collegeName: "ABC",
    id: 123456
}
// 
// let firstName = student.firstName;
// let isWorking = student.isWorking;
// let age = student.age;
// let collegeName = student.collegeName;

let { firstName, isWorking, age, collegeName, id} = student; // Object Destructuring
console.log(`Extracted values from object is: isWorking ${isWorking}  age ${age}  collegeName ${collegeName}`)