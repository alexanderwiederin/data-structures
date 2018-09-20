var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
};


Stack.prototype.size = function() {
	return this.storageSize >= 0 ? this.storageSize : 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.storageSize] = value;
	this.storageSize++;
	return this.storage;
};

Stack.prototype.pop =  function() {
	var temp = this.storage[this.storageSize - 1];
	delete this.storage[this.storageSize - 1];
	this.storageSize--;
	return temp;
};




