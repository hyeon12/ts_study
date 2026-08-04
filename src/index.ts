// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "이정환",
//   role: Role.ADMIN, //관리자
// };

// const user2 = {
//   name: "홍길동",
//   role: Role.USER, // 회원
// };

// const user3 = {
//   name: "아무개",
//   role: Role.GUEST, // 게스트
// };

// console.log(user1);
// console.log(typeof(Role));

// let user:any = 'user';
// user = 3;

// function unknownColor(x: string): never {
//     throw new Error("unknown color");
// }

// type Color = 'red' | 'green' | 'blue'
// function getColorName(c: Color): string {
//     switch(c) {
//         case 'red':
//             return 'is red';
//         case 'green':
//             return 'is green';
//         default:
//             return unknownColor(c); // 'string' 타입은 'never' 타입에 할당할 수 없음
//     }
// }

// // getColorName('blue');

// let num: unknown = 20;
// let number: number = 20;
// num = number;
// // number = num;

// let und: undefined = undefined;
// let voidtype: void;
// voidtype = und;
// // und = voidtype

// console.log(voidtype);