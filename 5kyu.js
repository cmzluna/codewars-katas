/*
https://www.codewars.com/kata/526989a41034285187000de4

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
*/

/*
a.b.c.d
 the value of a,b,c or d is between 0-255 decimal. 

*/
function ipsBetween(ip1, ip2) {}

// TODO

// Longest Common Subsequence
// https://www.codewars.com/kata/longest-common-subsequence/train/javascript

function LCS(x, y) {}
//returns the longest subsequence common to the passed in sequences.
//The terms of a subsequence need not be consecutive terms of the original sequence.

/*
A subsequence of an array is a set of numbers that aren’t necessarily adjacent in the array but that are in the same order as they appear in the array. For example these numbers

[2, 3, 5]

are a subsequence of the array:

[1, 2, 3, 4, 5]

*/

//returns the longest subsequence common to the passed in sequences.

LCS("132535365", "123456789") // "12356"
  /////////////////////////////////////////////
  // solution from https://javascript.plainenglish.io/a-deep-dive-of-one-of-the-algorithms-ive-solved-this-week-534f13e8f1e
  /*
The prompt or problem statement: Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
*/

  (1, 2, 4, 5)
][(2, 5)];

2 === 2;

function isValidSubsequence(array, sequence) {
  let j = 0; // represents index of sequence array
  let out = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      out.push(sequence[j]);
      j++;
    }
  }

  if (j === sequence.length) {
    return true;
  } else {
    return false;
  }
}

isValidSubsequence([1, 2, 4, 5], [1, 3, 2, 5]); //false
isValidSubsequence([1, 2, 4, 5], [1, 4, 5]); /// true
isValidSubsequence([1, 2, 4, 5], [1, 4]); // true


array = [1, 1, 6, 1] and sequence = [1, 1, 1, 6]
// Algoexpert.io

1,1,1
1,4,5