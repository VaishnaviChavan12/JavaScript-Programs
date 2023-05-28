var d=[
    {name:"VAishnavi",age:26,mark:86,m:demo},
    {name:"Scott",age:36,mark:88},
    {name:"golu",age:26,mark:75},
    {name:"namddy",age:56,mark:86}
];

var f=d.forEach((p)=>
{
    return p.demo;
});

function demo()
{
    this.age++;
}

console.log(d);