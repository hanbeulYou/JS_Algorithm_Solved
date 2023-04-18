function solution(order) {
  return order.toString().split('').reduce((acc, cur) => {
    return acc + ((Number(cur) % 3 === 0 && cur !== '0') ? 1 : 0); 
  }, 0);
}

console.log(solution(29423))