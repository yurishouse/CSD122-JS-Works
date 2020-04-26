/*
Write a JavaScript program to perform the following tasks:

Declare a variable named aStr and assign a value of '-5' to this variable
Declare a variable named aNumber
Convert the aStr from the string to the number data type (base 10) and assign this value to the aNumber variable
Declare another variable named posNum and assign the absolute value of the aNumber variable to this variable
Print out the value of the posNum to the console.
 */

function problem1() {
    var aStr = '-5';
    var aNumber;
    aNumber = parseFloat(aStr);
    var posNum = aNumber;
    if (aNumber<0) {
        posNum *= -1;
    }
    console.log(posNum);
    
}