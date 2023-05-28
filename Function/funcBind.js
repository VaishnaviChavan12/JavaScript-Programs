c={name:"Vaishnavi",age:19};

func=function(mark,sub)
{
    this.age++;
    console.log(`Marks ${mark} sub is ${sub} age is ${this.age}`);
}

myFunc=func.bind(c);
myFunc(98,26);