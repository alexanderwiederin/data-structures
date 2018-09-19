var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	storage: {},
  	storageSize: 0
  };

  var extend = function(obj) {
  	for(var i = 1; i < arguments.length; i++) {
  		for(var key in arguments[i]) {
  			obj[key] = arguments[i][key];
  		}
  	}
  }

  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
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
	size: function() {
		console.log(this.storage)
		return this.storageSize >= 0 ? this.storageSize : 0;
	}
};


