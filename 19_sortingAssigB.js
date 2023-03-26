class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
      this.empId = empId;
      this.empName = empName;
      this.empDept = empDept;
      this.empSalary = empSalary;
      this.empCompany = empCompany;
    }
  }
  const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infosys");
  const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const empVinay = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infosys");
  
  let arrayEmployee=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];
  
  console.log(`---Step 1) Sorting Array in Ascending order of Employee ID---`);
  let sortArrayAccending=arrayEmployee.sort((a,b)=>a.empId>b.empId?1:-1);
  sortArrayAccending.forEach((employee)=>{
  console.log(`Employee ID: ${employee.empId}, Employee Name :${employee.empName}, Employee Dept: ${employee.empDept}`);
  });
  
  console.log(``);
  console.log(`======Step 2) Sorting Array in Ascending order of Employee Dept======`);
  let newarrayAccending=arrayEmployee.sort((a,b)=>a.empDept>b.empDept?1:-1);
  newarrayAccending.forEach((employee)=>{
  console.log(`Employee ID: ${employee.empId}, Employee Dept: ${employee.empDept} , Employee Company: ${employee.empCompany}`);
  });
  
  console.log(``);
  console.log(`======Step 2) Sorting Array in descending order of Employee Salary======`);
  let arrayAccending=arrayEmployee.sort((a,b)=>a.empSalary>b.empSalary?-1:1);
  arrayAccending.forEach((employee)=>{
  console.log(`Employee Name: ${employee.empName}, Employee Salary: ${employee.empSalary} , Employee Company: ${employee.empCompany}`);
  });