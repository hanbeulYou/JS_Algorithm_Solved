function solution(wallpaper) {
  let [maxI, maxJ, minI, minJ] = [0, 0, wallpaper.length, wallpaper[0].length];
  for(let i=0; i<wallpaper.length; i++) {
    for(let j=0; j<wallpaper[i].length; j++) {
      if(wallpaper[i][j] === '#') {
        maxI = Math.max(maxI, i+1);
        maxJ = Math.max(maxJ, j+1);
        minI = Math.min(minI, i);
        minJ = Math.min(minJ, j);
      }
    }
  }
  return [minI, minJ, maxI, maxJ];
}

console.log(solution(["#.", "#."]));