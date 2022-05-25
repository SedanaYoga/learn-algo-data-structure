const arr = [3, 4, 5, 7, 5, 4, 3]

function nonRepeating(arr) {
  let nonRepeating = 0
  const n = arr.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1)
    else map.set(arr[i], 1)
  }
  for (let x of map.keys()) {
    if (map.get(x) === 1) nonRepeating = x
  }
  console.log(nonRepeating)
}

nonRepeating(arr)
