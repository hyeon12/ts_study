"use strict";
const person = {
    name: "이정환",
    // age : 27
};
const func = (a) => "hello";
func.b = true;
const type = {
    name: '김철수',
    age: 25
};
console.log(type);
const p = {
    name: "이정환",
    age: 27,
    company: "Anthropic",
}; // ✅ 정상 — 두 인터페이스의 프로퍼티를 모두 가져야 함
