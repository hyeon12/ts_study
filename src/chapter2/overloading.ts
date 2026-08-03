/**
 * 함수 오버로딩
 * 같은 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 일단 모든 매개변수는 넘버타입
 * -> Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
 * -> Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니쳐 (구현부 없이 선언부만 만들어둔 함수)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);        // ✅ 버전 1 - 오버로드 시그니쳐
// func(1, 2);     // No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments
func(1, 2, 3);  // ✅ 버전 3 - 오버로드 시그니쳐