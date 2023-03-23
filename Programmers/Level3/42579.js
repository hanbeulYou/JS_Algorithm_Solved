function solution(genres, plays) {
  const genreObj = {};
  for(let i=0; i<genres.length; i++) {
    if(genreObj[genres[i]] === undefined) {
      genreObj[genres[i]] = {
        plays: 0,
        music: [],
      };
    };
    genreObj[genres[i]].plays += plays[i];
    genreObj[genres[i]].music.push({id: i, plays: plays[i]});
  };
  const genreArr = Object.keys(genreObj).map((key) => [key, genreObj[key]]);
  const firstSortArr = genreArr.sort((a, b) => b[1].plays - a[1].plays);
  const secondArr = [];
  firstSortArr.forEach((arr) => {
    const tmpArr = arr[1].music.sort((a, b) => {
      if(a.plays !== b.plays) {
        return b.plays - a.plays
      }
      return a.id - b.id;
    });
    for(let i=0; i<tmpArr.length; i++) {
      if(i == 2) break;
      secondArr.push(tmpArr[i].id)
    };
  });
  return secondArr;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))