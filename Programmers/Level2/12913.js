  function solution(land) {
    let dp = land[0].slice()
    for(let i=1; i<land.length; i++) {
      const newDp = dp.slice()
      for(let j=0; j<4; j++) {
        const tmpDp = dp.slice()
        tmpDp[j] = 0
        newDp[j] = Math.max(...tmpDp) + land[i][j]
      }
      dp = newDp.slice()
    }

    return Math.max(...dp);
  }

  console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]))