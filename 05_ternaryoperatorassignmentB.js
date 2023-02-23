  
  console.log(`===Please use ternary operator:===`);
  console.log(`==Step1==`);
  function maleMarriageEligibility(gender,age,boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
}
   var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);

  function maleMarriageEligibility(gender,age,boyName){
    var result = (gender=="Male" && age>=17) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
}
   var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
  console.log(result);

  console.log(`==Step 2==`);
  function femaleMarriageEligibility(gender,age,girlName){
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : " No Try next time" ;
    return result;
}
   var result = maleMarriageEligibility("Female", 16, "Jenifer");
  console.log(result);

  function maleMarriageEligibility(gender,age,girlName){
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : " No Try next time" ;
    return result;
}
   var result = maleMarriageEligibility("Female", 27, "Malinda");
  console.log(result);