function x(obj) {
  let name = obj.name;
  let street = obj.address.street;
  return { name, street };
}
const obj = {
  name: "sahil",
  age: 20,
  address: {
    street: "abc",
    city: "xyz",
    state: "pqr",
  },
};
console.log(x(obj));
