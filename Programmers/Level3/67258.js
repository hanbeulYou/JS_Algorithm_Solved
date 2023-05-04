const gemsObj = {};
let gemList = [];

function getGemList(gems) {
  gems.forEach((gem) => {
    if(gemsObj[gem] === undefined) gemsObj[gem] = 0;
    gemsObj[gem] += 1;
  });
  gemList = Object.keys(gemsObj);
  gemList.forEach((gem) => {
    gemsObj[gem] = 0;
  });
}

function checkCanShop() {
  let flag = true;
  gemList.forEach((gem) => {
    if(gemsObj[gem] === 0) flag = false;
  })
  return flag;
}

function solution(gems) {
  let answerSize = 100001;
  let answer = [0, 0];
  let [leftIdx, rightIdx] = [0, 0];

  getGemList(gems);
  gemsObj[gems[0]] = 1;

  while(leftIdx < gems.length && rightIdx < gems.length) {
    const canShop = checkCanShop();
    if(canShop === true) {
      if(answerSize > rightIdx - leftIdx + 1) {
        answerSize = rightIdx - leftIdx + 1;
        answer = [leftIdx + 1 , rightIdx + 1]
      }
      const leftGem = gems[leftIdx];
      gemsObj[leftGem] -= 1;
      leftIdx += 1;
      if(leftIdx > rightIdx) rightIdx = leftIdx;
      continue;
    }
    if(rightIdx === gems.length - 1) break;;
    rightIdx += 1;
    const rightGem = gems[rightIdx]
    gemsObj[rightGem] += 1;
  }
  return answer;
}

console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))