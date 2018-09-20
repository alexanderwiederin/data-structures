var LinkedList = function() { // (head, tail)
  var list = {};
  list.head = null; // head
  list.tail = null; // value
  list.addToTail = function(value) { 
    let newTail = Node(value);
    if (this.tail !== null) {
      this.tail.next = newTail; 
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
    return oldHead.value;
  };

  list.contains = function(target) {
    let node;
    if(arguments.length === 1) {
      node = this.head;
    } else {
      node = arguments[1];
    }
    
    if(node.value !== target) {
      if(node.next !== null) {
        return list.contains(target, node.next);
      } else {
        return false;
      }
    } else {
      return true;
    }
    
    
    // head.value !== target
      // if head.next !== null
        // list.contains(head.next)
      // if else return false
    // else return true
    
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; // change 

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
