//CONSTRUCTORS
function  Person (name,age){
    this.name = name
    this.age = age
}
    let person = new Person ('Ann',25)
    console.log({person});
    console.log(person.age);

    person.height = "3ft"
    console.log({person});

    let student = new Person('Henry',56)
    console.log({student});

    console.log(Person.prototype)
    Person.prototype.gender = "female"
    console.log(Person.prototype);

    let person2 = new Person('jane',35)
    console.log({person2});
    console.log(person2.gender)
    console.log(person.gender)

    console.log(student.gender);
    console.log(student);
    student.gend = 'male';
    console.log(student.gender);
    console.log(person.prototype);
    
