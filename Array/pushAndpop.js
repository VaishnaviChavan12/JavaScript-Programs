var arr=[10,12,14,16,18];

arr.push(22,3,69);

var a=[1,2,3,4];
for(i=0;i<4;i++)
{
    arr.push(a[i]);
}

console.log(arr);

for(j=0;j<3;j++)
{
    arr.pop();
}

console.log(arr);