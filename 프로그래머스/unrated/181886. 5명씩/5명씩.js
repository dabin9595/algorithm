const solution = (names) => {
  return  names.filter((_,cur) => cur % 5 === 0)
}

//names 문자열
//5명씩
//0index 리턴