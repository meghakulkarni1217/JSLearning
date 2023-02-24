  function maleMarriageEligibility( gender,age,boyName){
    var result=(gender=="Male" && age>=21)?  ` Congrats  ${boyName} you are eligible for marriage `: ` Hey ${boyName} Not eligible for marriage`;
    return result;
    // console.log(result);
  }
  var result=maleMarriageEligibility("Male",25,"Billgates");
  var result1=maleMarriageEligibility("male",17,"Stew jobs");
  console.log(result);
  console.log(result1);
console.log(`___________________________Step 2_____________________`);
function femaleMarriageEligibility(gender,age,girlName){
  var result=(gender=="Female" && age>=18) ? `Congrats ${girlName} you are eligible for marriage `: ` Hey ${girlName} Not eligible for marriage`;
     return result;
}
var result =femaleMarriageEligibility("female",16,"Jenifer");
var result1=femaleMarriageEligibility("Female",27,"Malinda Gates");
console.log(result);
console.log(result1);
