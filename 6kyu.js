
// finds unique number 
//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }
  // el index del ultimo y el primer encuentro son los mismos.
  
//  valid braces
// write number in expanded form 
// sort the odd


function isPangram(string) {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'];
    
    string.toLowerCase().split('').forEach(element => {
       
        if(abc.includes(element)) {
            return true;
        } 
    });
   
    
}


//  ​let set1 = new set(string);set1.length === 26?


var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
var string2 = "This is not a pangram.";
console.log(isPangram(string2));


// Valid Braces
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56


function isOpeningBrace(brace) {
    return brace === '[' || brace === '(' || brace === '{';
}

function validBraces(braces) {
    console.log(braces);
    // parenthesis stack
    const braceStack = [];

    // iterate over braces
    for (let i = 0; i < braces.length; i++) {
        const brace = braces[i];
        
        // if opening brace
        if(isOpeningBrace(brace)) {
            braceStack.push(brace);
            // check if valid
                // push into stack
         } else {
            const lastBrace = braceStack.pop();
            if(!lastBrace) return false;
            if(lastBrace === '(' && brace !== ')') {
                return false;
            }  
            if(lastBrace === '[' && brace !== ']') {
                return false;
            }  
            if(lastBrace === '{' && brace !== '}') {
                return false;
            }  
         }
    }
    return braceStack.length === 0;  
    // devuelve solo si el length es igual a 0
    // si fuese validBraces("(") 
}
 
 //
function validBraces(braces){
    var matches = { 
        '(': ')', 
        '{':'}',
        '[':']' 
    };

    var stack = [];
    var currentChar;
  
    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];
  
      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }
  
    return stack.length === 0; // any unclosed braces left?
  }
 

// Sum of consecutives
// https://www.codewars.com/kata/55eeddff3f64c954c2000059
// https://stackoverflow.com/questions/35022333/sum-of-consecutive-numbers-javascript
function sumConsecutives(s) {

    return s.reduce((acum, cur) => {
        if (acum.last === cur) {
            acum.array[acum.array.length - 1] += cur;
        } else {
            acum.array = acum.array.concat(cur);
            acum.last = cur;  // change value if not equal
            console.log(acum.array);
        }
        return acum;
    }, { array: [], last: null }).array   // last: temporary variable of last element 
}
  // use a temporary object for the accumulator (this way I can use a variable to save last value so I don't lost it  during the sum)

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]), [1, 12, 0, 4, 6, 1]);
console.log(sumConsecutives([1, 1, 7, 7, 3]), [2, 14, 3]);
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0], "on list [-5,-5,7,7,12,0] you get ");
console.log(sumConsecutives([3, 3, 3, 3, 1]), [12, 1], "on list [3,3,3,3,1] you get ");

// other solutions:
function sumConsecutives(s) {
    return s.reduce(function (prev, curr, i, arr) {
        if (curr != arr[i - 1]) prev.push(curr);  
        else prev[prev.length - 1] += curr;  // sum last element of accumulator to current element 
        return prev;
    }, []);
}


// Organise duplicate numbers in list 
// https://www.codewars.com/kata/5884b6550785f7c58f000047

//                      RE VEER !!!
function group(arr) {

    return arr.reduce((acum, cur) => {
        cur = String(cur);  // changed to String format in order to be able to use indexOf

        let indexPrevOccurrence = acum.indexOf(cur);

        if (indexPrevOccurrence != -1 && indexOfNestedItem(acum, cur) != -1) {  // search for previous occurrence of current number in array
            
         if(indexOfNestedItem(acum, cur) != -1) {
            acum[indexOfNestedItem(acum, cur)] = acum[indexOfNestedItem(acum, cur)].concat(',' + cur)  // NOT WORKING!!!! *****
         } else {
            acum[indexPrevOccurrence] = acum[indexPrevOccurrence].concat(',' + cur);
         }   
            
        } else {
            acum.push(String(cur));
        }
        return acum;

    }, []).map(el => {
        if (el.includes(',')) {
            return el.split(',').map(elem => Number(elem));
        } else {
            return el = [el].map(elem => Number(elem));
        }
    });

    function indexOfNestedItem(array, item) {
        let index;
    
        array.forEach(el => {
            if (el.includes(item)) {
                index = array.indexOf(el);
            }
        });
        return index;
    }
    
}

