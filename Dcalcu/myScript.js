// insert value by button
var keyboard = document.getElementById("keyboard");
console.log(keyboard);
keyboard.addEventListener('click', insert);

function insert(e){
    if(e.target.classList.contains('btn')){
        //take value from click
        var value = e.target.value; 
        //if values are numbers or operators
        if(value !== "←" && value !== "C" && value !== "="){
            //handle print x on screen
            if(value == "x"){
                document.querySelector("#screen #output-screen").value += "*";
            }else{
                document.querySelector("#screen #output-screen").value += value;
            }
        }else if(value === "="){
            document.querySelector("#screen #output-screen").value = result(document.querySelector("#screen #output-screen").value);
        }else if(value === "C"){   
            document.querySelector("#screen #output-screen").value = clearAll(document.querySelector("#screen #output-screen").value);
        }else if(value === "←"){
            document.querySelector("#screen #output-screen").value = clearOne(document.querySelector("#screen #output-screen").value);
        }
    }
}
//for = button
function result(value){
   if(value){
        var output = eval(value);
        return output;
   }
   return "";
}
//for C button
function clearAll(text){
    text = "";
    return text;
}
//for <- button
function clearOne(text){
    text = text.substring(0,text.length-1);
    return text;
}
