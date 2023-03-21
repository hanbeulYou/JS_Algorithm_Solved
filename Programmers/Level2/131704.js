function solution(order) {
  const mainContainer = [];
  const subContainer = [];
  let idx = 0;
  let orderIdx = 0;
  let answer = 0;

  for(let i=1; i<=order.length; i++) mainContainer.push(i);
  while(orderIdx < order.length) {
    if(order[orderIdx] === mainContainer[idx]) {
      answer += 1;
      orderIdx += 1;
      idx += 1;
      continue;
    }
    if(subContainer.length > 0 && order[orderIdx] === subContainer[subContainer.length-1]) {
      answer += 1;
      orderIdx += 1;
      subContainer.pop();
      continue;
    }
    if(idx === mainContainer) break;
    subContainer.push(mainContainer[idx]);
    idx += 1;
  }

  return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
// console.log(solution([5, 4, 3, 2, 1]));