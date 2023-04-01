function solution(dots) {
  function slope(i, j) {
    return (dots[i][1]-dots[j][1])/(dots[i][0]-dots[j][0]);
  }
  if(slope(0, 1) === slope(2, 3)) return 1;
  if(slope(0, 2) === slope(1, 3)) return 1;
  if(slope(0, 3) === slope(1, 2)) return 1;
  return 0;
}