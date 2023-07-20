const solution = (num_list) => {
 
    const even = [];
    const odd = [];
    
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 === 0){
            even.push(num_list[i])
        }
        else {
            odd.push(num_list[i])
        }
    }
    
    const evenSum = even.reduce((acc,cur) => acc+cur);
    const oddSum = odd.reduce((acc,cur) => acc+cur);
    
    if(evenSum <= oddSum) return oddSum
    if(evenSum >= oddSum) return evenSum
  
}

// for문 배열 돌면서 홀수 짝수 구분
// 홀수 값 합 짝수 값 합 구하기
// 그 값들을 비교 