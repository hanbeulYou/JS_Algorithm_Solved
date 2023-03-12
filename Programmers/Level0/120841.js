function isPositive(num) {
  if(num > 0) return 0;
  return 1;
}

function solution(dot) {
  return [[1, 4], [2, 3]][isPositive(dot[0])][isPositive(dot[1])]
}