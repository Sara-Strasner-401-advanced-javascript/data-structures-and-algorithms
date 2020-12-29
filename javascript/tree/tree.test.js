'use strict';
const obj = require('./tree');

describe('Trees', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new obj.BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new obj.BinaryTree(new obj.Node('I am G(root)!'));
    expect(tree.root.value).toEqual('I am G(root)!');
  });

  it('Can successfully add a left child and a right child to a single root node', () => {
    let tree = new obj.Node(10, new obj.Node('left!'), new obj.Node('right!'));
    expect(tree.left.value).toEqual('left!');
    expect(tree.right.value).toEqual('right!');
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let nodes = new obj.Node('I am G(root)!', new obj.Node('left!'), new obj.Node('right!'));
    let tree = new obj.BinaryTree(nodes);
    expect(tree.preOrder(tree.root)).toEqual(['I am G(root)!', 'left!', 'right!']);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let nodes = new obj.Node('I am G(root)!', new obj.Node('left!'), new obj.Node('right!'));
    let tree = new obj.BinaryTree(nodes);
    expect(tree.inOrder(tree.root)).toStrictEqual(['left!', 'I am G(root)!', 'right!']);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let nodes = new obj.Node('I am G(root)!', new obj.Node('left!'), new obj.Node('right!'));
    let tree = new obj.BinaryTree(nodes);
    expect(tree.postOrder(tree.root)).toEqual(['left!','right!','I am G(root)!']);
  });

  it('Can search for a value in a Binary Search Tree', () => {
    let nodes = new obj.Node(4, new obj.Node(5), new obj.Node(6));
    let tree = new obj.BinarySearchTree(nodes);
    expect(tree.contains(tree.root, 4)).toEqual(true);
  });

  it('should find the max value in a tree ', () => {
    let tree = new obj.BinaryTree();
    const Node1 = new obj.Node(1);
    const Node2 = new obj.Node(19);
    const Node3 = new obj.Node(38);
    const Node4 = new obj.Node(22);
    tree.root = Node1;
    tree.root.left = Node2;
    tree.root.right = Node3;
    tree.root.right.left = Node4;
    expect(tree.findMaximumValue()).toStrictEqual(38);
  });


});
