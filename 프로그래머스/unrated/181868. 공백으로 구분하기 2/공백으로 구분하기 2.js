const solution = (my_string) => {
 return my_string.split(" ").filter((cur) => cur)
}

// "" 아무것도 없는 요소일 때 사용
// 빈문자열은 false로 취급 
// "" >>>> filter에서 공백문자열을 현재 요소를 가져오면 false니까 제외 시키는 것