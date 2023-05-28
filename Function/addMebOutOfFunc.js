student={};
student.name="Vaishnavi";
student.mark=88;
student.getGrade=function()
{
    if(this.mark>=80)
    {
        return "A";
    }
    else if(this.mark>=75)
    {
        return "B";
    }
    else{
        return "C";
    }
}
appr=student.getGrade();
console.log(`Student name is ${student.name} obtained mark is ${student["mark"]} and his grade is ${appr}`);
