function solution(files) {
  const splitedFiles = [];
  files.forEach((file, idx) => {
    const splitedFile = [];
    for(let i = 0; i < file.length; i++) {
      if(!isNaN(file[i]) && file[i] !== " ") {
        splitedFile.push(file.slice(0, i));
        let j = i + 1;
        while(j < file.length) {
          if(isNaN(file[j]) || file[j] === " ") break;
          if(j - i > 6) break;
          j += 1;
        }
        splitedFile.push(file.slice(i, j));
        splitedFile.push(file.slice(j, file.length));
        splitedFile.push(idx);
        break;
      }
    }
    splitedFiles.push([...splitedFile]);
  })
  const sortedFiles = splitedFiles.sort((a, b) => {
    if(a[0].toUpperCase() !== b[0].toUpperCase()) {
      return a[0].toUpperCase() > b[0].toUpperCase() ? 1 : -1;
    }
    if(parseInt(a[1]) !== parseInt(b[1])) {
      return parseInt(a[1]) - parseInt(b[1]);
    }
    return a[3] - b[3];
  })
  const answer = [];
  sortedFiles.forEach((file) => {
    answer.push(file[0]+file[1]+file[2]);
  })
  return answer;
}

// console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
console.log(solution(["foo9.txt", "foo010bar020.zip", "F-15"]));