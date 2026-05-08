const myPromise = new Promise((resolve,reject) => {
    let age = 19;
    if(age >= 18){
        resolve("Eligible for vote. ")
    } else{
        reject("Not eligible for vote.")
    }
})
checkvote();
    myPromise
    .then((response) => console.log(response))                //.then will take a callback
    .catch((error) => console.log(error.message));

    const checkvote= async() => {
        const response = myPromise;
        console.log(response);
    }

//fetch
fetch("https://fakestoreapi.com/products")
    .then((products)=> console.log(products.json()))
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

const getData = async() => {
    try{
        const response =await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("fetch error");
    }
}

//Map Reduce filter
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mulof02= num.map((n) => {return n*2});
console.log(mulof02);

const divby2 = num.filter((n) => n%2 ===0);
console.log(divby2);

const sumOfNumArray = num.reduce((acc, val) => acc += val,0)
console.log(sumOfNumArray);

//setTimeOut
const Greet = () => {
    console.log("Hello CSE_DS");
}
const fun = setTimeout(() =>{
    console.log("Hello CSE_DS");
}, 3000);
console.log("After setTimeout");