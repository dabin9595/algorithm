function solution(num_list, n) {
  // n이 0 이하거나 리스트의 길이보다 크면, 리스트 그대로 반환
  if (n <= 0 || n >= num_list.length) return num_list;

  // 리스트를 n번째 원소를 기준으로 나누기
  const firstPart = num_list.slice(0, n);
  const secondPart = num_list.slice(n);

  // n번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙이기
  const result = secondPart.concat(firstPart);

  return result;
}
