// custom array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // custom push method
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // custom get method
  get(index) {
    return this.data[index];
  }

  // custom pop method
  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  // custom shift method
  shift() {
    const firstElement = this.data[this.length - this.length];

    // re-indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length -1]
    this.length--;

  }

  // custom delete by index
  deleteByIndex(index){
    const item = this.data[index]
    
    for(let i=index; i<this.length -1 ; i++){
      this.data[i] = this.data[i+1];
    }

      delete this.data[this.length -1]
      this.length--;
      return item;
  }
}

const myNewArray = new MyArray();
myNewArray.push("binay");
myNewArray.push("buddhi");
myNewArray.push("Sapan");
myNewArray.push("Max");


// Use of custom methods\
//
//
// myNewArray.get(2)

// console.log(myNewArray.pop())

// myNewArray.shift();

// myNewArray.deleteByIndex(2)

console.log(myNewArray);
