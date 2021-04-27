
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
    }, { array: [], last: null }).array   
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
        else prev[prev.length - 1] += curr;
        return prev;
    }, []);
}
