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

lazyChain("hello").invoke("toUpperCase").invoke("split", "");
