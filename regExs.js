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
