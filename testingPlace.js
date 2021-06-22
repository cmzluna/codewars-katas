function solve(string) {
  let output = [];
  let inputVowels = [],
    inputCons = [];
  let vowels = ["a", "e", "i", "o", "u"];

  string.split("").forEach((el) => {
    vowels.includes(el) ? inputVowels.push(el) : inputCons.push(el);
  });

  inputVowels.sort();
  inputCons.sort();

  if (
    inputCons.length === inputVowels.length + 1 ||
    inputVowels.length === inputCons.length + 2
  ) {
    //empezar con consonantes
    inputCons.forEach((el, index) => {
      output.push(el);
      output.push(inputVowels[index]);
    });
  } else if (
    inputVowels.length === inputCons.length + 1 ||
    inputCons.length === inputVowels.length
  ) {
    //  empezar con vocales
    inputVowels.forEach((el, index) => {
      output.push(el);
      output.push(inputCons[index]);
    });
  } else {
    return "failed";
  }

  return output.join("");
}

console.log(solve("java"), "ajav");
console.log(solve("oruder"), "edorur");
console.log(solve("zodiac"), "acidoz");
console.log(solve("apple"), "lapep");
console.log(solve("acidity"), "caditiy");
console.log(solve("codewars"), "failed");
console.log(solve("orudere"), "ederoru");
