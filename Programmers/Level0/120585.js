function solution(array, height) {
  return array.reduce((answer, cur) => {
    const cnt = cur > height ? 1 : 0;
    return answer + cnt;
  }, 0);
}