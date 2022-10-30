/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let cnt = 0;
    let myHead = head;
    while(head) {
      cnt += 1;
      head = head.next;
    }
    cnt = Math.ceil((cnt-1)/2);
    while(cnt) {
        myHead = myHead.next;
        cnt -= 1;
    }
    return(myHead)
  };