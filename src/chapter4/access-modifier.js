"use strict";
/** 접근제어자
 * public : 모든 범위에서 접근 가능
 * private : 클래스 내부에서만 접근 가능
 * proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
*/
class Employee {
    // 필드
    name;
    age; // 자동으로 public
    salary;
    position;
    // 생성자
    constructor(name, age, salary, position) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
    // 메서드
    work() {
        console.log(`${this.position}의 급여:${this.salary}`);
    }
}
const employee = new Employee("이정환", 27, 1500, "devloper");
employee.name = "홍길동";
// employee.age = 30; // ❌ private 접근 불가
// employee.position = "디자이너"; // ❌ protected 접근 불가
employee.work();
class ExtendsEmployee extends Employee {
    constructor(name, age, salary, position) {
        super(name, age, salary, position);
    }
    // 메서드
    accessor() {
        console.log(`${this.name} position : ${this.position}`);
        // this.salary; // ❌ Property 'salary' is private and only accessible within class 'Employee'.ts(2341)
        // this.position;
    }
}
const extEmployee = new ExtendsEmployee("이정환", 27, 8000, "devloper");
extEmployee.accessor();
