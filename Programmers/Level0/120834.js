function solution(age) {
  const trans = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let answer = '';
  age.toString().split('').forEach((e) => {
    answer += trans[Number(e)];
  })
  return answer;
}