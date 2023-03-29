function solution(my_string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return my_string.split('').filter(x => !vowels.includes(x)).join('');
}