function x(a, b) {
  [a, b] = [b, a];
  return [a, b];
}
console.log(x(1, 2));
