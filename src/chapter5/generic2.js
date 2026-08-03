"use strict";
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2);
console.log(a, b);
function returnFirstValue(data) {
    console.log(data[0]);
}
let num = returnFirstValue([0, 1, 2]);
// number
let str = returnFirstValue(["hello", 1, "friends", "mynameis"]);
// number | string
// 반환값 타입을 배열 첫번째 요소의 타입으로 하려면
function returnFirstValType(data) {
    return data[0];
}
let data = returnFirstValType([1, "hello", "mynameis"]);
console.log(`typeof ${data} = ${typeof data}`);
// 타입변수 제한으로, 함수 파라미터 값의 범위에 제한을 둬보자!
function getLength(data) {
    return data.length;
}
getLength("123"); // ✅
getLength([1, 2, 3]); // ✅
getLength({ length: 1 }); // ✅
getLength(undefined); // ❌
getLength(null); // ❌
