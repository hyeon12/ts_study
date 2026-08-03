"use strict";
// 선택적 매개변수
// 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략 가능
// 단, 선택적 매개변수는 필수 매개변수 앞에 올 수 없다.
const func1 = (a, b) => {
    return a + b;
};
const func2 = (a, b) => {
    return a + (b ?? '');
};
console.log(func1(1, 2));
console.log(func2('선택적매개변수'));
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const add2 = (a, b) => a + b;
add2(1, 2);
// add2.name = 'readOnly'; // 에러 발생 
console.log(add2);
/**
 * TS 내장 타입(lib.es5.d.ts)에 이미 interface Function { readonly name: string; ... }로 정의돼 있어서,
 * 함수 값은 항상 name을 읽기 전용으로 가집니다.
 * Operation2에서 name: string을 선언해도 실제 함수 객체와 합쳐질 때
 * 내장 Function 인터페이스의 readonly 제약이 그대로 적용돼서 add2.name = 'ADD'가 막히는 것뿐이지,
 * "호출시그니처+속성" 패턴 자체가 읽기전용인 건 아닙니다.
 */
const counter = (() => {
    const fn = () => fn.count++;
    fn.count = 0;
    return fn;
})();
counter.count = 10;
