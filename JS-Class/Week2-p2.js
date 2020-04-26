/*
Write a program to convert a Fahrenheit to Celsius:

fahrenheit = (9 / 5) * celsius + 32
 */
function tempConverter() {
    var fTemp = 100;
    var cTemp = (fTemp - 32)/(9/5);
    console.log(cTemp);
}