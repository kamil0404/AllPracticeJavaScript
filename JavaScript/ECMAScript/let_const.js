// let a = 24

// if (true) {
//     let a = 42

//     console.log('a', a);
// }

// console.log(a);

/*Hoisting */
// b = 20
// console.log(b);
// let b = 10

// function hoisted () {
//     age = 26
// }

// let age
// hoisted()
// console.log(age);

// const title = 'Hello'

// const template = `<h1 style = 'color: red'>${title}</h1>`
// console.log(template);

// const str = 'Hello'

// console.log(str.startsWith('e'));
// console.log(str.includes('llo'));
// console.log(str.repeat(3));
// console.log(str.trim());


// function average (arr) {
//     return arr.reduce((acc, i) => acc +=i, 0) / arr.length
// }

// console.log(average([10, 20, 30, 40]));

const first = {a: 2}

const second = {b:4}

const obj = Object.assign(first, second)
console.log(obj);

console.log(Object.entries(obj));