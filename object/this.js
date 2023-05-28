
var d={
    name:"Vaishnavi",
    age:26
};

var demo=function(s,m)
{
    this.age++;
    this.age++;
    var sub=s,mark=m;
    console.log(sub,mark,this.name);
};

console.log(d.age);
c=demo.bind(d);
demo("marathi",99)
console.log(c("Maths",90));