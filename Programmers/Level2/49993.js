function solution(skill, skill_trees) {
  const skillOrder = {}
  let order = 1
  skill.split('').forEach((e) => {
    skillOrder[e] = order
    order += 1
  })

  let answer = 0
  skill_trees.forEach((tree) => {
    order = 1
    let flag = 1
    for(let i=0; i<tree.length; i++) {
      if(skillOrder[tree[i]] !== undefined) {
        if(skillOrder[tree[i]] === order) {
          order +=1
          continue
        } else {
          flag = 0
          break
        }
      }
    }
    answer += flag
  })
  return answer;
}

console.log(solution(	"CBD", ["BACDE", "CBADF", "AECB", "BDA"]))