// function solution(n, left, right) {
//     const table = new Array(n)
//     for(let i=0; i<n; i++) {
//         table[i] = new Array(n)
//     }

//     for(let i=0; i<n; i++) {
//         for(let j=0; j<n; j++) {
//             table[i][j] = i+1
//             table[j][i] = i+1
//         }
//     }

//     const arr = []
//     for(let i=0; i<n; i++) {
//         table[i].forEach(element => {
//             arr.push(element)
//         })
//     }
//     // return arr.slice(left, right+1);
//     return table
// }

function solution(n, left, right) {
    const answer = []
    for(let i=left; i<=right; i++) {
        const iIndex = parseInt(i/n)+1
        const jIndex = i%n+1
        answer.push(Math.max(iIndex, jIndex))
    }
    return answer
}

console.log(solution(5, 2, 5))