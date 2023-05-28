var m=new Date();
console.log(m);

var a=m.toLocaleDateString();
var b=m.toLocaleTimeString();
var c=m.getTime();
var d=m.getDate();
var f=m.getMonth();
var g=m.getFullYear();

var h=m.getHours();
var i=m.getSeconds();
var j=m.getMilliseconds();

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(f);
console.log(g);

console.log(h);
console.log(i);
console.log(j);

console.log("---------");
var p=m.setFullYear(2025);
var p=m.setMonth(5);
var p=m.setDate(22);
console.log(m);