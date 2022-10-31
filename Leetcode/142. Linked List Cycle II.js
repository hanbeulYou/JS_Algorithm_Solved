/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let turtle = head;
  let rabbit = head;

  while(rabbit && rabbit.next) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;
    if(turtle === rabbit) {
      turtle = head;
      while(turtle !== rabbit) {
        turtle = turtle.next;
        rabbit = rabbit.next;
      }
      return turtle;
    }
  }
  return null;
};