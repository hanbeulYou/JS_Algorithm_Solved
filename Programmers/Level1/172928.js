function solution(park, routes) {
  const isInEdge = (i, j) => {
    if(i < 0 
      || i >= park.length 
      || j < 0 
      || j >= park[0].length) return false;
    return true;
  }

  const d = {
    'E': [0, 1],
    'W': [0, -1],
    'N': [-1, 0],
    'S': [1, 0],
  }
  let [idxI, idxJ] = [-1, -1];
  park.forEach((p, idx) => {
    if(idxI !== -1) return;
    if(p.indexOf('S') !== -1) {
      idxI = idx;
      idxJ = p.indexOf('S');
    }
  })
  routes.forEach((route) => {
    const [dir, len] = route.split(' ');
    let newI = idxI;
    let newJ = idxJ;
    for(let k=1; k<=Number(len); k++) {
      newI += d[dir][0];
      newJ += d[dir][1];
      if(isInEdge(newI, newJ) === false) return;
      if(park[newI][newJ] === 'X') return;
    }
    idxI = newI;
    idxJ = newJ;
  })
  return [idxI, idxJ]
}

console.log(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"]))