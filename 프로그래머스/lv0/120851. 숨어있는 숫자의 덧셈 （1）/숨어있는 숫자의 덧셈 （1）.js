const solution = (my_string) => {
    return my_string.split("").reduce((acc,cur) => ~~acc+~~cur)
}