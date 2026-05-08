//FOR LOOPS
console.log("Natural numbers from 1 to 10 : ")
for(let i=1; i<=10; i++){
    console.log(i);
}


//WHILE LOOP
let a = 1;
console.log("Multiplication table of 2")
while(a <=10){
    console.log("2 *",a ,"= ",2*a );
    a++;
}


//DO WHILE LOOP
let p=1, sum=0;
do{
    sum = sum + p;
    p++
}
while(p<=10);
console.log("sum =",sum);


//ARRAY
let name = ["Arpita", "Harshita", "Anjali"]
console.log(name);
name.push("Ananya");
console.log(name);
