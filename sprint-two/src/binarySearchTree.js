var BinarySearchTree = function(value) {
  
  this.left = null;
  this.right = null;
  this.value = value;
  
};

BinarySearchTree.prototype.insert = function(value) {
  var tree = new BinarySearchTree(value);
  
  if(typeof value === 'number' && !this.contains(value)) { // if contains(value) === true then do not execute
    
    if(this.value < value) {
      
      if(this.right !== null) {
        this.right.insert(value);  
      } else {
        this.right = tree;
      }
      
    } else {
      if(this.left !== null) {
        this.left.insert(value);
      } else {
        this.left = tree;
      } 
    } 
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if(typeof value !== 'number') {
    return false;
  }
  
  if (this.value === value) {
    return true;
  } else if(value > this.value) {
    
    if(this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    if(this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
  
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  
  cb(this.value);
  
  if(this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  
  if(this.right !== null) {
    this.right.depthFirstLog(cb);
  }
   
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
