const generateHTML = (data) => {
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
    <main>
      <div class="d-flex justify-content-around" id="badge-container">
        ${insert(data)}
      </div>
    </main>
  </body>
  </html>`;
}

const createCard = () => {
  return ` <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>`
}

// const badge = document.createElement('card')
// badge.setAttribute('class', 'card p-3 my-3');

const insert = (data) => {

  console.log('does this work? ', data)
  data.forEach(datum => {
    // console.log('datum class name: ', datum.constructor.name)
    console.log('datum class name: ', datum.constructor.name)

  })

  const badge = createCard()
  return badge

}
  


module.exports = {
  generateHTML,
}