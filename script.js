/*primitive data type : size is fixed 
there are 5 major primitive data types : numbers, string, boolean, undefined, null*/
let name = "Alice";
console.log(typeof name);
let a_ge = 30;
console.log(typeof age);
let isstudent = true;
console.log(typeof isstudent);
let score;
console.log(typeof score);
let car = null;
console.log(typeof car);

//non-primitive data type
const student ={                //keys cannot be redeclared outside the block in const block
    name :"Harshita",
    age :18,
    cgpa :9.3,
    isPass :true,
};
console.log(student);
console.log(["cgpa"])


//arithmatic operator
let p=10;
let q=2;
console.log(p+q);       //12
console.log(p-q);       //8
console.log(p*q);       //20
console.log(p/q);       //5
console.log(p%q);       //0
console.log(++p);       //11
console.log(p++);       //11
console.log(--p);       //11
console.log(p--);       //11
console.log(q**p);      //1024



//Assignment operator
let A=10;
console.log(A+=1);      //11
console.log(A-=2);      //9
console.log(A/=2);      //4.5
console.log(A*=2);      //9
console.log(A%=2);      //1
console.log(A**=2);     //1



//comparison operator
let P = 10;
let Q=5;
console.log(P>Q);       //true
console.log(P!=Q);      //true
console.log(P==Q);      //false


//logical operator
let r=6;
let s = 5;
let cond1 = r>s;//true
let cond2 = a==5;//false
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(!cond2);



//string operator
let a = "Harshita";
let b = "Bhardwaj";
console.log(a+b);



//Ternary operator
let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor' ;
console.log(status);



//Conditional statement
// Q - voting eligibility....
let Age=50;
if(Age >18){
    console.log("Eligible for voting");
}
else if(Age < 18){
    console.log("Not Eligible for voting");
}
else{
    console.log("Invalid age!!");
}

// Q - 3 digit number or not..
let x = 45;
if(x>=100 && x <=999) 
    console.log("3 digit number");
else
    console.log("not a 3 digit number");



//FALSY TRUTHY VALUES
// Falsy value -> false condition, false, 0, null, NaN, undefined
//Truthy value -> except falsy value
if(undefined){
    console.log("Hello");       //truthy
}else console.log("Mello");     //falsy



// Triple equal to
let a = 5;
let b = '5';
console.log(a==b);              // sees only value
console.log(a===b);             // sees value and dataType both



// //Switch case
// let day = 2;
// let message = "";
// switch(day){
//     case "1" :
//         message = "Monday";
//         break;
//     case "2":
//         message = "Tuesday";
//         break;
//     case "3":
//         message = "Wednesday";
//         break;
//     case "4":
//         message = "Thursday";
//         break;
//     case "5":
//         message = "Friday";
//         break;
//     case "6":
//         message = "Saturday";
//         break;
//     case "7":
//         message = "Sunday";
//         break;
//     default:
//         message = "Invalid day";
// }
// console.log(message);
