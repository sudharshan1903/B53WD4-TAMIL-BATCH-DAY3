const URL = "https://restcountries.com/v3.1/all";
const req = new XMLHttpRequest();
req.addEventListener("load",function(){
    const data=JSON.parse(this.response)
    // console.log(data,"data");
    for(let val of data){
        console.log(val.flags.png);
        console.log(val.flags.svg);
    }
    for(let val of data){
        console.log(val.region,"region");
        console.log(val.subregion,"subregion");
        console.log(val.name.official,"countries name");
    }
});
req.open("GET",URL);
req.send();
