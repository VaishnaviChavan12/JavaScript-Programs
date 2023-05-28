var n=7;
var p=0;
for(var i=2;i<n;i++)
{
    if(n%i==0)
    {
        p=1;
    }
}
if(p==1)
{
    console.log("The number is not prime");
}
else
{
    console.log("The number is prime");
}