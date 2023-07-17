const solution = (myString, pat) => {
 const lower = pat.toLowerCase();
    return myString.toLowerCase().includes(lower) ? 1 : 0
}