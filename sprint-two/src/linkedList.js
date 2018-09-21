var LinkedList = function() { // (head, tail)
  var list = {};
  list.head = null; // head
  list.tail = null; // value
  
  list.addToTail = function(value) { 
    let newTail = Node(value);
    if (this.tail !== null) {
      this.tail.next = newTail; 
      newTail.previous = this.tail;
    }
    this.tail = newTail;
    if (this.head === null) {
      this.head = this.tail;
    }
  };

  list.removeHead = function() {
    // remove
    // the new first link is the new head
    let oldHead = this.head;
    this.head = oldHead.next;
    if (this.head !== null) {
      this.head.previous = null;
    }
    return oldHead.value;
  };

  list.contains = function(target) {
    let node;
    if (arguments.length === 1) {
      node = this.head;
    } else {
      node = arguments[1];
    }
    
    if (node.value !== target) {
      if (node.next !== null) {
        return list.contains(target, node.next);
      } else {
        return false;
      }
    } else {
      return true;
    }
    
  };
  
  list.removeTail = function() {
    let oldTail = this.tail;
    this.tail = oldTail.previous;
    if (this.tail !== null) {
      this.tail.next = null;
    }
    return oldTail.value;
  };
  
  
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; // change 
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 
  Answer:
  
    addToTail: O(1)
    removeHead: O(1)
    contains: O(n)
    removeTail: O(1)
    Node: O(1)
 */
