const Engineer = require("../lib/engineer")
const Manager = require("../lib/manager")
const Intern = require("../lib/intern")

const convertToClass = (id, name, email, contextualProperty, employeeType) => {
  switch (employeeType) {
    case 'manager':
      // officeNumber is contextualProperty for manager
      return new Manager(id, name, email, contextualProperty);
    
      // github is contextualProperty for engineer
    case 'engineer':
      return new Engineer(id, name, email, contextualProperty);
      
      // school is contextualProperty for intern
    case 'intern':
      return new Intern(id, name, email, contextualProperty);
  }
}

module.exports = convertToClass;