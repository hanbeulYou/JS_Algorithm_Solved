const skipByAscii = [];

const getAlpha = (char, index) => {
  let charAscii = char.charCodeAt(0);
  while(index>0) {
    charAscii += 1;
    if(charAscii % 97 > 25) charAscii -= 26;
    while(skipByAscii.includes(charAscii)) {
      charAscii += 1;
      if(charAscii % 97 > 25) charAscii -= 26;
    }
    index -= 1;
  }
  return String.fromCharCode(charAscii);
}

const getSkipByAscii = (skip) => {
  skip.split('').forEach((item) => {
    skipByAscii.push(item.charCodeAt(0));
  });
};

function solution(s, skip, index) {
  const sArr = s.split('');
  const answer = [];

  getSkipByAscii(skip);
  sArr.forEach((char) => {
    answer.push(getAlpha(char, index));
  })
  return answer.join('');
}