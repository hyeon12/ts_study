/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    // private level: number;

    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string,
        private level: number
    ) {}

    move(): void {
        console.log(`${this.name} ${this.moveSpeed} 속도로 이동!`);
    }

    addFunc(): void {
        console.log(`${this.level} 새로운 메서드 추가`);
    }
}

const ct = new Character('피카츄', 30, 'etc', 30);
ct.move();
ct.addFunc();
ct.name = "파이리"
// ct.level = 20;
ct.move();