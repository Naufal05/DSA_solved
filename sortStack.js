// Sorting a Stack

function sortStack(input) {
  let tempstack = [];
  while (input.length > 0) {
    let tmp = input.pop();
    while (tempstack.length > 0 && tempstack[tempstack.length - 1] > tmp) {
      input.push(tempstack[tempstack.length - 1]);
      tempstack.pop();
    }
    tempstack.push(tmp);
  }
  return tempstack;
}

let input = [];
input.push(34);
input.push(3);
input.push(31);
input.push(98);
input.push(92);
input.push(23);

let tempstack = sortStack(input);
console.log("Sorted number are :" + "</br>");

while (tempstack.length > 0) {
  console.log(tempstack[tempstack.length - 1] + " ");
  tempstack.pop();
}

// test
// let input = [34, 3, 31, 98, 92, 23];
// console.log(input[input.length - 1]);
