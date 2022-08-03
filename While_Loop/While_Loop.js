//3-FlipCoin
let FlipCoin=1;
while(FlipCoin<12)
{
    let n= Math.floor(Math.random()*10)%2;
    if(n==1)
    {
        console.log("Head");
    }
    else
    {
        console.log("Tail");
    }
    FlipCoin++;
}

//4-Find Magic Number
var readlineSync = require('readline-sync');
var n = readlineSync.question("Enter number between 1 to 100 ");

function FindMagicNumber(n){
  let r,s;
    while(n>9)
    {
        while(n>0){
            r=n%10;
            s=s+r;
            n=n/10;
           
        }
        n=s;
        s=0;
    }
    if(n==1){
        console.log("Its a magic number")
    }
    else{
        console.log("Its not a magic number")
    }
}
FindMagicNumber(n);