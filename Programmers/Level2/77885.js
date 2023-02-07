function solution(numbers) {
  const answer = [];
  numbers.forEach((num) => {
    const bin = num.toString(2).split('');
    for(let i=bin.length-1; i>=0; i--) {
      if(bin[i] === '0') {
        bin[i] = '1';
        if(i !== bin.length-1) {
          bin[i+1] = 0;
        }
        const item = parseInt(bin.join(''), 2);
        answer.push(item);
        return;
      }
    }
    bin[0] = '0';
    const item = parseInt('1'+bin.join(''), 2);
    answer.push(item);
  })
  return answer;
}

console.log(solution([2, 4, 6, 5, 3]))