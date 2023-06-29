n개 간격의 원소들

const solution = (num_list, n) => {
    return num_list.filter((_,i) => i % n === 0)
}