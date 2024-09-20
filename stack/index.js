// STACK PRACTICAL:
// stack is special type of datastructure, kind of or similar to array , but we control how value go inside and comes out.

// class se object banega tou ham stack bana denge


class Stack{
    constructor(){
        this.stack = []

    }

    push(data){
        this.stack.push(data)
    }

    pop(){ // pop dont take parameter, jo last value hai vo bahar aaega
        this.stack.pop()
    }

    peek(){ // to find top value
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0 // will retun true if matches , else false
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack = []
    }

    contain(element){
        return this.stack.includes(element)
    }

    reverse(){
        return this.stack.reverse()
    }

    printStack(data){
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"

        }
        return str;
    }
}

// usage example
let myStack = new Stack();
myStack.push(4)
myStack.push(2)
myStack.push(20)
myStack.push(40)

console.log(myStack.printStack())