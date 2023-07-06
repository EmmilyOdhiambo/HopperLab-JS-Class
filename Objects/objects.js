let person ={
    name:"Stephanie",
    age:20,
    height:"5feet",
    friend:{
        name:"Amanda",
        age:20,
    }
}
let student =new Object();
student.name = "Mary"  //adding a property
console.log(person.age)//log a value if you want to get a property
console.log(person["name"]);
console.log(person.friend.name);
console.log(person['friend']['age']);
console.log({student});

person.age = 25;
person.school = "Akirachix";
console.log({person});


let person2 = Object.assign(person);
console.log({person2});
let keys = Object.keys(person);
console.log({keys});
let value = Object.values(person);
console.log({value});