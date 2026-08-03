"use strict";
let keypair = {
    key: "키",
    value: 165
};
let keypair2 = {
    key: true,
    value: ['1', '2', '3']
};
console.log(keypair2);
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘 못 오셨습니다");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "이정환",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "가톨릭대학교",
    },
};
goToSchool(developerUser);
