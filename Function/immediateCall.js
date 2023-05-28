cube=function(sq,n)
{
    console.log("Cube is:",sq*n);
}

square=function(n1)
{
    sqr=n1*n1;
    cube(sqr,n1);
}(7);