function sumDigits(num){
    var sum = 0;
    while (num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    console.log(sum);
}

sumDigits(234)
sumDigits(222)
sumDigits(1234)