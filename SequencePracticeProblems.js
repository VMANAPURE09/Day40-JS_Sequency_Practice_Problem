console.log("Welcome to Sequence Practice Problems")

//Que1:Random Function Math.floor(Math.random() * 10); to get Single Digit.
let singleDigitRandomNumber = Math.floor(Math.random() * 10);  
console.log("Random single digit : "+singleDigitRandomNumber);

//QUE2:use Random to get Dice Number between 1 to 6
let RandomNumber = Math.floor(Math.random() * 6)+1;  
console.log("Random Dice Number : "+RandomNumber);


//QUE3:use Random to get Dice Number between 1 to 6
let RandomNumber1 = Math.floor(Math.random() * 6)+1;  
let RandomNumber2 = Math.floor(Math.random() * 6)+1;  
console.log("Addition of 2 random dice numbers : "+(RandomNumber1+RandomNumber2));

//QUE4: Calculate Sum and Average of 5 Random 2 Digit Number
let num = 0;
let sum = 0;
let countOfRandommNumbers = 5;

for(let i = 0; i < countOfRandommNumbers; i++){
    num = Math.floor(Math.random()*100);
    sum = sum + num;
}
let average = sum / countOfRandommNumbers;
console.log("Sum : " +sum +", Average : "+average);

//QUE5:Unit Conversion
//a. 1ft = 12 in then 42 in = ? ft

let inputInches=42;
let inchToFeet=inputInches/12;
console.log("42 in = "+inchToFeet+" ft");

//b. Rectangular Plot of 60 feet x 40 feet in meters
let AreaInFeet=60*40; // 1 square feet = 0.092903 meter square
let AreaInMeter=AreaInFeet/0.092903;
console.log("Plot area in meter : "+AreaInMeter);

//c. Calculate area of 25 such plots in acres
let AreaInAcre=AreaInFeet* 25 * 0.092903;
console.log("25 plots area in meter : "+AreaInAcre);