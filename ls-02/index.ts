const numbers: number[] = [1, 2, 3, 4, 5];
let a = 2;
let b = '2';
// a===b
const reverseNumbers = numbers.reverse();

enum Gender {
  male = 'male',
  female = 'female',
}

interface User {
  id: number;
  userName: string;
  age: number;
  gender: Gender;
}

const trung: User = {
  id: 1,
  userName: 'Trung',
  age: 27,
  gender: Gender.male,
} as const;

trung.userName = 'Ngoc';
console.log({ trung });

let ngoc: User = {
  ...trung,
  userName: 'Ngoc',
};

const { id, ...userWithoutId } = trung;

// console.log({ ngoc });

// console.log({ id, userWithoutId });