// Two fighters, one winner.
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/javascript

class Fighter {
    constructor(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
    }

    attack(fighter) {
        fighter.takeDamage(this.damagePerAttack);
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    isAlive() {
        return this.health > 0;
    }
} 

function declareWinner(fighter1, fighter2, firstAttackerName) {
    let currentAttacker;
    if(fighter1.name === firstAttackerName) {
        currentAttacker = fighter1;
        currentDefender = fighter2;
    } else {
        currentAttacker = fighter2;
        currentDefender = fighter1;
    }

    while(fighter1.health > 0 && fighter2.health > 0) {
        currentDefender.attack(currentDefender);
        [currentDefender, currentAttacker] = [currentAttacker, currentDefender]; // swap variables ES6
    }  

    if(fighter1.isAlive()) return fighter1.name;
    return fighter2.name; 
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
//console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
//console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
//console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")


// String ends with?
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending) {
    if (ending==='') {
        return true;
    }
    return str.slice(-1*ending.length) === ending;
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))

// Letterbox Paint-Squad
// https://www.codewars.com/kata/597d75744f4190857a00008d/train/javascript
group of 10 painters 

var paintLetterboxes = function(start, end) {
    // Your code here
    if( 0 < start <= end) {

        let arr = [];
        for (let i = start + 1; i <= end; i++) {
            arr.concat(start.toString().split('').concat(i.toString().split('')));
        }
        return arr;
         
    }  
  }


  [10, 11]

  /*

  Sort array by string length

https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

Return an array containing the same strings, ordered from shortest to longest
  */

function sortByLength (array) {
   return  array
            .map(el => [el.length, el])
            .sort(function(a,b) {
                return a[0]-b[0];
            }).map(el => el[1]);
};

sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])

// other solutions
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};


//https://www.codewars.com/kata/v-a-p-o-r-c-o-d-e/train/javascript
function vaporcode(string) {
  return string.toUpperCase().split(' ').map(el => el.split('').join('  ')).join('  ')
}

function vaporcode(string) {
    return string.toUpperCase().split('').filter(el => el != ' ').join('  ')
}

// other solutions
function vaporcode(string) {
    return string.toUpperCase().replace(/ /g,'').split('').join('  ')
  }

//
function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
  }

  // https://www.codewars.com/kata/sort-the-gift-code/train/javascript
  // Sort the Gift Code
  function sortGiftCode(code){
    return code.
            split('')
            .sort()
            .join('');
  }

  // other solutions
  function sortGiftCode(code){
    return [...code].sort().join``
  }
  