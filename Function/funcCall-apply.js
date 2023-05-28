c={name:"Vaishnavi",age:19};

func=function(mark,sub)
{
    this.age++;
    console.log(`Marks ${mark} sub is ${sub} age is ${this.age}`);
}

func.call(c,98,26);
func.apply(c,[98,26]);