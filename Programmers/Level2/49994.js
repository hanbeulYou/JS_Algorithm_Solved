function solution(dirs) {
  const routes = {}
  const dir = {
    'L': [0, -1],
    'R': [0, 1],
    'U': [1, 0],
    'D': [-1, 0]
  }
  const xy = [0, 0]
  dirs.split('').forEach((e) => {
    const dy = dir[e][0]
    const dx = dir[e][1]
    const newX = xy[0]+dx
    const newY = xy[1]+dy
    if(newX > 5 || newX < -5) return
    if(newY > 5 || newY < -5) return
    if(e==='L'||e==='D') {
      routes[[[newX, newY], [xy[0], xy[1]]]] = 1
    } else {
      routes[[[xy[0], xy[1]], [newX, newY]]] = 1
    }
    [xy[0], xy[1]] = [newX, newY]
  })
  const answer = Object.values(routes).reduce((acc, cur) => {
    return acc + cur
  }, 0)
  return answer;
}