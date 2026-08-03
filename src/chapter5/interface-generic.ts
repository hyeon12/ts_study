// 제네릭 인터페이스에 적용하기
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keypair: KeyPair<string, number> = {
    key: "키",
    value: 165
}

let keypair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1', '2', '3']
}
console.log(keypair2);

// 인덱스 시그니처와 함께 사용하기
interface CustomMap<T> {
    [key: string]: T;
}

let stringMap: CustomMap<string> = {
    key: "value",
};

let booleanMap: CustomMap<boolean> = {
    key: true,
};

// 제네릭 인터페이스 활용 예시
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User<Developer>) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};

goToSchool(developerUser);