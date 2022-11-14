function solution(n, arr1, arr2) {
    const maze = []
    for(let i=0; i<n; i++) {
        maze.push([])
        for(let j=0; j<n; j++) {
            maze[i].push(' ')
        }
    }
    let mazeElement = []
    arr1.forEach((element, index) => {
        mazeElement.push([])
        const biElement = element.toString(2)
        for(let i=0; i<(n-biElement.length); i++) {
            mazeElement[index].push('0')
        }
        for(let element of biElement.split('')) {
            mazeElement[index].push(element)
        }
    })
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(mazeElement[i][j] == '1') maze[i][j] = '#'
        }
    }
    mazeElement = []
    arr2.forEach((element, index) => {
        mazeElement.push([])
        const biElement = element.toString(2)
        for(let i=0; i<(n-biElement.length); i++) {
            mazeElement[index].push('0')
        }
        for(let element of biElement.split('')) {
            mazeElement[index].push(element)
        }
    })
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(mazeElement[i][j] == '1') maze[i][j] = '#'
        }
    }
    let answer = []
    maze.forEach((array) => {
        answer.push(array.join(''))
    })
    return answer
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))