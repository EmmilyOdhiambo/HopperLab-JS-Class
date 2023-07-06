let people = [
    {name:"Ann",age: 26,height:"5FT"},
    {name:"Mary",age: 36,height:"6FT"},
    {name: "Angy",age: 46,height:"9FT"},
];

let ages = people.map(item => item.age);
console.log({ages})

let weights = people.map(item=>{
    return{
        ...item,
        weight:50,
    }
})
console.log({weights})


let changedWeight = weights.map(item=>{
    if (item ==="Ann"){
            item.weights = 60;
    }
    return item
    
}) 
console.log({changedWeight});