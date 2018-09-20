class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.storageSize = 0;
  }
  size() {
  	return this.storageSize >= 0 ? this.storageSize : 0;
  }
  push(value) {
	this.storage[this.storageSize] = value;
	this.storageSize++;
	return this.storage;
	};

	pop() {
	var temp = this.storage[this.storageSize - 1];
	delete this.storage[this.storageSize - 1];
	this.storageSize--;
	return temp;
	};


}