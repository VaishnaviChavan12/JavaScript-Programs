var i=10,j=20;

function sum(){
    var c=30;
    let d=40;
    if(c==30)
    {
        var e=50;
        let f=60;
        console.log("Global Variable:",i,j);
        console.log("Local Variable:",c,d);
        
    }
    console.log("Block Variable:",e);
}
console.log("Block Variable:",i);
sum();