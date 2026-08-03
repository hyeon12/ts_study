"use strict";
/**
 * 함수 타입의 호환
 * 1. 반환값 타입 호환
 * 2. 매개변수 타입 호환
 */
let a = () => 10;
let b = () => 10;
a = b; // ✅
let c = (value) => { };
let d = (value) => { };
// c = d; // ❌
// Type 'D' is not assignable to type 'C'.
// Types of parameters 'value' and 'value' are incompatible.
// Type 'number' is not assignable to type '10'.
d = c; // ✅
const animalFunc = (animal) => {
    console.log(animal.name);
    // console.log(animal.color);
};
animalFunc({
    name: '기린'
});
