function tcsInterviewcheck(grdScore,hscScore,sscScore,candidateName){
    var result=grdScore>=70 || hscScore>=80 ||sscScore>90 ?`Congrats ${candidateName} you are eligible for TCS interview`:` Hey ${candidateName} you are not eligible`;
    console.log(result);
}
tcsInterviewcheck(80,86,90,"Billgates");
tcsInterviewcheck(70,65,55,"StewJob");
tcsInterviewcheck(60,79,88,"Marks");
tcsInterviewcheck(60,78,54,"frd")