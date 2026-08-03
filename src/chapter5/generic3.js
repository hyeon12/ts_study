"use strict";
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]
function map1(arr, callback) {
    return []; // 임시 리턴값
}
function 
// map<T>(arr: T[], callback: (item: T) => T): T[] {
map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
const result = map(arr, (it) => it * 2);
console.log(arr);
console.log(result);
const convArr = map(arr, (it) => it.toString());
console.log(convArr);
// forEach
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
