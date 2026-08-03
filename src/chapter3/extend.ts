// 중복코드는 언제나 좋지 않다!
interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
console.log(dog);

/**
 * 프로퍼티 재정의
 * 확장과 동시에 프로퍼티의 타입을 재정의하는것도 가능하다
 */
interface Bird extends Animal {
    name: "Chicken";
    isFly: boolean;
}

const bird: Bird = {
    // name: "bird", // ❌ 재정의한 타입과 불일치 
    name: "Chicken",
    color: "white",
    isFly: false
}

// 프로퍼티 재정의시 슈퍼타입 -> 서브타입으로만 재정의 가능
interface Cat extends Animal {
    // name: number; 
    // ❌ Types of property 'name' are incompatible. Type 'number' is not assignable to type 'string'.
    isScratch: boolean;
}

/* 다중 확장 */
// 여러개의 인터페이스 확장 가능
interface DogCat extends Dog, Cat {}
const dogcat: DogCat = {
    name: "",
    color: "",
    breed: "",
    isScratch: true
}