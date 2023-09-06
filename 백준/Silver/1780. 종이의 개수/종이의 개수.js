let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let paper = input.slice(1).map(row => row.split(' ').map(Number));

let result = {
  '-1': 0,
  '0': 0,
  '1': 0
};

function checkPaper(x, y, n) {
  const initial = paper[x][y];
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (paper[i][j] !== initial) return false;
    }
  }
  return true;
}

function divideAndConquer(x, y, n) {
  if (checkPaper(x, y, n)) {
    result[paper[x][y]]++;
    return;
  }
  
  const step = Math.floor(n / 3);
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      divideAndConquer(x + step * i, y + step * j, step);
    }
  }
}

divideAndConquer(0, 0, N);

console.log(result['-1']);
console.log(result['0']);
console.log(result['1']);
