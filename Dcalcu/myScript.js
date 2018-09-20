var num1;
var num2;
function roundFunction(){
    num1 = document.getElementById("number1").value;
    if(num1 == 0){
        num1 = document.getElementById("number2").value;
    }
    var result = Math.round(num1);
    document.getElementById("result").innerHTML = result;
}