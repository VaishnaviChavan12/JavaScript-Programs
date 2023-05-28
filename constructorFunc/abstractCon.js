var Person=function()
{
    throw new Error("You can't create the object here");
}

Person.name="vaishnavi";
Person.age=26;

var Teacher=function()
{
}

Teacher.prototype=Object.create(Person);
Teacher.sub="math";
var p=new Person();
console.log(Teacher.name);
console.log(Teacher.age);
console.log(Teacher.sub);