console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);

console.log(group([10,15,14,18,18,13,11,16,10,18])) 
console.log(group([13,12,11,19,13,16,12,15,19,12]))

// cuando esta al final el current repetido,  no funciona.

[13,12,11,12,12]

[['13'],['12,12'],['11']]   // falta: como ver si '12' esta incluido en array anidado y como encontrar el indice del array que lo incluye.


[['13'],['12','12'],['11']]


// FUNCTION that searches in nested array:
// indexOfNestedItem([['13'],['12','12'],['11']], ['11'])  ===>  returns 2
function indexOfNestedItem(array, item) {
    let index;

    array.forEach(el => {
        if (el[0].includes(item)) {
            index = array.indexOf(el);
        }
    });
    return index;
}


/* How to use  Object.entries ?

const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
*/

console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);

console.log(group([10,15,14,18,18,13,11,16,10,18])) 
console.log(group([13,12,11,19,13,16,12,15,19,12]))

// cuando esta al final el current repetido,  no funciona.
// esta misma idea se podria si convirtiese todos los elementos a STRING <<????
 


// [3] === [3]   da FALSE ! un objeto es distinto a otro aunque tenga los mismos datos.
// ver esta solucion
// https://stackoverflow.com/questions/39720959/get-index-of-parent-object-in-nested-object-array
 
// changing to String to be able to do a search:
var tw = [[3, 0], [11, 0], [3, 14], [11, 14]];

if (tw.filter(function (v) { return String(v) === String([3, 10]) })[0]) 
{
    // ...
}


// FIND MISSING LETTER
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    function isUpperCase(arr) {
        return arr[0] === arr[0].toUpperCase() ? true: false ; 
    }
    if(isUpperCase(array)) { // change alphabet to upperCase if it's the case
        alphabet = alphabet.map(el => el.toUpperCase());
    }
 
    let complete = alphabet.slice(alphabet.indexOf(array[0]),alphabet.indexOf(array[0])+ array.length+1)
    console.log(complete);  

    return complete.filter(el => {
        return !array.includes(el) ;
    }).join('');
     
}

// another solution
const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const start = alphabet.indexOf(array[0]);
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
  };


  // Twisted Sum
  // https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
 
function twistedSum(n) {
    // create array with numbers from 1 to n
    let arr = [];

    for (let i = 1; i <= n; i++) {
        if (i >= 10) {
            arr.push(splitToDigit(i).reduce((acu, cur) => acu + cur,0));
        } else {
            arr.push(i);
        }
  
        }
    
    function splitToDigit(n){
        return (n + '').split('').map((i) => { return Number(i); })
      }

      return arr.reduce((acu, cur) => acu + cur,0);
}

// Split number to its Digits
function splitToDigit(n){
    return (n + '').split('').map((i) => { return Number(i); })
  }
 
  // Other solutions:
  function twistedSum(n) {
    return [...Array(n + 1).keys()].reduce((a, b) => a + [...""+b].reduce((x, y) => x + +y, 0), 0);
  }
  // rest parameters:   https://scotch.io/bar-talk/javascripts-three-dots-spread-vs-rest-operators543 
 
  const twistedSum = n => [...Array(n + 1).keys()].reduce((s, x, i) => {
    return s + [...`${i}`].reduce((a, b) => a + Number(b), 0);
  }, 0);

  function twistedSum(n,sum=0) {
    for(let i = 1; i <= n; i++)
      sum += (i < 10)?i:i.toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))
    return sum
  }



function twistedSum(n) {
    return [...Array(n + 1).keys()]
}



// Calculate String Rotation
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014



rotate('fatigue','tiguefa')

second.indexOf(first[0]);  // steps moved forward

'fatigue','tiguefa'
7-2 : 5

