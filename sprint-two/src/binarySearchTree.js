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

BinarySearchTree.prototype.breadthFirstLog = function(queue, output) {
  
  if (queue === undefined && output === undefined) {
    var queue = new Queue(); // [5]; 
    var output = [];
    queue.enqueue(this);
  }
  
  if (queue === undefined) {    
    debugger;
  }
  
  
  let dequeuedNode = queue.dequeue();
  // debugger;
  
  if (dequeuedNode.left) {
    queue.enqueue(dequeuedNode.left);
  }
  
  if (dequeuedNode.right) {
    queue.enqueue(dequeuedNode.right);
  }

  output.push(dequeuedNode.value);
  
  var oldestPropertyKey = oldestValue(queue.storage);
  
  if (queue.storage[oldestPropertyKey]) {
    // debugger;
    queue.storage[oldestPropertyKey].breadthFirstLog(queue, output);
  }

  
  
  // if (this.left) {
  //   temp = temp.concat(this.left.breadthFirstLog());
  // }
  
  // if (this.right) {
  //   temp = temp.concat(this.right.breadthFirstLog());
  // }
  
  // output = output.concat(temp);
  return output;
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
  this.values = 0;

};


Queue.prototype.size = function() {
  return this.storageSize >= 0 ? this.storageSize : 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.values] = value;
  this.storageSize++;
  this.values++;
};

Queue.prototype.dequeue = function() {
  var lowestIndex = oldestValue(this.storage);
  var tempValue = this.storage[lowestIndex];
  delete this.storage[lowestIndex];
  this.storageSize--;
  return tempValue;
};

var oldestValue = function(storage) {
  var min = undefined;
  for (var key in storage) {
    if (min === undefined) {
      min = key;
    } else if (key < min) {
      min = key;
    }
  }
  return min;
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
    breadthFirstLog: O(n)
 */
