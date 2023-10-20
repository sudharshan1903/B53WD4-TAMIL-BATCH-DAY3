// two json object compare
let obj1 = {name:"person 1",age:5};
let obj2={age:5,name:"person 1"};
console.log(obj1,"obj1");
console.log(obj2,"obj2");
for(let val in obj1,obj2)
{
    if(obj1.val==obj2.val)
    {
        if(obj1[val]==obj2[val])
        {
            console.log(val,obj1[val],obj2[val],"is equal values");
        }
        else{
            console.log(val,obj1[val],obj2[val],"is not equals");
        }
    }

}