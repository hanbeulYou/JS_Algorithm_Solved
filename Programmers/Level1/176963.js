function solution(name, yearning, photo) {
  const memory = {};
  for(let i=0; i<name.length; i++) {
    memory[name[i]] = yearning[i];
  }
  const answer = [];
  photo.forEach((p) => {
    const m = p.reduce((acc, cur) => {
      return acc += (memory[cur] === undefined) ? 0 : memory[cur];
    }, 0)
    answer.push(m);
  })
  return answer;
}

// console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]))