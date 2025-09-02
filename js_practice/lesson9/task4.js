const person = {
  firstName: "Oleksandr",
  lastName: "Trachuk",
  age: 30,
};


person.email = "oleksandr.trachuk@gmail.com";


delete person.age;

console.log(person);