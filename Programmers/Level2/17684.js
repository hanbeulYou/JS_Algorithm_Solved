
function initDict() {
    const dict = {}
    for(let i=1; i<=26; i++) {
        dict[String.fromCharCode(64+i)] = i
    }
    return dict
}

function solution(msg) {
    const msgArr = msg.split('')
    const dict = initDict()
    const answer = []

    let cnt = 27
    let i = 0
    let lastMsg = 0

    while(i<msg.length) {
        for(let j=1; j<=msg.length-i;j++) {
            const newMsg = msgArr.slice(i, i+j).join('')
            if(Object.keys(dict).includes(newMsg)) {
                lastMsg = dict[newMsg]
                continue
            }
            dict[newMsg] = cnt
            cnt += 1
            i += newMsg.length-1
            answer.push(lastMsg)
            break
        }
        if(i===msg.length-1) break
    }
    answer.push(lastMsg)
    return answer;
}

console.log(solution("KAKAO"))