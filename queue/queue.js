// Define the Queue class
class Queue {
    constructor() {
      // Initialize the queue as an empty array
      this.queue = [];
    }
  
    // Method to add (enqueue) an element at the back of the queue
    enqueue(data) {
      this.queue.push(data); // data is added to the end (back) of the queue
    }
  
    // Method to remove (dequeue) an element from the front of the queue
    dequeue() {
      // Check if the queue is empty
      if (this.isEmpty()) {
        return "queue is empty"; // Return a message if the queue is empty
      }
      return this.queue.shift(); // Removes and returns the first element (front) of the queue
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.queue.length === 0; // Return true if the queue length is 0 (empty), otherwise false
    }
  
    // Method to see the front element without removing it
    peek() {
      // Check if the queue is empty
      if (this.isEmpty()) {
        return "queue is empty"; // Return a message if the queue is empty
      }
      return this.queue[0]; // Return the front element (first in the queue)
    }
  
    // Method to get the size of the queue
    size() {
      return this.queue.length; // Return the number of elements in the queue
    }
  
    // Method to clear the entire queue
    clear() {
      this.queue = []; // Reset the queue to an empty array
    }
  
    // Method to print all elements of the queue as a string (each element on a new line)
    printQueue() {
      let str = ""; // Initialize an empty string
      for (let i = 0; i < this.queue.length; i++) {
        str += this.queue[i] + "\n"; // Concatenate each element with a newline character
      }
      return str; // Return the final string representing the queue
    }
  }
  
  // Usage example
  
  let myQueue = new Queue();   // Create a new queue instance
  myQueue.enqueue(20);         // Add 20 to the queue
  myQueue.enqueue(10);         // Add 10 to the queue
  myQueue.enqueue(30);         // Add 30 to the queue
  myQueue.enqueue(40);         // Add 40 to the queue
  
  myQueue.dequeue();           // Remove the front element (20 will be removed)
  
  console.log(myQueue.printQueue()); // Print remaining queue: 10, 30, 40 (each on a new line)
  