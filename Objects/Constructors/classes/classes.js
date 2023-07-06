class Person {
    constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log('hello');
  }
};


let person  = new Person('jane',67);
console.log(person);
person.greet();


class Student extends Person{
    constructor(name,age){
        super(name,age);
    }
}

let student=new Student('henry',78)
console.log({student});

Student.prototype.height = "6FT";
console.log(student.height);

class Sister extends Person {
    constructor(name,age){
        super(name,age);
        this.name = name;
        this.age = age;
}
}
let sister=new Sister('joan',48)
console.log({sister});
