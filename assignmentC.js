console.log(`==Please use ternary operator and function expression`);
function TCSintervieweligibility(gradScore,hscScore,sscScore,candidateName){
var gradScore=80;
var hscScore=86;
var sscScore=90;
var result=gradScore>=80||hscScore>=86||sscScore>=90?`Hey ${candidateName} Congrats you are eligible for TCS interview` :"Your marks are below";
return result;
}
var result = TCSintervieweligibility("gradScore","hscScore","sscScore", "Megha");
console.log(result);

function TCSintervieweligibility(gradScore,hscScore,sscScore,candidateName){
    var gradScore=70;
    var hscScore=65;
    var sscScore=55;
    var result=gradScore>=70||hscScore>=65||sscScore>=55?`Hey ${candidateName} Congrats you are eligible for TCS interview` :"Your marks are below";
    return result;
    }
    var result = TCSintervieweligibility("gradScore","hscScore","sscScore", "Bhagya");
    console.log(result);

    function TCSintervieweligibility(gradScore,hscScore,sscScore,candidateName){
        var gradScore=60;
        var hscScore=79;
        var sscScore=88;
        var result=gradScore>=60||hscScore>=79||sscScore>=88?`Hey ${candidateName} Congrats you are eligible for TCS interview` :"Your marks are below";
        return result;
        }
        var result = TCSintervieweligibility("gradScore","hscScore","sscScore", "Anuja");
        console.log(result);
        
    