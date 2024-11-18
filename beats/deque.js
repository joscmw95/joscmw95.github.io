class Deque {
    constructor() {
        this.items = [];
        this.front = 0; // Pointer to track the front of the queue
    }

    // Removes an element from the front in O(1)
    removeFront() {
        if (this.front < this.items.length) {
            return this.items[this.front++]; // Return the front item and increment the pointer
        }
        return undefined; // Empty deque
    }

    // Adds an element to the back of the deque
    addBack(item) {
        this.items.push(item);
    }

    // Returns the current size of the deque
    size() {
        return this.items.length - this.front;
    }

    // Checks if the deque is empty
    isEmpty() {
        return this.size() === 0;
    }
    
    // Implementing forEach method to iterate over the deque
    forEach(callback) {
        for (let i = this.front; i < this.items.length; i++) {
            callback(this.items[i], i - this.front); // Pass value and index (relative to front)
        }
    }

    // Implementing some method to iterate over the deque
    some(callback) {
        for (let i = this.front; i < this.items.length; i++) {
            const done = callback(this.items[i], i - this.front); // Pass value and index (relative to front)
            if (done) {
                break;
            }
        }
    }
}