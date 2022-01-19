class Person  {
  constructor(name) {
      this.name = name
  }
  greet() {
      console.log(this.name + ' говорит привет');
  }
}

// const max = new Person ('Max')
// max.greet()
// console.log(max);

class Programmer extends Person {
    constructor(name, job) {
        super(name)
    this._job = job
    }

}

const Frontend = new Programmer('Max', 'Frontend')
// console.log(Frontend);

const symbol = Symbol('demo')
const other = Symbol('demo')

const obj = {
    name:'Elena',
    demo:'DEMO',
    [symbol]:'meta'
}

for(let key in obj) {

    console.log(key);
}

console.log(obj.demo);
console.log(obj[symbol]);