// Array organizes items sequentially
// if you want to store some data and iterate over it
// one by one, array is a good choice
const strings = ['a', 'b', 'c', 'd']
strings.push('e') // O(n)
strings.pop() // O(n)
strings.pop() // O(n)

// unshift O(n) since we iterate all items
// to reassign the indexes
// from ['a', 'b', 'c', 'd']
//        0    1    2    3
// to ['x', 'a', 'b', 'c', 'd']
//      0    1    2    3    4
strings.unshift('x')

// Creating our Array from scratch
class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  deleteAtIndex(index) {
    const item = this.data[index]
    this.shiftItems(index)
    return item
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

// const myArray = new MyArray()
// myArray.push('halo')
// myArray.push('dewa')
// myArray.deleteAtIndex(0)
// myArray.push('ayu')

// console.log(myArray)

// Function for reversing strings
function reverse(str) {
  if (!str || str.length < 2) return str
  // const splittedStr = str.split('')
  const backwards = []
  const length = str.length - 1
  for (let i = length; i >= 0; i--) {
    backwards.push(str[i])
  }
  return backwards.join('')
}

// console.log(reverse('Hi My Name is Sedana Yoga'))

// Function for merging and sorting two arrays
// 1
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort()
}
// 2
function mergeSortedArrays2(arr1, arr2) {
  const merged = []
  let array1Item = arr1[0]
  let array2Item = arr2[0]
  let i = 1
  let j = 1

  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      merged.push(array1Item)
      array1Item = arr1[i]
      i++
    } else {
      merged.push(array2Item)
      array2Item = arr2[j]
      j++
    }
  }

  return merged
}

console.log(mergeSortedArrays2([5, 3, 2, 1], [8, 7, 6]))
