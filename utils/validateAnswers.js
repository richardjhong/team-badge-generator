
// checks whether an ID is neither a number nor at least one character OR if 
// the ID already belongs to an employee of the team
const validateId = (answer, team) => {
  const index = team.map(employee => employee.getId()).indexOf(answer);
  
  if (isNaN(answer) || answer.length === 0) {
    return 'Please enter a valid numeric id value.'
  } else if (index !== -1) {
    return 'This ID belongs to a current member of the team already.'
  } else {
    return true;
  }
}

// checks if answer string only contains alphabetical characters and is at 
// least one character
const validateName = answer => {
  if (!/^[a-zA-Z\s.,]+$/.test(answer) || answer.length === 0) {
    return 'Please enter a valid name entry.'
  } else {
    return true
  }
}

// checks whether the email string contains Uppercase/lowercase letters, 
// numeric characters, special characters
const validateEmail = answer => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!answer.match(validRegex) || answer.length === 0) {
    return 'Please insert a valid email address.'
  } else {
    return true;
  }
}

// checks whether an office number string is at least one character
// or does not have exclusively alphanumeric characters excluding space
// delimiter between multiple words
const validateOfficeNumber = answer => {
  const validRegex = /^[A-Za-z0-9\s]*$/
  if (!answer.match(validRegex) || answer.length === 0) {
    return 'Please enter a valid office number.'
  } else {
    return true;
  }
}

// since I'm not sure what constitutes as a valid Github handle, I'm testing
// strictly if the string is at least one character long.
const validateGithub = answer => {
  if (answer.length === 0) {
    return 'Please enter a valid Github handle.'
  } else {
    return true;
  }
}

// checks if answer string only contains alphabetical characters and is at 
// least one character
const validateSchool = answer => {
  if (!/^[a-zA-Z\s.,]+$/.test(answer) || answer.length === 0) {
    return 'Please enter a valid school name entry.'
  } else {
    return true
  }
}

module.exports = {
  validateId,
  validateName,
  validateEmail,
  validateOfficeNumber,
  validateGithub,
  validateSchool
}