function insertionSort(arr) {
  //go through arr and place elements in between where they should be
  /**
   * [2,5,3,9]
   *
   * first time through the loop the to be finished the array will look like this [2]
   *
   * second time will look like this [2,5]
   *
   * third time it will select three and compare to 5, and then compare to two, therefore placing itself in between them like so [2,3,5]
   */

  if (arr.length === 0) {
    return arr;
  }

  let tobeSorted = [];
  tobeSorted.push(arr[0]);

  if (arr[1] > arr[0]) {
    tobeSorted.push(arr[1]);
  } else {
    tobeSorted.unshift(arr[1]);
  }

  for (let i = 2; i < arr.length; i++) {
    tobeSorted.push(arr[i]);
    if (arr[i] < tobeSorted[i - 1]) {
      for (let j = tobeSorted.length - 1; j >= 0; j--) {
        if (tobeSorted[j] < tobeSorted[j - 1]) {
          let temp = tobeSorted[j];
          tobeSorted[j] = tobeSorted[j - 1];
          tobeSorted[j - 1] = temp;
        }
      }
    }
  }
  return tobeSorted;
}

module.exports = insertionSort;
