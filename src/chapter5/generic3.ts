const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

function map1(arr: unknown[], callback: (item: unknown) => unknown): unknown[] {
    return []; // 임시 리턴값
}

function 
// map<T>(arr: T[], callback: (item: T) => T): T[] {
      map<T, U>(arr: T[], callback: (item: T) => U): U[] {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
const result = map(arr, (it) => it * 2);
console.log(arr);
console.log(result);

const convArr = map(arr, (it) => it.toString());
console.log(convArr);

// forEach
function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}