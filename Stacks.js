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
    this.top = node.next;
    return node.data;
  }

  print(){
    let current = this.top
    while(current){
      console.log(current.data)
      current = current.next
    }
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

  let palindrome = new Stack;
  for (let letter of s){
    palindrome.push(letter)
  } 

  let check = ''
  for (let i=0; i<s.length; i++){
    check += palindrome.pop()
  }
  return check === s
}

console.log(is_palindrome("A man, a plan, a canal: Panama"));
