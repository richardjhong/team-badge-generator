const generateHTML = (data) => {
  console.log('does this work? ', data)
  data.forEach(datum => {
    console.log('datum class name: ', datum.constructor.name)
  })
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
    </div>
  </body>
  </html>`;
}

module.exports = generateHTML