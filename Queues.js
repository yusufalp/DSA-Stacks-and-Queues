const Stack = require('./Stacks');

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.prev = null;
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

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    // if there is no queue
    if (this.first === null) {
      this.first = node
    }

    if (this.last) {
      this.last.next = node
      node.prev = this.last
    }

    this.last = node
  }
}

const starTrekQ = new DoubleQueue;

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

function peek(queue) {
  if (queue.first) {
    return queue.first.value
  }
}
// console.log(peek(starTrekQ))

function isEmpty(queue) {
  return queue.first === null ? true : false
}
// console.log(isEmpty(starTrekQ))

function display(queue) {
  let current = queue.first
  while (current) {
    console.log(current.value)
    current = current.next
  }
  return current
}

// console.log(display(starTrekQ))
// console.log(starTrekQ.last)

function displayBack(queue) {
  let current = queue.last
  while (current) {
    console.log(current.value)
    current = current.prev
  }
}

// console.log(displayBack(starTrekQ))

function ophidianBank(queue) {
  let queueNum = Math.ceil(Math.random() * 4)
  console.log(queueNum)
  // 1 means paperwork is not done
  if (queueNum === 1) {
    console.log(`${queue.first.value} does not have paperwork`)
    queue.last.next = queue.first
    queue.first = queue.first.next
    queue.last.next.next = null
    queue.last = queue.last.next
  } else {
    console.log(`${queue.first.value} is served`)
    queue.first = queue.first.next
  }
  return queue
}

// console.log('result-->', ophidianBank(starTrekQ))

const alpha = new Stack();

alpha.push('a')
alpha.push('b')
alpha.push('c')
alpha.push('d')
alpha.push('e')

// console.log(alpha.print())

function removeItem(queue) {
  const temp = new Stack();

  let current = queue.pop()
  while (current) {
    console.log('value', current)
    if (queue.top) {
      temp.push(current)
    }
    current = queue.pop()
  }
  current = temp.pop()
  while (current) {
    queue.push(current)
    current = temp.pop()
  }
  return queue
}

// console.log(removeItem(alpha).print())

function spareDance(queue) {
  let spare = new Queue();
  let top = queue.first;
  spare.enqueue(top.value)

  while (top.next) {
    if (top.value === 'F') {
      if (top.next.value === 'M') {
        top = top.next
        spare.dequeue()
      }
    } else {
      if (top.next.value === 'F') {
        top = top.next
        spare.dequeue()
      }
    }
    if (top.next) {
      top = top.next
      spare.enqueue(top.value)
    }
  }
  display(spare)
}



let danceList = new Queue();

danceList.enqueue('M')
danceList.enqueue('F')
danceList.enqueue('M')
danceList.enqueue('M')
danceList.enqueue('M')
danceList.enqueue('F')
danceList.enqueue('M')
danceList.enqueue('M')
danceList.enqueue('F')
danceList.enqueue('M')
danceList.enqueue('F')
danceList.enqueue('F')
danceList.enqueue('M')

console.log(display(danceList))
console.log('----')

spareDance(danceList)