const generateHTML = (data) => {
  console.log('does this work? ', data)
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css" />
    <title>Team Badges</title>
    </head>
    <body>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 d-flex justify-content-center">My Team</h1>
      </div>
      ${generateEngineerCards(data.engineers) ?? "nothing to see here"}
    </div>
  </body>
  </html>`;
}

const generateEngineerCards = (engineers) => {
  console.log('here be the engineers: ', engineers)
  if (engineers.length !== 0) {
    engineers.forEach(engineer => {
      console.log('each engineer name: ', engineer.name)
      return ( 
          `<p>${engineer.name}</p>`
      )
    })
  } else {
    return "hamburger"
  }
}

module.exports = generateHTML