function x(ar) {
  let r = new Array();
  for (var i = 0; i < ar.length; i++) {
    let flag = 0;
    if (r.length != 0) {
      for (var j = 0; j < r.length; j++) {
        if (ar[i] == r[j]) {
          flag = 1;
        }
      }
      if (flag == 0) {
        r.push(ar[i]);
      }
    } else {
      r.push(ar[i]);
    }
  }
  console.log(r);
}
x([1, 3, 4, 5, 1, 3, 4]);
