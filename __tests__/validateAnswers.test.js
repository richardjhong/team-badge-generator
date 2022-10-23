const { validateId, validateName, validateEmail, validateOfficeNumber,
validateGithub, validateSchool} = require("../utils/validateAnswers")
const convertToClass = require("../utils/generateClasses");

const Michelle = convertToClass('1', 'Michelle', 'michelle@email.com', '34b', 'manager')
const David = convertToClass('3', 'David', 'david@email.com', 'davidgithub', 'engineer')
const Lisa = convertToClass('5', 'Lisa', 'lisa@email.com', 'UT Austin', 'intern')

const team = [Michelle, David, Lisa]

describe("validateAnswers", () => {
  describe("validateId", () => {
    it("should take arguments answer that are invalid and team and return a message showing why it is invalid", () => {
      const inUseId = validateId('1', team)
      const emptyAnswer = validateId('', team)
      const nonNumericAnswer = validateId('UniqueId', team)

      expect(inUseId).toBe('This ID belongs to a current member of the team already.')
      expect(emptyAnswer).toBe('Please enter a valid numeric id value.')
      expect(nonNumericAnswer).toBe('Please enter a valid numeric id value.')
    });

    it("should take arguments answer and return true if the id is unique and not taken as well as is a valid string", () => {
      const validId = validateId('2', team)

      expect(validId).toEqual(true)
    });
  });

  describe("validateName", () => {
    it("should take in as the argument an invalid nonalphabetical answer string OR an empty string and return a message to ask the user to enter a valid name entry", () => {
      const nonalphabeticalName = validateName('Beatrice42')
      const emptyName = validateName('')

      expect(nonalphabeticalName).toBe('Please enter a valid name entry.')
      expect(emptyName).toBe('Please enter a valid name entry.')
    });

    it("should take argument answer and return true if the string is both not empty and only contains alphabetical characters", () => {
      const validName = validateName('Yuna')

      expect(validName).toEqual(true)
    });
  });

  describe("validateEmail", () => {
    it("should take in as the argument argument an invalid answer string that does not contain an alphabetical character, a numeric character, and a special character OR an empty string and return a message a message to ask the user to enter a valid email address", () => {
      const invalidEmail = validateEmail('Beatrice42@')
      const emptyAnswer = validateEmail('')

      expect(invalidEmail).toBe('Please insert a valid email address.')
      expect(emptyAnswer).toBe('Please insert a valid email address.')
    });

    it("should take arguments answer and return true if the string contains an alphabetical character, a numeric character, and a special character", () => {
      const validEmail = validateEmail('yuna@email.com')

      expect(validEmail).toEqual(true)
    });
  });

  describe("validateOfficeNumber", () => {
    it("should take in as the argument argument an invalid answer string that does not contain only alphanumeric characters OR an empty string and return a message to ask the user to enter a valid office number", () => {
      const invalidOfficeNumber = validateOfficeNumber('Office 23@!')
      const emptyOfficeNumber = validateOfficeNumber('')

      expect(invalidOfficeNumber).toBe('Please enter a valid office number.')
      expect(emptyOfficeNumber).toBe('Please enter a valid office number.')
    });

    it("should take arguments answer and return true if the string contains only alphanumeric characters or a space delimiter between words", () => {
      const validOfficeNumber = validateOfficeNumber('Office 35b')

      expect(validOfficeNumber).toEqual(true)
    });
  });
  
  describe("validateGithub", () => {
    it("should take an empty string and return a message to enter a valid Github handle", () => {
      const emptyGithub = validateGithub('')

      expect(emptyGithub).toBe('Please enter a valid Github handle.')
    });

    it("should take argument answer and return true if it is at least one character long", () => {
      const validGithub = validateGithub('uniqueGithubHandle')

      expect(validGithub).toEqual(true)
    });
  });

  describe("validateSchool", () => {
    it("should take in as the argument argument an invalid answer string that does not contain only alphabetical characters OR an empty string and return a message to ask the user to enter a valid school name", () => {
      const invalidSchoolName = validateSchool('Office 23@!')
      const emptySchoolName = validateSchool('')

      expect(invalidSchoolName).toBe('Please enter a valid school name entry.')
      expect(emptySchoolName).toBe('Please enter a valid school name entry.')
    });

    it("should take arguments answer and return true if the string contains only alphabetical characters", () => {
      const validSchoolName = validateSchool('UT Austin')

      expect(validSchoolName).toEqual(true)
    });
  });


});
