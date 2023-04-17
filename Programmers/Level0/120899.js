function solution(array) {
  const myMax = Math.max(...array);
  return [myMax, array.indexOf(myMax)];
}