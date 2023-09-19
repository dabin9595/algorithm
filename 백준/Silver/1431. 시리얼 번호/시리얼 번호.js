// 숫자들의 합을 구하는 함수
function sumOfDigits(s) {
  return Array.from(s).reduce((acc, curr) => {
    if (!isNaN(curr)) {
      return acc + Number(curr);
    }
    return acc;
  }, 0);
}

// 입력 받기 (Node.js 환경 가정)
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);
const serials = input.slice(1, N + 1);

// 조건에 따라 정렬
serials.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  const sumA = sumOfDigits(a);
  const sumB = sumOfDigits(b);

  if (sumA !== sumB) {
    return sumA - sumB;
  }

  return a.localeCompare(b);
});

// 출력
console.log(serials.join('\n'));
