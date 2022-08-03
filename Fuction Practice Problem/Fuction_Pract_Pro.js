//1-a- Temperature Conversion
var readlineSync = require('readline-sync');
function Tofahrenheit (){
    var degC = readlineSync.question("Please enter Temperature in Celcius");
    let degF = (degC * 9/5) +32;
    console.log(degF);
    
}
Tofahrenheit()

//1-b
function ToCelcius (){
    var degF = readlineSync.question("Please enter Temperature in Fahrenheit");
    let degC = (degF - 32) * 5/9;
    console.log(degC);
    
}
ToCelcius()

//2-
function palindrom(){
    var num=readlineSync.question("Please enter a number to check palindrom or not");
    var temp=num;
    var rev=0;
    var div=0;
    while(num>0){
        div=num%10;
        rev=(rev*10)+div;
        num=parseInt(num/10);
    }
    if(temp==rev){
        console.log("Entered number is palindrom number ");
    }
    else{
        console.log("Enter number is not a palindrom number ");
    }

}

palindrom();