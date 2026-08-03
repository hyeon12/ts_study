"use strict";
const dog = {
    name: 'happy',
    isBarked: true
};
function warning(animal) {
    console.log("isBark" in animal);
    console.log("isBarked" in animal);
    if ("isBark" in animal) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
    }
    else if ("isScratch" in animal) {
        console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}
warning(dog);
/* 타입가드 추가 */
// Dog 타입인지 확인하는 타입 가드
// function isDog(animal: Animal): animal is Dog {
//   return (animal as Dog).isBark !== undefined;
// }
// // Cat 타입인지 확인하는 타입가드
// function isCat(animal: Animal): animal is Cat {
//   return (animal as Cat).isScratch !== undefined;
// }
// function warning2(animal: Animal) {
//   if (isDog(animal)) {
//     console.log(animal.isBark ? "짖습니다" : "안짖어요");
//   } else {
//     console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
//   }
// }
