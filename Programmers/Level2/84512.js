function makeWordList() {
  const wordList = []
  const intToStr = {
    '1': 'A',
    '2': 'E',
    '3': 'I',
    '4': 'O',
    '5': 'U',
  }

  let i = 0;
  while(i <= 7775) {
    i += 1; 
    const convertedI = i.toString(6).split('');
    const newWord = [];
    let flag = true;
    for(let j=0; j<convertedI.length; j++) {
      if(convertedI[j] === '0') {
        flag = false;
        break;
      }
      newWord.push(intToStr[convertedI[j]]);
    }
    if(flag) wordList.push(newWord.join(''));
  }
  return wordList.sort();
}

function solution(word) {
  const sortedWordList = makeWordList();
  return sortedWordList.indexOf(word)+1;
}

console.log(solution(''))