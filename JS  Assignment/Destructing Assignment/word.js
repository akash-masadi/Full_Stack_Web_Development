function x(word) {
  let m = new Map();
  for (var i = 0; i < word.length; i++) {
    let c = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[i] == word[j]) {
        c++;
      }
    }
    m.set(word[i], c);
  }
  console.log(m);
}
x("hello");
