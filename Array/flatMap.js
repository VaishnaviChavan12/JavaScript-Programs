var d=[
    {name:"VAishnavi",age:26,mark:86},
    {name:"Scott",age:36,mark:88},
    {name:"golu",age:26,mark:75},
];

var m=d.flatMap((p)=>{
    p1=p.name.toUpperCase();
    return [p,p,p1];
})

console.log(m);