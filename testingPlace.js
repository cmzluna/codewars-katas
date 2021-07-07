const errorMessages = {
  notValid: "Not valid",
  notFound: "No palindromes found",
};

function createMemoizedIsSubPalindrome() {
  const cache = {};
  return (number) => {
    // number is the property in cache
    if (number in cache) return cache[number]; // returns a boolean
    const strNum = number.toString();
    const result = strNum.split("").reverse().join("") == strNum; // compares number with reversed one
    cache[number] = result; // saves boolean
    return result;
  };
}
// isSubPalindrome(num) --> graba en cache

const isSubPalindrome = createMemoizedIsSubPalindrome();

function createMemoizedPalindrome() {
  const cache = {}; // resets ????
  return (num, palindromes = []) => {
    let result;
    if (num in cache) return cache[num]; //
    if (typeof num !== "number") {
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
  };
}

const palindrome = createMemoizedPalindrome();
