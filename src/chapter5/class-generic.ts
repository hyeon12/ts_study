// 제네릭 클래스
class List<T> {
    constructor(private list: T[]) {}

	push(data: T) {
        this.list.push(data);
        console.log(this.list);
    }

    pop() {
        console.log(this.list.pop());
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List<number>([1, 2, 3]);
numberList.pop();
numberList.push(5);
numberList.print();

const stringList = new List<string>(['가','나','다']);
stringList.pop();
stringList.push('라');
stringList.print();
