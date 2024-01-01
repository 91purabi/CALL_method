function multiply(a, b) {
    return a * b;
  }
  
  function curryMultiply(a) {
    return multiply.bind(null, a);
  }
  
  // Example usage
  const curryWithTwo = curryMultiply(2);
  const result = curryWithTwo(5);
  
  console.log("The result is:", result); // The result is: 10
  