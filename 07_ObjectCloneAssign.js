console.log(`The Given Array is:[20,3,4,56,90,400,49]`);
console.log(`_________________________Step1___________________`);
console.log(`Shallow clone of given array:`);
const arrayNumber=[20,3,4,56,90,400,49];
const newArray=arrayNumber;//shallow clone
console.log(newArray);
console.log(`Updated clone withvalues 55,66`);
newArray.push(55,66);
console.log(newArray);
console.log(`_________________________Step2___________________`);
console.log(`Deep Clonning using spread operator`);
const arrayOfNumber=[20,3,4,56,90,400,49];
const clonedArray={...newArray};
console.log(`Deep Clonned Array using spread operator`);
console.log(clonedArray);
console.log(`Updated array with values 10,25 at last position`);
arrayOfNumber.push(10,25);
console.log(arrayOfNumber);
console.log(`_________________________Step3___________________`);
console.log(`Deep Clonning using spread operator`);
array=[2,30,14,8];
console.log(`Given new array is:${array}`);
const concatArray=[...arrayNumber,...array];
console.log(`Concated two array using spread operator is:${concatArray}`);
console.log(`_________________________Step4___________________`);

console.log(`Creating Employee Information object`);
const employee_info={
    emp_id:27,
    emp_name:"John Sena",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        june_month:"65,000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800 4567 32","+91 9096 56 78 77"]
}
console.log(`_________________________Step5___________________`);
console.log(`Address of employee`);
console.log(employee_info.address.locality.colony);
console.log(employee_info.address.locality.street);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);
console.log(`Employee mobile number`);
console.log(employee_info.mobiles);
console.log(`_________________________Step6___________________`);
console.log(`perform deep copy using JSON.stringfly()`);
const copiedSalary=JSON.parse(JSON.stringify(employee_info.salary));
console.log(employee_info.salary,copiedSalary);
console.log(`------------------------------------`);
const updateSalary=employee_info.salary.july_month="80,000INR"
console.log(`July Month Updated Salary on cloned object:${updateSalary}`);
console.log(`------------------------------------`);
const UpdateCountry=employee_info.address.country="United Kingdom"
console.log(`Updated Country of an employee on cloned object:${UpdateCountry}`);
console.log(`------------------------------------`);
console.log(`Original Value of Employee:${employee_info.emp_name},${employee_info.salary.july_month},${employee_info.address.country}`);
console.log(`------------------------------------`);
console.log(`Updated value of Employee Object:${employee_info.emp_name},${updateSalary},${UpdateCountry}`);