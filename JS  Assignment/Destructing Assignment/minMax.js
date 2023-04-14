function x(...ar) {
  let obj = {};
  obj.min = (function () {
    return Math.min(...ar);
  })();
  obj.max = (function () {
    return Math.max(...ar);
  })();
  return obj;
}
console.log(x(1, 3, 4, 5, 11, 3, 9));
