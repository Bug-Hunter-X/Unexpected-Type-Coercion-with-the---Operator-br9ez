function foo(a, b) {
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  return a + b;
}
console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 1)); // Output: 2