0 -> 5      length: 7 
1 -> 6
2 -> 0 // it starts here!
3 -> 1
4 -> 2 
5 -> 3
6 -> 4

"eecoff", "coffee"    length: 6
6-2: 4

0 -> 4
1 -> 5
2 -> 0 // it starts here!
3 -> 1
4 -> 2
5 -> 3

"isn't", "'tisn"    length: 5

5-3: 2

3 -> 0 // it starts here!
/ -> 1
/ -> 2
/ -> 3
/ -> 4



function shiftedDiff(first, second) {
    if (first === second) {
        return 0;
    } else if (isValid(first, second)) {
        return first.length - first.indexOf(second[0]);
    } else {
        return -1;
    }

    function isValid(first, second) {
        let begin = second.slice(second.indexOf(first[0]));
        let end = second.slice(0, second.indexOf(first[0]));

        return (begin + end === first) ? true : false;
    }
}

// other solution
function shiftedDiff(first, second) {
    if (first.length != second.length) return -1
    return (second + second).indexOf(first)
  }

// other solution
var shiftedDiff = (a, b) => a.length == b.length ? (b + b).indexOf(a) : -1;


// Word a10n (abbreviation)
// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

// any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// use RegEx 

function abbreviate(string) {

    let filteredStr = string.replace(/\w+/g, function(match) {
        if (match.length>3) {   // word needs to be >= 4 to be changed 
            let middle = match.slice(1,match.length - 1).length + ''; // (force cohersion)
            return match[0] + middle + match[match.length-1];
        } else {
            return match;
        }
      
    });
 
    return filteredStr;   
}
console.log(abbreviate("internationalization"), "i18n");
console.log(abbreviate("accessibility"), "a11y");
console.log(abbreviate("Accessibility"), "A11y");
console.log(abbreviate("elephant-ride"), "e6t-r2e");

console.log(abbreviate("You need, need not want, to complete this code-wars mission"), "You n2d, n2d not w2t, to c6e t2s c2e-w2s m5n");

// Word a10n (abbreviation) :  other solution
var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
    return string.replace(find, replace);
}

// Word a10n (abbreviation) :  other solution
function abbreviate(string) {
    return string.replace(/\w{4,}/g, function (word) {
        return word[0] + (word.length - 2) + word.slice(-1);
    });
}

// Word a10n (abbreviation) :  other solution
function abbreviate(string) {
    return string.replace(/\B\w{2,}\B/g, match => match.length);
}
// https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285

// USE  regex101.com !!!


//    \b
//    one side is a word character and the other side is not a word character

//    \B
//    if we want to find a pattern fully surrounded by word characters
/\Bephan\B/.test('elephandt');   // TRUE
/\Bphandt\B/.test('elephandt'); // FALSE

// Common array elements
// https://www.codewars.com/kata/5a6225e5d8e145b540000127

function common(a,b,c){
    let bcopy = b.slice();
    let ccopy =  c.slice();

    a.reduce((acum, cur) => {
        if (b.includes(cur) && c.includes(cur)) {
            bcopy.slice(bcopy.indexOf(cur),1);
            ccopy.slice(ccopy.indexOf(cur),1);
            
            return acum + cur
        }
    },0)
   }



//   https://www.codewars.com/kata/525d50d2037b7acd6e000534
Array.prototype.square = function() {
     return this.map(el => el*el);
}

Array.prototype.square = function() {
    let out = [];

    for(let i=0; i<this.length; i++) {
        let element = this[i] ** 2;
        out.push(element);
    }
    return out;
}
 
Array.prototype.cube = function() {
    let out = [];

    for(let i=0; i<this.length; i++) {
        let element = this[i] ** 3;
        out.push(element);
    }
    return out;
} 

Array.prototype.average = function() {
    let out = 0;

    if(this.length === 0) return NaN;

    for(let i=0; i<this.length; i++) {
        out += this[i];
    }
    return out/this.length;
}
 
Array.prototype.sum = function() {
    return this.reduce((acum, el) => acum+el)
}
 
