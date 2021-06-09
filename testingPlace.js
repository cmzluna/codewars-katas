/*
//  arr =  [1, 2*, 3, 4*, 5]
arr.length = 5
arr[3]
arr[1]

indexes
5-2
3-2

// double 
let arr = [1, 2, 3, 4];
let i = arr.length;
while (i >= 0) {
    i = i - 2;
    arr[i] = arr[i] * 2 ;
} 
console.log(arr);

arr.length - 2
(arr.length - 2) - 2



arr[3]
arr[1]
arr[i]
// [1*, 2, 3*, 4]



5 length - 1 
4 length - 2
3 length - 3
2 length - 4
1 length - 5

while i >= 0
    arr[i] - (length - )
*/
function validate(n) {
  if (n > 0 && n.toString().length <= 16) {
    let arr = n.toString().split("").map(Number);

    // var arrayOfNumbers = arrayOfStrings.map(Number);

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

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(1), false);
console.log(validate(1230), true);
