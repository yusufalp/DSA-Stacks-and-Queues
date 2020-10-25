class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  // time complexity is O(1)
  enqueue(data) {
    const node = new _Node(data);

    // if there is no queue
    if (this.first === null) {
      this.first = node
    }

    if (this.last) {
      this.last.next = node
    }

    this.last = node
  }

  // time complexity is O(1)
  dequeue() {
    // if the queue is empty, there is nothing to remove
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    // if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

const starTrekQ = new Queue;

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

function peek(queue){
  if(queue.first){
    return queue.first.value
  }
}
// console.log(peek(starTrekQ))

function isEmpty(queue){
  return queue.first === null ? true : false
}
// console.log(isEmpty(starTrekQ))

function display(queue){
  let current = queue.first
  while(current){
    console.log(current.value)
    current = current.next
  }
  return current
}
// console.log(display(starTrekQ))