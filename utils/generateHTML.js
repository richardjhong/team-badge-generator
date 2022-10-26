// creates mostly boilerplate HTML with each badge profile being 
// injected via mapping each data profile and creating a card
const generateHTML = (data) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/0fe3899c2e.js" crossorigin="anonymous"></script>
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
      <div class="d-flex justify-content-around row no-gutters" id="badge-container">
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

// creates boilerplate for each card with renderContextualProperty allowing 
// for flexibility given the employeeType for the last li element
const createCard = (datum) => {
  return ` <div class="card col-3 mx-3 my-3" style="width: 18rem;">
          <div class="card-header bg-primary text-white">
            <h2 class="card-title">${datum.getName()}</h2>
            <h5 class="employee-title">${datum.getRole()} ${renderEmployeeBadgeIcon(datum.getRole())}</h5>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group list-group-flush list-border">
              <li class="list-group-item">ID: ${datum.getId()}</li>
              <li class="list-group-item">Email: 
              <a href = "mailto: ${datum.getEmail()}">
                ${datum.getEmail()}
              </a>
              </li>
              ${renderContextualProperty(datum)}
            </ul>
          </div>
        </div>
      `
}

// adds badge icons to the right of the employeeType within createCard
const renderEmployeeBadgeIcon = (employeeType) => {
  switch (employeeType) {
    case 'Manager':
      return `<i class="fa-solid fa-mug-hot"></i>`

    case 'Engineer':
      return `<i class="fa-solid fa-code-branch"></i>`

    case 'Intern':
      return `<i class="fa-solid fa-user-graduate"></i>`
  }
}

// adds contextual property to each badge based on the employeeType as the
// third list item
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