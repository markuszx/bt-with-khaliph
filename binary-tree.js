class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }



  class BinarySearchTree {

    constructor() {
      this.root = null;
    }



    insert(val, currentNode=this.root) {
      if (!this.root){
        this.root = new TreeNode(val);
        return this.root;
      }

      if (val < currentNode.val){
        if (!currentNode.left){
          currentNode.left = new TreeNode(val);
          return currentNode.left;
        }
        return this.insert(val, currentNode.left);
      }

      if (val > currentNode.val){
        if (!currentNode.right){
          currentNode.right = new TreeNode(val);
          return currentNode.right;
        }
        return this.insert(val, currentNode.right);
      }




    }

    search(val, currentNode=this.root) {
      if (!currentNode){
        return false;
      }

      if (val < currentNode.val) {
        return this.search(val, currentNode.left);
      } else if (val > currentNode.val){
        return this.search(val, currentNode.right);
      } else {
        return true;
      }

    }


    preOrderTraversal(currentNode = this.root) {
      if (currentNode){
        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
      }
    }


    inOrderTraversal(currentNode = this.root) {
      if (currentNode){
        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
      }
    }


    postOrderTraversal(currentNode = this.root) {
      if (currentNode){
        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
      }
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here
      let q = [this.root]

      while(q.length){
        let temp = q.shift()
        console.log(temp)


        if(temp.left){
       q.enqueue(temp.left)


        }

        if(temp.right){
                q.sh(temp.right)
              }


    }
  }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here
      let stack =[this.root]

      while(stack.length){
        let temp = stack.pop()
       console.log(temp.val)


        if(temp.left){
          stack.push(temp.left)
        }

        if(temp.right){
                stack.push(temp.right)
              }

      }
    }
  }


  module.exports = { BinarySearchTree, TreeNode };
