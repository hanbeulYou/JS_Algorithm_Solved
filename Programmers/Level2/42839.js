const visited = new Array();
const subNums = new Set();

function initVisited(len) {
  for(let i=0; i<len; i++) {
    visited.push(false);
  }
}

function isPrime(number) {
  if(number === 1) return 0;
  let cnt = 0;
  for(let i=1; i<=Math.sqrt(number); i++) {
    if(number % i === 0) {
      cnt += 1;
    }
  }
  if(cnt === 1) return 1;
  return 0;
}

function getNumber(now, picked, numbers, digit) {
  visited[now] = true;
  picked.push(numbers[now]);
  if(picked.length === digit) {
    subNums.add(parseInt(picked.join('')));
    picked.pop();
    visited[now] = false;
    return;
  }
  for(let i=0; i<numbers.length; i++) {
    if(visited[i] === false) {
      getNumber(i, picked, numbers, digit);
    }
  }
  picked.pop();
  visited[now] = false;
}

function countPrime() {
  let cnt = 0;
  for(const subNum of subNums) {
    cnt += isPrime(subNum);
  }
  return cnt;
}

function solution(numbers) {
  initVisited(numbers.split('').length);
  for(let digit=1; digit<=numbers.length; digit++) {
    for(let i=0; i<numbers.length; i++) {
      getNumber(i, [], numbers.split(''), digit);
    }
  }
  return countPrime();
}

// console.log(solution("17"))
console.log(solution("011"))