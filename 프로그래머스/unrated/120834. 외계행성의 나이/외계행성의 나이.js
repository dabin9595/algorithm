function solution(age) {
    const alpha = ['a','b','c','d','e','f','g','h','i','j']
    return String(age).split("").map(a => alpha[+a]).join("")
}