var Teacher=function(nt)
{
    this.teacherName=nt;
}

var Physics=function(mark)
{
    this.mark=mark;
}

var employee=new Physics(26);
Physics.__proto__=new Teacher("Scott");

console.log(employee.mark);
console.log(employee.teacherName);