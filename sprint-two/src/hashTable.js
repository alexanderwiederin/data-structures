

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.getIndexBelowMaxForKey = getIndexBelowMaxForKey;
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this.count >= Math.floor(0.75 * this._limit) - 1) {
    // debugger;
    this.doubleLimitedArray();
  }
  var value = [];
  value[0] = k;
  value[1] = v;
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket !== undefined) { // there's a bucket
    for (let i = 0; i < bucket.length; i++) { // loop over it
      if (bucket[i][0] === k) { // check if it shares a key name with what got passed in for k
        bucket[i][1] = v; // change the value
        return undefined;   
      }
    }
    bucket.push(value); // [k, v]
  } else {
    this._storage.set(index, [value]);
    this.count++;
    // debugger;
  }
  // create a helper funciton
  // node inserted into storage at index
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // if length === 1, then do below
  // else, recurse to retrieve
  if (bucket.length > 1) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  if (bucket[0] !== undefined) {
    return bucket[0][1];
  }
};

HashTable.prototype.remove = function(k) {
  if (this.count === 0) {
    return 'Error: nothing to remove.';
  }
  // debugger;
  if (this.count <= Math.ceil(0.25 * this._limit) + 1) {
    this.halfLimitedArray();
  }
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (bucket.length > 1) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        delete bucket[i]; // target tuple
      }
    }
  } else {
    if (bucket[0][0] === k) {
      delete bucket[0];      
    }
  }
  
  this.count--;
  // debugger;
  // if this._storage
};

HashTable.prototype.doubleLimitedArray = function() {
  let oldStorage = this._storage;
  this._limit *= 2;
  this.count = 0;
  this._storage = LimitedArray(this._limit);
  let thisHashTable = this;
  this.iterateAndInsert(oldStorage, thisHashTable);
};

HashTable.prototype.halfLimitedArray = function() {
  let oldStorage = this._storage;
  this._limit /= 2;
  this.count = 0;
  this._storage = LimitedArray(this._limit);
  let thisHashTable = this;
  this.iterateAndInsert(oldStorage, thisHashTable);
};

HashTable.prototype.iterateAndInsert = function(oldStorage, thisHashTable) {
  oldStorage.each(function(bucket) {
    // debugger;
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] !== undefined) {
          thisHashTable.insert(bucket[i][0], bucket[i][1]);
        }
      }
    }
  });
};
/*

helper function called doubleLimitedArray that 
  1. creates a new limitedArray with limit equal to 2x the old limitedArray
  2. iterates over the old limitedArray
    a. invokes insert(limitedArray[i]) which: 
      i. defines a new index for the item at the old index
      ii. places in the new limitedArray
      
helper function called halveLimitedArray that
  1. creates a new limitedArray with limit equal to 0.5x the old limitedArray
  2. iterates over the old limitedArray
    a. invokes insert(limitedArray[i]) which: 
      i. defines a new index for the item at the old index
      ii. places in the new limitedArray
   
*/


/*
 * Complexity: What is the time complexity of the above functions?
	
	Answers:
		insert: O(n**n) - but basically the same as logarithmic; 
		retrieve: O(n**n) - but basically the same as logarithmic; 
		remove: O(n**n) - but basically the same as logarithmic;
    iterateAndInsert: O(n***n) - but basically the same as quadratic; 
    
 */


