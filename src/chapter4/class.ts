class Student {
  // 필드
  name: string;
  age: number;
  grade: string;

    // 생성자
  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
}
const studentB = new Student("홍길동",  27, "A+");

class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 메서드
  work() {
    console.log(this.name + this.position + "근무중");
  }
}

const employee = new Employee();
employee.name = "홍길동";
employee.age = 45;
employee.position="차장";
employee.work();

// 상속
// 상위클래스에서 생성자를 정의했다면, 반드시 super메서드로 슈퍼 클래스의 생성자를 호출해야함.
class Person extends Student {
  position: string;

  constructor(
    name: string,
    age: number,
    grade: string,
    position: string
  ) {
    super(name, age, grade);
    this.position = position;
  }
}

const person = new Person("박영희", 35, '3', '교직원');
console.log(person);
