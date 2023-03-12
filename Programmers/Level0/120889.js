function solution(sides) {
  const [a, b, c] = sides.sort();
  if(c >= a + b) return 2;
  return 1;
}