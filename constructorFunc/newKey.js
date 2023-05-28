var createEmployee=function(name,age,salary)
{
    this.name=name;
    this.age=age;
    this.salary=salary;
    this.getFunc=function()
    {
        return this.name;
    }
    console.log("HHHHHHHHHHiii");
}

var employee1=new createEmployee("Scott",26,25000);
var employee2=new createEmployee("Vini",24,30000);

console.log(employee1);
console.log(employee2);