function checkTCSinterview(gradScore,hscScore,sscScore,candidateName){
    if(gradScore>=70 || hscScore>=80 ||sscScore>90){
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    }
    else{
        console.log(`Unfortunately you are not eligible for interview`);
    }
}

checkTCSinterview(80,86,90,"Megha");
checkTCSinterview(70,65,55,"Anuja");
checkTCSinterview(60,79,88,"Bhagya");