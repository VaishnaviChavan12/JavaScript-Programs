function callBack(nme,age,myFunc)
{
    console.log(`User name is ${nme}, and age is:${age}`);
    myFunc();
}

var c=function()
{
    var favSub="English";
    console.log(`Favourite subject is:${favSub}`);
}

callBack("Vini",25,c)