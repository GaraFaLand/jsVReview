//ECMA 6.1 +
'use strict';

//1.join()
const company = ['apple','samsung','sony','amazon'];
const result = company.join(); //separator's default : ','
console.log('join result : ' + result);
console.log('result type : ' + typeof result);

const result2 = company.join('.');
console.log(result2);

//see you again