/*
MOST DIFFICULT ONES:

lazyChain()

*/ 

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

// Lazy Chain
//https://www.codewars.com/kata/lazy-chain/train/javascript

function lazyChain(arg) {
  let finalValue = arg;

  let chain = {
    invoke,
    value
  };

  function value() {
      return finalValue;
  };

   function invoke(funcName, ...args) {
     finalValue = finalValue[funcName](...args);
     console.log(finalValue);
     return chain;
  };

  return chain;
}

// other 
function lazyChain(arg, invocations = []) {
  return {
    invoke(funcName, ...args) {
      return lazyChain(arg, [...invocations, { funcName, args }]);
    },
    value() {
      return invocations.reduce((finalValue, invocation) => {
        return finalValue[invocation.funcName](...invocation.args);
      }, arg);
    },
  };
}

//
function lazyChain(arg) {
  return {
    queue: [],
    
    invoke: function(fn, ...args){
      this.queue.push([fn, args]);
      console.log(this);
      return this;
    },
    value: function (){
       this.queue.forEach(([fn,args]) => arg = arg[fn].apply(arg,args));
       return arg;
    }
  }
}


lazyChain("hello").invoke("toUpperCase").invoke("split", "");

queue =  [ [upperCase], [split, '']]
{
  queue: [],
  
  invoke: function (fn, ...args){
    this.queue.push([fn, args]);
    return this;
  },
  value: function (){
     this.queue.forEach(([fn,args]) => arg = arg[fn].apply(arg,args));
     return arg;
  }
}

//
const lazyChain = (x, calls = []) => ({
  invoke: (fn, ...rest) => lazyChain(x, [...calls, (cur) => cur[fn](...rest)]),
  value: () => calls.reduce((acc, fn) => fn(acc), x)
});


// Interleaving Arrays
// https://www.codewars.com/kata/523d2e964680d1f749000135

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

// OTHER SOLUTIONS

const interleave = (...a) => {
  let interleaved = []
  const longest = a.reduce((a, b) => (a.length > b.length ? a : b));

  for (let i in longest) {
    a.forEach(elem => elem[i] === undefined ? interleaved.push(null) : interleaved.push(elem[i]));
  }
  return interleaved;
};

//
interleave=(...a)=>require('lodash').zip(...a).reduce((b,c)=>b.concat(c),[]).map(e=>typeof e==="undefined" ? null : e)

//
function interleave(...arrs) {
  const maxLength = Math.max(...arrs.map((arr) => arr.length));
  const result = [];
  
  for (let i = 0; i < maxLength; i++) {
    for (const arr of arrs) {
      result.push(i < arr.length ? arr[i] : null);
    }
  }
  
  return result;
} 

/*/////////////////////////////////////// Read about For vs forEach() vs for/in vs for/of  
///// https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript
 //////////////////////////////////////// //////////////////////////////////////// //// 

FOR / IN will actually print out "bad":
--> FOR / IN  is the only array method that doesn't ignore the non-numeric property

*/

const arr = ['a', 'b', 'c'];
arr.test = 'bad';

// Prints "a, b, c, bad"
for (let i in arr) {
  console.log(arr[i]);
}
