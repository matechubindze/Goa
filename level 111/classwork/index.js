const numbers = [12, 77, 0, 5, 111];
const map = numbers.map(n => (n % 2 === 0 ? n + 10 : n - 10));
function sumFive(a, b, c, d, e) {
  console.log(a + b + c + d + e);
}
sumFive(...map);

function maxOf(...nums) {
  if (nums.length === 0) return undefined;
  return Math.max(...nums);
}

console.log(maxOf(...map));