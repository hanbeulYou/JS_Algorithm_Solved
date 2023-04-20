function solution(a, b) {
  const result1 = Number(a.toString() + b.toString());
  const result2 = 2 * a * b;
  return result1 >= result2 ? result1 : result2;
}