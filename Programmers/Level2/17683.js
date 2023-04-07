function strToTime(str) {
  return Number(str.slice(0, 2)) * 60 + Number(str.slice(3, 5));
}

function makeMusic(time, content) {
  const music = [];
  let musicIdx = 0;
  while(time > 0) {
    if(musicIdx === content.length) musicIdx = 0;
    if(content[musicIdx+1] === '#') {
      music.push(content[musicIdx]+content[musicIdx+1]);
      time -= 1;
      musicIdx += 2;
      continue;
    }
    music.push(content[musicIdx]);
    time -= 1;
    musicIdx += 1;
  }
  return music;
}

function musicCmp(music, m, mLen) {
  for(let i=0; i<=music.length-mLen; i++) {
    const str1 = music.slice(i, i+mLen).join('');
    if(str1 === m) return true;
  }
  return false;
}

function solution(m, musicinfos) {
  const mLen = m.length - m.split('#').length + 1;
  let answer = "(None)";
  let answerTime = 0;
  musicinfos.forEach((musicInfo) => {
    const [startTime, endTime, title, content] = [...musicInfo.split(',')];
    const time = strToTime(endTime) - strToTime(startTime);
    const music = [...makeMusic(time, content)];
    if(musicCmp(music, m, mLen) === true && answerTime < time) {
      answer = title;
      answerTime = time;
    }
  });
  return answer;
}

console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]))
// console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))

