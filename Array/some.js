var arr=[
    {name:"Vaishnavi",age:69},
    {name:"Scott",age:88},
    {name:"Sahil",age:89},
    {name:"Sunil",age:92},
    {name:"Shital",age:79},
];

console.log(arr.some((p)=>
{
    return p.age>90;
}))