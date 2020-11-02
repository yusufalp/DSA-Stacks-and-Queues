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
      this.top = new _Node(data, null);
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
    if (!node){
      return 
    }
    this.top = node.next;
    return node.data;
  }

  print() {
    let current = this.top
    while (current) {
      console.log(current.data)
      current = current.next
    }
    return current
  }
}

const starTrek = new Stack

function peek(stack) {
  return stack.top.data
}
// console.log('Peeking-->',peek(starTrek))

function isEmpty(stack) {
  return stack.top === null ? true : false
}
// console.log('isEmpty-->',isEmpty(starTrek))

function display(stack) {
  return stack.top
}

// console.log('My Stack-->',display(starTrek))

// console.log('isEmpty-->', isEmpty(starTrek))
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

// console.log('My Stack-->', display(starTrek))
// console.log('isEmpty-->', isEmpty(starTrek))

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let stringStacked = new Stack;
  for (let letter of s) {
    stringStacked.push(letter)
  }

  let reversedString = ''
  for (let i = 0; i < s.length; i++) {
    reversedString += stringStacked.pop()
  }
  return reversedString === s
}

// console.log(is_palindrome("A man, a plan, a canal: Panama"));


function matchParenthesis(str) {
  let newStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      newStack.push(str[i])
    }
    if (str[i] === ')') {
      let poped = newStack.pop()
      if (poped !== '(') {
        return false
      }
    }
    if (str[i] === ']') {
      let poped = newStack.pop()
      if (poped !== '[') {
        return false
      }
    }
    if (str[i] === '}') {
      let poped = newStack.pop()
      if (poped !== '{') {
        return false
      }
    }
  }
  if (newStack.top === null) {
    return true
  } else {
    return false
  }
}

// console.log(matchParenthesis('([{}])'))
// console.log(matchParenthesis('([{})'))

let unsorted = new Stack();

unsorted.push('Kirk')
unsorted.push('Spock')
unsorted.push('McCoy')
unsorted.push('Scotty')
unsorted.push('Alp')
unsorted.push('Yusuf')

// console.log(unsorted.print())

function sortStack(unsorted) {
  let temp = new Stack();
  let topNode = unsorted.pop()
  while(topNode && !unsorted.top){
    console.log(topNode)
    if (topNode > unsorted.top.data){
      let node = unsorted.pop()
      temp.push(node)
    } else {
      unsorted.push(topNode)
      let node = temp.pop()
      while(node){
        unsorted.push(node)
        node = temp.pop()
      }
      topNode = unsorted.pop()
    }
  }
  console.log(unsorted.print())
  console.log(temp.print())
}

// console.log(sortStack(unsorted))

module.exports = Stack;