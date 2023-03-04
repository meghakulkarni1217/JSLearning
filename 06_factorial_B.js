function factorialOfWordCount(string){
    var count=1
    if (string==""||string=="null") {
        return 'Invalid Data';
    }
    for (let index = string; index <=string.length; index++) {
          var charString=string.charAt(index);
          if(charString==""){
            count=count+1
          }
      }
      return count;
    } 
    var wordCount=factorialOfWordCount("Revision is the mother of success");
    console.log(`The total number of word in Given String "Revision is the mother of success" is:${wordCount}`);

    var wordCount=factorialOfWordCount("We never fail,we always learn");
    console.log(`The total number of word in Given String "We never fail,we always learn" is:${wordCount}`);

    var wordCount=factorialOfWordCount("null");
    console.log(`The total number of word in Given String "null" is:${wordCount}`);

    var wordCount=factorialOfWordCount("");
    console.log(`The total number of word in Given String "" is:${wordCount}`);

    var wordCount=factorialOfWordCount("Megha Kishor Kulkarni");
    console.log(`The total number of word in Given String "Megha Kishor Kulkarni" is:${wordCount}`);
    console.log(`___________________________________________NextStep_____________________________________`);

    function factorialOfNum(num){
        var result=1;
        for (let index = num; index>=1; index--) {
           result *=index;
        }
        return result;
    }
    var factorialOf6=factorialOfNum(6);
    console.log(`The factorial of given number "6" is :${factorialOf6}`);

    var factorialOf3=factorialOfNum(3);
    console.log(`The factorial of given number "3" is :${factorialOf3}`);


