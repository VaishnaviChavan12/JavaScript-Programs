student={name:"Scott",age:25};
person={grade:"A",mark:26};
dm={feed:"good"};

person.__proto__=student;
dm.__proto__=person;

console.log(dm.name);
console.log(dm.mark);