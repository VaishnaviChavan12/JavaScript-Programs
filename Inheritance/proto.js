student={
    name:"njv",
    age:26,
    pass:"cxnvjk",
    getFunc:function()
{
    if(this.name=="System" && this.pass=="pass1234")
    {
        console.log("Loggin Successfully");
        console.log(this);
    }
}};

manager={};
manager.__proto__=student;
manager.name="System";
manager.pass="pass1234";
manager.getFunc();
console.log(student.name);
console.log(manager.__proto__.name);
