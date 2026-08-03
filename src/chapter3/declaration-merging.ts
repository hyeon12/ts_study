// 타입별칭은 동일한 스코프 내 중복된 이름으로 선언불가
type Person = {
    name: string;
};
// type Person = { // ❌
//     age: number;
// };

// 인터페이스는 중복선언 가능 -> 합쳐져서 같은 인터페이스가 됨. => 선언 합침(Declaration Merging)
interface Person2 {
    name: string;
}

interface Person2 { // ✅
    age: number;
}

const person: Person2 = {
    name: "이정환",
    age: 27,
};

// ⚠️단, 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의하면 오류 발생
interface Person2 { 
    // age: string; // ❌
    // Subsequent property declarations must have the same type.  
    // Property 'age' must be of type 'number', but here has type 'string'.
    // declaration-merging.ts(15, 5): 'age' was also declared here.
}