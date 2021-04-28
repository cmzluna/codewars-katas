
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

function group(arr) {
 
     return arr.reduce((acum, cur) => {

        if(acum.indexOf(cur) !== -1) {
            // push current in acum.indexOf([2]) 
            acum[acum.indexOf(cur)] = String(cur);   // indexOf no funciona con objetos  
        } else {
            acum.push(cur);
        }
        return acum;

     }, []);
}
// esta misma idea se podria si convirtiese todos los elementos a STRING <<????

str2.concat(', ', str1))


// [3] === [3]   da FALSE ! un objeto es distinto a otro aunque tenga los mismos datos.
// ver esta solucion
// https://stackoverflow.com/questions/39720959/get-index-of-parent-object-in-nested-object-array

[3, 2, 6, 2, 1, 3]

function group(arr) {



}


var tw = [[3, 0], [11, 0], [3, 14], [11, 14]];

if (tw.filter(function (v) { return String(v) === String([3, 10]) })[0]) 
{
    // ...
}








console.log(group([3, 2, 6, 2, 1, 3]));
console.log(group([3, 2, 6, 2]));

 

    let item_list = [1, 2, 3, 4, 5, 5, 5, 7, 8, 2, 3, 4, 4, 4, 4, 4];

let duplicate = item_list.reduce((acc, currentValue, index, array) => {
    if (array.indexOf(currentValue) != index && !acc.includes(currentValue)) {
        acc.push(currentValue);
    }
    return acc;
}, []);

console.log('Duplicate items are ' + duplicate.join(','));

function group(arr) {

    arr.reduce(function (accumulator, currentValue) {
        if (accumulator.indexOf(currentValue) === -1) {
            accumulator.push(currentValue)
        } else {
            // are duplicates

        }
    }
    
        ,[]);
}


[[3, 3], [2, 2], [6], [1]]


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
