// //primitive data type
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



//Conditional loop
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



//Switch case
let day = 2;
let message = "";
switch(day){
    case "1" :
        message = "Monday";
        break;
    case "2":
        message = "Tuesday";
        break;
    case "3":
        message = "Wednesday";
        break;
    case "4":
        message = "Thursday";
        break;
    case "5":
        message = "Friday";
        break;
    case "6":
        message = "Saturday";
        break;
    case "7":
        message = "Sunday";
        break;
    default:
        message = "Invalid day";
}
console.log(message);


