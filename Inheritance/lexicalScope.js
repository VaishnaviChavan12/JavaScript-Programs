var a=10;

{
    console.log(a);
    var b=20;
    {
        console.log(a,b);
        var c=30;
        {
            console.log(a,b,c);
        }
    }
}

console.log(a,b,c);