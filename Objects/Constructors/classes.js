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