Array.prototype.even = function() {
    return this.filter(el => !(el%2));
} 

Array.prototype.odd = function() {
    return this.filter(el => el%2);
}
 

https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2

function solution(pairs){
  let keys = Object.keys(pairs);
  
  return keys.map(el => `${el} = ${pairs[el]}`).join(',');
}
solution({a: 1, b: '2'})

// other solution
const solution = pairs =>
    Object.entries(pairs)
        .map(([key, value]) => `${key} = ${value}`)
        .join(',');


/*

Validate Credit Card Number
https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

*/

function validate(n) {
    if (n > 0 && n.toString().length <= 16) {
      let arr = n.toString().split("").map(Number);
       // way to typecast to a numbered array 
   
      let i = arr.length;
      while (i >= 0) {
        i = i - 2;
        arr[i] = arr[i] * 2;
      }
      console.log(arr);
  
      let sum = arr
        .map((el) => (el > 9 ? el - 9 : el))
        .reduce((acum, el) => acum + el);
      return sum % 10 === 0 ? true : false;
    } else {
      return false;
    }
  }
  
  // other solutions
  function validate(n) {
    n = n.toString().split('').map(Number).reverse();
    return n.reduce(function (sum, digit, index) {
      if (index & 1) digit <<= 1;
      if (digit > 9) digit -= 9;
      return sum + digit;
    }, 0) % 10 == 0;
  }

  // Additional Functions to convert between binary and decimal notation:
  const b2d = x => parseInt(x,2)     // binary to decimal
  const d2b = x => x.toString(2)     // decimal to binary
  
  0b0001 << 2 // 4  JS converts back to decimal notation 
d2b(0b0001 << 2)    // '100'

 
  
  /* see BITWISE operators (&)
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
  https://medium.com/@parkerjmed/practical-bit-manipulation-in-javascript-bfd9ef6d6c30

conversions:
  (9).toString(2)  // "1001" 
    parseInt('1001', 2)  // 9

0b0001   // 1

  Left Shift Operation in JS Bitwise Operator: Left Shifting one position is equal to multiplying the number with 2. It means,

a << 1 = (9 * 2) = 18



https://www.tutorialgateway.org/javascript-bitwise-operators/
  - the left-most bit in a 32 bit integer represents whether a number is negative or positive, the rest of it is the number in binary

 LEFT SHIFT ASSIGNMENT
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment

*/


// Tic-Tac-Toe-like table Generator
// https://www.codewars.com/kata/tic-tac-toe-like-table-generator/train/javascript

