var obj={
    name:"Vaishnavi",
    age:16,
    get:function(){
        console.log(this);
    }
};

setTimeout(obj.get.bind(obj),2000);