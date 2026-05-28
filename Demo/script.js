console.log("JavaScript Connected!");
let a = "Partha"
console.log(a);

function add(a, b) {
    console.log(a + b);
}
add(5, 10);
let age = 15;

/*if else statement*/
if(age>=18){
    console.log("Adult");
}else{
    console.log("Minor");
}

console.log(10!=5);
/*Loops*/
for(let i=0; i<5; i++){
    console.log(i);
}
/*Arrays*/
let fruits = ["Apple","Mango","Banana"];
console.log(fruits[0]);
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
/*Objects*/
let user = {
    name: "Partha",
    age: 22,
    city: "Kolkata"
};

console.log(user.name);
console.log(user.city);