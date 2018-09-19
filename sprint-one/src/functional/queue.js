var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageSize = Object.keys(storage).length;
  var temp = undefined;

  // Implement the methods below

  var oldestValue = function() {
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

  someInstance.enqueue = function(value) {
    storage[storageSize] = value;
    storageSize++;
  };

  someInstance.dequeue = function() {
    var min = oldestValue();
    temp = storage[min];
    delete storage[min];
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
