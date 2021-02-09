//ECMA 6.1 +
'use strict';

//Object : data type. can include for function parameter and object/class member.
//it's normally used JSON.

let testingObject = {
    key : 'value',
    key2 : 'value2'
};

//The sentence below is executing the same function. Object key is can access key name or String type.
console.log(testingObject.key);
console.log(testingObject['key']);

//freedom freedom freedom
testingObject.newKey = true;

testingObject.willDie = 'Goodbye human';
//if print/log willDie => undefined.
delete testingObject.willDie;

function printValue(obj, key) {
    console.log(obj[`${key}`]);
    // console.log(obj.key); Nope.
}
printValue(testingObject,'key2');

//quick start for mk Object
function makeObject(name, age) {
    return {
        name,
        age
    };
}

const person1 = makeObject('biden',78);
console.log(person1);

//Constructor Function === makeObject(name, age)
function Person(name, age) {
    //this == {}
    this.name = name;
    this.age = age;
}

//in operator
console.log('key' in testingObject);
console.log('false' in testingObject);

//for series : for in and for of
for (let key in testingObject) {
    console.log(key);
}
console.clear();

const tArray = [1,5,3,6,7,2];
for (let key of tArray) {
    console.log(key);
}

//Cloning
const user = {name:'holy', age:22};
const user2 = user; //user === user2
console.log(user2);

user2.name = 'shit'; //like Pointer
console.log(user2);

//Old man's way
const user3 = {};
for (let user3Key in user) {
    user3[user3Key] = user[user3Key];
}
console.log(user3);
console.clear();

const user4 = {};
Object.assign(user4, user);
//const user4 = Object.assign(user4, user);
console.log(user4);