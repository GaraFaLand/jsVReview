//ECMA 6.1 +
'use strict';

//1.Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'biden',
    color : 'white',
    size : null,
    birthDay : new Date(),
    jump : () => {
        console.log(`${this.name} jump over the lazy docs.`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

//json = JSON.stringify(rabbit, ['name']);
// json = JSON.stringify(rabbit, (key, value) => {
//     console.log(`key : ${key}, value : ${value}`);
//     return key === 'name' ? 'ellie' : value;
// });
//2.JSON to Object

console.clear();
const obj = JSON.parse(json);
console.log(obj);