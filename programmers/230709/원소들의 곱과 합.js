const solution = (num_list) => {
  let mul = num_list.reduce((acc, cur) => acc * cur);
  let sum = num_list.reduce((acc, cur) => acc + cur);
  let root = sum * sum;

  return mul < root ? 1 : 0;
};
