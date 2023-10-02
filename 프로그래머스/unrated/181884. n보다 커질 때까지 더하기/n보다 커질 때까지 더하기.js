const solution = (numbers, n) => {
    return numbers.reduce((acc,cur) => acc > n ? acc : acc+cur,0)
}

//커지는 순간 이니까 reduce를 담으면 안된다.