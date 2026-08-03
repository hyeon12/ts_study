/** 접근제어자 
 * public : 모든 범위에서 접근 가능
 * private : 클래스 내부에서만 접근 가능
 * proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
*/ 
class Employee {
    // 필드
    public name: string; 
    age: number;       // 자동으로 public
    private salary: number;
    protected position: string; 

    // 생성자
    constructor(name: string, age: number, salary: number, position: string) {
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

    constructor(name: string, age: number, salary: number, position: string){
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

// 생성자에 접근 제어자를 설정하면 필드를 생략할 수 있다!
// + 접근 제어자가 설정된 매개변수들은 `this.필드 = 매개변수` 로 자동 설정된다!
class Employee2 {
  // 생성자
    constructor(
        private name: string,
        protected age: number,
        public position: string
    ) {}

  // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}
