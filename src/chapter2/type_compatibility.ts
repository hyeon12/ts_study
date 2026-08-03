/**
 * 함수 타입의 호환
 * 1. 반환값 타입 호환
 * 2. 매개변수 타입 호환
 */

// 1
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅
// b = a; // ❌ Type 'A' is not assignable to type 'B'. Type 'number' is not assignable to type '10'

// 2
// 매개변수가 같을때 대입하려고 하는 매개변수의 타입의 서브타입인 경우에만 호환된다. [슈퍼=서브(O)/서브=슈퍼(X)]
type C = (value: number) => void; // Number
type D = (value: 10) => void; // Number Literal "10"

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❌
// Type 'D' is not assignable to type 'C'.
// Types of parameters 'value' and 'value' are incompatible.
// Type 'number' is not assignable to type '10'.
d = c; // ✅

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

const animalFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
}

animalFunc({
    name: '기린'
} as Animal);