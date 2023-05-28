var d=[
    {name:"VAishnavi",age:26,mark:86},
    {name:"Scott",age:36,mark:88},
    {name:"golu",age:26,mark:75},
];

var m=d.map((p)=>{
    p.name=p.name.toUpperCase();
    return p;
})

console.log(m);