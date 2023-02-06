function solution(n) {
  let num1 = 1;
  let num2 = 2;
  if(n < 3) return n;
  n-=2;
  while(n) {
    n -= 1;
    const newNum = (num1 + num2) % 1000000007;
    num1 = num2;
    num2 = newNum;
  }
  return num2;
}