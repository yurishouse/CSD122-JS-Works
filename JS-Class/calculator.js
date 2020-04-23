function function1(){
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var op = document.getElementById("op").value;
    document.getElementById("res").innerHTML = eval(a+op+b);
}