function fibs(length){
    const fibArray = []

    for(let i = 0; i < length;i++){
        if(i === 0 || i === 1){
            fibArray.push(i)
        }
        else{
            fibArray.push(fibArray[i - 1] + fibArray[i - 2])
        }
    }
    return fibArray
}

console.log(fibs(8))



function fibsRec(length, fibArray = [0, 1]){
    if(length <= fibArray.length) return fibArray.slice(0, length)
    fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
    return fibsRec(length, fibArray)
}
console.log(fibsRec(8))


function mergeSort(arr) {
  if (arr.length <= 1) return arr // Base case: an array of 0 or 1 element is already sorted.

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  // Recursively sort both halves and merge them
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  // Merge the two sorted halves
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++ // Move to the next element in the left array
    } else {
      result.push(right[rightIndex])
      rightIndex++ // Move to the next element in the right array
    }
  }

  // Concatenate remaining elements (one of the arrays may still have elements)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort([99, 2, 3, 4, 1, 2, 17, 5]))