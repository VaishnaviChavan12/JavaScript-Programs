var mark=70,grade;

if(mark>90)
{
    grade="A+";
}
else if(mark<90 && mark>70)
{
    grade="A";
}
else if(mark<70 && mark>40)
{
    grade="B";
}
else{
    grade="C";
}
console.log("Your grade is:",grade);