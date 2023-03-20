function primeNumber(count){
    let count=0;
    let num=3;
    while(count<=totalprime){
        let isprimeNum=isprime(num);
        if (isprimeNum) {
            count ++;
            arrayofprime.push(num);
        }
    }
}