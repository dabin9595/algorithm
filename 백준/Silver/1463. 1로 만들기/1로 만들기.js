const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const N = parseInt(input, 10);
  const dp = Array(N + 1).fill(Infinity);
  
  dp[1] = 0;
  
  for (let i = 2; i <= N; i++) {
    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }
    dp[i] = Math.min(dp[i], dp[i - 1] + 1);
  }
  
  console.log(dp[N]);
  rl.close();
});
