function getSum(arr) {
  return arr.reduce((acc, cur) => acc+cur, 0)
}

function solution(bridge_length, weight, truck_weights) {
  const onBridge = [];
  let bridgeSum = 0;
  let rightSum = getSum(truck_weights)
  var answer = 0;
  while(bridgeSum || rightSum) {
    answer += 1;
    if(onBridge.length === bridge_length) {
      const arrive = onBridge.shift()
      bridgeSum -= arrive;
    }
    if(truck_weights.length) {
      if(truck_weights[0] + bridgeSum <= weight) {
        const depart = truck_weights.shift();
        rightSum -= depart;
        bridgeSum += depart;
        onBridge.push(depart);
        continue;
      }
    }
    onBridge.push(0);
  }
  return answer;
}