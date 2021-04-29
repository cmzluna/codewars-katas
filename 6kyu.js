
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
