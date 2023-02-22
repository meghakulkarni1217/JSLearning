function stringTemplateAssign(){
    console.log(`My dream company is:Microsoft`);
    var hobby1,hobby2,hobby3;
    hobby1="Trecking";
    hobby2="Codding";
    hobby3="Driving";
    console.log("My hobbies includes "+hobby1+" , "+hobby2+" , "+hobby3+" ");
    console.log("Concated string as below:\n" +hobby1+hobby2+hobby3);
    
    console.log("=================");
    console.log("total sum of hobby1 char:",hobby1.length);
    console.log("total sum of hobby2 char:",hobby2.length);
    console.log("total sum of hobby3 char:",hobby3.length);
     var hobby1CharCount=hobby1.length;
     var hobby2CharCount=hobby2.length;
     var hobby3CharCount=hobby3.length;
    console.log("total number chars available into ",hobby1CharCount +  hobby2CharCount + hobby3CharCount);
}
stringTemplateAssign()
console.log("=====Assignment2=====");
function stringHandsOn(){
    var str=" Hey you are doing good,keep it up  ";
    return str;
}
var resultstringHandsOn =stringHandsOn();
console.log(resultstringHandsOn);
var strLength=resultstringHandsOn.length;
console.log("Total length of string is:",strLength);
var stringHandsOnTrim=resultstringHandsOn.trim();
console.log("Removing extra start and end spaces by using trim:",stringHandsOnTrim+".","String Length is:",stringHandsOnTrim.length);
console.log("Total number extra start spaces count",resultstringHandsOn.length-stringHandsOn.length);
console.log(stringHandsOnTrim.charAt(0),stringHandsOnTrim.indexOf('good'));
var substring=stringHandsOnTrim.slice(22,stringHandsOnTrim.length);
console.log("substring startinng fromindex 22:",substring);
