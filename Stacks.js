class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // time complexity is O(1)
  push(data) {
    // if the stack is empty
    if (this.top === null) {
      this.data = new _Node(data, null);
      return this.top;
    }

    // if stack already has something. 
    const node = new _Node(data, this.top);
    this.top = node;
  }

  // time complexity is O(1)
  pop() {
    // point the pointer to the next item
    // then next item becomes the top of the stack.
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

const starTrek = new Stack
starTrek.push('Kirk')
console.log(starTrek)
starTrek.push('Spock')
console.log(starTrek)
starTrek.push('McCoy')
console.log(starTrek)
starTrek.push('Scotty')
console.log(starTrek)
// starTrek.pop()
// console.log(starTrek)