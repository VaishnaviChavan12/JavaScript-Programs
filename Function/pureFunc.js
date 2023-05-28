function pureFunc(a,b,c)
{
    sum=a+b+c;
    console.log("Sum is:",sum);
    var f=50,g=26;
    sum=a+b+c+f+g;
    console.log("After declarition",sum)
}
pureFunc(12,13,15);