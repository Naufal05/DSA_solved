// Search
// Function to implement search operation
// function findElement(arr, n, key) {
//   let i;
//   for (i = 0; i < n; i++) if (arr[i] == key) return i;

//   return -1;
// }

// // Driver program

// let arr = [12, 34, 10, 6, 40];
// let n = arr.length;

// // Using a last element as search element
// let key = 25;
// let position = findElement(arr, n, key);

// if (position == -1) console.log("Element not found");
// else console.log("Element Found at Position: " + (position + 1));

// Insert
// function insertSorted(arr1, n1, key, capacity) {
//   if (n1 >= capacity) return n1;
//   arr1[n1] = key;
//   return n1 + 1;
// }

// let arr1 = new Array(20);
// arr1[0] = 12;
// arr1[1] = 16;
// arr1[2] = 20;
// arr1[3] = 40;
// arr1[4] = 50;
// arr1[5] = 70;

// let capacity = 20;
// let n1 = 6;
// let i;
// let key = 26;

// console.log(arr1);
// n1 = insertSorted(arr1, n1, key, capacity);

// console.log(arr1);

// Delete
/** 1. Find element by linear search
 *  2. function to delete an element
 */

function findElement(arr, n, key) {
  let i;
  for (i = 0; i < n; i++) if (arr[i] == key) return i;

  return -1;
}

// Function to delete an element
function deleteElement(arr, n, key) {
  // Find position of element to be
  // deleted
  let pos = findElement(arr, n, key);

  if (pos == -1) {
    document.write("Element not found");
    return n;
  }
  // Deleting element
  let i;
  for (i = pos; i < n - 1; i++) arr[i] = arr[i + 1];

  return n - 1;
}

// Driver Code

let i;
let arr = [10, 50, 30, 40, 20];

let n = arr.length;
let key = 30;

console.log("Array before deletion<br>");
for (i = 0; i < n; i++) console.log(arr[i]);

n = deleteElement(arr, n, key);

console.log("<br><br>Array after deletion<br>");
for (i = 0; i < n; i++) console.log(arr[i]);
