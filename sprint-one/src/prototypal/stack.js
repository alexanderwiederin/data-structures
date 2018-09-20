var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.storageSize = 0;

  return someInstance;
};

var stackMethods = {
	size: function() {
		return this.storageSize >= 0 ? this.storageSize : 0;
	},
	push: function(value) {
		this.storage[this.storageSize] = value;
		this.storageSize++;
		return this.storage;
	},
	pop: function() {
	var temp = this.storage[this.storageSize - 1];
	delete this.storage[this.storageSize - 1];
	this.storageSize--;
	return temp;
	},
};


