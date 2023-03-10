console.log(`_____________________________________Step1______________________________________`);
let Professor={
    Name:"Megha",
    Surname:"Kulkarni",
    Degree:"BCA",
    Address:"Pune",
    Age:22,
Degrees:{
  engineering:"CSC",
  PHD:"Adv Computing",
},
Certificates:{
    HackerRankParticipation:"IFE course & Adv Programming",
},
show:function(){
},
degreesDetails: function(){
    return `total degrees are:engineering ${this.Degrees.engineering}, PHD ${this.Degrees.PHD}}`
}

};
Professor.show()

console.log(Professor);
console.log(Professor.Degrees);
console.log(Professor.Certificates);
console.log(Professor.Degree.degreesDetails);

Professor.Degrees.totalexperience="14years"; 

console.table(`Total experence is:${Professor.Degrees.totalexperience}`);

Professor.Address="Mumbai";
console.log(`Modify the adress is:${Professor.Address}`);

Professor.Certificates="Oracle Certificate";
console.log(`Add new Certificate is:${Professor.Certificates}`);

console.log(`The last element of the array certificate`);
