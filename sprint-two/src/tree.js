var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  
  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  if(this.value === target) {
    return true;
  }
  
  for(var i = 0; i < this.children.length; i++) {
    if(this.children[i].value === target) {

      return true;
    } else {
      if(this.children[i].children.length) {
        if(this.children[i].contains.call(this.children[i], target)) {
          return true;
        }
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 
 Answer:
 
  addChild: O(n)
  contains: O(n)
 
 */
