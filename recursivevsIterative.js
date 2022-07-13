function factorialusingRecursion(n) {
  if (n == 0) return 1;

  return n * factorialusingRecursion(n - 1);
}

console.log(factorialusingRecursion(3));

function factorialusingIteration(n) {
  var res = 1,
    i;

  for (i = 2; i <= n; i++) res *= i;
  return res;
}
console.log(factorialusingIteration(4));
