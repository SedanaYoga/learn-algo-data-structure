const arr = ['nemo']
const large = new Array(100).fill('nemo')

// Linear Time => O(n)
// Linear between element inputs and operations
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('FOUND NEMO!')
    }
  }
}

// Constant Time => O(1)
// have constant time if we input any length of elements
function logFirstEl(array) {
  console.log(array[0])
  console.log(array[1])
}

// Exercise 1
// Given a function
function funChallenge(input) {
  let a = 10 // O(1)
  a = 50 + 3 // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction() // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }
  return a // O(1)
}

// Result: 1 + 1 + 1 + n + n + n + n = 3 + 4n or O(3+4n)
// This can be simplified by O(n) eventually

// Exercise 2
// Given a function
function anotherFunChallenge(input) {
  let a = 5 // O(1)
  let b = 10 // O(1)
  let c = 50 // O(1)
  // O(n)
  for (let i = 0; i < input; i++) {
    let x = i + 1 // O(n)
    let y = i + 2 // O(n)
    let z = i + 3 // O(n)
  }
  // O(n)
  for (let j = 0; j < input; j++) {
    let p = j * 2 // O(n)
    let q = j * 2 // O(n)
  }
  let whoAmI = "I don't know" // O(1)
}

// Result: 1 + 1 + 1 + 1 + n + n + n + n + n + n + n = 4 + 7n or O(4+7n)
// This can be simplified by O(n) eventually

// Rule Book
// Rule 1: Worst Case
// Rule 2: Remove Constant: we don't care about how steep the line is, but how the line moves
// Rule 3: Different Terms for inputs

function someFunc(boxes1, boxes2) {
  boxes1.forEach((box) => console.log(box))
  boxes2.forEach((box) => console.log(box))
} // the O notation is O(a + b)
// If Nested loops
function someFunc2(box) {
  box.forEach((box1) => {
    box.forEach((box2) => console.log(box1, box2))
  })
} // the O notation is O(n^2)
// Every steps that in the same indentation is a plus
// Every steps that in nested indentation is a multiple

// Rule 4: Drop Non Dominants
function someFunc2(box) {
  box.forEach((b) => console.log(b))

  box.forEach((box1) => {
    box.forEach((box2) => console.log(box1 + box2))
  })
} // the O notation is O(n^2 + n)
// but, since we only care about the dominant as the elements scales up
// the O notation is O(n^2) only

// Data Structures + Algorithms = Programs
// Engineer have to know the right combination of those to make a good programs

// Good program have these parameters: readability and scalability
// We learn Big O to learn about scalability part of good programs

// Scalable means two things: Speed and Memory

// The best code includes these things: Readability, Memory, and Speed
// Speed => talking about Time Complexity
// Memory => talking about Space Complexity

// Space Complexity, what cause it?
// Variables
// Data Structures
// Function Call
// Allocations

// Clarification
// Thinking out loud
// Talk before you  write
// Test your solution

// Find Pairs that add up to a sum value

// Naive Solution
function hasPairWithSum(arr, sum) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) {
        return true
      }
    }
  }
  return false
}

// Better Solution
function hasPairWithSum(arr, sum) {
  const mySet = new Set()
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true
    }
    mySet.add(sum - arr[i])
  }
  return false
}
