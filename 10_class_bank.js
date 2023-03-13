class Bank{
    constructor(bankName,accNo,ifscCode,branchName){
        this.bankName=bankName;
        this.accNo=accNo;
        this.ifscCode=ifscCode;
        this.branchName=branchName;
    }
}
const SBIbank=new Bank("SBIbank",34567890,"SBIN00032","Mangalwedha");
console.log(SBIbank);

const AXISbank=new Bank("AXISbank",45678902,"AXIS0002345","Pandharpur");
console.log(AXISbank);

const HDFCbank=new Bank("HDFCbank",567890890,"HDFC0002345","Solapur");
console.log(HDFCbank);

const YESbank=new Bank("YESbank",455675844,"YES0005678","Pune");
console.log(YESbank);
console.log(`________________________________________Step2__________________________`);

showDetails():{
    console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);

for (const key in bankobject) {
    if (Object.hasOwnProperty.call(bankobject, key)) {
        const element = bankobject[key];
        console.log(`object key is value is:${key} ${element}`);
    } 
    }
}

traverseobject(SBIbank);

class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);