let numbers = [24, 35, 11, 35, 72, 44, 2]

const bubbleSort = (array) => {
  const length = array.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      // Swap numbers
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
}

bubbleSort(numbers)

console.log(numbers)
