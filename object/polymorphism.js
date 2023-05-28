var n = { name: "vaishnavi",
           age: 25,
        getDet:function()
    {
        console.log("In parent method");
    } };

var p={
    getDet:function()
    {
        console.log(this.__proto__.getDet());
        console.log("In Child Method");
    }
};

p.__proto__=n;
p.getDet();