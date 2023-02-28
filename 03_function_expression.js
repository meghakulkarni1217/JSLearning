 function checkLeapyear(leap_year) {
 if ((0 == leap_year % 4) && (0 != leap_year % 100) || (0 == leap_year % 400)) {
        console.log(leap_year  + ' is a leap year ');
      }
     else{
         console.log( leap_year  + 'is not a leap year');
       }
        if (typeof leap_year!="number") {
          console.log(`Please provide the valid year ${leap_year}`);
       }
}
checkLeapyear(2020);
checkLeapyear(1999);
checkLeapyear(1600);
checkLeapyear(2022);
checkLeapyear(1945);
checkLeapyear(null);
checkLeapyear("Twenty Twenty");
checkLeapyear(undefined);
checkLeapyear(NaN);
checkLeapyear(1750);
