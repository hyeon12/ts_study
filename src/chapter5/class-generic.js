"use strict";
// 제네릭 클래스
class List {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
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
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(5);
numberList.print();
const stringList = new List(['가', '나', '다']);
stringList.pop();
stringList.push('라');
stringList.print();
