function addPY(input)
{
    var n=0;
    if(arguments[0]=="P" && arguments[1]=="y")
    {
        return input;
    }
    else{
        var n="Py"+input;
        return n;
    }
}
console.log(addPY(" May adding something"));