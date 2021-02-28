//ECMA 6.1 +
'use strict';

//Class and constructor
class view {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`Hello, ${this.name}.`);
    }
}

//Object biden
const biden = new view('biden',78);
console.log(biden.name);
console.log(biden.age);
biden.speak();

//Getter & Setter
class gAndS {
    constructor(firstName, middleName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw TypeError('Nope');
        }
        this._age = value;
    }
}

const user1 = new gAndS('qwerty','uiop',-1);
console.log(user1.age);

//private and public
class pri {
    isPublic = 200;
    #isPrivate = 200;
}

const pripri = new pri();
console.log(pripri.isPublic);
console.log(pripri.isPrivate); //undefined

//Static : Do not use this yet.
class Article {
    static publisher = 'BBC';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
};

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); do not work.
console.log(Article.publisher); //'js' static members are class dependent
Article.printPublisher();


//extends
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArena() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('almost heaven west virginia');
    }
}

//override
class Triangle extends Shape {
    getArena() {
        return (this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20,20,'red');
const triangle = new Triangle(30,50,'blue');

rectangle.draw();
console.log(rectangle.getArena());

triangle.draw();
console.log(triangle.getArena());

//checking : instanceOf
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);

if (rectangle instanceof Rectangle) {
    console.log(rectangle.getArena());
}

//always true
console.log(triangle instanceof Object);
console.log(rectangle instanceof Object);