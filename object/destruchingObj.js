//destructuing object
person={name:"Vaishnavi",age:26,sub:"Maths",mark:96};
var {name,age, ...other}=person;
console.log(name);
console.log(age);
console.log(other);


//destructuing function
p=function({color,back:b,font}){
    console.log(color);
    console.log(font);
    console.log(b);
    console.log(dateOf);
}

student={color:"pink",size:26,back:"black",font:"meri"}
p(student);
