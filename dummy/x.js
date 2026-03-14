// const a: number = 10;
// let b: number = 20;

// const a: number = 10;
// const b: string = "20";
// const c: boolean = true;
// const d: null = null;
// const e: undefined = undefined;
// const f: symbol = Symbol('id')

// const sym: symbol = Symbol('id');
// const sym2: symbol = Symbol('id2');
// const obj = {
//   [sym]: 34,
//   [sym2]: 342,
//   key:"12"
// };

// for(const key of Object.keys(obj)){
//     console.log(`${key}:${obj[key]}`)
// }

// for(const key of Object.entries(obj)){
//     console.log(`${key}`)
// }

// for(const key in Object.keys(obj)){
//     console.log(`${key}:${obj[key]}`)
// }

// for(const key of Object.getOwnPropertySymbols(obj)){
//     console.log(`${String(key)}:${obj[key]}`);
// }

// for(const key in Object.getOwnPropertySymbols(obj)){
//     console.log(`${String(key)}:${obj[key]}`);
// }

// const x:unknown = "hello";
// console.log((x as string).length);

// console.log(typeof Array)
// const arr = new Array(1,2,3)
// console.log(arr.length);
// arr.push(4)
// console.log(Array.prototype.push)
// const arr2 = structuredClone<Array<unknown>>(arr);
// const arr3 = [...arr];
// console.log(arr)
// arr3.pop()
// console.log(arr)
// console.log(arr.hasOwnProperty('length'));
// console.log(Array.prototype.length);
// console.log(Array.isArray(Array.prototype));
// const arr = [1, 2, 3];
// console.log(Object.getOwnPropertyDescriptor(arr,"length"))
// delete arr.length;
// console.log(arr.length)

// console.log(2 === 2);
// console.log(2 === "2");
// console.log([] === [])
// const obj = [1,2,3,4];
// const obj2 = obj;
// obj2.push(5);
// console.log(obj)
// const obj = {x:1,y:[1, 2, 3, 4]};
// const obj2 = obj;
// obj2.y.push(5);
// obj2.x = 2;
// console.log(obj);
// console.log(obj2);

// function deepClone(obj) {
//   if (obj === null || typeof obj !== 'object') return obj;
//   console.log(obj + ' : ' + typeof obj);
//   let result = Array.isArray(obj) ? [] : {};
//   console.log(result);

//   for (let key in obj) {
//     console.log(obj[key]);
//     if (Object.hasOwn(obj, key)) {
//       result[key] = deepClone(obj[key]);
//     }
//   }
//   if(obj instanceof Date) return new Date(obj)
//   console.log('done');
//   return result;
// }
// function deepCloneNoDate(obj) {
//   if (obj === null || typeof obj !== 'object') return obj;
//   console.log(obj + ' : ' + typeof obj);
//   let result = Array.isArray(obj) ? [] : {};
//   console.log(result);

//   for (let key in obj) {
//     console.log(obj[key]);
//     if (Object.hasOwn(obj, key)) {
//       result[key] = deepClone(obj[key]);
//     }
//   }
//   if (obj instanceof Date) return new Date(obj);
//   console.log('done');
//   return result;
// }
// module.exports = {deepClone, deepCloneNoDate};

// let createCounter = function () {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// };
// const obj = {
//   a: 1,
//   b: '2',
//   c: createCounter,
//   d: { e: 3, f: '4', g: [2, 3, 4], h: { i: '5' } },
//   e: new Date()
// };

// const obj2 = deepClone(obj);
// const obj3 = obj;
// console.log(obj.e === obj2.e);
// console.log(obj.e === obj3.e);
// console.log(obj.e.getTime() === obj2.e.getTime());

// let str = "hello";
// str[0] = "H";
// console.log(str);

// var x = 1;
// test()
// function test(){
//   console.log(b);
//   let b = 2;
// }

// bar();

// function bar(){
//   console.log('bar')
// }
// var bar = 10;

function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

console.log(sum(2)(3)(3))
