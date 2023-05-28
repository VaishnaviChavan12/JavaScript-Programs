var arr=[
    {name:"Vaishnavi",age:69},
    {name:"Scott",age:88},
    {name:"Sahil",age:89},
    {name:"Sunil",age:90},
    {name:"Shital",age:79},
];

console.log(arr.every((p)=>
{
    return p.age>70;
}))