//reference type

console.log([] === []) //false

console.log([1] === [1]) //false


var object1 = {value: 10};
var object2 = object1; //obj2 says refer to obj1
var object3 = {value: 10};

console.log(object1 === object2) //true

console.log(object1 === object3) //false

console.log(object1.value = 15) //15

console.log(object2.value)  //15

console.log(object3.value) //10

// context (tells you where we are within the object, "this")
// vs 
// scope (created with curly brackets, when functions are made a scope is made. It's in the universe of the brackets)
function name() {
    let a = 4;
    console.log(this);
}


const object4 = {
    a: function() {
        console.log(this);
    }
}


//instantiation
class Player {
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this)
    }
    play() {
        console.log(`WEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Fire Blazer');

console.log(wizard1);