const solution = (arr1, arr2) => {
    const a = arr1.reduce((acc,cur) => acc+cur,0)
    const b = arr2.reduce((acc,cur) => acc+cur,0)
    
    if(arr1.length === arr2.length){    
     return a === b  ? 0 : a > b ? 1 : -1
    }else if(arr1.length > arr2.length){
        return 1
    }else return -1
}