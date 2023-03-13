function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    this.show = function(){
        console.log(`Bank Details are: ${this.bankName}  ${this.location}  ${this.ifscCode}  ${this.branchCode}`);
    }
}
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime="6 PM IST";

const YESbank = new Bank("YESbank", "Pandharpur","YES0005678","YES1123");
const SBIbank = new Bank("SBIbank", "Mangalwedha","SBIN0003234","SBI001");
const MAHbank=new Bank("Bank Of Maharashtra","Pune","MAH009874","MAH1213");
const AXISbank=new Bank("AXISbank","Hadapsar","AXIS234567","AXIS1234");
YESbank.show();
SBIbank.show();
MAHbank.show();
AXISbank.show();

console.log(`Open time of YES Bank:${YESbank.openTime}  and Close time of:${YESbank.closeTime}`);

console.log(`Open time of SBI Bank:${SBIbank.openTime}  and Close time of:${SBIbank.closeTime}`);

console.log(`Open time of MAH Bank:${MAHbank.openTime}  and Close time of:${MAHbank.closeTime}`);

console.log(`Open time of AXIS Bank:${AXISbank.openTime}  and Close time of:${AXISbank.closeTime}`);