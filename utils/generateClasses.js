const Engineer = require("../lib/engineer")
const Manager = require("../lib/manager")
const Intern = require("../lib/intern")

const convertToClass = (name, id, email, contextualProperty, employeeType) => {
  switch (employeeType) {
    case 'Manager':
      return new Manager(name, id, email, contextualProperty);
    
    case 'Engineer':
      return new Engineer(name, id, email, contextualProperty);

    case 'Intern':
      return new Intern(name, id, email, contextualProperty);
  }
}

module.exports = convertToClass;