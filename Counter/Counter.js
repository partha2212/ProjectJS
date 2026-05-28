document.getElementById("countshow").style.color="gray";
document.body.style.backgroundColor = "lightblue";
let count=0;
let countText=document.getElementById("countshow")
function update(){
    countText.innerText = count;
    changeColor();
}
function increase(){
    count++;
    update();
}
function decrease(){
    count--;
    update();
}
function reset(){
    count=0;
    update();
}
function changeColor(){
    if(count>0){
        document.getElementById("countshow").style.color="green";
    }else if(count<0){
        document.getElementById("countshow").style.color="red";
    }else{
        document.getElementById("countshow").style.color="white";
    }
}