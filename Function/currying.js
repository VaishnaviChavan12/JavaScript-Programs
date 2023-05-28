function first(n1)
{
    return second=function(n2)
    {
        return third=function(n3)
        {
            return forth=function(n4)
            {
                return fifth=function(n5)
                {
                    console.log(`n1 is ${n1} n2 is ${n2} n3 is ${n3} n4 is ${n4} n5 is ${n5}`);
                }
            }
        }
    }
}
console.log(first("name")("age")("sub")("mark")("pos"))