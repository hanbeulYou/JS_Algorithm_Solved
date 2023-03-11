function solution(p) {
  let startIdx = 0;
  while(startIdx < p.length) {
    const pStack = [];
    let openCnt = 0;
    let closeCnt = 0;
    for(let i=startIdx; i<p.length; i++) {
      if(p[i] === '(') {
        openCnt += 1;
        pStack.push('(');
        continue;
      }
      closeCnt += 1;
      if(pStack.length > 0 && pStack[pStack.length-1] === '(') {
        pStack.pop();
      } else {
        pStack.push(')');
      }
      if(openCnt === closeCnt) {
        if(pStack.length === 0) {
          startIdx = i+1;
          break;
        } 
      }
    }
  }
  var answer = '';
  return answer;
}