// 선택적 매개변수
// 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략 가능
// 단, 선택적 매개변수는 필수 매개변수 앞에 올 수 없다.
const func1 = (a: number, b: number) => {
    return a+b;
}

const func2 = (a: string, b?: string | null) => {
    return a + (b ?? '');
}

console.log(func1(1,2));
console.log(func2('선택적매개변수'));

// 함수타입 표현식
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
const sub: Add = (a, b) => a - b;

// 함수표현시그니처
// type Oper