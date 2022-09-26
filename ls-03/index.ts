function getStatusName(state: 'active') {
  console.log(state);
}

// const s = 'active';

let s = 'active';
getStatusName(s as 'active');

type Student = {
  readonly name: string; // name of the student cannot modify, just declare
  age: number;
  gender?: string; // optional props
};

//************** Union type
// This type onli accepts 2 value 'active' or 'inactive
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;
type Babe = 'boy' | 'girl'; // optional

interface Persion {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C' | 'D';
}

interface Child {
  id: number | string;
  name: string;
  gender: Babe;
}
