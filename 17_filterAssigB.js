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
console.log("Find the TCS Employee");
var emp_company=Emp.filter((Employee)=>{
    return Employee.emp_company=="TCS";
});
emp_company.forEach((Employee)=>{
    console.log(`Employee Name:${Employee.emp_name} and Company Name:${Employee.emp_company}`);
});
console.log(`Find the average salary of Employee from Wipro`);
const emp_salary=Emp.filter((Employee)=>{
    return Employee.emp_company=="Wipro";
});
let totalsalary=0;
emp_salary.forEach((Element)=>{
    totalsalary=totalsalary+Element.emp_salary;
});
const avg=totalsalary/emp_salary.length
console.log(`Average salary of Employee from "Wipro":${avg}`);
console.log('Find the average salary of Employee from Wipro and Infy');
const empSalary=Emp.filter((Employee)=>{
  return(Employee.emp_company=="Wipro" || Employee.emp_company=="Infy")
});
let totalSalary=0;
empSalary.forEach((Element)=>{
    totalSalary=totalSalary+Element.emp_salary;
});
const avgs=totalSalary/empSalary.length;
console.log(`Average salary of Employees from Wipro and infy:${avgs}`);
