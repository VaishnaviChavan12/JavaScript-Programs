/*
Write a JavaScript function that receives a string as argument and capitalize the first letter 
of each word of a given string, using split() function and returns the result string.
*/

var str="hey buddy if your are skilled no one can replace you!",res="",total="";
var a=str.split(" ");
for(i=0;i<a.length;i++)
{
    if(a[i].length==1)
    {
        res=a[i][0].toLocaleUpperCase();
        total=total+res+" ";
    }
    else{
        res=a[i][0].toLocaleUpperCase();
        for(j=1;j<a[i].length;j++)
        {
            res=res+a[i][j];
        }
        total=total+res+" ";
        res="";
    }
    
}
console.log(total);