function displayBoard(board, width){
    //your code here
  }


 console.log(displayBoard(["O", "X", "X", "O"],2)," O | X \n-------\n X | O ");
 console.log(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " "],3)," O | X |   \n-----------\n   | X |   \n-----------\n X | O |   ");
 console.log(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"],5)," O | X |   |   | X \n-------------------\n   | X | O |   | O ");
 console.log(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"],2)," O | X \n-------\n   |   \n-------\n X |   \n-------\n X | O \n-------\n   | O ");
 console.log(displayBoard(["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1"],6)," 1 | 2 | 3 | 4 | 5 | 1 \n-----------------------\n 2 | 3 | 4 | 5 | 1 | 2 \n-----------------------\n 3 | 4 | 5 | 1 | 2 | 3 \n-----------------------\n 4 | 5 | 1 | 2 | 3 | 4 \n-----------------------\n 5 | 1 | 2 | 3 | 4 | 5 \n-----------------------\n 1 | 2 | 3 | 4 | 5 | 1 ");


/*
                        UNCOMPLETE!

 https://www.codewars.com/collections/regex-katas


 https://www.codewars.com/kata/5631ac5139795b281d00007d

 Design a data structure that supports the following two operations:

    addWord (or add_word) which adds a word,
    search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter

You may assume that all given words contain only lowercase letters.

 */
var WordDictionary = function () {
    this.count = 0;
    this.items = {};
  };
  
  WordDictionary.prototype.addWord = function (word) {
    this.items[this.count] = word;
    this.count++;
  };
  
  WordDictionary.prototype.search = function (word) {
    for (const prop in this.items) {
      //literal
      console.log(this.items[prop]);
      const regex = new RegExp(`^${word}$`);
  
      if (regex.test(this.items[prop])) {
        return true;
      }
    }
    return false;
  };

  
/*//// LEARNING NOTES: ////////


The dot matches a single character, without caring what that character is. The only exception are line break characters. 


HOW TO PUT VARIABLE INSIDE A REGEX
  // https://stackoverflow.com/questions/4029109/javascript-regex-how-to-put-a-variable-inside-a-regular-expression
  
  The literal notation results in compilation of the regular expression when the expression is evaluated.
  
  Ex:
     let re = /ab+c/i; // literal notation
  
  Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression won't be recompiled on each iteration.
  
  The constructor of the regular expression object—for example, new RegExp('ab+c')—results in runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and obtain it from another source, such as user input.
  
  Ex: 
  
  let re = new RegExp('ab+c', 'i')
  
  Taken from   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  
  
  

*/
 // using arrays
class WordDictionary {
    constructor() {
      this.words = [];
    }
    addWord(word) {
      this.words.push(word);
    }
    search(pattern) {
      const re = new RegExp(`^${pattern}$`);
      return this.words.some(w => re.test(w));
    }
  }

   // using line breaks
  var WordDictionary = function () {
    this.str = '\n';
    return this;
  };
  WordDictionary.prototype.addWord = function (word) {
    this.str += word + '\n';
  };
  WordDictionary.prototype.search = function (word) {
    const pattern = new RegExp(`\n${word}\n`, "g");
    return (pattern).test(this.str);
  };


  class WordDictionary {
    constructor() {
      this.words = {};
    }
    addWord(word) {
      const size = word.length;
      if (!this.words.hasOwnProperty(size)) {
        this.words[size] = new Set();
      }
      this.words[size].add(word);
    }
    search(word) {
      const size = word.length;
      if (!this.words.hasOwnProperty(size)) {
        return false;
      }
      const pattern = new RegExp(`^${word.replace(/\./g, '\.')}$`);
      return [...this.words[size]]
        .some(x=>pattern.test(x));
    }
  }
  
/*
Password validator


    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.


*/

function password(str) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(str);
}

// other solutions:
function password(str) {
    return str.length >= 8 &&
           /[a-z]/.test(str) &&
           /[A-Z]/.test(str) &&
           /\d/.test(str);
}

function password(str) {
    return ['[A-Z]','[a-z]','\\d','.{8,}'].every(e => new RegExp(e).test(str));
}


// Simple Fun #135: Missing Alphabets
// https://www.codewars.com/kata/58a664bb586e986c940001d5

// NOT SOLVED YET!

class Set {
  constructor() {
    this.items = {};
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }
  values() {
    return Object.values(this.items);
  }
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.items).length;
  }
  clear() {
    this.items = {};
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const values = this.values();
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }

  addArray(string) {
    let array = string.split("");

    array.forEach((el) => {
      if (!this.has(el)) {
        this.items[el] = el;
        return true;
      }
      return false;
    });
  }
}

let dicto = new Set();
dicto.addArray("abcdefghijklmnopqrstuvwxyz");

// Numerical Palindrome #3.5
// https://www.codewars.com/kata/58e2708f9bd67fee17000080


const errorMessages = {
  notValid: 'Not valid',
  notFound:'No palindromes found',
};

function createMemoizedIsSubPalindrome() {
  const cache = {};
  return (number) => {  // number is the property in cache
    if (number in cache) return cache[number];  // returns a boolean
    const strNum = number.toString();
    const result = strNum.split('').reverse().join('') == strNum;  // compares number with reversed one
    cache[number] = result;  // saves boolean 
    return result;
  };
}
// isSubPalindrome(num) --> stores en cache

const isSubPalindrome = createMemoizedIsSubPalindrome();

