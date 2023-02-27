
function voteEligibility(age){
     
     if (age>=18) {
        console.log(`Hey  your age ${age} is eligible for voting`);
        console.log(` Hey your age ${age}Please provide the valid age`);
    }
     else{
        console.log(`Hey your age ${age} is not eligible for voting`);
     }
} 
 
voteEligibility(45);
voteEligibility(17)
voteEligibility(8)
voteEligibility(-10)
voteEligibility(20)
voteEligibility(200)
voteEligibility(undefined)
voteEligibility(null)
voteEligibility(0)
console.log(`_________________________Step2__________________________________`);

 function gradeCalculation(marks){
   if(marks>=90){
      console.log(`Funtastic  marks ${marks} your grade is A+`);
   }
   if(marks>=75&&marks<90){
      console.log(`Excellent marks ${marks} your grade is A`);
   }
   if(marks>=50 && marks<70){
      console.log(`Good marks ${marks} your grade is B`);
   }
   if(marks>=35 &&marks<50){
      console.log(`Marks is ${marks} your grade is C,Need improvement`);
   }
   if(marks=0 || marks<0 || marks>100 || typeof marks!="number")
   console.log(`Please provide the valid marks ${marks}`);
 }
 gradeCalculation(98);
 gradeCalculation(80);
 gradeCalculation(90);
 gradeCalculation(0);
 gradeCalculation(150);
 gradeCalculation(-7);
 gradeCalculation(35);
 gradeCalculation(29);
 gradeCalculation(64);
 gradeCalculation(49);
 gradeCalculation(91);
 gradeCalculation("Eighty");
 gradeCalculation(NaN);
 gradeCalculation(null);