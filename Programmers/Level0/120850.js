function solution(my_string) {
  const my_array = [];
  my_string.split('').forEach((e) => {
    if(isNaN(e) === true) return;
    my_array.push(Number(e));
  })
  return my_array.sort((a, b) => a - b);
}