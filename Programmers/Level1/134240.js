function makeFoodList(idx, cnt) {
    const foodList = []
    for(let i=1; i<=cnt/2; i++) {
        foodList.push(idx)
    }
    return foodList
}

function solution(food) {
    let foodList = []
    for(let i=1; i<food.length; i++) {
        const newFoodList = makeFoodList(i, food[i])
        foodList = foodList.concat(newFoodList)
    }
    const tmpList = foodList.slice()
    const answer = tmpList.concat(0, foodList.reverse())
    return answer.join('');
}

console.log(solution([1, 3, 4, 6]))