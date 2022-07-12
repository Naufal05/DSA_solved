// // search

// // function to implement search operation
// function findElement(arr, n, keys) {
//   let i;
//   for (i - 0; i < n; i++) {
//     if (arr[i] == keys) return i;
//   }
//   return -i;
// }

// let arr = [12, 34, 10, 6, 40];
// let n = arr.length;

// let keys = 40;
// let position = findElement(arr, n, keys);

// if (position == -1) {
//   console.log("Element not found");
// } else {
//   console.log("Element found at position:" + (position + 1));
// }

// Javascript program to implement linear
// search in unsorted array

// Function to implement search operation
function findElement(arr, n, key) {
  let i;
  for (i = 0; i < n; i++) if (arr[i] == key) return i;

  return -1;
}

// Driver program

let arr = [12, 34, 10, 6, 40];
let n = arr.length;

// Using a last element as search element
let key = 25;
let position = findElement(arr, n, key);

if (position == -1) console.log("Element not found");
else console.log("Element Found at Position: " + (position + 1));

//
