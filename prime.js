var n;
var i,j,flag=0;
n=prompt("Enter value n for prime number till n");
if(isNaN(n)){
    alert("Enter valid number");
}
else if(n<=0){
    alert("Enter a positive number");
}
else{
    for(i=1;i<=n;i++)
    {   flag=0;
        for(j=2;j<i;j++)
        {
            if(i%j==0)
            {flag=1;
            break;}
        }
        if(flag==0){
            console.log(i + " is a prime number");
        }
    }
}
