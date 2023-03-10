let sbiBank={
    bankName:"State Bank Of India ",
    location:"Solapur",
    accountNo:345678902,
    ifsc:"SBIN00032",
    interestResultRate:10.54,
    showDetails:function(){
        console.log(`______________________________________________SBIBANK______________________________________________`);
        console.log(`Bank Name:${this.bankName},Location:${this.location},AccountNo:${this.accountNo},IFSC:${this.ifsc},InterestResultRate:${this.interestResultRate}`);
    }

};
sbiBank.showDetails();

let axisBank={
    bankName:"Axis Bank",
    location:"Pune",
    accountNo:456789021,
    ifsc:"axis00044",
    interestResultRate:9.54,
    showDetails:function(){
        console.log(`______________________________________________AXISBANK______________________________________________`);
        console.log(`Bank Name:${this.bankName},Location:${this.location},AccountNo:${this.accountNo},IFSC:${this.ifsc},InterestResultRate:${this.interestResultRate}`);
    }
};
axisBank.showDetails();

let hdfcBank={
    bankName:"HDFC Bank",
    location:"Mumbai",
    accountNo:567890657,
    ifsc:"hdfc67890987",
    interestResultRate:8.89,
    showDetails:function(){
        console.log(`______________________________________________HDFCBANK______________________________________________`);
     console.log(`Bank Name:${this.bankName},Location:${this.location},AccountNo:${this.accountNo},IFSC:${this.ifsc},InterestResultRate:${this.interestResultRate}`);
    }
};
hdfcBank.showDetails();

let yesBank={
    bankName:"YES Bank",
    location:"Kolhapur",
    accountNo:76567890,
    ifsc:"yes8765678",
    interestResultRate:7.98,
    showDetails:function(){
        console.log(`______________________________________________YESBANK______________________________________________`);
     console.log(`Bank Name:${this.bankName},Location:${this.location},AccountNo:${this.accountNo},IFSC:${this.ifsc},InterestResultRate:${this.interestResultRate}`);
    }
    };
yesBank.showDetails();