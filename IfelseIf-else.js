console.log("Welcome to Selection Practice Problem")

//Selection Practice Problems with if else if and else

//Printing Digit 
let number = Math.floor(Math.random()*10)%10;
console.log("Number : "+ number);

if (number == 1) 
{
    console.log("One");
} else if (number == 2) 
{
    console.log("Two");
} else if (number == 3) 
{
    console.log("Three");
} else if (number == 4) 
{
    console.log("Four");
} else if (number == 5) 
{
    console.log("Five");
} else if (number == 6) 
{
    console.log("Six");
} else if (number == 7) 
{
    console.log("Seven");
} else if (number == 8)
{
    console.log("Eight");
} else if (number == 9)
{
    console.log("Nine");
} else if (number == 0) 
{
    console.log("Zero");
} else 
{
    console.log("Invalid number");
}


//Printing Random day of the week
let dayNumber = Math.floor(Math.random()*7) + 1;
console.log("Number : "+dayNumber);
if (dayNumber == 1) 
{
    console.log("Sunday");
} else if (dayNumber == 2) 
{
    console.log("Monday");
} else if (dayNumber == 3) 
{
    console.log("Tuesday");
} else if (dayNumber == 4) 
{
    console.log("Wednesday");
} else if (dayNumber == 5) 
{
    console.log("Thursday");
} else if (dayNumber == 6) 
{
    console.log("Friday");
} else if (dayNumber == 7) 
{
    console.log("Saturday");
} else 
{
    console.log("Number not valid");
}


//Display Unit Tens thousands so on ....
let power = Math.floor(Math.random()*10)%7;
let num = 10**power;
console.log("Number : "+number);

if (num == 1) 
{
    console.log("One");
} else if (number == 10) 
{
    console.log("Ten");
} else if (number == 100) 
{
    console.log("Hundred");
} else if (number == 1000) 
{
    console.log("Thousand");
} else if (number == 10000) 
{
    console.log("Ten thousand");
} else if (number == 100000) 
{
    console.log("One Lakh");
} else if (number == 100000) 
{
    console.log("Ten Lakh");
} else 
{
    console.log("Input value not defined.");
}


//Numbers do following arithmetic operation and find the one that is maximum and minimum
let a = Math.floor(Math.random()*90) + 1;
let b = Math.floor(Math.random()*90) + 1;
let c = Math.floor(Math.random()*90) + 1;
console.log("Numbers : "+a,b,c);

calc1=a+b*c;     calc2=a%b+c;     calc3=c+a/b;     calc4=a*b+c;
console.log
("Calculated values are : a+b*c = "+calc1+" , a%b+c = "+calc2+" , c+a/b = "+calc3+" , a*b+c = "+calc4);

let max =calc1;
if(max<calc2)
{
    max =calc2;
}
if(max<calc3)
{
    max=calc3;
}
if(max<calc4)
{
    max =calc4;
}

let min = calc1;
if(min>calc2)
{
    min =calc2;
}
if(min>calc3)
{
    min=calc3;
}
if(min>calc4)
{
    min =calc4;
}

console.log("Minimum value : " + min);
console.log("Maximum value : " + max);