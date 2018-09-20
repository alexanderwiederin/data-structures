class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.storageSize = 0;
  	this.values = 0;
  }

  size() {
  	return this.storageSize >= 0 ? this.storageSize : 0;
  };

  enqueue(value) {
  	this.storage[this.values] = value;
  	this.storageSize++;
  	this.values++
  };

  dequeue() {
  	var lowestIndex = oldestValue(this.storage);
  	var tempValue = this.storage[lowestIndex];
  	delete this.storage[lowestIndex];
  	this.storageSize--;
  	return tempValue;
  };

}

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
