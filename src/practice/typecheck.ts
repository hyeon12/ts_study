/* any */
let value: any = "hello";
console.log(value.toUpperCase());  // OK
// value.foo.bar.baz();  // OK (런타임에서만 에러남)
// value();               // OK (함수처럼 호출해도 컴파일 통과)

let num: number = value; // any는 어떤 타입에도 할당 가능 (양방향 전파)
function getData(): any {
    return JSON.parse('{"user": {"name": "철수"}}');
}

const data = getData();       // data: any
const user = data.user;       // user: any (전염!)
// const named = user.nmae.toUpperCase(); // 오타 나도 컴파일 통과, 런타임에 터짐

/* unknown */
let value2: unknown = "hello";
// unknwon? 어떤 타입이 올지 예측 불가하기 때문에 아래 코드 불가
// value2.toUpperCase(); // ❌ Error: Object is of type 'unknown'
// value2.foo;            // ❌ Error
// value2();              // ❌ Error

// 타입 좁히기 후에만 사용 가능
if (typeof value === "string") {
  const upperStr = value.toUpperCase(); // ✅ OK, 이 블록 안에서 string으로 확정됨
  console.log('upperStr: ', upperStr);
}

/* never */
type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number }
    | { kind: "triangle"; base: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    default:
      // 모든 case를 처리했다면 이 지점의 shape는 never 타입
    const _exhaustiveCheck: never = shape; // 컴파일에러발생
    return _exhaustiveCheck;
    }
}

