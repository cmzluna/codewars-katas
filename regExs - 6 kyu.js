////////// COLLECTION -->   https://www.codewars.com/collections/regex-katas

// Validate my Password

// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript?collection=regex-katas
/*
-More than 3 characters but less than 20.
-Must contain only alphanumeric characters.
-Must contain letters and numbers.
*/
function validPass(password) {
  let regEx = /^(?=.*\d)(?=.*[a-zA-Z])(?!.*[\W]).{4,20}$/;
  return regEx.test(password) ? "VALID" : "INVALID";
}

// If you'd like the entire string altogether to be between 3 and 30 characters you can use lookaheads adding (?=^.{3,30}$) at the beginning of the RegExp and removing the other size limitations

// OTHER SOLUTIONS
function validPass(password) {
  return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password)
    ? "VALID"
    : "INVALID";
}

function validPass(password) {
  const t1 = /^\w{3,20}$/.test(password),
    t2 = /\d/.test(password),
    t3 = /[a-zA-Z]/.test(password);
  return t1 && t2 && t3 ? "VALID" : "INVALID";
}
/*


^ only means "not the following" when inside and at the start of [], so [^...].

When it's inside [] but not at the start, it means the actual ^ character.

When it's escaped (\^), it also means the actual ^ character.

In all other cases it means start of the string / line (which one is language / setting dependent).

So in short:

    [^abc] -> not a, b or c
    [ab^cd] -> a, b, ^ (character), c or d
    \^ -> a ^ character
    Anywhere else -> start of string / line.

So ^[b-d]t$ means:

    Start of line
    b/c/d character
    t character
    End of line


*/

// Vowel-consonant lexicon
// https://www.codewars.com/kata/59cf8bed1a68b75ffb000026

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

// other solutions
function solve(s) {
  let a = s.match(/[^aeiou]/g).sort();
  let b = s.match(/[aeiou]/g).sort();
  let r = "";

  if (a.length > b.length) [a, b] = [b, a];

  if (b.length - a.length > 1) return "failed";

  return b.map((c, i) => c + (a[i] || "")).join("");
}

const solve = (str) => {
  let a = (str.match(/[aeiou]/g) || []).sort();
  let b = (str.match(/[^aeiou]/g) || []).sort();
  if (a.length < b.length) [a, b] = [b, a];
  if (a.length - b.length > 1) return "failed";
  return a.map((a, i) => a + (b[i] || "")).join("");
};

// using lodash
const { zip } = require("lodash");

function solve(s) {
  let c = (s.match(/[^aeiou]/g) || []).sort(),
    v = (s.match(/[aeiou]/g) || []).sort();
  if (Math.abs(c.length - v.length) > 1) return "failed";
  let zipped = c.length > v.length ? zip(c, v) : zip(v, c);
  return zipped.map((x) => x.filter((a) => a).join``).join``;
}
//

var solve = (a, b) => (
  ([a, b] = [a.match(/[aeiou]/g) || [], a.match(/[^aeiou]/g) || []]
    .map((a) => a.sort())
    .sort((a, b) => b.length - a.length)),
  1 < a.length - b.length
    ? "failed"
    : a.reduce((r, c, i) => r + c + (b[i] || ""), "")
);
