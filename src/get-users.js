import { faker } from "@faker-js/faker";

const getUser = (amount = 20) => {
  const users = [];

  for (let i = 0; i < amount; i++) {
    const newUser = {
      id: faker.random.numeric(5),
      name: faker.name.fullName(),
      age: faker.random.numeric(2),
      city: faker.address.city(),
      color: createColor(),
      pointer: faker.datatype.boolean(),
      hover: faker.datatype.boolean(),
    };
    users.push(newUser);
  }
  return users;
};

const createColor = () => {
  const colors = ["red", "blue", "green", "orange", "yellow", "dodgerblue"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default getUser;
