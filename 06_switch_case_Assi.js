function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            
        case 1:
            console.log(`month of year ${monthNumber}: january`);
            break;
        case 2: 
            console.log(`month of year  ${monthNumber}: February`);
            break;
        case 3: 
            console.log(`month of year  ${monthNumber}: March`);
            break; 
        case 4:
            console.log(`month of year ${monthNumber}: April`);
            break; 
        case 5: 
            console.log(`month of year ${monthNumber}: May`);
            break;
        case 6:  
            console.log(`month of year ${monthNumber}: June`);
            break;
        case 7:
            console.log(`month of year ${monthNumber}:Jully`);
            break;  
        case 8:
             console.log(`month of year ${monthNumber}:August`);
            break;  
        case 9:
             console.log(`month of year ${monthNumber}:September`);
             break;  
        case 10:
          console.log(`month of year ${monthNumber}:Octomber`);
            break;  
        case 11:
             console.log(`month of year ${monthNumber}:November`);
             break;  
         case 12:
             console.log(`month of year ${monthNumber}:December`);
            break;  
         default:
          console.log(`Invalid day : ${monthNumber}`);
            console.log(`provide valid data`);
            break;
}
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);