var a=9;
var b=9;

//Function declaration
function add(a,b){
    console.log(a+b);
    
}

//Function Expression as variables
var add2 = function(a,b){
    console.log(a+b);
}

//Immediately Invoked Function Expression
var a = (function () {
    console.log("Hello");
})();


//Arrow function
var add4 = ()=> console.log(a+b);

//Pure Function
function add4 (a,b){
    return a+b;
}

//Impure Function
total = 0
function add5(a,b){
    total+=(a+b)
    return total;
}

//Default parameter initialisation
function add6(x=0,y=0){
    return x+y;
}
console.log(add6(2,null));

//Callback function
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    const name = "Akash";
    callback(name);
}

processUser(greet);