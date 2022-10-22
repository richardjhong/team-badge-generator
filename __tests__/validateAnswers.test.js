const { validateId, validateName, validateEmail, validateOfficeNumber,
validateGithub, validateSchool} = require("../utils/validateAnswers")
const convertToClass = require("../utils/generateClasses");

const Michelle = convertToClass('1', 'Michelle', 'michelle@email.com', '34b', 'manager')
const David = convertToClass('3', 'David', 'david@email.com', 'davidgithub', 'engineer')
const Lisa = convertToClass('5', 'Lisa', 'lisa@email.com', 'UT Austin', 'intern')

const team = [Michelle, David, Lisa]

const convertToClass = require("../utils/generateClasses");

describe("validateAnswers", () => {
  describe("validateId", () => {
    it("should take arguments answer and team and validate whether the ID is already in use or invalid", () => {
      const inUseId = validateId('1', team)
      const emptyAnswer = validateId('', team)
      const nonNumericAnswer = validateId('UniqueId', team)
      const validAnswer = validateId('24', team)

      expect(inUseId).toBe('This ID belongs to a current member of the team already')
      expect(emptyAnswer).toBe('Please enter a valid numeric id value.')
      expect(nonNumericAnswer).toBe('Please enter a valid numeric id value.')
      expect(nonNumericAnswer).toEqual(true)
    });

    it("takes data relevant to an engineer class and creates a new instance of Engineer", () => {
      const David = convertToClass('3', 'David', 'david@email.com', 'davidgithub', 'engineer')

      expect(David.getId()).toBe('3');
      expect(David.getName()).toBe('David');
      expect(David.getEmail()).toBe('david@email.com');
      expect(David.getGithub()).toBe('davidgithub');
      expect(David.getRole()).toBe('Engineer');
      expect(David.constructor.name).toBe('Engineer')
    });

    it("takes data relevant to an intern class and creates a new instance of Intern", () => {
      const Lisa = convertToClass('5', 'Lisa', 'lisa@email.com', 'UT Austin', 'intern')

      expect(Lisa.getId()).toBe('5');
      expect(Lisa.getName()).toBe('Lisa');
      expect(Lisa.getEmail()).toBe('lisa@email.com');
      expect(Lisa.getSchool()).toBe('UT Austin');
      expect(Lisa.getRole()).toBe('Intern');
      expect(Lisa.constructor.name).toBe('Intern')
    });
  });
});
