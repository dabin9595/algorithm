const solution = my_string => [...my_string].filter(a => !Number.isNaN(+a)).map(a => +a).sort((a,b) => a-b)