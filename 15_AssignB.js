class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinay=new Employee(88,"Vinay","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const Emp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log(`______________Step1_______________`);
console.log("Employee Working in TCS company");
for (const Employee of Emp) {
    if(Employee.emp_company==="TCS")
console.log(`Employee Name is:${Employee.emp_name} and Company Name is:${Employee.emp_company} `);
}
console.log(`______________Step2_______________`);

console.log("Employee Working in Finance Department");
for (const Employee of Emp) {
    if (Employee.emp_dept==="Finance") {
        console.log(`Employee Name is:${Employee.emp_name} and  Company Name is:${Employee.emp_dept}`);
    }
}
console.log(`______________Step3_______________`);
console.log("Employee name starts with R");
for (const Employee of Emp) {
    if (Employee.emp_name.startsWith("R")) {
      console.log(`Employee Name is:${Employee.emp_name} and Company Name is:${Employee.emp_company}`);  
    }
}
console.log(`______________Step4_______________`);
console.log("Employee Salary greater than 75000");
for (const Employee of Emp) {
    if (Employee.emp_salary>75000) {
        console.log(`Employee Name is:${Employee.emp_name} and Salary is:${Employee.emp_salary}`);
    }
}
console.log(`______________Step5_______________`);
console.log("Employee  Salary is greater than or equal to 50000 and IT department");
for (const Employee of Emp) {
    if (Employee.emp_salary>=50000 &&Employee.emp_dept==="IT") {
        console.log(`Employee Name is:${Employee.emp_name} and Company is:${Employee.emp_company} and Salary is:${Employee.emp_salary}`);
    }
}
console.log(`______________Step6_______________`);
console.log("Employee From Company Infosys");
for (const Employee of Emp) {
    if (Employee.emp_company==="Infy") {
        console.log(`Employee Name is:${Employee.emp_name} and Company is:${Employee.emp_company}`);
    }
    
}


