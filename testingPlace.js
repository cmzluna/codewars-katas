function LCS(array, sequence) {
  let j = 0; // represents index of sequence array
  let out = [];
  let z = 0; // represents stop for Loop if not equal with sequence[j]

  for (i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      out.push(sequence[j]);
      j++;
      z = j;
    } else if (i === array.length && arr[i] !== sequence[j]) {
    }
  }

  return out.join("");
}

console.log(("a", "b"), "");
console.log(LCS("abcdef", "abc"), "abc");
console.log(LCS("132535365", "123456789"), "12356");

"132535365", "123456789";
