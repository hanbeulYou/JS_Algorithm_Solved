function solution(n, stations, w) {
  let answer = 0;
  const newStations = [0-w, ...stations, n+1+w];
  for(let i=0; i<=stations.length; i++) {
    if(newStations[i] + w >= newStations[i+1] - w) continue;
    answer += Math.ceil(((newStations[i+1]-w-1)-(newStations[i]+w+1)+1)/(2*w+1));
  }
  return answer;
}

console.log(solution(11, [4, 11], 1))