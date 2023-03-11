function solution(array, n) {
  return array.reduce((cnt, cur) => {
    const toCnt = cur === n ? 1 : 0;
    return cnt + toCnt;
  }, 0);
}