// console.log(123)
// 'use strict'
// if (true) {
//     function f(){
//         console.log(111)
//     }
// }

// f()

// function f() { console.log('I am outside!'); }
// (function () {
//     if (true) {
//         // 重复声明一次函数f
//         let a = function() { console.log('I am inside!'); }
//         a()
//     }
//     f();
// }());


// const pi = 3.1415926;
// pi

// const aaa  = 'ausghda'
// console.log(aaa);

// if(true){
//     var  max = 5
// }
// console.log(max);

// var aa = {name: 'panpan', age: 18}
// const caa = Object.freeze(aa)
// console.log(caa);
// console.log(typeof(aa));

// caa.prop = 123;

// var getGlobal = function () {
//     if (typeof self !== 'undefined') { return self; }
//     else if (typeof window !== 'undefined') { return window; }
//     else if (typeof global !== 'undefined') { return global; }
//     throw new Error('unable to locate global object');
// };
// getGlobal()


// let [a, b, c] = [1, , 3];
// console.log(a, b, c);

// let [z] = [['a', 'w', 's']];
// console.log(z);

// let [bar, foo] = [1];
// console.log(foo);

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//     }
// }

// let [f, s, t, fo, five, six] = fibs()
// console.log(six);


// let [foo = true] = [];
// console.log(foo);


// let [x,y = 1] = [2]
// console.log(x,y);

// let [m,n = 1] = [2, undefined];
// console.log(m,n);

// function f(){
//     console.log('aaa');
// }

// let [o=f()]=[1]
// console.log(o);



// let x;
// if([1][2] === undefined){
//     x=f();
//     console.log([1][2]);

// } else {
//     x = [1][2]
// }


// let { foo, bar } = { foo: "aaa", bar: 'bbb'}
// console.log(foo, bar);


// var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz);


// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz);

// let baz
// ({bar: baz} = {bar: 1})
// console.log(baz);


// var node = {
//     loc: {
//         start: {
//             line: 1,
//             colum: 5
//         }
//     }
// };
// var {loc: { start: { line, colum } } } = node
// console.log(line, colum);


// let { log, sin, cos } = Math
// console.log(Math);
// console.log(Math.log(0));



// const [a,b,c,d,e] = 'helo'
// console.log([a,b,c,d,e]);

// let { prop: x } = undefined;

// function add([x,y]){
//     return x+y;
// }
// console.log(add([1,2]));



// console.log([[1, 2], [3, 4],[1,1]].map(([a, b]) => a + b));


// function move({x, y}={x:0, y:0}){
//     console.log([x,y]);

// }
// // move({x:3,y:2})
// move({x:1})


// [1,undefined,1].map((x='asjd')=>console.log(x))

// let x = 1;
// let y =2;
// [x,y] = [y,x]
// console.log(x,y);


// function examp(){
//     console.log([1,2,4]);
// }

// let [a,b,c] = examp();


// function example() {
//     console.log({

//         foo: 1,
//         bar: 2
//     });

// }
// let { foo, bar } = example();


// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// }
// let { id, status, data: number } = jsonData;
// console.log(id, status, number);


// var map = new Map()
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key, value] of map) {
//     console.log(value);
// }


// 字符串的扩展
// var name = 'm';
// console.log(name.charCodeAt(0));
// console.log('*-*'.repeat(2));


// console.log('abc'.padStart(5));
// console.log('abc'.padEnd(5, '-'));
// console.log(`
// <ul>
//     <li>first</li>
//     <li>second</li>
// </ul>
// `.trim());


// let str = '(name) => `Hello ${name}!`';
// let func = eval.call(null, str);
// func('jack')



var reg = '/xyz/i';
var str = 'abcxyz';
console.log(str.match(reg));

