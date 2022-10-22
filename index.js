const inquirer = require('inquirer');
const fs = require('fs').promises;
const convertToClass = require('./utils/generateClasses')
const { generateHTML } = require('./utils/generateHTML')
const { validateId, validateName, validateEmail, validateOfficeNumber, validateGithub, validateSchool } = require('./utils/validateAnswers')

const team = []

const promptUser = (employeeType) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: `Please enter the ${employeeType}'s ID.`,
      validate:(answer) => {
        return validateId(answer, team)
      }
    },
    {
      type: 'input',
      name: 'name',
      message: `Please enter the ${employeeType}'s name.`,
      validate: (answer) => {
        return validateName(answer)
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `Please enter the ${employeeType}'s email address.`,
      validate: (answer) => {
        return validateEmail(answer)
      }
    },
    {
      type: 'input',
      name: 'contextualProperty',
      message: `Please enter the ${employeeType}'s office number.`,
      validate: (answer) => {
        return validateOfficeNumber(answer)
      },
      when() {
        return employeeType === 'manager'
      }
    },
    {
      type: 'input',
      name: 'contextualProperty',
      message: `Please enter the ${employeeType}'s Github username.`,
      validate: (answer) => {
        return validateGithub(answer)
      },
      when() {
        return employeeType === 'engineer'
      }
    },
    {
      type: 'input',
      name: 'contextualProperty',
      message: `Please enter the ${employeeType}'s school.`,
      validate: (answer) => {
        return validateSchool(answer)
      },
      when() {
        return employeeType === 'intern'
      }
    },
    {
      type: 'list',
      name: 'addTeamMember',
      message: 'Would you like to add another team member?',
      choices: [
        'Add an Engineer.',
        'Add an Intern.',
        'Finish building team.'
      ]
    },
  ]).then(({ id, name, email, contextualProperty, addTeamMember }) => {
  
    team.push(convertToClass(id, name, email, contextualProperty, employeeType))
   
    switch (addTeamMember) {
      case 'Add an Engineer.':
        promptUser('engineer')
        break;

      case 'Add an Intern.':
        promptUser('intern')
        break;

      case 'Finish building team.':
        console.log('Here\'s the full team: ', team)
        writeToFile()
        return;
    }
  })
};

const writeToFile = async () => {
  await fs.writeFile('./dist/index.html', generateHTML(team));
}

promptUser('manager');


