const alwaysLeft = [1, 4, 7]
const alwaysRight = [3, 6, 9]
const farAway = {
    2: { 1: 1, 4: 2, 7: 3, 3: 1, 6: 2, 9: 3, 2: 0, 5: 1, 8: 2, 0: 3, '*': 4, '#': 4, },
    5: { 1: 2, 4: 1, 7: 2, 3: 2, 6: 1, 9: 2, 2: 1, 5: 0, 8: 1, 0: 2, '*': 3, '#': 3, },
    8: { 1: 3, 4: 2, 7: 1, 3: 3, 6: 2, 9: 1, 2: 2, 5: 1, 8: 0, 0: 1, '*': 2, '#': 2, },
    0: { 1: 4, 4: 3, 7: 2, 3: 4, 6: 3, 9: 2, 2: 3, 5: 2, 8: 1, 0: 0, '*': 1, '#': 1, },
}

function solution(numbers, hand) {
    let leftHand = '*'
    let rightHand = '#'
    const answer = []

    numbers.forEach((number) => {
        if(alwaysLeft.includes(number)) {
            leftHand = number
            answer.push('L')
        } 
        else if(alwaysRight.includes(number)) {
            rightHand = number
            answer.push('R')
        }
        else {
            const leftFar = farAway[number][leftHand]
            const rightFar = farAway[number][rightHand]
            if(leftFar === rightFar) {
                if(hand === 'left') {
                    leftHand = number
                    answer.push('L')
                }
                else {
                    rightHand = number
                    answer.push('R')
                }
            }
            else if(leftFar < rightFar) {
                leftHand = number
                answer.push('L')
            }
            else {
                rightHand = number
                answer.push('R')
            }
        }
    })
    return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))