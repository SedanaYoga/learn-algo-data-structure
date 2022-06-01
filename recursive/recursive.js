// Identify the base case (when to stop)
// Identify the recursive case
// Get closer and closer and return when needed. Usually have 2 return

// Factorial case

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1)
}

// const factorial5 = findFactorialRecursive(5)
// console.log(factorial5)

// Fibonacci function
function fibbonacciRecursive(number) {
  if (number < 2) {
    return number
  }
  return fibbonacciRecursive(number - 1) + fibbonacciRecursive(number - 2)
}

console.log(fibbonacciRecursive(5))
