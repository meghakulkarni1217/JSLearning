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
const emp_vinay=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const Emp=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.log(`___________________________________Step1______________________________________`);
console.log("Employee Working in TCS company");
Emp.forEach(Employee => {
    let emp_name = Employee.emp_name;
    let emp_company=Employee.emp_company;
    if(Employee.emp_company==="TCS"){
console.log(`Employee Name is:${Employee.emp_name} and Company Name is:${Employee.emp_company} `);
}
});
console.log(`___________________________________Step2______________________________________`);
console.log("Greater than salary 50000");
Emp.forEach(Employee =>{
    let emp_salary=Employee.emp_salary;
    if (Employee.emp_salary>=50000) {
        console.log(`Employee Name is:${Employee.emp_name} and Salary is:${Employee.emp_salary}`);
        
    }
});
console.log(`___________________________________Step3______________________________________`);
console.log("Sum of all Employee salary");
     let sumofsalary=0;
  Emp.forEach( Employee => {
         sumofsalary = sumofsalary + Employee.emp_salary;
    });
    console.log(sumofsalary);
console.log(`___________________________________Step4______________________________________`);
console.log("Average salary");
let totalsalary=416000;
Emp.forEach(Employee =>{
    Average=totalsalary/Emp.length;
});
console.log(Average);
console.log(`___________________________________Step5______________________________________`);
console.log("IT or HR department employee salary is greater than or equal to");
Emp.forEach(Employee =>{
    let emp_name = Employee.emp_name;
    let emp_company=Employee.emp_dept;
    if( Employee.emp_salary>=75000&&(Employee.emp_dept=="IT"||Employee.emp_dept=="HR")){
console.log(`Employee Name is:${Employee.emp_name} and Company Name is:${Employee.emp_company} and Department Name is:${Employee.emp_dept} `);
}
});