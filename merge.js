function merge(arr, arr2) {
  let i = 0;
  let j = 0;

  const results = [];

  while (i < arr.length && j < arr2.length) {
    if (arr[i] < arr2[j]) {
      results.push(arr[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr.length) {
    results.push(arr[i]);
    i++;
  }
  while (j < arr.length) {
    results.push(arr[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

module.exports = { merge, mergeSort };
