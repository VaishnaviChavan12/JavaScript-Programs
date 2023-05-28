function func()
{
    name="Vaishnavi";
    age=12;
    grade="A",mark=88;
    getFunc=function()
    {
        console.log(this.name,this.age);
    }
    return getFunc;
}

p=func();
p();

