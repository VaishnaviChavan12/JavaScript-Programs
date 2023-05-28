var createEmployee=function(empName,empAge,empSalary){
    employee={};
    employee.name=empName,
    employee.age=empAge,
    employee.salary=empSalary,
    employee.getDet=function()
    {
        return this.name;
    }
    return employee;
}

var employee1=createEmployee("Scott",26,36000);
var employee2=createEmployee("Delf",36,30000);
console.log(employee1);
console.log(employee2);