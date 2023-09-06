const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const len = input.length;

let dp = Array(len + 1).fill(0);
dp[0] = 1;

for (let i = 1; i <= len; i++) {
  for (let j = 1; j <= 2; j++) {
    if (i - j < 0) continue;

    const num = parseInt(input.substring(i - j, i));

    if (j === 1 && num >= 1 && num <= 9) {
      dp[i] += dp[i - j];
    }
    if (j === 2 && num >= 10 && num <= 34) {
      dp[i] += dp[i - j];
    }
  }
}

console.log(dp[len]);