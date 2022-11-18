function isHamberger(idx, ingredientStack) {
  const checkIngredient = [1, 3, 2, 1]
  let flag = true;
  for(let i=0; i<4; i++) {
    if(ingredientStack[idx-i] !== checkIngredient[i]) {
      flag = false;
      break;
    }
  }
  if(flag === true) {
    ingredientStack = ingredientStack.splice(idx-3)
  }
  return flag;
}

function solution(ingredient) {
  let idx = 0;
  let cnt = 0;
  const ingredientStack = [];
  ingredient.forEach(element => {
    ingredientStack.push(element);
    idx += 1;
    if(idx >= 4 && element === 1) {
      if(isHamberger(idx-1, ingredientStack)) {
        cnt += 1;
        idx -= 4;
      }
    }
  })
  return cnt;
}

console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))