const generateHTML = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css"/>
    <title>Team Badges</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 d-flex justify-content-center">My Team</h1>
      </div>
    </div>
    <main>
      <div class="d-flex justify-content-around" id="badge-container">
        ${
          data.map((profile) => {
            return createCard(profile)
          }).join('')
        }
      </div>
    </main>
  </body>
  </html>`;
}

const createCard = (datum) => {
  return ` <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${datum.getName()}</h5>
            <h6 class="employee-title">${datum.getRole()}</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${datum.getId()}</li>
            <li class="list-group-item">Email: 
            <a href = "mailto: ${datum.getEmail()}">
              ${datum.getEmail()}
            </a>
            </li>
            ${renderContextualProperty(datum)}
          </ul>
        </div>
      `
}

const renderContextualProperty = (datum) => {
  const employeeType = datum.constructor.name
  switch (employeeType) {
    case 'Manager':
      return `<li class="list-group-item office-number-list-item">Office number: ${datum.getOfficeNumber()}</li>`

    case 'Engineer':
      return `<li class="list-group-item github-list-item">Github: <a href="https://github.com/${datum.getGithub()}" class="github-link">${datum.getGithub()}</a></li>`

    case 'Intern':
      return `<li class="list-group-item intern-list-item">School: ${datum.getSchool()}</li>`
  }
}

module.exports = {
  generateHTML,
}