const inquirer = require('inquirer');
const fs = require('fs').promises;
const convertToClass = require('./utils/generateClasses')
const { generateHTML } = require('./utils/generateHTML')

const team = []

const promptUser = (employeeType) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: `Please enter the ${employeeType}'s ID.`,
    },
    {
      type: 'input',
      name: 'name',
      message: `Please enter the ${employeeType}'s name.`,
    },
    {
      type: 'input',
      name: 'email',
      message: `Please enter the ${employeeType}'s email address.`,
    },
    {
      type: 'input',
      name: 'contextualProperty',
      message: `Please enter the ${employeeType}'s office number.`,
      when() {
        return employeeType === 'manager'
      }
    },
    {
      type: 'input',
      name: 'contextualProperty',
      message: `Please enter the ${employeeType}'s Github username.`,
      when() {
        return employeeType === 'engineer'
      }
    },
    {
      type: 'input',
      name: 'contextualProperty',
      message: `Please enter the ${employeeType}'s school.`,
      when() {
        return employeeType === 'intern'
      }
    },
    {
      type: 'list',
      name: 'addTeamMember',
      message: 'Would you like to add another team member?',
      choices: [
        'Add an Engineer',
        'Add an Intern',
        'Finish building team'
      ]
    },
  ]).then(({ id, name, email, contextualProperty, addTeamMember }) => {
  
    team.push(convertToClass(id, name, email, contextualProperty, employeeType))
   
    switch (addTeamMember) {
      case 'Add an Engineer':
        promptUser('engineer')
        break;

      case 'Add an Intern':
        promptUser('intern')
        break;

      case 'Finish building team':
        writeToFile()
        return;
    }
  })
};

const writeToFile = async () => {
  await fs.writeFile('./dist/index.html', generateHTML(team));
}

promptUser('manager');


