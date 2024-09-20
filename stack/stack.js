 /* 
 STACK :
 A stack is a special type of data structure, similar to an array, 
 but with controlled access to how values are added and removed. 
 It follows the Last In First Out (LIFO) principle.

 The Stack class allows for the creation and manipulation of a stack. 
 */

class Stack {
    constructor() {
        // Initializes an empty array to hold stack elements.
        this.stack = [];
    }

    // Adds an element to the top of the stack.
    push(data) {
        this.stack.push(data);
    }

    // Removes and returns the top element of the stack.
    // No parameters needed; it always removes the last added value.
    pop() {
        return this.stack.pop(); // Added return to give the removed element.
    }

    // Returns the top element of the stack without removing it.
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // Checks if the stack is empty.
    // Returns true if the stack has no elements, otherwise false.
    isEmpty() {
        return this.stack.length === 0; // True if length is 0, else false.
    }

    // Returns the number of elements in the stack.
    size() {
        return this.stack.length;
    }

    // Clears all elements from the stack.
    clear() {
        this.stack = []; // Resets the stack to an empty array.
    }

    // Checks if a specific element is in the stack.
    contain(element) {
        return this.stack.includes(element); // Returns true if found, else false.
    }

    // Reverses the order of elements in the stack.
    reverse() {
        return this.stack.reverse(); // Mutates the stack to reverse its order.
    }

    // Prints the elements of the stack, each on a new line.
    printStack() {
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"; // Concatenates each element followed by a newline.
        }
        return str; // Returns the string representation of the stack.
    }
}

// Usage example:
// Creating an instance of the Stack class.
let myStack = new Stack();
// Pushing elements onto the stack.
myStack.push(4);
myStack.push(2);
myStack.push(20);
myStack.push(40);

// Printing the current stack contents.
console.log(myStack.printStack());

/* 
Key Features of the Stack Implementation:
LIFO Principle: Elements are added and removed from the same end (top).
Dynamic Array: Uses JavaScript's array to manage stack elements.
Basic Operations: Supports common stack operations like push, pop, peek, and isEmpty.
Utility Methods: Includes methods for checking the size, clearing the stack, checking for containment, reversing the stack, and printing its contents.
*/


myStack.push(400);
myStack.push(500);
myStack.push(600);
myStack.push(700);

console.log(myStack.printStack()); // Prints all elements in the stack
console.log(myStack.pop());         // Removes and returns the top element (40)
console.log(myStack.peek());        // Returns the new top element (20)
console.log(myStack.size());        // Returns the current size of the stack
console.log(myStack.isEmpty());     // Checks if the stack is empty
console.log(myStack.contain(2));    // Checks if 2 is in the stack
myStack.reverse();                  // Reverses the stack order
console.log(myStack.printStack());   // Prints the reversed stack
myStack.clear();                    // Clears the stack
