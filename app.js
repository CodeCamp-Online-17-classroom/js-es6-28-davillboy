// write code here
const users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 }
];

for (let { user, age = "unknown" } of users) {
  console.log(`${user} - Age: ${age}`);
}
