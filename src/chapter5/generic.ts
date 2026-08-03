/**
 * 제네릭이란?
 * 함수나 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록 만들어주는 기능
 */

function func(value: any) {
    return value;
}

let num = func(10); // any 타입
let str = func("string"); // any 타입

// str.toFixed(); // ❌ 
// num.toUpperCase(); // ❌ 
// 컴파일러가 타입오류 감지못함. 런타임 에러 발생 => num.toUpperCase is not a function

if (typeof num === 'number'){
    num.toFixed();
}

/** 제네릭 타입 (Generic Type) 
 * T에 어떤 타입이 할당될 지는 함수가 호출될 때 결정!
*/

function func2<T>(value: T): T {
    return value;
}

let num2 = func2(10);
let str2 = func2('string');
console.log(typeof num2);
console.log(typeof str2);

// num2.toUpperCase(); 
// ☑️ 컴파일러가 에러 잡음! Property 'toUpperCase' does not exist on type 'number'.ts(2339)

function func3<T>(value: T): T {
  return value;
}

let arr = func3<[number, number, number]>([1, 2, 3]);
console.log(arr);