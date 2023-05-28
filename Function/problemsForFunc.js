//Write a program in JS to find the sum of the series 1!/1+2!/2+3!/3+4!/4+5!/5 using the function

function fact(num)
{
    if(num==1)
    {
        return 1;
    }
    else{
        return fact(num-1) * num;
    }
}

function findSum(n)
{
total=0;
    for(i=1;i<=n;i++)
    {
        res=0;
        res=fact(i);
        total=total+res/i;
    }
    return total;
}
console.log(findSum(8));