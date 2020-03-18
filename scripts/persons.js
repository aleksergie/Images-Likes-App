const faker = require("faker");

let data = [];
for (let i = 0; i < 6; i++) {
  let person = {};
  person.id = i;
  person.likes = Math.floor(Math.random() * 150) + 10;
  person.image = faker.image.avatar();
  data.push(person);
}
data.sort(function(a, b) {
  return a.likes - b.likes;
});

export { data };
