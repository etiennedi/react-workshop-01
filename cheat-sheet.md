# ES6 Cheat Sheet

## const/let instead of var
`````js
// ES5
var foo = 1;
foo = 2;

// ES6
let foo = 1;
foo = 2;

const bar = 1;
bar = 2; // Uncaught TypeError: Assignment to constant variable.
`````

## Template literals
`````js
// ES5
var name = "John";
console.log('Hello ' + name); // Hello John

// ES6
const name = "John";
console.log(`Hello ${name}`); // Hello John
`````

## Spread Operator
`````js
// ES6
const obj1 = { a: '1' , b: '2'};
const obj2 = { c: '3'};

const result = { ...obj1, ...obj2 } // { a: '1' , b: '2', c: '3'}
`````

## Destructuring
`````js
// ES5
var obj = { a: '1' , b: '2' };
var a = obj.a;
var b = obj.b;

// ES6
const obj = { a: '1' , b: '2' };
const { a, b } = obj;

`````

## Rest Operator
`````js
// ES6
const obj = { a: '1' , b: '2', c: '3'};
const { a, ...rest };

console.log(rest); // { b: '2', c: '3' }
`````

## Object Shorthand
`````js
// ES5
var obj = { x: x, y: y };

// ES6
const obj = { x, y };
`````

## Arrow functions
`````js
// ES5
function() {
    var that = this;
    function foo(param) {
        that.bar(param, true);
    }

    function bar(param1, param2) { /**/ }
}

// ES6
function() {
    const foo = param => this.bar(param, true);

    const bar = (param1, param2) => { /**/ }
}
`````

## Map
`````js
// ES5
var fruits = ['Apples', 'Bananas', 'Oranges'];
for (var i = 0; i < fruits.length; i++) {
    console.log('I like ' + fruits[i]);
};

// ES6
const fruits = ['Apples', 'Bananas', 'Oranges'];
fruits.map(fruit => console.log(`I like ${fruit}`));
`````

## Filter
`````js
// ES5
var fruits = [ { name: 'Apples' }, { name: 'Bananas' } ];
var result = [];

for (var i = 0; i < fruits.length; i++) {
    if (fruits.name === 'Apples') {
        result.push(fruits[i]);
    }
}

console.log(result); // [ { name: 'Apples' } ]

// ES6
const result = [ { name: 'Apples' }, { name: 'Bananas' } ]
    .filter(fruit => fruit.name === 'Apples');

console.log(result); // [ { name: 'Apples' } ]
`````

## import/export
`````js
// file1.js
export default foo = 'foo';
export bar = () => { alert('bar') };

// file2.js
import foo, { bar } from './file1.js';
`````

## Classes
`````js
// ES5
function MyClass(x, y) {
    this.x = x;
    this.y = y;
}

MyClass.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}

// ES6
class MyClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString = () => `(${this.x}, ${this.y})`;
}
`````
