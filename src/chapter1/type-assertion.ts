// 타입단언

type Animal = {
    name: undefined;
    color?: string;
}

// const dog: Animal = {
//     name: undefined
// }

// const nonull = dog.name //!.length;
// console.log(nonull);


// let animal: Animal = {};
let animal = {} as Animal;
// type Bird = {
//     name: string;
//     color: string;
//     canFly: boolean;
// }

// let bird: Animal = {} as Bird as any;

animal = {
    name: undefined,
    color: 'white'
}

// let bird: Bird = {
//     name: 'pigeon',
//     color: 'gray',
//     canFly: true
// }

// animal = bird;
// // bird = animal;

// let grade = 'freshman';
// grade = '3';
// console.log(typeof(grade));

