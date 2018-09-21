

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.getIndexBelowMaxForKey = getIndexBelowMaxForKey;
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var value = [];
  value[0] = k;
  value[1] = v;
  this._storage.set(index,value);
  this.count++;
  // create a helper funciton
  // node inserted into storage at index
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  if(count === 0) {
    return 'Error: nothing to remove.';
  }
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[0];
  delete this._storage.get(index)[1];
  this.count--;
  // if this._storage
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
		insert: O(1) without hashing, O(n) with hashing; 
		retrieve: O(1) without hashing, O(n) with hashing;
		remove: O(1) without hashing, O(n) with hashing;

 */


