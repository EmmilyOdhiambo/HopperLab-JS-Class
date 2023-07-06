let num = [3,5,10,30,8,6];
for(let i = 0; i <num.length; i++){
    console.log(i);
    console.log(num[i]);
}

for(let i = 0; i <num.length; i++){
    console.log("opt1", num[i]);
    if(i===2){
        break;
    }
    console.log("opt3",num[i]);

}
for(let i = 0; i <num.length; i++){
    // console.log("opt1", num[i]);
    if(i===3){
        continue;
    }
    console.log("opt3",num[i]);
}