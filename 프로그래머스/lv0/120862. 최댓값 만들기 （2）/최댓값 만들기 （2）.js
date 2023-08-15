const solution = (numbers) => {
    let max = -Infinity // 왜냐면 가장 큰 수가 들어와야 하니까
        numbers.sort((a,b) => {
            if(a * b > max){
                max = a*b; 
            }
            return a-b;
        })
        
     return max;
}

// 정렬  numbers.sort((a,b) => a - b);  배열 numbers를 이용하기 위해 쓰는 메서드 
        // 곱하기 a * b;
        // 최댓값 a[i] * b[i] > a[i] * b[i]  ;
    
        
// let num = numbers.sort((a,b) => b - a) 이미 numbers 가 정렬이 되어있으므로 변수에 넣을 필요없다.
// 넣어도 되긴 하는데 굳이 넣을 필요는 없다는 것 정렬을 위한거지 메모리 공간을 낭비할 필요가 없는 듯.
// numbers.sort((a,b) => b - a) // 음수나 0 일 경우 자리 이동을 안 한다.
 // 4 - -3 = 7
