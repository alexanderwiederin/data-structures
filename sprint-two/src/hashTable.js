

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.getIndexBelowMaxForKey = getIndexBelowMaxForKey;
};

HashTable.prototype.insert = function(k, v) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  var value = {};
  value[k] = v;
  this._storage.set(index,value);
  // node inserted into storage at index
};

HashTable.prototype.retrieve = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = this.getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
	
	Answers:
		insert: O(1) without hashing, O(n) with hashing; 
		retrieve: O(1) without hashing, O(n) with hashing;
		remove: O(1) without hashing, O(n) with hashing;

 */


