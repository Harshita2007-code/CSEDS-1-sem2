function CHECK() {
    let num = Number(document.getElementById("number").value);
    let isPrime = true;
        if (num <= 1) {
            isPrime = false;
        } 
        else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (num === "" || isNaN(num)) {
            document.getElementById("result").innerText = "Please enter a valid number";
        } 
        else if (isPrime) {
            document.getElementById("result").innerText = num + " is a Prime Number";
        }
        else {
            document.getElementById("result").innerText = num + " is NOT a Prime Number";
        }
    }