

// Instantiate a new graph
var Graph = function() {
  
  this.storage = {};
  this.nodeCount = 0;
  

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.storage[node].connection = [];
  this.storage[node]['name'] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(name) {
  for (let key in this.storage) {
    if (this.storage[key]['name'] === name) {
      for (let i = 0; i < this.storage[key].connection.length; i++) {
        this.removeEdge(this.storage[key].connection[i], this.storage[key]['name']);
      }      
      delete this.storage[key];
    }
  }


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].connection.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].connection.push(this.storage[toNode]['name']); 
  this.storage[toNode].connection.push(this.storage[fromNode]['name']);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.storage[fromNode].connection.length; i++) {
    if (this.storage[fromNode].connection[i] === this.storage[toNode]['name']) {
      this.storage[fromNode].connection.splice(i,1);
    }
  }
  for (let i = 0; i < this.storage[toNode].connection.length; i++) {
    if (this.storage[toNode].connection[i] === this.storage[fromNode]['name']) {
      this.storage[toNode].connection.splice(i,1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop over everything in storage
  for(key in this.storage) {
    // if(this.storage[key]['name'] === )
    cb(this.storage[key]['name']); // addEdge(this.storage[key] -- a node, 5)
  }
  // for each node invoce cb;
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 
 Answer:

  addNode: O(1)

  contains: O(n)

  removeNode: O(n**2)

  hasEdge: O(n)

  addEdge: O(n)

  removeEdge: O(n)

  forEachNode: O(n)

*/
 



