var x = 10;

var y = 20;

var z = "The result is: " + x + y;

console.log(z);

let fruits = ["Apple", "Orange"];
let another = fruits;
another.push("Pear");
console.log(fruits);

function extractName(fullName) {
    return fullName.split(" ");
}

console.log(extractName('John Doe'));
console.log(extractName('Mary Smith'));

function createRandomArray(size, max) {

}

function createRandomArray(size,max){
    var array = [];
    for(var i=0;i<size;i++){
    array.push(Math.random()*max);
    }
    return array;
    }

/*
console.log(createRandomArray(200,400));
console.log(createRandomArray(50,80));

arr = createRandomArray(50,80);

function average(arr) {
    var sum = 0;
    for(var i=0;i<arr.length;i++){
    sum+=arr[i];
    }
    return sum/arr.length;
    }


console.log(average(arr));
*/

(function() {
    console.log('Hello World')
})()

function containsVowels(str){
    var lowerStr = str.toLowerCase();
    return ((((lowerStr.lastIndexOf("a")!=-1)||(lowerStr.lastIndexOf("e")!=-1))||((lowerStr.lastIndexOf("i")!=-1)||(lowerStr.lastIndexOf("o")!=-1)))||(lowerStr.lastIndexOf("u")!=-1));
}

str = 'hello';
console.log(containsVowels(str)); // should print true;

str = 'mnht';
console.log(containsVowels(str)); // should print false;