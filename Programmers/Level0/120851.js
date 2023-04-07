function solution(my_string) {
  let answer = 0;
  my_string.split('').forEach((e) => {
    if(isNaN(e)) return;
    answer += Number(e);
  })
  return answer;
}