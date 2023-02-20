function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;
  cities.forEach((c) => {
    const city = c.toUpperCase();
    const cityIndexInCache = cache.indexOf(city);
    // cache miss
    if(cityIndexInCache === -1) {
      cache.push(city);
      answer += 5;
      if(cache.length <= cacheSize) return;
      cache.shift();
      return;
    }
    // cache hit
    answer += 1;
    cache.splice(cityIndexInCache, 1);
    cache.push(city);
  });
  return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));