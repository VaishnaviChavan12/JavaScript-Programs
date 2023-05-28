/*
For example, if the input string is "By using our Services you are agreeing to these terms", 
the result should be an array as [ "By using", "our Services", "you are", "agreeing to", 
"these terms" ]
*/

var str="By using our Services you are agreeing to these terms";
var res=str.split(" ");
var st="";
console.log(res);

for(i=0;i<res.length;i++)
{
    for(j=0;j<2;j++)
    {
        
    }
    st=st+res[i];
}