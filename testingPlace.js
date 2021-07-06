function lazyChain(arg) {
  let finalValue = arg;

  let chain = {
    invoke,
    value,
  };

  function value() {
    return finalValue;
  }

  function invoke(funcName, ...args) {
    finalValue = finalValue[funcName](...args);
    return chain;
  }

  return chain;
}

console.log(
  lazyChain("hello").invoke("toUpperCase").invoke("split", "").value()
);
console.log(
  lazyChain([1, 2, 3])
    .invoke("map", (x) => x * x)
    .invoke("reverse")
    .value()
);
