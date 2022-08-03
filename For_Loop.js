//Que1-prints a table of the powers of 2
var readlineSync = require('readline-sync');
var range = readlineSync.question("Enter range to find power of two: ");
var sum = 1
for (var i = 1; i <= range; i++) {
    sum = sum * 2;
}

console.log("Power of two table upto the range is: ", sum);

//Que2-Print the Harmonic Number
var n = parseInt(readlineSync.question("Enter a number :"));
var sum = 0;

for (var i = 1; i <= n; i++) {
    sum = sum + (1 / i);
}

console.log("harmonic mean upto " + n + " = " + sum);

//Que3- Determines if the number is a prime or not
var number = parseInt(readlineSync.question("Enter a number :"));
let count = 0;
for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("It is a Prime Number");
}
else {
    console.log("It is not a Prime Number");
}

//Que4-Take a range from user and output the prime numbers in that range
var lowerrange = parseInt(readlineSync.question("Enter a lower range :"));
var higherrange = parseInt(readlineSync.question("Enter a higher range :"));

console.log("Prime Numbers between " + lowerrange + "to" + higherrange + "are");

for (var i = lowerrange; i <= higherrange; i++) {
    let flag = 0;

    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Que5- Compute a factorial of a number taken as input
var number = parseInt(readlineSync.question("Enter a number :"));
let fact = 1;

for (var i = 1; i <= number; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number + " is :" + fact);