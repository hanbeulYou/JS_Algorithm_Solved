function solution(my_string, num1, num2) {
  const my_array = my_string.split('');
  const tmp = my_array[num1];
  my_array[num1] = my_array[num2];
  my_array[num2] = tmp;
  return my_array.join('');
}