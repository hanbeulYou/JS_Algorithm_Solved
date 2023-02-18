function solution(n) {
  const digit = [];
  while(n > 0) {
    if(n % 3 === 0) {
      digit.push(4);
      n = Math.floor(n / 3) - 1;
      continue;
    }
    digit.push(n % 3);
    n = Math.floor(n/ 3);
  }
  return digit.reverse().join('');
}