function solution(clothes) {
    const clothesCnt = {}
    clothes.forEach((element) => {
        if(clothesCnt[element[1]] === undefined) {
            clothesCnt[element[1]] = 1
            return
        } 
        clothesCnt[element[1]] += 1
    })
    const cntArray = Object.values(clothesCnt)
    const answer = cntArray.reduce((acc, cur) => {
        return acc * (cur+1)
    }, 1)
    return answer-1;
}