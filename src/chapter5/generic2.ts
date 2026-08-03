function swap<T, U>(a: T, b: U) {
    return [b, a];
}
const [a, b] = swap("1", 2);
console.log(a, b);

function returnFirstValue<T>(data: T[]) {
    console.log(data[0]);
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue(["hello", 1, "friends", "mynameis"]);
// number | string

// 반환값 타입을 배열 첫번째 요소의 타입으로 하려면
function returnFirstValType<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let data = returnFirstValType([1, "hello", "mynameis"]);
console.log(`typeof ${data} = ${typeof data}`);

// 타입변수 제한으로, 함수를 호출하고 인수로 전달할 수 있는 값의 범위 제한할 수 있다.
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");            // ✅
getLength([1, 2, 3]);        // ✅
getLength({ length: 1 });    // ✅

// getLength(undefined);        // ❌
// getLength(null);             // ❌