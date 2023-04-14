function x(ar) {
  let [a, b] = ar;
  let rest = ar[ar.length - 1];
  return [a, b, rest];
}
console.log(x([1, 3, 4, 5, 1, 3, 9]));
