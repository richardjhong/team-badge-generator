const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const team = {
  manager: "",
  engineers: [],
  interns: []
}

const promptUser = (employeeType) => {
  inquirer.prompt([
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
        console.log('The team: ', team)
        return ;
    }
  })
};

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// Bonus using writeFileSync as a promise
const init = () => {
   promptUser('manager')

    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    // .then((answers) => writeFile('index.html', generateHTML(answers)))
    // .then(() => console.log('Successfully wrote to index.html'))
    // .catch((err) => console.error(err));
};

promptUser('manager');
