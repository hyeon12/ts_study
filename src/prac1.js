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
add2.name = 'readOnly';
console.log(add2);
const counter = (() => {
    const fn = () => fn.count++;
    fn.count = 0;
    return fn;
})();
counter.count = 10;
