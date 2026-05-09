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


//For Of Loop
let arr = [2,4,7,5];
for(const ele of arr){
    console.log(ele);
}


//for each loop
let brr = [3,5,2,6,7,8];
brr.forEach((ele,i, brr) => {         //(element, index, array)
    console.log(ele,i,brr);
});


//ARRAY
let name = ["Arpita", "Harshita", "Anjali"]
console.log("array: ", name);
let n = name.length;
console.log("length of the array:" ,n);
for(let i=0; i<n; i++){
    console.log("Elements of array ", name[i])
}
name.push("Ananya");            //add the new element at the end
console.log(name);
name.pop();                     //removes the last element
console.log(name);
name.unshift("Atisha");         //Add at first
console.log(name);              
name.shift();                   //Removes first element
console.log(name);
name[0] = "Aakriti";            //change the element
console.log(name);
let str = name.join(" ");          // join the array elements to make a string
console.log(str);


//STRING
let s = "Harshita Bhardwaj";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
s.toUpperCase();        //ye kuch nahi krega..
console.log(s);

let s1 = "   Harshita Sunil Bhardwaj   ";
console.log(s1,s1.length)
let s2 = s1.trim();
console.log(s2, s2.length);
console.log(s2.indexOf('B'));       //it gives the index of character
console.log(s2.charAt(3));          //it gives the char of particular index
console.log(s2.slice(9,14));        //substring from index 9 to 14

let arr = s2.split('');             //converts the string into array
console.log(arr);