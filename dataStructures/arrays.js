const strings = ["a", "b", "c", "d"];
//4x4 = 16 bytes of storage

console.log(strings[2]); //O(1)

//push
strings.push("e"); //0(1)

//pop
strings.pop();
strings.pop(); //0(1) we aren't looping, just removing the last item that is already stored

//unshift (add to beginning)
strings.unshift("x"); //0(n) because we are looping to add x to the front, shifting the index. Perhaps a better data structure for adding items to the beginnging

//splice (add to middle)
strings.splice(2, 0, "alien"); //O(n)

console.log(strings);

// implementing Arrays

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1]
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(0)
newArray.push("are");
newArray.push("nice");
newArray.delete(1)
console.log(newArray);
