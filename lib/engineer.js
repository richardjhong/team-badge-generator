// TODO: Import the parent class
const Employee = require('./employee')

class Engineer extends Employee {
  constructor(id, name, email, github) { 
    super(id, name, email)
    this.id = id;
    this.name = name;
    this.email = email;
    this.github = github
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;