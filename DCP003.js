// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

// Compared to a normal tree, BST(Binary Search Tree) has the following properties:

// every left child has a smaller value than its parent
// every right child has a larger value than its parent
// every node can contain from 0 to 2 children.

function treeNode(val, left, right) {
    // this.val = val;
    // this.left = left;
    // this.right = right;
    console.log(val, left, right, this);
}

treeNode(1, 2, 3);
