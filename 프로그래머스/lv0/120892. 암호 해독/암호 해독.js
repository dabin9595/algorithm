function solution(cipher, code) {
    let output = ""
    for(let i=0; i < cipher.length; i++){
        if((i+1) % code === 0){
            output += cipher[i] ;
        }
    }
    return output;
}