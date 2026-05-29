let hist = [] ;
let resultShown= false;
function appendValue(value){
    if(resultShown){
        document.getElementById("display").value="";
        resultShown=false;
    }
    document.getElementById("display").value += value;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
function backspace(){
    let text= document.getElementById("display").value;
    document.getElementById("display").value = text.slice(0,-1);
}
function calculate(){
    let text2= document.getElementById("display").value;
    let result = eval(document.getElementById("display").value);
    hist.unshift(text2 + "=" + result);
    console.log(hist);
    if(hist.length > 2){
       hist.pop();
    }
    document.getElementById("history").innerHTML =
    hist.join("<br>");
    document.getElementById("display").value= result;
    resultShown = true;
}
