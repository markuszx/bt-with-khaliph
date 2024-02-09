const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  //if there is no root node/ root node === null
  if(!rootNode){
    return null
  }

  while(rootNode.left){
    rootNode = rootNode.left;

  }
return rootNode.val


}

function findMaxBST (rootNode) {
  // Your code here
  if(!rootNode){
    return null
  }

  while(rootNode.right){
    rootNode = rootNode.right;

  }
return rootNode.val


}

function findMinBT (rootNode) {
  // Your code here
  if(!rootNode){
    return null;
  }

  let min = rootNode.val;
//we need to find smallest val in tree
  //1.search left and right recursivly
     if(rootNode.left){
      min = Math.min(min, findMinBT(rootNode.left))

     }
     if (rootNode.right){
       min = Math.min(min, findMinBT(rootNode.right))
     }

  //2.





  return min
}

function findMaxBT (rootNode) {
  // Your code here
  if(!rootNode){
    return null;
  }

  let max = rootNode.val;
//we need to find smallest val in tree
  //1.search left and right recursivly
     if(rootNode.left){
      max = Math.max(max, findMaxBT(rootNode.left))

     }
     if (rootNode.right){
       max = Math.max(max, findMaxBT(rootNode.right))
     }
     return max
}

function getHeight (rootNode) {
  // Your code here
  let hight = 0;
  //if no root node return -1
  if(!rootNode){
    return -1
  }
  //if no right and left from root then return 0
  if((!rootNode.left) && (!rootNode.right)){
    return 0
  }
  //else
  while()


//the hight is what
  return hight
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
