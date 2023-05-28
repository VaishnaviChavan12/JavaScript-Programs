function val(nameInfo)
{
    console.log();
    pos="Senior Developer";
    info();
    prof=function()
    {
        console.log(`Your are on ${pos} position`);
    }
    return prof;
}

info=function()
{
    name="Vaishnavi",age=21;
    if(9==9)
    {
        console.log(`User name is ${name} age is ${age}`);
    }
}

funCall=val();
funCall();

