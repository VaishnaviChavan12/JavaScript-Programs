/*
Today is : Friday. 
Current time is : 4 PM : 50 : 22
*/

var a=new Date();
var b=["sunday","Monday","Tudeday","Wednesday","Thursday","Friday","Saturday"];
var num=a.getDay();
console.log("Today is : ",b[num]);
console.log("Current time is : ",a.toLocaleTimeString());