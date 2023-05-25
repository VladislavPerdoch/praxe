const Person = require('./person.js');

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    console.log("teach");
  }
}

module.exports = Teacher;