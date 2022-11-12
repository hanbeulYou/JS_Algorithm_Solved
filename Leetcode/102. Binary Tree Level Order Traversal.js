/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root, arr=[], depth=0) {
  if(!root) return arr;
  if(arr.length < depth) arr.push([]);
  arr[depth].push(root.val);
  levelOrder(root.left, arr, depth+1)
  levelOrder(root.right, arr, depth+1)

  return arr;
};