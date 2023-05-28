function sum()
{
    total=0;
    for(i=0;i<arguments.length;i++)
    {
        total=total+arguments[i];
    }
    return total;
}
console.log(sum(12,18,36,17));
console.log(sum(1,18,317));
console.log(sum(18,37));