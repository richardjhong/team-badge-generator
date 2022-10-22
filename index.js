const inquirer = require('inquirer');
const fs = require('fs');
const convertToClass = require('./utils/generateClasses')
const generateHTML = require('./utils/generateHTML')

const team = {
  manager: "",
  engineers: [],
  interns: []
}

const promptUser = (employeeType) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `Please enter the ${employeeType}'s name.`,
    },
    {
      type: 'input',
      name: 'id',
      message: `Please enter the ${employeeType}'s ID.`,
    },
    {
      type: 'input',
      name: 'email',
      message: `Please enter the ${employeeType}'s email address.`,
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: `Please enter the ${employeeType}'s office number.`,
      when() {
        return employeeType === 'manager'
      }
    },
    {
      type: 'input',
      name: 'github',
      message: `Please enter the ${employeeType}'s Github username.`,
      when() {
        return employeeType === 'engineer'
      }
    },
    {
      type: 'input',
      name: 'school',
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
        'Add an Intern',
        'Add an Engineer',
        'Finish building team'
      ]
    },
  ]).then(({ name, id, email, officeNumber, github, school, addTeamMember }) => {
    const employeeTemplate = {
      name,
      id,
      email
    }

    if (employeeType === 'manager') {
      team.manager = {
        ...employeeTemplate,
        officeNumber
      }
    } else if (employeeType === 'engineer') {
      const newEngineer = {
        ...employeeTemplate,
        github
      }
      team.engineers.push(newEngineer)
    } else if (employeeType === 'intern') {
      const newIntern = {
        ...employeeTemplate,
        school
      }
      team.interns.push(newIntern)
    }

    switch (addTeamMember) {
      case 'Add an Engineer':
        promptUser('engineer')
        break;

      case 'Add an Intern':
        promptUser('intern')
        break;

      case 'Finish building team':
        writeToFile()
        return ;
    }
  })
};

const generateEngineerCards = (engineers) => {
  console.log('here be the engineers: ', engineers)
  if (engineers.length !== 0) {
    engineers.forEach(engineer => {
      console.log('each engineer name: ', engineer.name)
      return (
        `
          <p>${engineer.name}</p>
        `
      )
    })
  } else {
    return
  }
}

const writeToFile = () => {
  fs.writeFile(`./dist/index.html`, generateHTML(team), (err) => {
    err ? console.err(err) : console.log(`Responses saved to index.html`)
  })
}

promptUser('manager');
