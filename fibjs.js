var n;
var i,fib;
var temp1=1;
var temp2=0;
n=prompt("Enter n for fibonnaci series.");

if(isNaN(n)){
    alert("Enter a valid number.");
}
else if(n<=0){
    alert("Enter a positive number.");
}
else{
    console.log("1");
    for(i=2;i<=n;i++){
        fib=temp1+temp2;
        console.log(fib);
        temp2=temp1;
        temp1=fib;
    }
}
