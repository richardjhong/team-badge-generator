const Engineer = require("../lib/engineer")
const Manager = require("../lib/manager")
const Intern = require("../lib/intern")

const convertToClass = (id, name, email, contextualProperty, employeeType) => {
  switch (employeeType) {
    case 'manager':
      return new Manager(id, name, email, contextualProperty);
    
    case 'engineer':
      return new Engineer(id, name, email, contextualProperty);

    case 'intern':
      return new Intern(id, name, email, contextualProperty);
  }
}

module.exports = convertToClass;