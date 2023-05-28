var Person=function(name,sal)
{
    this.name=name;
    this.sal=sal;
    console.log(this.name);
    console.log(this.sal);
}

var Teacher=function(age,name,sal)
{
    Person.call(this,name,sal)
    this.age=age;
    console.log(this.age);
}

var employee=new Teacher(25,"Scott",25000);
console.log(employee.name);