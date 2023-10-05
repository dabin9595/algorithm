const solution = (n) => {
    let arr = 0;
    for(let i=0 ; i<=n ; i++){
        if(n % i === 0){
            arr++
        }
    }
    return arr
}