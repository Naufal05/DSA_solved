// Linear Search

// Find the key element and return the index

function search(arr, n, x) {
  let i;
  for (i = 0; i < n; i++) if (arr[i] == x) return i;
  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;

let result = search(arr, n, x);
console.log(result);
