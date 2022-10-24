function solution(absolutes, signs) {
  let answer = 0;
  for(let i=0; i<signs.length; i++) {
    const num = signs[i] ? absolutes[i] : absolutes[i]*(-1)
    answer += num;
  }
  return answer;
}

console.log(solution([4,7,12], [true,false,true]));