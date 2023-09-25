function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
  return first + second + third;
}

//장군개미 공격 5
//병정개미 공격 3
//일개미   공격 1
//체력 23 여치 사냥
// 최소한의 병력을 구성해서 return

// hp % 개미 나머지의 값이 0이 되게 만들고
// 홀수 1,3,5 에 대한 나누기를 하고