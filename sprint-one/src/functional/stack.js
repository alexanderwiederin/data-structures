var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var temp = undefined;
  var keys = Object.keys(storage);
  var storageSize = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageSize] = value;
    storageSize++;
  };

  someInstance.pop = function() {
    temp = storage[Object.keys(storage)[storageSize - 1]];
    delete storage[Object.keys(storage)[storageSize - 1]];
    storageSize--;
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
