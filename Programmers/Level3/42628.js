class heap {
  constructor() {
    this.queue = new Array;
  }

  swap(idx1, idx2) {
    const tmp = this.queue[idx1];
    this.queue[idx1] = this.queue[idx2];
    this.queue[idx2] = tmp;
  }

  parentIdx(idx) {
    return Math.floor((idx-1)/2);
  }

  leftChildIdx(idx) {
    return idx*2+1;
  }

  rightChildIdx(idx) {
    return idx*2+2;
  }

  parent(idx) {
    return this.queue[this.parentIdx(idx)];
  }

  leftChild(idx) {
    return this.queue[this.leftChildIdx(idx)];
  }

  rightChild(idx) {
    return this.queue[this.rightChildIdx(idx)];
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

}

function solution(operations) {
    var answer = [];
    return answer;
}