function doAssignment(callback){
    console.log("Solving Assignments");
    console.log("step 1 to 10 all ares solved");
    callback();
}
function copyAssignments(){
    console.log("Thank you let copy assignmens");
    console.log(`ohh finally copied assignment`);
}
doAssignment(copyAssignments);
function greet(){
    console.log(`Good morning....`);
}
    setTimeout(greet,4000);
