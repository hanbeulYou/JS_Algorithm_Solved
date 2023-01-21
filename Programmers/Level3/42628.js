class Heap {

  constructor() {
    this.items = new Array;
    this.realSize = 0;
  }

  swap(idx1, idx2) {
    const tmp = this.items[idx1];
    this.items[idx1] = this.items[idx2];
    this.items[idx2] = tmp;
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
    return this.items[this.parentIdx(idx)];
  }

  leftChild(idx) {
    return this.items[this.leftChildIdx(idx)];
  }

  rightChild(idx) {
    return this.items[this.rightChildIdx(idx)];
  }

  // peek() {
  //   return this.items[0];
  // }

  size() {
    return this.items.length;
  }

  getRealSize() {
    return this.realSize;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let idx = this.size()-1;
    while(this.parent(idx) !== undefined 
    && this.parent(idx) > this.items[idx]) {
      this.swap(idx, this.parentIdx(idx))
      idx = this.parentIdx(idx)
    }
  }

  bubbleDown() {
    let idx = 0;
    while(this.leftChild(idx) !== undefined 
    && (this.leftChild(idx) < this.items[idx] 
    || this.rightChild(idx) < this.items[idx])) {
      let smallerIdx = this.leftChildIdx(idx);
      if(this.rightChild(idx) !== undefined 
      && this.rightChild(idx) < this.items(smallerIdx)) {
        smallerIdx = this.rightChildIdx(idx);
      }
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }

  add(item) {
    this.items.push(item);
    this.bubbleUp();
    this.realSize += 1;
  }

  poll() {
    const item = this.items[0];
    this.items[0] = this.items[this.size-1];
    this.items.pop();
    this.bubbleDown();
    this.realSize -= 1;
    return item;
  }
}

class MaxHeap extends MinHeap {
  bubbleUp() {
    let idx = this.size()-1;
    while(this.parent(idx) !== undefined 
    && this.parent(idx) < this.items[idx]) {
      this.swap(idx, this.parentIdx(idx))
      idx = this.parentIdx(idx)
    }
  }

  bubbleDown() {
    let idx = 0;
    while(this.leftChild(idx) !== undefined 
    && (this.leftChild(idx) > this.items[idx] 
    || this.rightChild(idx) > this.items[idx])) {
      let largerIdx = this.leftChildIdx(idx);
      if(this.rightChild(idx) !== undefined 
      && this.rightChild(idx) > this.items(largerIdx)) {
        largerIdx = this.rightChildIdx(idx);
      }
      this.swap(idx, largerIdx);
      idx = largerIdx;
    }
  }
}

const visited = new Object;
const myMaxHeap = new MaxHeap;
const myMinHeap = new MinHeap;

function addVisited(num) {
  if(visited[num] === undefined) {
    visited[num] = 0;
  }
  visited[num] += 2;
}


function insertNum(numStr) {
  const num = parseInt(numStr);
  addVisited(num);
  myMaxHeap.add(num);
  myMinHeap.add(num);
}

function deleteMax() {
  if(myMaxHeap.realSize === 0) return;
}

function deleteMin() {

}

function solution(operations) {
  operations.forEach((e) => {
    const [command, numStr] = e.split(' ');
    if(command === 'I') return insertNum(numStr);
    if(command === 'D' && numStr === '1') {}
  })
    return answer;
}