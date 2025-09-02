const users = [
  { name: "Anna", email: "anna@example.com", age: 22 },
  { name: "Bohdan", email: "bohdan@example.com", age: 27 },
  { name: "Ira", email: "ira@example.com", age: 31 },
];

for (const { name, email, age } of users) {
  console.log(`name: ${name}, email: ${email}, age: ${age}`);
}