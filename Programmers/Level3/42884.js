function solution(routes) {
  const sortedRoutes = routes.sort((a, b) => a[1] - b[1]);
  let camera = -30001;
  let answer = 0;
  sortedRoutes.forEach((route) => {
    if(route[0] <= camera) return;
    camera = route[1];
    answer += 1;
  })
  return answer;
}

console.log(solution(	[[-20, -15], [-14, -5], [-18, -13], [-5, -3]]))