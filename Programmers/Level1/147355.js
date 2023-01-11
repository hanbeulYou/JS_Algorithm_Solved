function solution(t, p) {
  const intP = parseInt(p)
  for(let i=0; i<t.length-p.length; i++) {
    const newT = parseInt(t.slice(i, i+p.length))
    console.log(newT)
  }
  return -1;
}