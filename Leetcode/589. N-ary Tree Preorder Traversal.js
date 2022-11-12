/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root, arr = [[]]) {
  if(!root) return arr;
  arr.push(root.val)
  for(let child of root.children) preorder(child, arr)

  return arr;
};