function createMemoizedPalindrome() {
  const cache = {};  // resets ????
  return (num, palindromes = []) => {
    let result;
    if (num in cache) return cache[num]; //
    if (typeof num !== 'number') {
      result = errorMessages.notValid;
    } else if (num < 0) {
      result = errorMessages.notValid;
    } else if (num < 10) {
      result = errorMessages.notFound;
    }
    
    if (result) {
      cache[num] = result;
      return result;
    }

    if (isSubPalindrome(num)) {
      palindromes.push(num);
    }
  
    palindrome(+num.toString().slice(1), palindromes);
    palindrome(+num.toString().slice(0, -1), palindromes);
  
    if (!palindromes.length) {
      cache[num] = errorMessages.notFound;
      return errorMessages.notFound;
    }
    return [...new Set(palindromes.sort((a, b) => a - b))];
    // using Set to remove duplicates 
  };
}

const palindrome = createMemoizedPalindrome();
  

 // Other solution
 function palindrome(num) {
  if (!Number.isInteger(num) || num<0) return "Not valid";
  const isPalindrome = num => String(num) === [...String(num)].reverse().join('');
  const res = [];
 
  for (let i=0; i<=String(num).length; i++) {
    for (let j=i+2; j<=String(num).length; j++) {
      let p = parseInt((''+num).substring(i,j));
      if (p>9 && isPalindrome(p)) res.push(p);
    }
  }
  
  return res.length ? [...new Set(res)].sort((a,b) => a-b) : 'No palindromes found';
 }


 // Other solution
 function palindrome(num) {
  if (num<0||typeof num!='number') return 'Not valid'; else num+=''; 
  for (var r=[], i=0;i<num.length;i++)
     for (var j=i+2;j<1+num.length;j++) if ([...s=num.slice(i,j)].reverse().join('')==s) r.push(+s);
  if (!r[0]) return 'No palindromes found'; else r.sort((a,b)=>a-b);
  return r.filter((a,i)=>a!=0&&(a+'')[(a+'').length-1]!='0'&&r.indexOf(a)==i)
}

 // Other solution
function palindrome(num) { 

  if (num !== +num || num < 0)  // It is a unary "+" operator which yields a numeric expression. 
    return 'Not valid';

  let res = new Set()
  ,   str = `${num}`
  , match = null
  , shift = 0;

  let spread = (start, end) => {
    while (start >= 0 && end < str.length && str[start] === str[end]) {

      if (str[start] !== '0')
        res.add(str.slice(start, end + 1));
      
      start--;
      end++;
    }
  }

  let _str = str.slice();

  while (match = /(.)(\1+|.\1)/.exec(_str)) {
    spread(shift + match.index, shift + match.index + match[0].length - 1);
    _str = _str.slice(match.index + 1);
    shift += match.index + 1;
  }

  if (!res.size)
    return 'No palindromes found';

  return [...res].map(Number).sort((a, b) => a - b);

}

palindrome(22122)

////////////////
22122

///                                Casino chips
//             https://www.codewars.com/kata/5e0b72d2d772160011133654
const compare = (a, b) => b - a;

function solve(arr){
  // a place to store the number of days
    // initialized to zero
  let numDays = 0;

  arr.sort(compare);
  // while there are at least 2 stacks with at least 1 chip
  while(arr[0] > 0 && arr[1] > 0) {
    // increment number of days
    numDays++;
    // decrement the 2 highest stacks
    arr[0]--;
    arr[1]--;
    arr.sort(compare); //needed when reaching minimum numbers in the 2 first indexes
  }

  return numDays;
}

// Solution from code wars
function solve([a,b,c]) {
  return Math.min(a+b,a+c,b+c,Math.floor((a+b+c)/2));
}

// Array.diff 
// https://www.codewars.com/kata/523f5d21c841566fde000009


// (it's an implementation of the difference method from a Set data structure)
function arrayDiff(arr1, arr2) {
  const differenceSet = [];

  arr1.forEach((value) => {
    if (!arr2.includes(value)) {
      differenceSet.push(value);
    }
  });

  return differenceSet;
}
 
// Other solutions from codewars
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}