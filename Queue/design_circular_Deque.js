/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.queue = new Array()
    this.length = k
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.queue.length < this.length) {
        this.queue.unshift(value)
        return true
    }
    return false
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.queue.length < this.length) {
        this.queue.push(value)
        return true
    }
    return false
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.queue.length > 0) {
        this.queue.shift()
        return true
    }
    return false
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.queue.length > 0) {
        this.queue.pop()
        return true
    }
    return false
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.queue.length === 0) {
        return -1
    } else {
        return this.queue[0]
    }
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.queue.length === 0) {
        return -1
    } else {
        return this.queue[this.queue.length - 1]
    }
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length === this.length
};


// alternative solution
class CircularDeque {
  constructor(k) {
    this.data = new Array(k);
    this.k = k;
    this.front = 0;
    this.rear = 0;
  }

  insertFront(value) {
    if (this.isFull()) return false;
    this.front = (this.front - 1 + this.k) % this.k;
    this.data[this.front] = value;
    return true;
  }

  insertLast(value) {
    if (this.isFull()) return false;
    this.data[this.rear] = value;
    this.rear = (this.rear + 1) % this.k;
    return true;
  }

  deleteFront() {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.k;
    return true;
  }

  deleteLast() {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.k) % this.k;
    return true;
  }

  getFront() {
    return this.isEmpty() ? -1 : this.data[this.front];
  }

  getRear() {
    return this.isEmpty() ? -1 : this.data[(this.rear - 1 + this.k) % this.k];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.k === this.front;
  }
}
