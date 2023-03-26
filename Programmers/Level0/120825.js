function solution(my_string, n) {
  let answer = "";
  my_string.split('').forEach((my_char) => {
    for(let i=0; i<n; i++) answer += my_char;
  })
  return answer;
}