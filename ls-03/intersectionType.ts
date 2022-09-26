interface BusinessPartner {
  name: string;
  //name: number; // wrong, same properties have to same type
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
type Employee = BusinessPartner & Identity & Contact;
type Customer = BusinessPartner & Contact;

// // interface way
// interface Employee extends Identity, Contact {}
// interface Customer extends BusinessPartner, Contact {}

// ******** interface merging
interface StudentA {
  id: number;
  name: string;
}
// declaration merging
// works, no error
interface StudentA {
  age: number;
  gender? : Gender
}

const alice: StudentA = {
  id: 1,
  name: 'Alice',
  age: 27
};
