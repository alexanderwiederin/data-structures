var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.storageSize = 0;
  someInstance.values = 0;

  return someInstance;
};

var queueMethods = {
	size: function() {
		console.log(this.storage);
		return this.storageSize >= 0 ? this.storageSize : 0;
	},
	enqueue: function(value) {
		this.storage[this.values] = value;
		this.storageSize++;
		this.values++
	},
	dequeue: function() {
		var lowestIndex = oldestValue(this.storage);
		var tempValue = this.storage[lowestIndex];
		delete this.storage[lowestIndex];
		this.storageSize--;
		return tempValue;
		// delete this.storage[oldestValue];
		// storageSize--;
		// return oldestValue;
	}

};

var oldestValue = function(storage) {
	var min = undefined;
	for(var key in storage) {
		if(min === undefined) {
			min = key;
		} else if(key < min) {
			min = key;
		}
	}
	return min;
}





