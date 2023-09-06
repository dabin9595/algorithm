const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = parseInt(input[0]); // 테스트 케이스 개수
let dp = Array(11).fill(0);

// DP 초기값 설정
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

// DP 배열 채우기
for(let i = 4; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

// 결과 출력
for(let t = 1; t <= T; t++) {
    let n = parseInt(input[t]); // 각 테스트 케이스에 대한 입력
    console.log(dp[n]);
}
