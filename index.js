function findMinAndRemoveSorted(array) {
  let min = array[0]
  array.shift()
  return min
}

function merge(first, second) {
  let sortedArray = []
  
  while (first.length > 0 && second.length > 0) {
    if (first[0] < second[0]) {
      sortedArray.push(findMinAndRemoveSorted(first))
    } else {
      sortedArray.push(findMinAndRemoveSorted(second))
    }
  }
  return sortedArray.concat(first).concat(second)
}