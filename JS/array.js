//ECMA 6.1 +
'use strict';

/*
List

1.Declaration
2.Index Position : fruits[0]...
3.Loop Array : for series, forEach(Arrow function)
4.push/pop/unshift/shift
5.concat array
6.search : indexOf/includes/lastIndexOf

 */




//Array in javaScript
//1.Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2.Index Position
const fruits = ['Apple','Grade']; //length 2,  index : 0, 1
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

//3.Looping over an array : print all element
//A : fori forin forof

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let key in fruits) {
//     console.log(fruits[key]);
// }
// let key 0 ~ .length()-1

for (let fruit of fruits) {
    console.log(fruit); //fruits[0] ~ fruits[fruits.length()-1]
}
console.clear();

//B : forEach(string, number, string[])
//string : value. fruits[0] ~ fruits[length()-1]
//number : index
//string[] : return array(fruits)

//This function is unconditionally repeated for the length of the array -1.
fruits.forEach(function (fruit,index,array) {
    console.log(fruit,index,array);
});

//Arrow function
fruits.forEach((fruit) => console.log(fruit));

//4.The Half-Blood Deck : Array
console.clear();

//push
fruits.push('Biden');
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift('Banana');
console.log(fruits);

//shift
fruits.shift();
console.log(fruits);
//Of course, Array not allows blank space. in other words, 'unshift' and 'shift' cause sort.

//Splice : remove and item by index position.
fruits.push('Obama','Trump','Biden');
console.log(fruits);

fruits.splice(1,1); //if !deleteCount, splice will remove 'start' ~ last index.
console.log(fruits);

fruits.splice(1,3,'What','The','Hell'); //replace option
console.log(fruits);

console.clear();

//Combine
const fruits2 = ['Hello','there'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//Searching
console.log(newFruits.indexOf('Hell')); // return index
console.log(newFruits.includes('Biden')); //return boolean

//lastIndexOf
//searching from last index to 0.(return index position).
console.log(newFruits.lastIndexOf('The'));

