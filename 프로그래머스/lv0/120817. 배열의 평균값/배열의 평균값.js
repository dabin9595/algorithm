function solution(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i]
    }
    let anw = sum / numbers.length;
    return anw;
}