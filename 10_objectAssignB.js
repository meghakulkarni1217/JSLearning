console.log(`_______________Object cloning and Traversing File_________________`);
console.log(`_____________Step1____________`);
let bankSbi={
    bankName:"SBI Bank",
    bankBranch:"Mangalwedha",
    ifscCode:"SBIN00032",
    bankLocation:{
        street:"Solapur Road",
        city:"Pune",
        pinCode:413305,
    }
};
console.log(`creating object bankSbi using literals`);
console.log(bankSbi);
console.log(`_____________Step2____________`);
console.log(`creating object bankLocation using literals`);
console.log(bankSbi.bankLocation);
console.log(`_____________Step3____________`);
console.log(`cloning object bankSbi and bankLocation using object.assign()`);
const cloneBankSbi=Object.assign({},bankSbi);
const cloneBankSbi1=Object.assign({},bankSbi.bankLocation);
console.log(`Cloned object using assign operator:BankName=${cloneBankSbi.bankName},bankBranch=${cloneBankSbi.bankBranch},ifscCode=${cloneBankSbi.ifscCode}`);
console.log(`_____________Step4____________`);
console.log(`Cloning object bankSbi and bankLocation using spread Operator`);
const bankSbiClone={...bankSbi,bankLocation:{...bankSbi.bankLocation}};
console.log(bankSbiClone);
console.log(`_____________Step5____________`);
console.log(`Creating object literals "rateOfInterest"`);
let rateOfInterest={
    homeLoanInterest:9,
    personalLoanInterest:18,
    dueInterest:12
}
console.log(rateOfInterest);
console.log(`_____________Step6____________`);
console.log(`merging step 1,2 and 4 in new object "sbiDetails"`);
const sbiDetails={...bankSbi,...bankSbi.bankLocation,...rateOfInterest};
console.table(sbiDetails);
console.log(`_____________Step7____________`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}:${element}`);
        
    }
}

