//ECMA 6.1 +
'use strict';

//Class - constructor and get set...

class review01 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    printInformation() {
        console.log(`Name : ${this.name}, Age : ${this.age}, Gender : ${this.gender}`);
    }

    //reference variable -> Object type.
    //It doesn't work as expected.
    convertObject(name = this.name, age = this.age, gender = this.gender) {
        return {
            name : this.name,
            age : this.age,
            gender : this.gender
        };
    }
}

let review02 = new review01('Biden',78,'Male');
review02.printInformation();
review02.convertObject();
console.log(review02);
console.log(typeof review02);

function toObject(name, age, gender) {
    return {
        name,
        age,
        gender
    }
};

let person = toObject('biden',78,'Male');
console.log(person);