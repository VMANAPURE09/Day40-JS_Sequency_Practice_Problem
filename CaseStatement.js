console.log("Welcome to Selection Practice Problem for case statement ")

//UC4-Selection Practice Problems with case statements

//Que1:Printing Digit 
let Num = Math.floor(Math.random()*10)%10;
console.log("Number : "+ Num);

switch(Num){
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    default:
        console.log("Invalid number");
        break;
}

//QUE2:Printing Random day of the week
let DayNumber = Math.floor(Math.random()*7) + 1;
console.log("Number : "+DayNumber);
switch(DayNumber){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number");
        break;
}


//QUE3:Display Unit Tens thousands so on ....
let Power = Math.floor(Math.random()*10)%7;
let Numb = 10**power;
console.log("Number : "+Numb);
switch(Numb){
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("One Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    default:
        console.log("Not in Range");
        break;
}

//QUE4:noUnit Conversion
let unit = Math.floor((Math.random() * 4) + 1);
switch(unit){
    case 1:
        console.log("Conversion From Feet to Inch")
        let num1 = Math.floor((Math.random() * 100) + 1);
        let ToInch = num1 * 12; // 1 feet = 12 inch
        console.log("Conversion of " + num1 + " Feet is :" + ToInch + " inch");
        break;
    case 2:
        console.log("Conversion From Feet to Meter")
        let num2 = Math.floor((Math.random() * 100) + 1);
        let ToMeter = num2 * 0.3048; // 1 feet = 0.3048 meter
        console.log("Conversion of " + num2 + " Feet is :" + ToMeter + " Meter");
        break;
    case 3:
        console.log("Conversion From Inch to Feet")
        let num3 = Math.floor((Math.random() * 100) + 1);
        let ToFeet = num3 * 0.0833333; // 1 inch = 0.0833333 feet
        console.log("Conversion of " + num3 + " Inch is :" + ToFeet + " Feet");
        break;
    case 4:
        console.log("Conversion From Meter to Feet")
        let num4 = Math.floor((Math.random() * 100) + 1);
        let Tofeet = num4 * 3.28084; // 1 meter = 3.28084 feet
        console.log("Conversion of " + num4 + " Meter is :" + Tofeet + " Feet");
        break;
}