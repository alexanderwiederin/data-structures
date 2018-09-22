var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  
  newTree.parent = parent;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  
  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {

      return true;
    } else {
      if (this.children[i].children.length) {
        if (this.children[i].contains.call(this.children[i], target)) {
          return true;
        }
      }
    }
  }
  return false;
};

treeMethods.removeChild = function(value) {
  
  if (this.value === value) {
    var removedNode = this;
    delete this;
    return removedNode;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === value) {
      var removedNode = this.children[i];
      removedNode.parent = null;
      this.children.splice(i, 1);
      return removedNode;
    } else if (this.children[i].children.length) {
      this.children[i].removeChild(value);
    }
  }
  
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 Answer:
 
  addChild: O(n)
  contains: O(n)
  removeChild: O(n)
  traverse: O(n)
 
 */
