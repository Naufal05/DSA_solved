// Sorted Array

// Search
// using binary search  -

// function binarySearch(arr, low, high, key) {
//   if (high < low) return -1;

//   let mid = Math.trunc((low + high) / 2);
//   if (key == arr[mid]) return mid;
//   if (key > arr[mid]) return binarySearch(arr, mid + 1, high, key);
//   return binarySearch(arr, mid - 1, high, key);
// }

// let arr = [5, 6, 7, 8, 9, 10];
// let n, key;

// n = arr.length;
// key = 10;

// console.log(binarySearch(arr, 0, n - 1, key));

/**Insert  */

function insertSorted(arr, n, key, capacity) {
  // Cannot insert more elements if n is already
  // more than or equal to capacity
  if (n >= capacity) return n;

  var i;
  for (i = n - 1; i >= 0 && arr[i] > key; i--) arr[i + 1] = arr[i];

  arr[i + 1] = key;

  return n + 1;
}

/* Driver program to test above function */
var arr = new Array(20);
arr[0] = 12;
arr[1] = 16;
arr[2] = 20;
arr[3] = 40;
arr[4] = 50;
arr[5] = 70;
var capacity = arr.length;
var n = 6;
var key = 26;

console.log("\nBefore Insertion: ");
for (var i = 0; i < n; i++) console.log(arr[i] + " ");

// Inserting key
n = insertSorted(arr, n, key, capacity);

console.log("<br>" + "\nAfter Insertion: ");
for (var i = 0; i < n; i++) console.log(arr[i] + " ");
