// 인터페이스? 타입별칭과 동일하게 타입에 이름을 지어주는 문법
interface Person {
    // readonly name: string; // 읽기 전용 프로퍼티
    name: string;
    age?: number; // 선택적 프로퍼티 선언 가능
}

const person: Person = {
    name: "이정환",
    // age : 27
};

// person.name = '홍길동'; // ❌ Cannot assign to 'name' because it is a read-only property.

/* 메서드 오버로딩 */
interface Person2 {
    readonly name: string;
    age?: number;
    sayHi: () => void; // == sayHi(): void;
}

// 함수타입 표현식으로 메서드 타입 정의하면 오버로딩 구현이 불가!
interface Person3 {
    readonly name: string;
    age?: number;
    sayHi: () => void; 
//   sayHi: (a: number, b: number) => void; // ❌
}

// 호출 시그니처를 사용하면 오버로딩 구현 가능
interface Person4 {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number): void;
    sayHi(a: number, b: number): void;
}

/* 인터페이스는 하이브리드 타입 정의 가능 */
interface Func2 {
    (a: number): string;
    b: boolean;
}
const func: Func2 = (a) => "hello";
func.b = true;

// ⚠️주의할점
// 타입별칭(type)에서는 Union, Intersection 타입 정의 가능하나
// 인터페이스는 불가능!
interface Person5 {
    name: string;
    age: number;
} // | number // ❌

type Type1 = number | string | Person;
type Type2 = number & string;

const type: Type1  = {
    name: '김철수',
    age: 25
}
console.log(type);

interface Employee {
    company: string;
}
type PersonWithJob = Person & Employee;

const p: PersonWithJob = {
    name: "이정환",
    age: 27,
    company: "Anthropic",
}; // ✅ 정상 — 두 인터페이스의 프로퍼티를 모두 가져야 함