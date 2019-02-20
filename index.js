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

function mergeSort(array) {
  let midpoint = array.length/2
  let first = array.slice(0, midpoint)
  let second = array.slice(midpoint, array.length)
  
  if (array.length > 1) {
    return merge(mergeSort(first), mergeSort(second))
  } else {
    return array
  }
}