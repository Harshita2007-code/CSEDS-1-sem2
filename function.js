/*FUNCTION DECLARATION : A function having function as data type can be called before declaration due to hoisting method in js
FUNCTION EXPRESSION : A function defines a function as a part of expression, typically by assigning it to a variable (not hoisted)
const greet = function(name) {
    return Hello, ${name};
};
ARROW FUNCTION : specially used for short and anonymous functions
const greet = (name) => {
    return `Hello, ${name}!`;
};
*/

function oneToN(n){
    for(let i=1; i<=n; i++)
        console.log(i);
    console.log();
}

oneToN(19);
oneToN(10);


function eqn(a,b){
    return Math.abs(a*a*a) + Math.abs(b*b*b);
}
console.log(eqn(2,-4));


//ANONYMOUS FUNCTION
var add = function(x,y){        //function without a name..
    return x + y;
};


//Mathematical built-in function
console.log(Math.abs(-4));          //always give +ve num
console.log(Math.max(5,1,78,45));   //max num
console.log(Math.min(-4,1));        //min num
console.log(Math.pow(2.7,7));       //power finder (can give decimal or integer both)
console.log(Math.sqrt(10));         //square root
console.log(Math.cbrt(373));        //cube root
console.log(Math.log10(1000));      //log with base 10
console.log(Math.floor(5.8));       //output - 5
console.log(Math.floor(-3.5));      //output - -4
console.log(Math.ceil(5.8));        //ceiling (output - 6)


//callback function ek esa function hota h jo ek function ke andar pas hota h... it can be passed as argument to other functions..
function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    console.log(x-y);
}
fun(product(2,4,5),5)


//setTimeout()
function hello(){
    console.log("hello");
}
function mello(){
    console.log("mello");
}
setTimeout(hello, 2000);            //delays run the code for 2 sec


//print 1 to 10 but with delay of 1 sec after each number gets printed
for(let i=1; i<=10; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000)
}

//print 10 to 1 but with delay of 1 sec after each number
for(let i =1; i<=10; i++){
    setTimeout(function(){
        console.log(11-i);
    }, i*1000)
}


//Map 
function square(ele){
    return ele * ele;
}
let arr = [1, -6, 5, 3];
console.log("original array:",arr);
let brr = arr.map(square);
console.log("Updated array:",brr);

//use the function within the map block
let arr = [6,3,-7,8];
console.log(arr);
let brr = arr.map(function(ele){
    return ele * 2;
});
console.log(brr);

//using the arrow function
let arr = [6,3,-7,8];
console.log(arr);
let brr = arr.map(ele=> ele * 2);
console.log(brr);


//filter

//filter out even elements
let arr= [1,3,4,6,5,8];
console.log(arr);
arr = arr.filter((ele) => {
    if(ele%2!=0) return true;
    else return false;
});
console.log(arr);

//filter out number greater than 5
let arr= [1,3,4,6,5,8];
console.log(arr);
arr = arr.filter(ele => (ele < 5));
console.log(arr);


//Reduce
let arr= [1,3,4,6,5,8];
console.log(arr);
let x = arr.reduce(function(a,b){
    return a+b;
})
console.log(x);


//sort
let arr= [1,3,-9,2,-4,5,8];
console.log(arr);
arr = arr.sort((a,b) => a-b);       //increasing order
console.log(arr);
arr = arr.sort((a,b) => b-a);       //decreasing order
console.log(arr);