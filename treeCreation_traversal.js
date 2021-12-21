let root = null;
function Node (key) {
  this.key = key,
  this.left = null,
  this.right = null
}

function insertNode (node, newNode) {
  if(newNode.key < node.key) {
    if(!node.left) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if(!node.right) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

function insert(data) {
  const newNode = new Node(data);
  if(!root) {
    root = newNode;
  } else {
    insertNode(root, newNode);
  }
}

insert(9);
insert(5);
insert(6);
insert(11);
insert(10);
insert(12);

var abc = root;
console.info(abc)

function preorderTraversal(node) {
  if(!node) {
    return;
  }
  console.log(node.key);

  if(node.left) {
    preorderTraversal(node.left);
  }
  if(node.right) {
    preorderTraversal(node.right);
  }
}

function inOrderTraversal(node) {
  if(!node) {
    return;
  }
  if(node.left) {
    inOrderTraversal(node.left)
  }
  console.log(node.key);
  if(node.right) {
    inOrderTraversal(node.right);
  }
}

function postOrderTraversal(node) {
  if(!node) {
    return;
  }
  if(node.left) {
    postOrderTraversal(node.left);
  }
  if(node.right) {
    postOrderTraversal(node.right);
  }
  console.log(node.key);
}

preorderTraversal(root)
console.log("----------------")
inOrderTraversal(root)
console.log("-----------------")
postOrderTraversal(root)
//preorderTraversal(root.right)

