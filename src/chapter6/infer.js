"use strict";
/**
 * 1. 타입 변수 T에 함수 타입 FuncA가 할당됩니다.
 * 2. T는 () ⇒ string 이 됩니다.
 * 3. 조건부 타입의 조건식은 다음 형태가 됩니다 () ⇒ string extends () ⇒ infer R ? R : never
 * 4. 조건식을 참으로 만드는 R 타입을 추론 합니다 그 결과 R은 string이 됩니다.
 * 5. 추론이 가능하면 이 조건식을 참으로 판단합니다 따라서 결과는 string이 됩니다.
 */ 
