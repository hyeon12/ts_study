"use strict";
/**
 * 인터페이스와 클래스
 */
class Character {
    name;
    moveSpeed;
    extra;
    level;
    // private level: number;
    constructor(name, moveSpeed, extra, level) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
        this.level = level;
    }
    move() {
        console.log(`${this.name} ${this.moveSpeed} 속도로 이동!`);
    }
    addFunc() {
        console.log(`${this.level} 새로운 메서드 추가`);
    }
}
const ct = new Character('피카츄', 30, 'etc', 30);
ct.move();
ct.addFunc();
ct.name = "파이리";
// ct.level = 20;
ct.move();
