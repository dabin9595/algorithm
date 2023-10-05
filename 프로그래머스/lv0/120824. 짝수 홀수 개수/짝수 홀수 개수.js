const solution = (num_list) => {
    const num = [0,0]
    for(let i of num_list){
        i % 2 === 0 ? num[0]++ : num[1]++
    }
    return num
}



