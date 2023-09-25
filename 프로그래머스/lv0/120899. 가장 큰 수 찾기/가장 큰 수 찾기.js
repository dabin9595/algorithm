function solution(array) {
    // 가장 큰 수 찾기
    let maxValue = Math.max(...array);
    
    // 큰 수의 인덱스를 찾기
    let maxIndex = array.indexOf(maxValue);
    
    // 결과 반환
    return [maxValue, maxIndex];
}