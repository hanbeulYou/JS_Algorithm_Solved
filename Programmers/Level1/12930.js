function solution(s) {
    let arr = s.split('');
    let idx = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]==' ') {
            idx = 0;
            continue;
        }
        arr[i] = (idx%2) ? arr[i].toLowerCase() : arr[i].toUpperCase();
        idx += 1;
    }
    return arr.join('');
}