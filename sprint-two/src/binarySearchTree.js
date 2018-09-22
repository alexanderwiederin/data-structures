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
  
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
   
};

BinarySearchTree.prototype.breadthFirstLog = function() {
  var temp = []; // [5]; 
  var output = [];// [];
  debugger; 
  
  temp.push(this.value);
  
  
  
  if (this.left) {
    temp = temp.concat(this.left.breadthFirstLog());
  }
  
  if (this.right) {
    temp = temp.concat(this.right.breadthFirstLog());
  }
  
  output = output.concat(temp);
  return output;
};

// i | temp                                 |   output    |
// -------------------------------------------
// 0 | [5, [2 ,7]] => [[2,7]]               |   [5]    |
// 1 | [2 , [1 , 3]] => [[1,3]]             |   output    |
// 2 | temp                 |   output    |
// 3 | temp                 |   output    |


/*
 * Complexity: What is the time complexity of the above functions?
 
  Answers:
    insert: O(log(n));
    contains: O(log(n));
    depthFirstLog: O(n);
 */
