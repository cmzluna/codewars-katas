function interleave(...args) {
  console.log(args);

  let res = [];

  while (!args.every((array) => array.length === 0)) {
    args.forEach((el) => {
      if (!el[0] && el[0] !== 0) {
        res.push(null);
      } else {
        res.push(el[0]);
      }
      el.splice(0, 1);
    });
  }
  return res;
}

console.log(interleave([1, 2, 3], [4, 5]), [1, 4, 2, 5, 3, null]);
console.log(
  interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]),
  [1, 4, 7, 2, 5, 8, 3, 6, 9]
);
console.log(interleave([1, 2, 3], ["c", "d", "e"]), [1, "c", 2, "d", 3, "e"]);
console.log(interleave([]), []);

console.log(interleave([4, 5], [1, 2, 3]))[
  // problems in this one

  (["X", "l", 2, "M"],
  ["j", "7", "p", "X", "m", 0, "O", 8],
  ["o", "L", 3, "g", "a", "a", 4, "i", "j", 0],
  ["q", "v", "q", "h", 5, "v", "M"])
];
