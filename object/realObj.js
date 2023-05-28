var employee={
    name:"Vini",
    age:25,
    experience:5,
    pos:"Asst. Manager",
    salary:20000,
    getFunc:function(){
        console.log(`User name is ${this.name} and age is ${this.age}`);
    },
    promot:function(){
        var isEligible;
        if(this.pos=='clerk' && this.experience>=3)
        {
            isEligible=true;
            this.pos="Asst. Manager";
            this.salary=this.salary+this.salary*(10/100);
            return isEligible;
        }
        else if(this.pos=='Asst. Manager' && this.experience>=5)
        {
            isEligible=true;
            this.pos="Sr. Manager";
            this.salary=this.salary+this.salary*(20/100);
            return isEligible;
        }
        else{
            isEligible=false;
            return isEligible;
        }
    }
};

console.log(employee.getFunc());
if(employee.promot())
{
    console.log(employee.getFunc());
    console.log("employee is eligile");
    console.log(`position is ${employee.pos} and salaray is ${employee.salary}`);
}