console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let result;
for (let i = 3; i <= 100; i++) {

    console.log(i)

    if (i % 3 == 0) {
        result = "FIZZ";
    }
    if (i % 5 == 0){
        result += "BUZZ";
    }

    console.log(result);
    result = "";
}

// Exercise 3 - Repeating 1 Section
console.log("EXERCISE 3 - Repeating 1:\n==========\n");
let i = 1;
while (i <= 100) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

// Exercise 3 - Repeating 2 Section
console.log("EXERCISE 3 - Repeating 2:\n==========\n");
let x = 3
do {
    console.log(x);

    if (x % 3 == 0) {
        result = "FIZZ";
    }
    if (x % 5 == 0) {
        result += "BUZZ";
    }

    console.log(result);
    result = "";
    x++;
} while (x <= 100);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++){
    console.log(i);

    if (i == value) {
        console.log("Found value!");
        break;
    }

    if (i == n) {
        console.log("Did not find value");
    }
}

// Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {

    console.log(i)

    if (i % fizzDivisor == 0) {
        result = "FIZZ";
    }
    if (i % buzzDivisor == 0) {
        result += "BUZZ";
    }

    console.log(result);
    result = "";
}