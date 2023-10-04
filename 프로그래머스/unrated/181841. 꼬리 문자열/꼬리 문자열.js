const solution = (str_list, ex) => {
    //특정한 ex 제외 나머지 리턴
    
    return str_list.reduce((acc,cur) => acc + (cur.includes(ex) ? "" : cur),"")
    
}