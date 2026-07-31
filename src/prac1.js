"use strict";
const func1 = (a, b) => {
    return a + b;
};
const func2 = (a, b) => {
    return a + (b ?? '');
};
console.log(func1(1, 2));
console.log(func2('선택적매개변수'));
