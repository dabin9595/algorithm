const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);
let result = 0;

for (let M = 1; M < N; M++) {
  const sum = M + String(M).split("").reduce((acc, curr) => acc + parseInt(curr), 0);
  if (sum === N) {
    result = M;
    break;
  }
}

console.log(result);
