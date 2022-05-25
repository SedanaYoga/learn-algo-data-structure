class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  // O(1)
  set(key, value) {
    // set address variable
    const address = this._hash(key)

    // check if data with the address is already set
    if (!this.data[address]) {
      // if not set, fulfill with an empty array
      // we set the element into an array just in case we have multiple data in one address
      // this called collision
      this.data[address] = []
    }

    // then push push the data[address] with new key value pair if either its been set or not
    this.data[address].push([key, value])
    return this.data
  }

  // O(1)
  get(key) {
    //set address with _hash method to get the same address as requested
    const address = this._hash(key)
    //set currentBucket with this.data[address]
    const currentBucket = this.data[address]
    // check if the bucket is already set or not
    if (currentBucket) {
      // loop within the data[address] (since might be multiple array, collision)
      for (let i = 0; i < currentBucket.length; i++) {
        // check if the key is equal to the key requested by user
        if (currentBucket[i][0] === key) {
          // return the value
          return currentBucket[i][1]
        }
      }
      // if the address does not match in data[address] return undefined
    }
    return undefined
  }

  // O(n^2)
  keys() {
    // Check if the data length is not empty
    if (!this.data.length) {
      return undefined
    }
    // set empty array to put the result elements
    const result = []
    // loop through all this.data
    for (let i = 0; i < this.data.length; i++) {
      // check if each data[i] is not empty
      if (this.data[i]) {
        // loop inside each data[i], to search key if the key is a collision data
        for (let j = 0; j < this.data[i].length; j++) {
          // push all the keys inside data[i] array to the result array
          result.push(this.data[i][j][0])
        }
      }
    }
    return result
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 4000)
myHashTable.set('orange', 2000)

console.log(myHashTable.keys())

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4]

// O(n^2)
const firstRecurringValue = (arr) => {
  const n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }
  return undefined
}

// O(n)
const firstRecurringValue2 = (arr) => {
  const hash = {}
  const n = arr.length
  for (let i = 0; i < n; i++) {
    if (hash[arr[i]]) return arr[i]
    else hash[arr[i]] = 1
  }
  return undefined
}

// console.log(firstRecurringValue2(array))
